import { Search } from 'lucide-react';
import React from 'react';

const Nav = ({ links, active, setActive }: any) => {
  return (
    <div className="my-[80px] flex justify-between items-center h-[100px] bg-[#FFF8FA] ">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-10 w-full flex justify-between items-center gap-12">
        <ul className="flex gap-8 overflow-x-auto">
          {links.map((link: any) => (
            <li
              key={link.id}
              className={`min-w-fit ${
                active === link.href ? 'border-b-2 border-primary font-semibold' : 'text-gray-700 font-[500]'
              }`}
            >
              <a
                href={`${link.href}`}
                onClick={() => setActive(link.href)}
                className="transition duration-300 ease-in-out hover:text-secondary"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <label className="flex justify-center items-center rounded-lg border border-accent px-3 min-w-[400px]  bg-white">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full text-gray-600 h-[40px] outline-none ring-0 border-none px-3"
          />
        </label>
      </div>
    </div>
  );
};

export default Nav;
