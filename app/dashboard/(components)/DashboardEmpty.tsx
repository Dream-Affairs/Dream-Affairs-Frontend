import { Button } from '@/components/ui/button';
import Image from 'next/image';
import guest from '../(assets)/profile-add.svg';
import add from '../(assets)/add.svg';

export const EmptyClock = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-[#F5E7FF] w-[85px] h-[85px] rounded-full p-1.5">
        <p className="bg-white rounded-full h-full w-full flex justify-center items-center">days</p>
      </div>
      <div className="flex justify-center items-center bg-[#F5E7FF] w-[85px] h-[85px] rounded-full p-1.5">
        <p className="bg-white rounded-full h-full w-full flex justify-center items-center">hours</p>
      </div>
      <div className="flex justify-center items-center bg-[#F5E7FF] w-[85px] h-[85px] rounded-full p-1.5">
        <p className="bg-white rounded-full h-full w-full flex justify-center items-center">minutes</p>
      </div>
    </>
  );
};

export const EmptyRSVP = () => {
  return (
    <>
      <div className="flex 2xl:justify-center justify-start items-center gap-x-[60px]">
        <div className="flex justify-center items-center bg-[#EACAFF] w-[150px] h-[150px] rounded-full p-8 relative ml-3">
          <p className="bg-white rounded-full h-full w-full flex justify-center items-center">
            <span className="bg-[#F3F3F3] px-2.5 py-[5px] rounded-[5px] absolute -right-10">100%</span>
          </p>
        </div>
        <div className="space-y-4">
          <p className="flex items-center gap-x-2">
            <span className="w-3 h-3 rounded-full bg-[#822DA4]"> </span>
            <span>Confirmed attendees</span>
          </p>
          <p className="flex items-center gap-x-2">
            <span className="w-3 h-3 rounded-full bg-[#EACAFF]"> </span>
            <span>Unconfirmed attendees</span>
          </p>
          <p className="flex items-center gap-x-2">
            <span className="w-3 h-3 rounded-full bg-[#FFCAD3]"> </span>
            <span>Declined</span>
          </p>
        </div>
      </div>
      <p className="self-start">
        Total Invited Guests: <span className="text-[#822DA4]">0 guests</span>
      </p>
    </>
  );
};

export const EmptyBudget = () => {
  return <></>;
};
