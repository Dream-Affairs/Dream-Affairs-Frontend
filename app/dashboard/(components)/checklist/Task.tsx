'use client';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
const Task = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const error = false;
  const [textIsEditing, setTextIsEditing] = useState(false);
  const [taskText, setTaskText] = useState('');
  useEffect(() => {
    taskText.length === 0 ? setTaskText('Create a New Task') : '';
  }, [taskText]);
  return (
    <div className="w-full items-center grid grid-cols-3 pt-4 pb-1 border-b border-neutral-200 ">
      <aside className="flex gap-3 ">
        <div className="min-w-[20px] h-5 mt-1 border-[3px] border-[#9F7DB5] rounded-[50%]"> </div>
        <div className="w-96 flex-col justify-start items-start gap-2 flex">
          <p
            className={` text-base font-normal font-['Work Sans'] leading-snug relative ${
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

          <Popover>
            <PopoverTrigger
              className={cn(
                ` text-sm  file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 transition-colors duration-200 ease-in-out border-0 hover:!bg-none
           ${error && ' text-red-500 placeholder:text-red-500'}
      
          ${date && ' text-black'}`,
              )}
              asChild
            >
              <p
                className={cn('w-full justify-start text-zinc-500 text-left font-normal', !date && 'text-neutral-400')}
              >
                {date ? format(date, 'MMM dd') : <span>Set due date</span>}
              </p>
            </PopoverTrigger>
            <PopoverContent className="w-auto -translate-x-1/2 p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </aside>
      <svg
        className="justify-self-center"
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
      >
        <path
          d="M9.5 9.5C11.5711 9.5 13.25 7.82107 13.25 5.75C13.25 3.67893 11.5711 2 9.5 2C7.42893 2 5.75 3.67893 5.75 5.75C5.75 7.82107 7.42893 9.5 9.5 9.5Z"
          stroke="#898C8F"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.05701 17C3.05701 14.0975 5.9445 11.75 9.4995 11.75C10.2195 11.75 10.917 11.8475 11.5695 12.0275"
          stroke="#898C8F"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17 14C17 14.24 16.97 14.4725 16.91 14.6975C16.8425 14.9975 16.7225 15.29 16.565 15.545C16.0475 16.415 15.095 17 14 17C13.2275 17 12.53 16.7075 12.005 16.2275C11.78 16.0325 11.585 15.8 11.435 15.545C11.1575 15.095 11 14.5625 11 14C11 13.19 11.3225 12.4475 11.8475 11.9075C12.395 11.345 13.16 11 14 11C14.885 11 15.6875 11.3825 16.2275 11.9975C16.7075 12.53 17 13.235 17 14Z"
          stroke="#898C8F"
          stroke-width="1.3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.1162 13.985H12.8812"
          stroke="#898C8F"
          stroke-width="1.3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.9991 12.89V15.1325"
          stroke="#898C8F"
          stroke-width="1.3"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {/* Delete button */}
      <div></div>
    </div>
  );
};
export default Task;

{
  /* {dateIsEditing ? (
            <input
              className="text-neutral-400 text-xs  leading-none"
              type="date"
              placeholder="Set due date"
              id="date"
              name="date"
              value={dateText}
              onChange={(e) => setDateText(e.target.value)}
              onBlur={() => setDateIsEditing(false)}
              onKeyDown={(e) => {
                if (e.key == 'Enter') {
                  setDateIsEditing(false);
                  dateText.length === 0 ? setDateText('Set due date') : '';
                }
              }}
            ></input>
          ) : (
            <p
              className={`text-sm leading-none ${dateText === 'Set due date' ? 'text-neutral-400' : 'text-zinc-500'}`}
              onClick={() => setDateIsEditing(true)}
            >
              {dateText}
            </p>
          )} */
}
