'use client';
import React from 'react';
import { DeleteIcon } from './Icons';
import { format } from 'date-fns';

type task = {
  decription: string;
  date: Date | undefined;
  assignee: string;
};

interface MyTasksProps {
  deleteTask: (index: number) => void;
  item: task;
  index: number;
}

export const Task = ({ deleteTask, item, index }: MyTasksProps) => {
  return (
    <div className="w-full pr-9 pb-2 border-b border-neutral-100 flex-col justify-center items-start gap-2 inline-flex">
      <div className="self-stretch justify-start items-start gap-2 inline-flex">
        {/* Check */}
        <div className="min-w-[16px] h-4 mt-1 border-[2px] border-[#9F7DB5] rounded-[50%]"> </div>
        <div className="w-full items-start grid grid-cols-3">
          {/* Description and date */}
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <p className="text-neutral-800 text-base font-normal font-['Work Sans'] leading-snug">{item.decription}</p>
            <span className="text-zinc-500 text-xs font-normal font-['Work Sans'] leading-none">
              {item.date ? format(item.date, 'MMM dd') : ''}
            </span>
          </div>

          {/* Assignee */}
          <p className="text-slate-600 justify-self-center leading-snug">{item.assignee}</p>
          {/* Delete */}
          <aside onClick={() => deleteTask(index)} className="justify-self-end cursor-pointer">
            <DeleteIcon />
          </aside>
        </div>
      </div>
    </div>
  );
};
export default Task;
