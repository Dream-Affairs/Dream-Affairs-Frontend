import { ArrowLeft, ArrowRight } from '@/components/svg-icons/svg-icons';
import React from 'react';

function Pagination() {
  return (
    <div className="flex w-fit border border-[#D1D5DB] rounded mx-auto mt-12 text-[#6B7280] text-sm font-medium">
      <button className="flex items-center border-r border-[#D1D5DB py-2 px-3 gap-2">
        <ArrowLeft />
        Previous
      </button>
      <button className="py-2 px-3 border-r border-[#D1D5DB]">1</button>
      <button className="py-2 px-3 border-r border-[#D1D5DB] bg-[#D1D5DB]">2</button>
      <button className="py-2 px-3 border-r border-[#D1D5DB]">3</button>
      <button className="flex items-center py-2 px-3 gap-2">
        Next
        <ArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
