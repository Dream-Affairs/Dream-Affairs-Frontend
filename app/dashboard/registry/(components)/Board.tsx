import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import Preview from 'app/dashboard/(assets)/export.svg';
import Add from 'app/dashboard/(assets)/add.svg';
import Copy from 'app/dashboard/(assets)/copy.svg';
import AddGift from 'app/dashboard/(assets)/add_gift.svg';
import ModalContent from './Modals/ModalContent';

const Board = () => {
  const [modal, setModal] = useState<boolean>(false); // To close and open the Modal box
  return (
    <div className="pl-9 pt-9 pr-9 flex flex-col gap-5 mb-9">
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
          <div className="flex gap-3 items-center">
            <p className="font-medium text-base">Filter by</p>
            <Select>
              <SelectTrigger className="w-[185px] h-[55px] text-sm font-normal">
                <SelectValue placeholder="All Gifts" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="text-sm font-normal">
                  <SelectItem value="apple">All Gifts</SelectItem>
                  <SelectItem value="banana">Availaible Gifts</SelectItem>
                  <SelectItem value="blueberry">Purchased Gifts</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={() => setModal(true)}
            variant="secondary"
            className="font-medium text-base w-[185px] flex gap-2"
          >
            <span>
              <Image src={Add} alt="" />
            </span>
            <span>Add Gift</span>
          </Button>

          <ModalContent modal={modal} setModal={setModal} />
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
          <p className="text-base font-medium">Ouch! Looks like your registry is empty, Let’s help you change that!</p>

          <div
            onClick={() => setModal(true)}
            className="h-[175px] border-2 border-dashed flex  items-center rounded-lg cursor-pointer"
          >
            <div className="flex flex-col gap-2 text-center items-center justify-center w-full">
              <Image src={AddGift} alt="" />

              <p className="text-base font-medium">Click to start adding your desired gifts to your registry</p>
            </div>
          </div>
        </div>
        {/* Side 2 ends here  */}
      </div>
    </div>
  );
};

export default Board;
