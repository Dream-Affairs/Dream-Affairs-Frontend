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
import { json } from 'stream/consumers';

const filter: string[] = ['All tasks', 'Assigned to me', 'Assigned by me', 'Completed'];

type task = {
  decription: string;
  date: Date | undefined;
  assignee: string;
};

type ts = {
  decription: string;
  date: Date | string;
  assignee: string;
};

type addTask = (task: task) => void;
type deleteTask = (index: number) => void;
type editItem = (index: number, item: task) => void;

const Tasks: task[] = [
  {
    decription: 'Contact Vendor',
    date: new Date('01-04-23'),
    assignee: 'John',
  },
  {
    decription: 'Buy Aso Ebi',
    date: new Date(),
    assignee: 'Nonye',
  },
];

const Checklist = () => {
  const [filterKey, setFilterKey] = useState('All tasks');
  const [addTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState<task[]>([]);

  useEffect(() => {
    const response: any = localStorage.getItem('Tasks');
    const storedTasks: ts[] = JSON.parse(response);
    console.log(storedTasks);

    const updatedTask: task[] = storedTasks?.map((item) => {
      return {
        decription: item.decription,
        date: new Date(item.date),
        assignee: item.assignee,
      };
    });

    if (storedTasks) setTasks(updatedTask);
  }, []);

  useEffect(() => {
    tasks.length === 0 ? setAddTask(true) : setAddTask(false);
  }, [tasks]);

  const CancelAddTask = () => {
    setAddTask(false);
  };

  const handleAddTask: addTask = (task) => {
    const newTasksArr = [task, ...tasks];
    setTasks(newTasksArr);
    localStorage.removeItem('Tasks');
    localStorage.setItem('Tasks', JSON.stringify(newTasksArr));
  };

  const handleDelete: deleteTask = (index) => {
    const newTasksArr = tasks?.filter((_, i) => i !== index);
    setTasks(newTasksArr);
    localStorage.removeItem('Tasks');
    localStorage.setItem('Tasks', JSON.stringify(newTasksArr));
  };

  const handleEditTask = (index: number, item: task) => {
    const newTasksArr = [...tasks];
    newTasksArr.splice(index, 1);
    newTasksArr.splice(index, 0, item);
    setTasks(newTasksArr);
    localStorage.removeItem('Tasks');
    localStorage.setItem('Tasks', JSON.stringify(newTasksArr));
  };

  return (
    <section className="w-full px-8">
      <aside className="pt-10 flex flex-col gap-2 justify-start items-start">
        <h1 className="text-black text-4xl font-bold  leading-10">Wedding Checklist</h1>
        <p className="text-neutral-400 text-base font-normal  leading-snug">
          Easily create and manage a to-do list of your wedding tasks
        </p>
      </aside>
      {/* Search */}
      <Search />
      {/* Task side */}
      <aside className="mt-20">
        <div className="w-full h-14 flex justify-between items-center ">
          <h3 className="text-zinc-800 text-2xl font-semibold font-['Work Sans'] leading-loose">Tasks</h3>
          <div className="justify-center items-center gap-3 flex">
            <p className="text-zinc-800 leading-snug">Filter By</p>

            <aside className="grid grid-cols-2 gap-3">
              {/* <Filter /> */}
              <Select>
                <SelectTrigger className="w-[180px] h-[55px]">
                  <SelectValue placeholder={filterKey} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {filter.map((item, i) => (
                      <SelectItem value={item} key={i + 1} onClick={() => setFilterKey(item)}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button variant="secondary" onClick={() => setAddTask(true)}>
                Add Task
              </Button>
            </aside>
          </div>
        </div>
        <div className="w-full mt-8 border-t border-neutral-200">
          {addTask && <AddTask addTask={handleAddTask} cancel={CancelAddTask} />}
        </div>
        <ul className="mt-8 flex flex-col gap-6">
          {tasks?.length > 0
            ? tasks.map((item, i) => (
                <li key={i + 1}>
                  <Task editItem={handleEditTask} index={i} deleteTask={handleDelete} item={item} />
                </li>
              ))
            : ''}
        </ul>
      </aside>
    </section>
  );
};
export default Checklist;
