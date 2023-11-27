'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import add from './(assets)/add.svg';
import calendar from './(assets)/calendar.svg';
import location from './(assets)/location.svg';
import clock from './(assets)/clock.svg';
import { EmptyBudget, EmptyClock, EmptyRSVP } from './(components)/DashboardEmpty';
import { checkList, giftList } from './data/dashboard-data';
import { Checklist, Gifts } from './(components)/DashboardData';

const Dashboard = () => {
  const [gifts, setGifts] = useState<any[] | null>(null);
  const [tasks, setTasks] = useState<any[] | null>(null);

  useEffect(() => {
    setTasks(checkList);
    setGifts(giftList);
  }, []);
  return (
    <section className="w-full h-full py-6 lg:px-[52px] md:px-10 px-6 lg:space-y-10 md:spacey-8 space-y-6 lg:border-l border-0">
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
      <div className="flex items-center lg:flex-row flex-col lg:gap-x-8 gap-y-6 w-full">
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
            <EmptyClock />
          </div>
        </div>
      </div>

      {/* RSVP Overview and Financial Overview  */}
      <div className="flex items-center lg:flex-row flex-col lg:gap-x-8 gap-y-6 w-full">
        {/* RSVP Overview  */}
        <div className="border border-[#E1E1E1] rounded-[5px] w-full h-full p-4">
          <p className="text-lg leading-6 font-semibold text-[#282828]">RSVP Overview</p>

          <div className="h-full w-full flex flex-col gap-y-7 mt-5 text-[#282828] text-sm">
            <EmptyRSVP />
          </div>
        </div>

        {/* Financial Overview  */}
        <div className="border border-[#E1E1E1] rounded-[5px] w-full h-[280px] p-4">
          <p className="text-lg leading-6 font-semibold text-[#282828]">Financial Overview</p>
          <div className="text-[#822DA4] text-base leading-6 h-full w-full flex items-center justify-center font-medium">
            <EmptyBudget />
          </div>
        </div>
      </div>

      {/* Checklist and Gifts  */}
      <div className="flex items-center lg:flex-row flex-col lg:gap-x-8 gap-y-6 w-full h-full">
        {/* Checklist */}
        <div className={`border border-[#E1E1E1] rounded-[5px] w-full ${tasks ? 'h-fit' : 'h-[380px]'} p-4 space-y-4`}>
          <div className="flex justify-between items-center">
            <p className="text-lg leading-6 font-semibold text-[#282828]">Checklist</p>
            {tasks && (
              <Link
                href={`/dashboard/checklist`}
                className="text-[#822DA4] text-sm font-normal underline leading-5 underline-offset-2"
              >
                View All
              </Link>
            )}
          </div>

          <p className="flex justify-between w-full text-sm text-[#6F6F6F]">
            <span>Task</span>
            <span>Status</span>
          </p>
          <div
            className={`w-full flex ${
              tasks ? 'flex-col justify-center h-fit pb-3' : 'flex-row items-center justify-center h-full'
            }  gap-y-3`}
          >
            {tasks ? (
              <Checklist tasks={tasks} />
            ) : (
              <p className="text-[#822DA4] text-base leading-6 font-medium">No Task</p>
            )}
          </div>
        </div>

        {/* Gifts  */}
        <div className={`border border-[#E1E1E1] rounded-[5px] w-full ${tasks ? 'h-fit' : 'h-[380px]'} p-5 space-y-4`}>
          <div className="flex justify-between items-center">
            <p className="text-lg leading-6 font-semibold text-[#282828]">Gifts</p>
            {tasks && (
              <Link
                href={`/dashboard/`}
                className="text-[#822DA4] text-sm font-normal underline leading-5 underline-offset-2"
              >
                View All
              </Link>
            )}
          </div>

          <div
            className={`h-full w-full flex ${
              gifts ? 'flex-col justify-center h-fit' : 'flex-row items-center justify-center h-full'
            }  gap-y-3`}
          >
            {gifts ? (
              <Gifts gifts={gifts} />
            ) : (
              <p className="text-[#822DA4] text-base leading-6 font-medium">No Gift</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
