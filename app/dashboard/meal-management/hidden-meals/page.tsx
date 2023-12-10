'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CategoryMenu from '../(components)/categoryMenu';
import eye from './(components)/assets/eye.svg';
import tick from './(components)/assets/roundtick.svg';
import bin from './(components)/assets/bin.svg';
import Image from 'next/image';
import HiddenCard from './(components)/hidden-card';
import checkTick from './(components)/assets/checkTick.svg';
import { SearchBar } from '../(components)/search-bar';

const HiddenMeals = () => {
  const [allHiddenMeals, setAllHiddenMeals] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ]);
  const [hiddenCategories, setHiddenCategories] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState<number[]>([]);
  const [hasSelectedAll, setHasSelectedAll] = useState<boolean>(false);
  const handleSelectMeal = (id: number) => {
    const hasSelected = selectedMeals.find((meal) => meal == id);
    if (hasSelected) {
      const removeSelected = selectedMeals.filter((meal) => meal != id);
      setSelectedMeals(removeSelected);
    } else {
      setSelectedMeals((prev: number[]) => [...prev, id]);
    }
  };
  const handleSelectAll = () => {
    if (!hasSelectedAll) {
      const allIds = allHiddenMeals.map((meal) => meal.id);
      setSelectedMeals(allIds);
      setHasSelectedAll(true);
    } else {
      setSelectedMeals([]);
      setHasSelectedAll(false);
    }
  };
  const handleUnhideMeal = () => {};
  const handleDeleteMeals = () => {};
  const options = [
    {
      icon: hasSelectedAll ? checkTick : tick,
      title: 'Select All',
      fn: handleSelectAll,
    },
    {
      icon: eye,
      title: 'Unhide Meal',
      fn: handleUnhideMeal,
    },
    {
      icon: bin,
      title: 'Delete Meal',
      fn: handleDeleteMeals,
    },
  ];

  const router = useRouter();
  const handleSelectCategory = () => {};

  return (
    <div className="w-full bg-white pl-[80px] pr-[47px] pt-[62px]">
      {/* Close button */}
      <button
        onClick={() => {
          router.push('/dashboard/meal-management');
        }}
        className="hidden lg:block absolute top-[32px] right-[32px] h-fit p-0  items-start "
      >
        <svg
          className="hover:opacity-40"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 33C26.25 33 33 26.25 33 18C33 9.75 26.25 3 18 3C9.75 3 3 9.75 3 18C3 26.25 9.75 33 18 33Z"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.7539 22.2449L22.2439 13.7549"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.2439 22.2449L13.7539 13.7549"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <h3 className=" font-[400] text-[32px] leading-[44.8px] text-[#1C1C1C]">
        Hidden Meals ({allHiddenMeals?.length})
      </h3>
      <div className="w-full flex flex-row gap-x-[36px] mt-[52px]">
        {/* Category Menu */}
        <CategoryMenu
          title="Hidden Meal Categories"
          allCategories={hiddenCategories}
          selectedCategory={'selectedCategory'}
          handleSelectCategory={handleSelectCategory}
          className="lg:w-[350px] min-h-[865px] pt-[36px] items-start lg:px-0 lg:pl-[36px]"
        />
        {/* Main Screen */}
        <div className="w-[calc(100%-350px)] flex flex-col gap-y-[32px]">
          <SearchBar className="w-[80%]" />
          {/* Options */}
          <div className="flex gap-x-[32px]">
            {options.map((option, index) => (
              <button key={index} onClick={option.fn} className="flex gap-x-[8px]">
                <Image width={0} height={0} alt={option.title} src={option.icon} />
                <span>{option.title}</span>
              </button>
            ))}
          </div>
          {/* All Hidden Meals   */}
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[46px]">
            {allHiddenMeals.map((meal, index) => (
              <HiddenCard
                key={meal.id}
                meal={meal}
                // index={index}
                handleSelectMeal={() => handleSelectMeal(meal.id)}
                selectedMeals={selectedMeals}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default HiddenMeals;
