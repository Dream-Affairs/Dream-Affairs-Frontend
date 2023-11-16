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
import { v4 as uuidv4 } from 'uuid';

type task = {
  decription: string;
  date: Date | undefined;
  assignee: string;
  done: boolean;
  id: string;
};

interface MyAddTasksProps {
  addTask: (task: task) => void;
  cancel: () => void;
}

const Members: string[] = ['You', 'John', 'Nonye'];

const AddTask = ({ cancel, addTask }: MyAddTasksProps) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const error = false;
  const [taskText, setTaskText] = useState('');
  const [isAssigning, setIsAssigning] = useState(false);
  const [members, setMembers] = useState(Members);
  const [searchMember, setSearchMember] = useState('');
  const [assignedMember, setAssignedMember] = useState('Assign Task');

  useEffect(() => {
    if (searchMember.length > 0) {
      const searchedMember = Members.filter((item) => item.toLowerCase().includes(searchMember.toLowerCase()));

      setMembers(searchedMember);
      if (searchedMember.length === 0) setMembers(['----']);
    }
    if (searchMember.length === 0) setMembers(Members);
  }, [searchMember]);

  const handleDone = () => {
    const task: task = {
      decription: taskText,
      date: date,
      assignee: assignedMember,
      done: false,
      id: uuidv4(),
    };

    addTask(task);

    cancel();
  };

  const handleAssignBlur = () => {
    setTimeout(() => {
      setIsAssigning(false);
    }, 300);
  };

  return (
    <div className="w-full items-center pt-4 pb-2 border rounded-lg border-neutral-200 mt-5">
      <aside className="px-3">
        <div className="w-full flex-col justify-start items-start gap-8 flex">
          {/* Description Input */}
          <input
            className={`relative outline-none placeholder:text-neutral-400 w-full py-2`}
            placeholder="Create a New Task"
            type="text"
            value={taskText}
            onChange={(e) => {
              if (e.target.value.length === 60) return;
              setTaskText(e.target.value);
            }}
            autoFocus
            onKeyDown={(e) => {
              if (e.key == 'Enter' && taskText.length > 0) {
                handleDone();
              }
            }}
          />

          <div className="flex gap-5 w-full">
            {/* Add Date */}
            <Popover>
              <PopoverTrigger
                className={cn(
                  ` text-sm  file:text-sm file:font-medium placeholder:text-gray-400 w-[115px]  disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 transition-colors duration-200 ease-in-out border-0 hover:!bg-none
           ${error && ' text-red-500 placeholder:text-red-500'}
      
          ${date && ' text-black'}`,
                )}
                asChild
              >
                <p
                  className={cn(
                    'flex items-center justify-start  text-left font-normal cursor-pointer',
                    !date && 'text-neutral-400 ',
                  )}
                >
                  <CalenderIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'MMM dd') : <span className="text-zinc-500">Set due date</span>}
                </p>
              </PopoverTrigger>
              <PopoverContent className="w-auto translate-x-1/4 p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>

            {/* Assign To */}
            <aside onClick={() => setIsAssigning(true)} className="relative flex gap-2">
              <AssignIcon stroke={assignedMember !== 'Assign Task' ? '#030712' : '#898C8F'} />
              <p className={`text-sm cursor-pointer ${assignedMember === 'Assign Task' ? 'text-neutral-400' : ''}`}>
                {assignedMember}
              </p>

              {isAssigning && (
                <div
                  onBlur={() => {
                    setTimeout(() => {
                      setIsAssigning(false);
                    }, 300);
                  }}
                  className="absolute top-5 w-44 bg-white rounded-lg shadow border border-zinc-100 flex-col justify-start items-center gap-2 flex"
                >
                  <input
                    type="text"
                    placeholder="Assign to..."
                    autoFocus
                    value={searchMember}
                    onChange={(e) => {
                      setSearchMember(e.target.value);
                    }}
                    className="text-neutral-400 leading-tight p-3 border-b border-gray-200 w-full outline-none"
                  />
                  {members.map((item, i) => (
                    <p
                      onClick={() => setAssignedMember(item)}
                      key={i + 1}
                      className="text-neutral-800 hover:bg-blue-50 text-sm font-normal leading-tight cursor-pointer p-3 w-full"
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

      {/* Action */}
      <div className="w-full pr-3 justify-end items-start gap-2 flex border-t pt-2 mt-5 border-neutral-200">
        <Button onClick={() => cancel()} className="px-6 py-3 h-fit" variant="outline">
          Cancel
        </Button>
        {taskText.length > 0 && (
          <Button onClick={handleDone} className="px-6 py-3 h-fit" variant="secondary">
            Done
          </Button>
        )}
        {taskText.length === 0 && (
          <Button className="px-6 py-3 h-fit cursor-not-allowed" variant="disabled">
            Done
          </Button>
        )}
      </div>
    </div>
  );
};
export default AddTask;
