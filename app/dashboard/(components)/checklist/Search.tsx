import React from 'react';
import { SearchIcon } from './Icons';
const Search = () => {
  return (
    <aside className="w-full flex mt-8 justify-end px-6 sm:px-8">
      <div className="w-full md:w-[315px] overflow-hidden rounded-md border border-gray-300 flex items-center gap-2 pl-3">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for task"
          className="text-zinc-400 leading-tight focus:outline-none py-2 w-full"
        />
      </div>
    </aside>
  );
};
export default Search;
