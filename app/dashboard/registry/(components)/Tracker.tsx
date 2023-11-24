import React from 'react';
import Image from 'next/image';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Export from 'app/dashboard/(assets)/export.svg';
import Gift from 'app/dashboard/(assets)/giftTrack.svg';
import Preview from './Preview';
import Count from './Count';
import TrackerCard from './TrackerCard';

const Tracker = () => {
  return (
    <div className=" px-5 md:px-9 pt-9 flex flex-col gap-5">
      {/* Navbar section  */}
      <div className="flex flex-col md:flex-row justify-between text-sm lg:text-base gap-6 ">
        <Preview />

        <div
          className="flex flex-col md:flex-row justify-between text-sm lg:text-base gap-6 
        "
        >
          <Select>
            <SelectTrigger className="w-full md:w-[185px] h-[44px] lg:h-[55px]  text-sm font-normal">
              <SelectValue placeholder="All Purchases" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-sm font-normal">
                <SelectItem value="apple">All Purchases</SelectItem>
                <SelectItem value="banana">Last 7 days</SelectItem>
                <SelectItem value="blueberry">Past month</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Navbar section ends here  */}
      <div className="h-[1px] bg-border"></div>

      {/* Registry main board starts here  */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
        {/* side 1 starts here  */}
        <Count />
        {/* Side 2 starts here  */}
        <div className="flex flex-col gap-5 w-auto flex-1">
          <div className="h-[214px] border-2 border-dashed flex  items-center rounded-lg p-6">
            <div className="flex flex-col gap-2 text-center items-center justify-center w-[549px] m-auto">
              <Image src={Gift} alt="" className="m-auto  stroke-1" />
              <p className="text-sm md:text-base font-medium ">
                looks like no one has purchased a gift for you yet, your gifts will appear here as soon as they are
                purchased
              </p>
            </div>
          </div>

          <TrackerCard />
        </div>
        {/* Side 2 ends here  */}
      </div>
    </div>
  );
};

export default Tracker;
