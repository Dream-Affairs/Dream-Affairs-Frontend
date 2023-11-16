import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Add from 'app/dashboard/(assets)/add.svg';
import AddGift from 'app/dashboard/(assets)/add_gift.svg';
import ModalContent from './Modals/ModalContent';
import Preview from './Preview';
import Count from './Count';

const Board = () => {
  const [modal, setModal] = useState<boolean>(false); // To close and open the Modal box
  return (
    <div className="pl-6 pt-9 pr-6 flex flex-col gap-5 mb-9">
      {/* Navbar section  */}
      <div className="flex flex-col md:flex-row justify-between text-sm lg:text-base gap-6 ">
        <Preview />

        <div className="flex gap-4 lg:gap-6 items-end justify-between">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
            <p className="font-medium text-base md:hidden lg:block">Filter by</p>
            <Select>
              <SelectTrigger className="w-40 lg:w-[185px] h-[44px] lg:h-[55px] text-sm font-normal">
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
            className="font-medium text-base w-[162px] lg:w-[185px] h-[44px] lg:h-[55px] flex gap-2"
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
      <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
        {/* side 1 starts here  */}
        <Count />
        {/* Side 2 starts here  */}
        <div className="flex flex-col gap-5 w-auto flex-1">
          <p className="text-sm md:text-base font-medium">
            Ouch! Looks like your registry is empty, Let’s help you change that!
          </p>

          <div
            onClick={() => setModal(true)}
            className="h-[175px] border-2 border-dashed flex  items-center rounded-lg cursor-pointer"
          >
            <div className="flex flex-col gap-2 text-center items-center justify-center w-full p-6">
              <Image src={AddGift} alt="" />

              <p className="text-sm md:text-base font-medium">
                Click to start adding your desired gifts to your registry
              </p>
            </div>
          </div>
        </div>
        {/* Side 2 ends here  */}
      </div>
    </div>
  );
};

export default Board;
