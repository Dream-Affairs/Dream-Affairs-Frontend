'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Calendar as CalenderIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AssignIcon } from './Icons';

const Asignees: string[] = ['You', 'John', 'Nonye'];

const Task = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const error = false;
  const [textIsEditing, setTextIsEditing] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [isAssigning, setIsAssigning] = useState(false);
  const [asignees, setAsignees] = useState(Asignees);
  const [searchAsigneeText, setSearchAsigneeText] = useState('');

  // const handleSearchAsignee = (e: React.ChangeEvent<HTMLInputElement>) => {};

  // useEffect(() => {
  //   if (searchAsigneeText.length > 0) {
  //     const searchedAsignees = asignees.filter((item) => item.includes(searchAsigneeText));
  //     console.log(searchedAsignees);
  //   }
  // }, [searchAsigneeText]);

  useEffect(() => {
    taskText.length === 0 ? setTaskText('Create a New Task') : '';
  }, [taskText]);

  // <div className="min-w-[20px] h-5 mt-1 border-[3px] border-[#9F7DB5] rounded-[50%]"> </div>
  return (
    <div className="w-full items-center pt-4 pb-2 border rounded-lg border-neutral-200 mt-5">
      <aside className="px-3">
        <div className="w-full flex-col justify-start items-start gap-8 flex">
          <p
            className={`cursor-pointer text-base font-normal font-['Work Sans'] leading-snug relative ${
              taskText !== 'Create a New Task' ? '' : 'text-neutral-400'
            }`}
            onClick={() => setTextIsEditing(true)}
          >
            {taskText}
            {textIsEditing && (
              <div className={`absolute left-0 top-5 w-[200px] `}>
                <Input
                  type="text"
                  placeholder="Create a New Task"
                  value={taskText === 'Create a New Task' ? '' : taskText}
                  hasValue={taskText.length > 0}
                  onChange={(e) => setTaskText(e.target.value)}
                  autoFocus
                  onBlur={() => {
                    setTextIsEditing(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key == 'Enter') {
                      setTextIsEditing(false);
                    }
                  }}
                />
              </div>
            )}
          </p>

          <div className="flex gap-5 w-full">
            <Popover>
              <PopoverTrigger
                className={cn(
                  ` text-sm  file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 transition-colors duration-200 ease-in-out border-0 hover:!bg-none
           ${error && ' text-red-500 placeholder:text-red-500'}
      
          ${date && ' text-black'}`,
                )}
                asChild
              >
                {/* <CalenderIcon> */}
                <p
                  className={cn(
                    'justify-start text-zinc-500 text-left font-normal cursor-pointer',
                    !date && 'text-neutral-400',
                  )}
                >
                  {date ? format(date, 'MMM dd') : <span>Set due date</span>}
                </p>
                {/* </CalenderIcon> */}
              </PopoverTrigger>
              <PopoverContent className="w-auto translate-x-1/4 p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
            <aside onClick={() => setIsAssigning(true)} className="relative flex gap-2">
              <AssignIcon />
              <p className="text-neutral-400 text-sm cursor-pointer">Assign Task</p>
              {/* popup */}
              {isAssigning && (
                <div className="absolute top-5 w-44 bg-white rounded-lg shadow border border-zinc-100 flex-col justify-start items-center gap-2 flex">
                  <input
                    type="text"
                    placeholder="Assign to..."
                    autoFocus
                    value={searchAsigneeText}
                    onChange={(e) => {
                      setSearchAsigneeText(e.target.value);
                      console.log(e.target.value);
                    }}
                    onBlur={() => setIsAssigning(false)}
                    className="text-neutral-400 leading-tight p-3 border-b border-gray-200 w-full outline-none"
                  />
                  {asignees.map((item, i) => (
                    <p
                      key={i + 1}
                      className="text-neutral-800 hover:bg-blue-50 text-sm font-normal leading-tight p-3 w-full"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </div>
      </aside>
      <div className="w-full pr-3 justify-end items-start gap-2 flex border-t pt-2 mt-5 border-neutral-200">
        <Button className="px-6 py-3 h-fit" variant="outline">
          Cancel
        </Button>
        <Button className="px-6 py-3 h-fit" variant="secondary">
          Done
        </Button>
      </div>
    </div>
  );
};
export default Task;
