import { Search, Sidebar } from 'lucide-react';
import React, { useState } from 'react';
import NotificationList from './NotificationList';

type Props = {};

const Notification = (props: Props) => {

  const [search, setSearch] = useState('')

  return (
    <section className="w-full overflow-x-hidden py-[1em] px-[5em]">

      {/* Heading */}

      <h1 className="text-[2.5rem] text-black font-bold  leading-10 p-2">Notifications</h1>

      <p className="text-[#9C9C9C] text-[1rem] px-2">Your Notifications in one place</p>

      {/* Search Bar */}

      <div className="flex items-center w-[92%] p-3 mx-[3em] my-[2em] bg-[#F8F8F8] rounded-lg">
        <Search />
        <input className="bg-transparent text-[.875rem] w-[100%] px-3 py-1 outline-none" placeholder="Search for a notification..." onChange={(e) => setSearch(e.target.value)} />
      </div>

      {/* Line */}

      <div className='border-b border-gray-200'></div>

      {/* Notification List */}

      <div className="flex flex-col gap-8 py-[2em]">

        <NotificationList />

      </div>
      
    </section>
  );
};

export default Notification;
