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

const filter: string[] = ['All tasks', 'Assigned to me', 'Assigned by me', 'Completed'];

type task = {
  decription: string;
  date: Date | undefined;
  assignee: string;
};

const tasks: task[] = [
  {
    decription: 'Contact Vendor',
    date: undefined,
    assignee: 'John',
  },
  {
    decription: 'Go to oshodi',
    date: new Date(),
    assignee: 'Victor',
  },
];

const Checklist = () => {
  const [filterKey, setFilterKey] = useState('All tasks');
  const [addTask, setAddTask] = useState(false);

  const CancelAddTask = () => {
    setAddTask(false);
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
        <div className="w-full mt-8 border-t border-neutral-200">{addTask && <AddTask cancel={CancelAddTask} />}</div>
        <ul className="mt-8 flex flex-col gap-6">
          {tasks.map((item, i) => (
            <li key={i + 1}>
              <Task item={item} />
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};
export default Checklist;
