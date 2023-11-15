import React from 'react';
const Search = () => {
  return (
    <aside className="w-full flex mt-8 justify-end">
      <div className="w-[315px] h-[36px] rounded-md border border-gray-300 flex items-center gap-2 pl-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.58334 1.66666C5.21108 1.66666 1.66667 5.21107 1.66667 9.58332C1.66667 13.9556 5.21108 17.5 9.58334 17.5C11.4693 17.5 13.2012 16.8405 14.5611 15.7396L16.9107 18.0892C17.2362 18.4147 17.7638 18.4147 18.0893 18.0892C18.4147 17.7638 18.4147 17.2362 18.0893 16.9107L15.7396 14.5611C16.8405 13.2012 17.5 11.4693 17.5 9.58332C17.5 5.21107 13.9556 1.66666 9.58334 1.66666ZM3.33334 9.58332C3.33334 6.13154 6.13156 3.33332 9.58334 3.33332C13.0351 3.33332 15.8333 6.13154 15.8333 9.58332C15.8333 13.0351 13.0351 15.8333 9.58334 15.8333C6.13156 15.8333 3.33334 13.0351 3.33334 9.58332Z"
            fill="#8E8E8E"
          />
        </svg>
        <input type="text" placeholder="Search for task" className="text-zinc-400 leading-tight focus:outline-none" />
      </div>
    </aside>
  );
};
export default Search;
