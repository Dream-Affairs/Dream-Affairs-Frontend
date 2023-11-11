import React from 'react';
import Image from 'next/image';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Preview from 'app/dashboard/(assets)/export.svg';
import Add from 'app/dashboard/(assets)/add.svg';
import Copy from 'app/dashboard/(assets)/copy.svg';
import Gift from 'app/dashboard/(assets)/giftTrack.svg';

const Tracker = () => {
  return (
    <div className="pl-9 pt-9 pr-9 flex flex-col gap-5">
      {/* Navbar section  */}
      <div className="flex justify-between">
        <div className="flex gap-10">
          <div className="flex gap-3 items-center">
            <Image src={Preview} alt="preview registry" />
            <p className="font-medium text-base"> Preview Registry</p>
          </div>

          <div className="flex gap-3 items-center">
            <Image src={Copy} alt="preview registry" />
            <p className="font-medium text-base"> Copy Registry URL</p>
          </div>
        </div>

        <div className="flex gap-6 ">
          <Select>
            <SelectTrigger className="w-[185px] h-[55px] text-sm font-normal">
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
      <div className="flex gap-12">
        {/* side 1 starts here  */}
        <div className="flex flex-col gap-8 flex-none">
          <div className="w-[219px] h-[218px] rounded-lg flex flex-col items-center border border-border justify-center">
            <div className="w-[154px] flex flex-col gap-2 text-center">
              <h2 className="font-medium text-[40px]">0</h2>
              <p className="text-base font-normal">Gifts Availaible</p>
            </div>
          </div>
          <div className="w-[219px] h-[218px] rounded-lg flex flex-col items-center gap-2 border border-border justify-center">
            <div className="w-[154px] flex flex-col gap-2 text-center">
              <h2 className="font-medium text-[40px]">0</h2>
              <p className="text-base font-normal">Reserved and Purchased</p>
            </div>
          </div>
        </div>
        {/* Side 2 starts here  */}
        <div className="flex flex-col gap-5 w-auto flex-1">
          <div className="h-[214px] border-2 border-dashed flex  items-center rounded-lg">
            <div className="flex flex-col gap-2 text-center items-center justify-center w-[549px] m-auto gap-7">
              <Image src={Gift} alt="" className="m-auto  stroke-1" />
              <p className="text-base font-medium">
                looks like no one has purchased a gift for you yet, your gifts will appear here as soon as they are
                purchased
              </p>
            </div>
          </div>
        </div>
        {/* Side 2 ends here  */}
      </div>
    </div>
  );
};

export default Tracker;
