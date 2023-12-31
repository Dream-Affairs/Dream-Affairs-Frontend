import React, { Dispatch, SetStateAction } from 'react';
import { cn } from '@/lib/utils';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

interface Props {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  list: any[];
}

function Pagination({ currentPage, setCurrentPage, list }: Props) {
  const pageSize: number = 10;
  const totalPages = Math.ceil(list.length / pageSize);
  const pages = Array.from({ length: totalPages }, (x, i) => i + 1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const goNext = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prevState) => {
      return prevState + 1;
    });
  };

  const prevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prevState) => {
      return prevState - 1;
    });
  };

  return (
    <div className="flex w-fit border border-[#D1D5DB] rounded mx-auto text-[#6B7280] text-sm font-medium">
      <button onClick={prevPage} className="flex items-center border-r border-[#D1D5DB] py-2 px-3 gap-1">
        <ArrowLeftIcon size={14} color="#98A2B3" />
        Previous
      </button>
      {pages.map((item) => {
        return (
          <button
            key={item}
            className={cn('py-2 px-3 border-r border-[#D1D5DB]', currentPage === item ? 'bg-[#D1D5DB]' : '')}
            onClick={() => handlePageChange(item)}
          >
            {item}
          </button>
        );
      })}
      <button onClick={goNext} className="flex items-center py-2 px-3 gap-1">
        Next
        <ArrowRightIcon size={14} color="#98A2B3" />
      </button>
    </div>
  );
}

export default Pagination;
