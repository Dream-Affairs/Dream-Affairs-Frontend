'use client';
import React, { useEffect, useState } from 'react';
import Filter from '../(components)/checklist/Filter';
import Search from '../(components)/checklist/Search';
import Task from '../(components)/checklist/Task';
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

const filter: string[] = ['All tasks', 'Assigned to me', 'Assigned by me', 'Completed'];

const Checklist = () => {
  const [filterKey, setFilterKey] = useState('All tasks');
  const [addTask, setAddTask] = useState(false);

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
              <Button variant="secondary" onClick={() => setAddTask((prev) => !prev)}>
                Add Task
              </Button>
            </aside>
          </div>
        </div>
        <div className="w-full mt-8 border-t border-neutral-200">{addTask && <Task />}</div>
      </aside>
    </section>
  );
};
export default Checklist;
