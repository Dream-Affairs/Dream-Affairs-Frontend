import { PlusCircledIcon } from '@radix-ui/react-icons';
import React from 'react';
import { twMerge } from 'tailwind-merge';
interface CategoryProps {
  title?: string;
  allCategories: never[];
  selectedCategory: string;
  handleSelectCategory: (name: string) => void;
  className?: string;
}
const CategoryMenu = ({
  title = 'Meal Categories',
  allCategories,
  selectedCategory,
  handleSelectCategory,
  className,
}: CategoryProps) => {
  return (
    <>
      <div
        className={twMerge(
          'lg:w-[256px] bg-white lg:px-[32px] border-[1px] border-[#E1E1E1] rounded-[9px] flex flex-col lg:gap-y-[31px] items-center pt-[44px] pb-[16px] min-h-screen',
          className || '',
        )}
      >
        <h3 className="font-[500] text-start lg:text-[24px] text-[#404141] lg:leading-[33.6px]">{title}</h3>
        {allCategories.length > 0 &&
          allCategories.map((category: any, index) => (
            <button
              key={category.id || index}
              className={` flex flex-row items-center gap-x-[12px] lg:self-start text-[#404141]`}
              onClick={() => handleSelectCategory(category.name)}
            >
              {
                selectedCategory === category.name ? (
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 2.5C8.1125 2.5 2.5 8.1125 2.5 15C2.5 21.8875 8.1125 27.5 15 27.5C21.8875 27.5 27.5 21.8875 27.5 15C27.5 8.1125 21.8875 2.5 15 2.5ZM20.975 12.125L13.8875 19.2125C13.7125 19.3875 13.475 19.4875 13.225 19.4875C12.975 19.4875 12.7375 19.3875 12.5625 19.2125L9.025 15.675C8.6625 15.3125 8.6625 14.7125 9.025 14.35C9.3875 13.9875 9.9875 13.9875 10.35 14.35L13.225 17.225L19.65 10.8C20.0125 10.4375 20.6125 10.4375 20.975 10.8C21.3375 11.1625 21.3375 11.75 20.975 12.125Z"
                      fill="#1E1E1E"
                    />
                  </svg>
                ) : (
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 28.4375C7.5875 28.4375 1.5625 22.4125 1.5625 15C1.5625 7.5875 7.5875 1.5625 15 1.5625C22.4125 1.5625 28.4375 7.5875 28.4375 15C28.4375 22.4125 22.4125 28.4375 15 28.4375ZM15 3.4375C8.625 3.4375 3.4375 8.625 3.4375 15C3.4375 21.375 8.625 26.5625 15 26.5625C21.375 26.5625 26.5625 21.375 26.5625 15C26.5625 8.625 21.375 3.4375 15 3.4375Z"
                      fill="#1E1E1E"
                    />
                  </svg>
                )

                // <PlusCircledIcon className="lg:h-[24px] lg:w-[24px] text-[#40414166]" />
              }
              <h4 className=" font-[400] lg:text-[16px] lg:leading-[22.4px]">{category.name}</h4>
            </button>
          ))}
        <button className="flex flex-row items-center gap-x-[12px] lg:self-start">
          <PlusCircledIcon className="lg:h-[24px] lg:w-[24px] text-[#40414166]" />
          <h4 className="text-[#40414166] font-[400] lg:text-[16px] lg:leading-[22.4px]">Add category</h4>
        </button>
      </div>
    </>
  );
};

export default CategoryMenu;
