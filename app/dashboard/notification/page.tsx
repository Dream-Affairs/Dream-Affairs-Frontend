import { Search, Sidebar } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import clock from '../(assets)/timer.svg';
import cancel from '../(assets)/cross.svg';

type Props = {};

const Notification = (props: Props) => {
  return (
    <section className="w-full overflow-x-hidden py-[3em] px-[4em]">
      <h1 className="text-[2.5rem] text-black font-bold  leading-10 p-2">Notifications</h1>

      <p className="text-[#9C9C9C] text-[1rem] px-2">Your notifications in one place</p>

      {/* Search Bar */}

      <div className="flex items-center w-[90%] p-3 mx-[1.5em] my-[3.3em] bg-[#F8F8F8] rounded-lg">
        <Search />
        <input className="bg-transparent text-[.8rem] w-[100%] px-2" placeholder="Search for a notification" />
      </div>

      {/* Notification List */}

      <div className="flex flex-col gap-8 py-[2em] border-t-2 border-gray-200">
        <div className="flex items-center justify-between shadow-sm border border-slate-200 rounded-lg bg-white">
          <div className="flex justify-evenly p-5">
            <Image src={clock} alt="clock" />

            <div className="px-[1em] flex flex-col justify-center">
              <h2 className="text-[.875rem] text-[#090909] font-medium">Maintenance schedule</h2>
              <p className="text-[#576672] text-[.8rem]">
                We plan for a scheduled maintenance for Wednesday 8th November 2023. We apologize fo inconvenience this
                would cause.
              </p>
            </div>
          </div>
          <div className="px-2 flex items-center justify-between">
            <p className="px-3 text-[#9B57B6] cursor-pointer">view</p>
            <Image className="cursor-pointer" src={cancel} alt="Cancel" />
          </div>
        </div>

        <div className="flex items-center justify-between shadow-sm border border-slate-200 rounded-lg bg-white">
          <div className="flex justify-evenly p-5">
            <Image src={clock} alt="clock" />

            <div className="px-[1em] flex flex-col justify-center">
              <h2 className="text-[.875rem] text-[#090909] font-medium">Upcoming Task</h2>
              <p className="text-[#576672] text-[.8rem]">Wedding Reminder for Naza wedding is loading here</p>
            </div>
          </div>
          <div className="px-2 flex items-center justify-between">
            <p className="px-3 text-[#9B57B6] cursor-pointer">view</p>
            <Image className="cursor-pointer" src={cancel} alt="Cancel" />
          </div>
        </div>
        <div className="flex items-center justify-between shadow-sm border border-slate-200 rounded-lg bg-white">
          <div className="flex items-center justify-between p-5">
            <Image src={clock} alt="clock" />

            <div className="px-[1em] flex flex-col justify-center">
              <h2 className="text-[.875rem] text-[#090909] font-medium">Profile Update</h2>
              <p className="text-[#576672] text-[.8rem]">Wedding Reminder for Naza wedding is loading here</p>
            </div>
          </div>
          <div className="px-2 flex items-center justify-between">
            <p className="px-3 text-[#9B57B6] cursor-pointer">view</p>
            <Image className="cursor-pointer" src={cancel} alt="Cancel" />
          </div>
        </div>
        <div className="flex items-center justify-between shadow-sm border border-slate-200 rounded-lg bg-white">
          <div className="flex items-center justify-between p-5">
            <Image src={clock} alt="clock" />

            <div className="px-[1em] flex flex-col justify-center">
              <h2 className="text-[.875rem] text-[#090909] font-medium">Meal Preference</h2>
              <p className="text-[#576672] text-[.8rem]">Wedding Reminder for Naza wedding is loading here</p>
            </div>
          </div>
          <div className="px-2 flex items-center justify-between">
            <p className="px-3 text-[#9B57B6] cursor-pointer">view</p>
            <Image className="cursor-pointer" src={cancel} alt="Cancel" />
          </div>
        </div>
        <div className="flex items-center justify-between shadow-sm border border-slate-200 rounded-lg bg-white">
          <div className="flex items-center justify-between p-5">
            <Image src={clock} alt="clock" />

            <div className="px-[1em] flex flex-col justify-center">
              <h2 className="text-[.875rem] text-[#090909] font-medium">Profile Update</h2>
              <p className="text-[#576672] text-[.8rem]">Wedding Reminder for Naza wedding is loading here</p>
            </div>
          </div>
          <div className="px-2 flex items-center justify-between">
            <p className="px-3 text-[#9B57B6] cursor-pointer">view</p>
            <Image className="cursor-pointer" src={cancel} alt="Cancel" />
          </div>
        </div>
        <div className="flex items-center justify-between shadow-sm border border-slate-200 rounded-lg bg-white">
          <div className="flex items-center justify-between p-5">
            <Image src={clock} alt="clock" />

            <div className="px-[1em] flex flex-col justify-center">
              <h2 className="text-[.875rem] text-[#090909] font-medium">Profile Update</h2>
              <p className="text-[#576672] text-[.8rem]">Wedding Reminder for Naza wedding is loading here</p>
            </div>
          </div>
          <div className="px-2 flex items-center justify-between">
            <p className="px-3 text-[#9B57B6] cursor-pointer">view</p>
            <Image className="cursor-pointer" src={cancel} alt="Cancel" />
          </div>
        </div>
        <div className="flex items-center justify-between shadow-sm border border-slate-200 rounded-lg bg-white">
          <div className="flex items-center justify-between p-5">
            <Image src={clock} alt="clock" />

            <div className="px-[1em] flex flex-col justify-center">
              <h2 className="text-[.875rem] text-[#090909] font-medium">Profile Update</h2>
              <p className="text-[#576672] text-[.8rem]">Wedding Reminder for Naza wedding is loading here</p>
            </div>
          </div>
          <div className="px-2 flex items-center justify-between">
            <p className="px-3 text-[#9B57B6] cursor-pointer">view</p>
            <Image className="cursor-pointer" src={cancel} alt="Cancel" />
          </div>
        </div>
        <div className="flex items-center justify-between shadow-sm border border-slate-200 rounded-lg bg-white">
          <div className="flex items-center justify-between p-5">
            <Image src={clock} alt="clock" />

            <div className="px-[1em] flex flex-col justify-center">
              <h2 className="text-[.875rem] text-[#090909] font-medium">Profile Update</h2>
              <p className="text-[#576672] text-[.8rem]">Wedding Reminder for Naza wedding is loading here</p>
            </div>
          </div>
          <div className="px-2 flex items-center justify-between">
            <p className="px-3 text-[#9B57B6] cursor-pointer">view</p>
            <Image className="cursor-pointer" src={cancel} alt="Cancel" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;
