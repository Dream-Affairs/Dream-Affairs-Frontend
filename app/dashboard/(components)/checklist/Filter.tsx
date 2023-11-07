'use client';
import React, { useState } from 'react';
const filter: string[] = ['All tasks', 'Assigned to me', 'Assigned by me', 'Completed'];
const Filter = () => {
  const [filterKey, setFilterKey] = useState('All tasks');
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="w-64 items-center flex justify-between h-14 p-4 rounded-lg border border-neutral-200 relative">
      <p className="text-black leading-tight">{filterKey}</p>
      <svg
        className={`cursor-pointer ${dropdown ? 'rotate-180' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        onClick={() => setDropdown((prev) => !prev)}
      >
        <path
          d="M19.92 8.95L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07999 8.95"
          stroke="#7C7C7C"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <aside
        className={`absolute left-0 right-0 top-full justify-between rounded-lg border border-neutral-200 shadow flex-col overflow-hidden bg-white z-30 ${
          dropdown ? 'flex' : 'hidden'
        }`}
      >
        {filter.map((item, i) => (
          <p
            key={i + 1}
            className={`text-black leading-tight py-4 px-4 hover:bg-purple-200 transition-all duration-500 cursor-pointer ${
              filterKey === item ? 'bg-purple-200' : ''
            }`}
            onClick={() => {
              setFilterKey(item);
              setDropdown(false);
            }}
          >
            {item}
          </p>
        ))}
      </aside>
    </div>
  );
};
export default Filter;
