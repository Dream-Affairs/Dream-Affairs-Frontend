'use client';
import React, { useEffect, useState } from 'react';
const Task = () => {
  const [textIsEditing, setTextIsEditing] = useState(false);
  const [dateIsEditing, setDateIsEditing] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [dateText, setDateText] = useState('');
  useEffect(() => {
    taskText.length === 0 ? setTaskText('Create a New Task') : '';
    dateText.length === 0 ? setDateText('Set due date') : '';
  }, [taskText, dateText]);
  return (
    <div className="w-full items-center grid grid-cols-3 pt-4 pb-1 border-b border-neutral-200">
      <aside className="flex gap-3">
        <div className="min-w-[20px] h-5 mt-1 border-[3px] border-[#9F7DB5] rounded-[50%]"> </div>
        <div className="w-96 flex-col justify-start items-start gap-2 flex">
          {textIsEditing ? (
            <input
              className="focus:outline-none text-neutral-400"
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              onBlur={() => {
                setTextIsEditing(false);
                taskText.length === 0 ? setTaskText('Create a New Task') : '';
              }}
              onKeyDown={(e) => {
                if (e.key == 'Enter') {
                  setTextIsEditing(false);
                  taskText.length === 0 ? setTaskText('Create a New Task') : '';
                }
              }}
            />
          ) : (
            <p
              className={` text-base font-normal font-['Work Sans'] leading-snug ${
                taskText !== 'Create a New Task' ? '' : 'text-neutral-400'
              }`}
              onClick={() => setTextIsEditing(true)}
            >
              {taskText}
            </p>
          )}
          {dateIsEditing ? (
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
          )}
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
