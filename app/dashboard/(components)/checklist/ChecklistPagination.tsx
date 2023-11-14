import React from 'react';
import { Arrow } from './Icons';

const ChecklistPagination = () => {
  return (
    <div className="w-full h-8 mt-8 rounded flex justify-end items-center pr-14">
      <p className="px-3 py-1.5 bg-transparent hover:bg-purple-200 text-center text-gray-500 text-sm font-medium border border-transparent hover:border-gray-300 cursor-pointer flex items-center gap-1">
        <span>
          <Arrow />
        </span>
        Previous
      </p>
      {[1, 2, 3].map((item) => (
        <p
          key={item}
          className="px-3 py-1.5 bg-transparent hover:bg-purple-200 text-center text-gray-500 text-sm font-medium border border-gray-300 cursor-pointer"
        >
          {item}
        </p>
      ))}

      <p className="px-3 py-1.5 bg-transparent hover:bg-purple-200 text-center text-gray-500 text-sm font-medium border border-gray-300 cursor-pointer flex items-center gap-1">
        Next
        <span className="rotate-180">
          <Arrow />
        </span>
      </p>
    </div>
  );
};

export default ChecklistPagination;
