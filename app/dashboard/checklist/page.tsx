'use client';
import React, { useState } from 'react';
import Filter from '../(components)/checklist/Filter';
import Search from '../(components)/checklist/Search';
import Task from '../(components)/checklist/Task';
import { Button } from '@/components/ui/button';
const Checklist = () => {
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
              <Filter />
              <Button variant="secondary">Add Task</Button>
            </aside>
          </div>
        </div>
        <div className="w-full mt-8 border-t border-neutral-200">
          <Task />
        </div>
      </aside>
    </section>
  );
};
export default Checklist;
