'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaPlus } from 'react-icons/fa';
import Image from 'next/image';
import NewMeal from './add-meal/(components)/new-meal';
import search from '../(assets)/Solid.png';
import more from '../(assets)/more.png';
import { useRouter } from 'next/navigation';
import { DotsVerticalIcon, PlusIcon, PlusCircledIcon, CheckCircledIcon } from '@radix-ui/react-icons';
import { SearchIcon } from 'lucide-react';
import PreviewCard from './add-meal/(components)/preview-card';
import axios from 'axios';
import useAuth from '@/app/auth/(helpers)/useAuth';
import CategoryMenu from './(components)/categoryMenu';
import { twMerge } from 'tailwind-merge';
import { SearchBar } from './(components)/search-bar';

// import useAuth from '../'

// type Props = {};

const MealManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [allMeals, setAllMeals] = useState<any>([]);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const router = useRouter();
  const organizationID: string = '669d5c746a1c420992b3ae786712c185';
  const url = process.env.NEXT_PUBLIC_API_URL;
  console.log(url);

  const { userId, org }: any = useAuth();
  // let organizationID = org?.organization_id
  console.log(organizationID);

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };
  // console.log(org)
  const addCategory = () => {
    setShowCategory(!showCategory);
  };

  const seeMenu = () => {
    setShowMenu(!showMenu);
  };
  const getAllCategories = () => {
    axios
      .get(`${url}/${organizationID}/meal-management/meal-category`)
      .then((response) => {
        console.log(response.data.data);
        setAllCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    organizationID && getAllCategories();
  }, []);
  const handleSelectCategory = (name: string) => {
    console.log(name);
    setSelectedCategory(name);
    const meal: {} | any = allCategories.find((categ: any) => categ.name === name);
    console.log(meal?.meals);
    if (meal.hasOwnProperty('meal')) {
      setAllMeals(meal?.meals);
    }
  };

  return (
    <section className="lg:w-[calc(100%-80px)]  lg:mt-[36px] lg:min-h-[calc(100vh-36px-26px)] lg:border-l flex flex-col flex-1">
      <h1 className="hidden lg:flex font-[600] lg:text-[32px] lg:leading-[44.8px] text-[#1C1C1C]">Meal Management</h1>
      <div className="hidden lg:block lg:max-w-full lg:ml-[36px]">
        <div className="flex justify-between items-center gap28 mt-10 mb-4 mx8">
          <h2 className="font-[500] lg:text-[16px] lg:leading-[22.4px] text-[#282828]">
            All Meals: {allCategories.length}
          </h2>
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
          {/* Category Menu */}
          <CategoryMenu
            // title=''
            allCategories={allCategories}
            selectedCategory={selectedCategory}
            handleSelectCategory={handleSelectCategory}
          />
          {/* Main screen */}
          <div className="flex flex-col gap-y-[20px]  flex-1">
            {/* Search bar */}
            <SearchBar className="" />
            {/* Previews */}
            {allMeals.length > 0 ? (
              <div className="grid grid-cols-2 -mt-[26px] lg:gap-x-[13px] lg:gap-y-[16px]">
                {allMeals?.map((meal: any) => (
                  <div className="" key={meal.id}>
                    <PreviewCard
                      mealDescription={meal?.description}
                      mealName={meal.name}
                      showRSVP={true}
                      rsvpQnty={0}
                      imgUrl={`${
                        meal?.image_url.includes('blob') || meal?.image_url.includes('string') ? '/' : meal?.image_url
                      }`}
                      // imgUrl={'blob:http://localhost:3000/0fb40867-c0ed-43ff-95b9-77edac93921a'}
                    />
                  </div>
                ))}
              </div>
            ) : (
              // Add New Meals
              <div className="h-[175px] flex flex-col gap2 items-center justify-center border-[1px] border-[#A0A0A0] border-dashed rounded-[8px] lg:gap-y-[28px] px12 py8">
                <button
                  className="flex items-center justify-center bg-[#EBEBEB] text-[#292D32] lg:h-[64px] rounded-full lg:w-[64px]"
                  onClick={() => router.push('/dashboard/meal-management/add-meal')}
                >
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
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 36V12"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <p className="lg:text-[16px] font-[500] lg:leading-[22.4px] text-center text-[#282828]">
                  Customize your menu with meal selection for guests.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE SCREENS */}
      <div className="flex flex-col lg:hidden">
        <div className="relative  py-[12x] mx-8">
          <SearchIcon className="absolute top-0 bottom-0 mx-[8px] my-auto left-0 z-10 w-[20px] h-[20px] text-[#8E8E8E]" />
          <Input
            placeholder="Search"
            className=" px-[32px] font-[400] lg:h-[36px] lg:text-[14px] lg:leading-[20.3px] placeholder:text-[#B3B3B3]"
          />
        </div>
        <div className="mx-8 my-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2 className="font-[500] text-lg">Meal Categories</h2>
            <button onClick={addCategory} className="relative">
              <svg width="35" height="35" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div>
                {showCategory && (
                  <p className="border border-[#E1E1E1] px-1 py-2 rounded-lg absolute w-40 right-0 text-[#282828]">
                    Add category
                  </p>
                )}
              </div>
            </button>
          </div>
          <button onClick={seeMenu} className="relative">
            <svg width="40" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              {showMenu && (
                <div className="border border-[#E1E1E1] bg-white flex flex-col items-start justify-start p-2 rounded-lg absolute w-40 right-0 text-[#BCBCBC]">
                  <p>Hidden meals</p>
                  <p>Download as CSV</p>
                </div>
              )}
            </div>
          </button>
        </div>
        <div className="my-16 flex flex-col gap2 items-center justify-center border-[1px] border-[#A0A0A0] border-dashed rounded-[8px]  px-12 py-[34px]">
          <button
            className="flex items-center justify-center bg-[#EBEBEB] text-[#292D32]  rounded-full"
            onClick={() => router.push('/dashboard/meal-management/add-meal')}
          >
            <svg className="" width="62" height="62" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 24H36" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M24 36V12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p className="text-[18px] p-6 font-[500] leading-[22.4px] text-center text-[#282828]">
            Customize your menu with meal selection for guests.
          </p>
        </div>

        <div className="flex justify-end m-4">
          <button
            className="flex items-center justify-center bg-[#E0B0FF] text-[#292D32] font-bold  rounded-full "
            onClick={() => router.push('/dashboard/meal-management/add-meal')}
          >
            <svg className="" width="50" height="50" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 24H36" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M24 36V12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MealManagement;
