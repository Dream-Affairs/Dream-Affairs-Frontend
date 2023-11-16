'use client';
import React, { useEffect, useState } from 'react';
import Filter from '../(components)/checklist/Filter';
import Search from '../(components)/checklist/Search';
import AddTask from '../(components)/checklist/addTask';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Task from '../(components)/checklist/Task';
import { Arrow, PlusIcon } from '../(components)/checklist/Icons';

const filter: string[] = ['All tasks', 'Assigned to me', 'Assigned by me', 'Completed'];

type task = {
  decription: string;
  date: Date | undefined;
  assignee: string;
  done: boolean;
  id: string;
};

type ts = {
  decription: string;
  date: Date | string;
  assignee: string;
  done: boolean;
  id: string;
};

type addTask = (task: task) => void;
type deleteTask = (id: string) => void;
type editItem = (index: number, item: task) => void;

const Checklist = () => {
  const [filterKey, setFilterKey] = useState('All tasks');
  const [addTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState<task[]>([]);
  const [tasksPerPage, setTasksPerPage] = useState<task[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [PaginationArr, setPaginstionArr] = useState<number[]>([]);
  const [showPrevBtn, setShowPrevBtn] = useState(false);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [numPages, setNumPages] = useState(1);

  const searchResultsPerPage = 6;

  // GET TASKS
  useEffect(() => {
    const response: any = localStorage.getItem('Tasks');
    const storedTasks: ts[] = JSON.parse(response);

    const updatedTask: task[] = storedTasks?.map((item) => {
      return {
        decription: item.decription,
        date: item.date ? new Date(item.date) : undefined,
        assignee: item.assignee,
        done: item.done,
        id: item.id,
      };
    });
    if (storedTasks) setTasks(updatedTask);
  }, []);

  // GET NUMBER OF PAGES
  useEffect(() => {
    setNumPages(Math.ceil(tasks.length / searchResultsPerPage));
  }, [tasks, searchResultsPerPage]);

  useEffect(() => {
    // SPLIT TASKS TO 6 PER PAGE
    const getTasksPage = function (page: number) {
      const start = (page - 1) * searchResultsPerPage;
      const end = page * searchResultsPerPage;

      return tasks.slice(start, end);
    };
    setTasksPerPage(getTasksPage(pageNum));

    // Page numbers
    setPaginstionArr([pageNum - 1, pageNum, pageNum + 1]);

    // Page 1, and there are other pages
    if (pageNum === 1 && numPages > 1) {
      setShowPrevBtn(false);
      setShowNextBtn(true);
    }

    // Other Pages
    if (pageNum < numPages && pageNum > 1) {
      setShowNextBtn(true);
      setShowPrevBtn(true);
    }

    // Last page
    if (pageNum === numPages) {
      setShowNextBtn(false);
      setShowPrevBtn(true);
    }
  }, [pageNum, searchResultsPerPage, tasks, numPages]);

  //  SHOW FORM IF NO TASK
  useEffect(() => {
    tasks.length === 0 ? setAddTask(true) : setAddTask(false);
  }, [tasks]);

  // CANCLE ADD TASK FORM
  const CancelAddTask = () => {
    setAddTask(false);
  };

  //  ADD TASK
  const handleAddTask: addTask = (task) => {
    const newTasksArr = [task, ...tasks];
    setTasks(newTasksArr);
    localStorage.removeItem('Tasks');
    localStorage.setItem('Tasks', JSON.stringify(newTasksArr));
  };

  // DELETE TASK
  const handleDelete: deleteTask = (id) => {
    const newTasksArr = tasks?.filter((item) => item.id !== id);
    setTasks(newTasksArr);
    localStorage.removeItem('Tasks');
    localStorage.setItem('Tasks', JSON.stringify(newTasksArr));
  };

  // EDIT TASK
  const handleEditTask = (id: string, item: task) => {
    const index = tasks?.findIndex((item) => item.id === id);
    const newTasksArr = [...tasks];
    newTasksArr.splice(index, 1);
    newTasksArr.splice(index, 0, item);
    setTasks(newTasksArr);
    localStorage.removeItem('Tasks');
    localStorage.setItem('Tasks', JSON.stringify(newTasksArr));
  };

  return (
    <section className="w-full px-8">
      <aside className="hidden pt-10 sm:flex flex-col gap-2 justify-start items-start">
        <h1 className="text-black text-4xl font-bold  leading-10">Wedding Checklist</h1>
        <p className="text-neutral-400 text-base font-normal  leading-snug">
          Easily create and manage a to-do list of your wedding tasks
        </p>
      </aside>
      {/* Search */}
      <Search />
      {/* Tasks side */}
      <aside className="mt-8 sm:mt-20">
        <div className="w-full h-14 flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between md:items-center">
          <h3 className="text-zinc-800 text-xl font-semibold leading-loose">Tasks</h3>
          <div className="justify-center items-center sm:gap-3 sm:flex">
            <p className="text-zinc-800 leading-snug hidden sm:block">Filter By</p>

            <aside className="flex sm:grid sm:grid-cols-2 gap-3  ">
              {/* <Filter /> */}
              <Select>
                <SelectTrigger className="w-full h-[55px] text-lg">
                  <SelectValue placeholder={filterKey} />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectGroup>
                    {filter.map((item, i) => (
                      <SelectItem className="text-lg" value={item} key={i + 1} onClick={() => setFilterKey(item)}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button
                className={`${addTask ? 'cursor-not-allowed' : ''} `}
                variant={addTask ? 'disabled' : 'secondary'}
                onClick={() => setAddTask(true)}
              >
                <span className="hidden sm:block">Add Task</span>
                <span className="sm:hidden">
                  <PlusIcon />
                </span>
              </Button>
            </aside>
          </div>
        </div>
        {/* Add Tasks */}
        <div className="w-full mt-14 sm:mt-8 border-t border-neutral-200">
          {addTask && <AddTask addTask={handleAddTask} cancel={CancelAddTask} />}
        </div>
        {/* Tasks */}
        <ul className="mt-8 flex flex-col gap-5 z-0">
          {tasksPerPage.length > 0
            ? tasksPerPage?.map((item, i) => (
                <li key={i + 1} className="">
                  <Task editItem={handleEditTask} index={i} deleteTask={handleDelete} item={item} />
                </li>
              ))
            : ''}
        </ul>
        {/* Pagination */}
        {tasks?.length > 6 && (
          <div className="w-full h-8 mt-8 rounded flex justify-between sm:justify-end items-center sm:pr-14">
            <p
              onClick={() => {
                if (pageNum === 1) return;
                setPageNum((prev) => prev - 1);
              }}
              className={`px-3 py-1.5 bg-transparent hover:bg-purple-200 text-center text-gray-500 text-sm font-medium border border-transparent hover:border-gray-300 cursor-pointer flex items-center gap-1 transition-all duration-500 ${
                showPrevBtn ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span>
                <Arrow />
              </span>
              Previous
            </p>

            {PaginationArr?.filter((item) => item !== 0 && item <= numPages).map((item) => (
              <p
                onClick={() => setPageNum(item)}
                key={item}
                className={`px-3 py-1.5 hidden sm:block ${
                  pageNum === item ? 'bg-purple-200' : 'bg-transparent'
                } hover:bg-purple-200 text-center text-gray-500 text-sm font-medium border border-gray-300 cursor-pointer transition-all duration-500`}
              >
                {item}
              </p>
            ))}

            <p
              onClick={() => {
                if (pageNum === numPages) return;
                setPageNum((prev) => prev + 1);
              }}
              className={`px-3 py-1.5 bg-transparent hover:bg-purple-200 text-center text-gray-500 text-sm font-medium border border-transparent hover:border-gray-300 cursor-pointer flex items-center gap-1 transition-all duration-500 ${
                showNextBtn ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Next
              <span className="rotate-180">
                <Arrow />
              </span>
            </p>
          </div>
        )}
      </aside>
    </section>
  );
};
export default Checklist;
