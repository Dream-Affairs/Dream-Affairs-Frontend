'use client';
import React, { useEffect, useState } from 'react';
import { AssignIcon, DeleteIcon } from './Icons';
import { format } from 'date-fns';
import { Calendar as CalenderIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

type task = {
  decription: string;
  date: Date | undefined;
  assignee: string;
};

interface MyTasksProps {
  deleteTask: (index: number) => void;
  editItem: (index: number, item: task) => void;
  item: task;
  index: number;
}

const Members: string[] = ['You', 'John', 'Nonye'];

export const Task = ({ deleteTask, item, index, editItem }: MyTasksProps) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [isAssigning, setIsAssigning] = useState(false);
  const [members, setMembers] = useState(Members);
  const [searchMember, setSearchMember] = useState('');
  const [description, setDescription] = useState('');
  const [editedTask, setEditedTask] = React.useState<task>(item);
  const [updateComplete, setUpdateComplete] = useState(false);
  const [assignedMember, setAssignedMember] = useState('');
  const error = false;

  useEffect(() => {
    if (searchMember.length > 0) {
      const searchedMember = Members.filter((item) => item.toLowerCase().includes(searchMember.toLowerCase()));

      setMembers(searchedMember);
      if (searchedMember.length === 0) setMembers(['----']);
    }
    if (searchMember.length === 0) setMembers(Members);
  }, [searchMember]);

  useEffect(() => {
    setDate(item.date);
    setAssignedMember(item.assignee);
    setDescription(item.decription);
  }, [item]);

  useEffect(() => {
    setEditedTask({ decription: description, date: date, assignee: assignedMember });
  }, [date, assignedMember, description]);

  useEffect(() => {
    if (updateComplete) return;
    editItem(index, editedTask);
    setUpdateComplete(false);
  }, [updateComplete]);

  return (
    <div className="w-full pr-9 pb-2 border-b border-neutral-100 flex-col justify-center items-start gap-2 inline-flex">
      <div className="self-stretch justify-start items-start gap-2 inline-flex">
        {/* Check */}
        <div className="min-w-[16px] h-4 mt-1 border-[2px] border-[#9F7DB5] rounded-[50%] hover:bg-primary-foreground cursor-pointer">
          {' '}
        </div>
        <div className="w-full items-start grid grid-cols-3">
          {/* Description */}

          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <input
              type="text"
              placeholder="Task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onBlur={() => (description.length === 0 ? '' : editItem(index, editedTask))}
              onKeyDown={(e) => {
                if (e.key == 'Enter') {
                  return description.length === 0 ? '' : editItem(index, editedTask);
                }
              }}
              className="text-neutral-800 outline-none leading-snug"
            />
            {/* Date */}
            <Popover>
              <PopoverTrigger
                className={cn(
                  ` text-sm  file:text-sm file:font-medium placeholder:text-gray-400 w-[115px]  disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 transition-colors duration-200 ease-in-out border-0 hover:!bg-none cursor-pointer
           ${error && ' text-red-500 placeholder:text-red-500'}
      
          ${date && ' text-black'}`,
                )}
                asChild
              >
                <p
                  className={cn(
                    'flex items-center justify-start  text-left text-zinc-500 text-xs leading-none ',
                    !date && 'text-neutral-400 ',
                  )}
                >
                  {date ? format(date, 'MMM dd') : <CalenderIcon className="mr-2 h-4 w-4" />}
                </p>
                {/* )} */}
              </PopoverTrigger>
              <PopoverContent onBlur={() => editItem(index, editedTask)} className="w-auto translate-x-1/4 p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          {/* Assignee */}
          <div onClick={() => setIsAssigning(true)} className="justify-self-center relative">
            {assignedMember !== 'Assign Task' ? (
              <p className="text-slate-600 leading-snug cursor-pointer">{assignedMember}</p>
            ) : (
              <AssignIcon stroke="#898C8F" />
            )}
            {isAssigning && (
              <div
                onBlur={() => {
                  setTimeout(() => {
                    setIsAssigning(false);
                  }, 300);
                }}
                className="absolute top-5 w-44 bg-white rounded-lg shadow border border-zinc-100 flex-col justify-start items-center gap-2 flex z-30"
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
                    onClick={() => {
                      setAssignedMember(item);
                      setTimeout(() => {
                        setUpdateComplete(true);
                      }, 1000);
                    }}
                    key={i + 1}
                    className="text-neutral-800 hover:bg-blue-50 text-sm font-normal leading-tight cursor-pointer p-3 w-full"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
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
