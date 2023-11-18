'use client';
import Image from 'next/image';
import curly from '../../(components)/(assets)/curly.svg';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Posts = ({ children }: any) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [page, setPage] = useState(1);

  const maxButtons = 3;
  const firstVisiblePage = Math.max(Math.min(page - 1, pages.length - maxButtons), 0);
  const visiblePages = pages.slice(firstVisiblePage, firstVisiblePage + maxButtons);

  return (
    <section className="flex flex-col max-w-[1440px] mx-auto px-8 lg-px-10">
      <div
        data-aos="zoom-in"
        data-aos-duration="700"
        className="m-auto text-center flex flex-col items-center pt-[36px] pb-[24px]"
      >
        <h1 className="text-[24px] sm:text-[56px] text-[#48195A] font-semibold">Recent blog posts</h1>
        <Image src={curly} width={0} alt="Curly" className="w-[127px] lg:w-[400px]" />
      </div>
      {children}
      {/* pagination */}

      <div className="self-center flex h-[50px] my-10 mb-20">
        <button
          className="border h-full w-[70px] grid place-content-center rounded-tl-lg rounded-bl-lg hover:bg-accent transition-colors duration-150 ease-in-out"
          onClick={() => setPage(Math.max(page - 1, 1))}
        >
          <ChevronLeft className="text-gray-500" />
        </button>

        {visiblePages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`border h-full w-[50px] grid place-content-center hover:bg-accent transition-colors duration-150 ease-in-out ${
              pageNumber === page && 'bg-accent hover:bg-primary hover:text-white'
            }`}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}

        <button
          className="border h-full w-[70px] grid place-content-center rounded-tr-lg rounded-br-lg hover:bg-accent transition-colors duration-150 ease-in-out"
          onClick={() => setPage(Math.min(page + 1, pages.length))}
          disabled={page === pages.length}
        >
          <ChevronRight className="text-gray-500" />
        </button>
      </div>
    </section>
  );
};

export default Posts;
