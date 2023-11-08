import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import add from './(assets)/add.svg';
import guest from './(assets)/profile-add.svg';
import calendar from './(assets)/calendar.svg';
import location from './(assets)/location.svg';
import clock from './(assets)/clock.svg';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <section className="w-full py-6 px-[52px] space-y-8">
      {/* Header, Add Guest and Upgrade Plan  */}
      <div className="flex justify-between items-center">
        {/* Header  */}
        <div>
          <h1 className="text-4xl leading-[44.8px] font-medium">Hi Funsho!</h1>
          <span className="text-base leading-5 font-normal">
            Here is your website URL: <Link href={``}>www.funshoandNonye.com</Link>
          </span>
        </div>

        {/* Add Guests */}
        <div className="flex gap-x-6 items-center">
          <Button className="px-8 py-2 rounded-[8px] flex justify-center items-center gap-x-2" variant={'outline'}>
            <Image src={add} alt="add" /> <span>Add Guest</span>
          </Button>
          <Button className="px-8 py-2 rounded-[8px] text-[#282828] font-medium" variant={'secondary'}>
            Upgrade Plan
          </Button>
        </div>
      </div>

      {/* Event Details and Countdown Clock  */}
      <div className="flex gap-x-8 w-full">
        {/* Event Details  */}
        <div className="border border-[#E1E1E1] rounded-[5px] w-full h-[150px] p-4 space-y-4 text-[#282828]">
          <p className="text-lg leading-6 font-semibold">Event Details</p>

          <div className="flex justify-between text-sm mr-20">
            <div className="space-y-4">
              <p className="flex items-center gap-x-2">
                <Image src={calendar} alt="calendar" /> <span>Event Date</span>
              </p>
              <p className="flex items-center gap-x-2">
                <Image src={location} alt="location" /> <span>Location</span>
              </p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center gap-x-2">
                <Image src={clock} alt="clock" />{' '}
                <span>
                  Start<span> time</span>
                </span>
              </p>
              <p className="flex items-center gap-x-2">
                <Image src={clock} alt="clock" />{' '}
                <span>
                  End<span> time</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Countdown Clock  */}
        <div className="border border-[#E1E1E1] rounded-[5px] w-full h-[150px] p-4 space-y-3">
          <p className="text-lg leading-6 font-semibold text-[#282828]">Countdown Clock</p>

          <div className="flex gap-x-10 w-full h-full pl-10 text-sm">
            <div className="flex justify-center items-center bg-[#9B57B6] w-[85px] h-[85px] rounded-full p-1.5">
              <p className="bg-white rounded-full h-full w-full flex justify-center items-center">days</p>
            </div>
            <div className="flex justify-center items-center bg-[#9B57B6] w-[85px] h-[85px] rounded-full p-1.5">
              <p className="bg-white rounded-full h-full w-full flex justify-center items-center">hours</p>
            </div>
            <div className="flex justify-center items-center bg-[#9B57B6] w-[85px] h-[85px] rounded-full p-1.5">
              <p className="bg-white rounded-full h-full w-full flex justify-center items-center">minutes</p>
            </div>
          </div>
        </div>
      </div>

      {/* RSVP Overview and Financial Overview  */}
      <div className="flex gap-x-8 w-full">
        {/* RSVP Overview  */}
        <div className="border border-[#E1E1E1] rounded-[5px] w-full h-[280px] p-4">
          <p className="text-lg leading-6 font-semibold text-[#282828]">RSVP Overview</p>
          <div className="text-[#822DA4] text-base leading-6 h-full w-full flex items-center justify-center font-medium">
            <Button variant={'ghost'}>
              <Image src={guest} alt="" /> Add Guests
            </Button>
          </div>
        </div>

        {/* Financial Overview  */}
        <div className="border border-[#E1E1E1] rounded-[5px] w-full h-[280px] p-4">
          <p className="text-lg leading-6 font-semibold text-[#282828]">Financial Overview</p>
          <div className="text-[#822DA4] text-base leading-6 h-full w-full flex items-center justify-center font-medium">
            <Button variant={'ghost'}>
              <Image src={add} alt="" /> Add Budget
            </Button>
          </div>
        </div>
      </div>

      {/* Checklist and Gifts  */}
      <div className="flex gap-x-8 w-full">
        {/* Checklist */}
        <div className="border border-[#E1E1E1] rounded-[5px] w-full h-[380px] p-4 space-y-3">
          <p className="text-lg leading-6 font-semibold text-[#282828]">Checklist</p>
          <p className="flex justify-between w-full text-sm text-[#6F6F6F]">
            <span>Task</span>
            <span>Status</span>
          </p>
          <div className="text-[#822DA4] text-base leading-6 h-full w-full flex items-center justify-center font-medium">
            <Button variant={'ghost'}>
              <Image src={add} alt="" /> Add Task
            </Button>
          </div>
        </div>

        {/* Gifts  */}
        <div className="border border-[#E1E1E1] rounded-[5px] w-full h-[380px] p-4">
          <p className="text-lg leading-6 font-semibold text-[#282828]">Gifts</p>
          <div className="text-[#822DA4] text-base leading-6 h-full w-full flex items-center justify-center font-medium">
            No Gifts
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
