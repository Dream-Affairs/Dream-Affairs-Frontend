'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaPlus } from 'react-icons/fa';
import Image from 'next/image';
import NewMeal from './add-meal/(components)/new-meal';
import search from '../(assets)/Solid.png';
import more from '../(assets)/more.png';
import { useRouter } from 'next/navigation';
import { DotsVerticalIcon, PlusIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { SearchIcon } from 'lucide-react';

// type Props = {};

const MealManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  return (
    <section className="lg:w-[calc(100%-80px)]  lg:mt-[36px] lg:min-h-[calc(100vh-36px-26px)] lg:border-l flex flex-col flex-1">
      <h1 className="font-[600] lg:text-[32px] lg:leading-[44.8px] text-[#1C1C1C]">Meal Management</h1>
      <div className="lg:max-w-full lg:ml-[36px]">
        <div className="flex justify-between items-center gap28 mt-10 mb-4 mx8">
          <h2 className="font-[500] lg:text-[16px] lg:leading-[22.4px] text-[#282828]">All Meals: 0</h2>
          <div className="flex gap-x-[20px] items-center text-[#282828]">
            <Button
              variant="secondary"
              onClick={() => router.push('/dashboard/meal-management/add-meal')}
              className="flex items-center lg:px-[48px] lg:py-[16px] rounded-[8px] lg:gap-x-[8px] "
            >
              <PlusIcon className="lg:w-[24px] lg:h-[24px]" />
              <span className="lg:text-[16px] font-[500] lg:leading-[22.4px] ">Add meal</span>
            </Button>
            <div>
              <DotsVerticalIcon className="lg:w-[24px] lg:h-[24px] " />
              {/* <Image src={more} width={20} height={20} alt={'see-more'} /> */}
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row lg:gap-x-[16px]">
          <div className="lg:w-[256px] lg:px-[32px] border-[1px] border-[#E1E1E1] rounded-[9px] flex flex-col lg:gap-y-[31px] items-center pt-[44px] h-screen">
            <h3 className="font-[500] text-start lg:text-[24px] text-[#404141] lg:leading-[33.6px]">Meal Categories</h3>
            <button className="flex flex-row items-center gap-x-[12px] lg:self-start">
              <PlusCircledIcon className="lg:h-[24px] lg:w-[24px] text-[#40414166]" />
              <h4 className="text-[#40414166] font-[400] lg:text-[16px] lg:leading-[22.4px]">Add category</h4>
            </button>
          </div>
          <div className="flex flex-col gap-y-[20px]  flex-1">
            <div className="relative lg:h-[36px]  py[12x]">
              <SearchIcon className="absolute top-0 bottom-0 mx-[8px] my-auto left-0 z-10 w-[20px] h-[20px] text-[#8E8E8E]" />
              <Input
                placeholder="Search"
                className=" px-[32px] font-[400] lg:h-[36px] lg:text-[14px] lg:leading-[20.3px] placeholder:text-[#B3B3B3]"
              />
            </div>
            <div className="h-[175px] flex flex-col gap2 items-center justify-center border-[1px] border-[#A0A0A0] border-dashed rounded-[8px] lg:gap-y-[28px] px12 py8">
              <button className="flex items-center justify-center bg-[#EBEBEB] text-[#292D32] lg:h-[64px] rounded-full lg:w-[64px]" onClick={()=>router.push('/dashboard/meal-management/add-meal')}>
                <svg
                  className=""
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 24H36"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 36V12"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <p className="lg:text-[16px] font-[500] lg:leading-[22.4px] text-center text-[#282828]">
                Customize your menu with meal selection for guests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealManagement;
