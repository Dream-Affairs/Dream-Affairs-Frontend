import { AngleRight, Close, Eyes, EyesClosed, Grab, Search } from '@/components/svg-icons/svg-icons';
import React from 'react';

function MenuPopup({ closePop }: { closePop: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className="bg-white w-80 rounded-lg px-4 pt-[22px] pb-8 fixed right-14 border border-[#E1E1E1]">
      <header className="text-[#1C1C1C] font-medium flex justify-between items-center">
        Columns
        <button onClick={() => closePop(false)}>
          <Close />
        </button>
      </header>
      <div className="flex rounded p-2 border my-3 border-[#D0D5DD]">
        <Search height="20" width="20" />
        <input type="text" className="flex-1 pl-4" placeholder="Search for a column" />
      </div>
      <div className=" text-sm">
        <div className="flex justify-between font-medium">
          <span className="text-[#9C9C9C]">Shown in table</span>
          <span className=" text-primary">Hide All</span>
        </div>
        <div className="flex items-center gap-2 py-1">
          <Grab />
          <span>Guest Name</span>
          <button className="ml-auto">
            <Eyes />
          </button>
          <button>
            <AngleRight />
          </button>
        </div>
        <div className="flex items-center gap-2 py-1">
          <Grab />
          <span>Email</span>
          <button className="ml-auto">
            <Eyes />
          </button>
          <button>
            <AngleRight />
          </button>
        </div>
        <div className="flex items-center gap-2 py-1">
          <Grab />
          <span>RSVP Status</span>
          <button className="ml-auto">
            <Eyes />
          </button>
          <button>
            <AngleRight />
          </button>
        </div>
        <div className="flex items-center gap-2 py-1">
          <Grab />
          <span>Invite Code</span>
          <button className="ml-auto">
            <Eyes />
          </button>
          <button>
            <AngleRight />
          </button>
        </div>
        <div className="flex items-center gap-2 py-1">
          <Grab />
          <span>Tags</span>
          <button className="ml-auto">
            <Eyes />
          </button>
          <button>
            <AngleRight />
          </button>
        </div>
        <div className="flex items-center gap-2 py-1">
          <Grab />
          <span>Plus One?</span>
          <button className="ml-auto">
            <Eyes />
          </button>
          <button>
            <AngleRight />
          </button>
        </div>
        <div className="flex items-center gap-2 py-1">
          <Grab />
          <span>Gifts</span>
          <button className="ml-auto">
            <Eyes />
          </button>
          <button>
            <AngleRight />
          </button>
        </div>
        <div className="flex items-center gap-2 py-1">
          <Grab />
          <span>Seat Allocation</span>
          <button className="ml-auto">
            <Eyes />
          </button>
          <button>
            <AngleRight />
          </button>
        </div>
        <div className="flex justify-between font-medium mt-2">
          <span className="text-[#9C9C9C]">Hiiden in table</span>
          <span className=" text-primary">Show All</span>
        </div>
        <div className="flex items-center gap-2 py-1">
          <Grab />
          <span>Location</span>
          <button className="ml-auto">
            <EyesClosed />
          </button>
          <button>
            <AngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuPopup;
