import Image from 'next/image';
// import tick from './assets/roundtick.svg';
import chicken from './assets/chicken.jpg';

interface hiddenProps {
  meal: any;
  //   index: number;
  handleSelectMeal: () => void;
  selectedMeals: number[];
}

const HiddenCard = ({ meal, handleSelectMeal, selectedMeals }: hiddenProps) => {
  const selected = selectedMeals.find((meals) => meals == meal.id);
  //   console.log(selectedMeals, selected);
  return (
    <div
      className="w-[267px] h-[458px] bg-white p-[16px] border-[1px] rounded-[8px] border-[#CDCDCD]"
      onClick={handleSelectMeal}
    >
      <div className="flex flex-col gap-y-[16px] rounded-[8px] justify-between">
        <div className="relative">
          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(51, 51, 51, 0.2)' }}
          ></div>
          <Image width={0} height={0} src={chicken} alt={'meal'} className=" w-[235px] h-[242px]" />
          {meal.id == selected ? (
            <svg
              className="absolute top-[4px] right-[4px]"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0013 2.66699C8.65464 2.66699 2.66797 8.65366 2.66797 16.0003C2.66797 23.347 8.65464 29.3337 16.0013 29.3337C23.348 29.3337 29.3346 23.347 29.3346 16.0003C29.3346 8.65366 23.348 2.66699 16.0013 2.66699ZM22.3746 12.9337L14.8146 20.4937C14.628 20.6803 14.3746 20.787 14.108 20.787C13.8413 20.787 13.588 20.6803 13.4013 20.4937L9.62797 16.7203C9.2413 16.3337 9.2413 15.6937 9.62797 15.307C10.0146 14.9203 10.6546 14.9203 11.0413 15.307L14.108 18.3737L20.9613 11.5203C21.348 11.1337 21.988 11.1337 22.3746 11.5203C22.7613 11.907 22.7613 12.5337 22.3746 12.9337Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              className="absolute top-[4px] right-[4px]"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0013 30.3337C8.09464 30.3337 1.66797 23.907 1.66797 16.0003C1.66797 8.09366 8.09464 1.66699 16.0013 1.66699C23.908 1.66699 30.3346 8.09366 30.3346 16.0003C30.3346 23.907 23.908 30.3337 16.0013 30.3337ZM16.0013 3.66699C9.2013 3.66699 3.66797 9.20033 3.66797 16.0003C3.66797 22.8003 9.2013 28.3337 16.0013 28.3337C22.8013 28.3337 28.3346 22.8003 28.3346 16.0003C28.3346 9.20033 22.8013 3.66699 16.0013 3.66699Z"
                fill="white"
              />
            </svg>
          )}
        </div>
        <div className="flex flex-col gap-y-[12px]">
          <h3 className="font-[700] text-[24px] leading-[33.6px] text-[#282828]">Taco Bowl.</h3>
          <p className="text-[16px] font-[400] leading-[22.4px] text-[#6F6F6F]">
            Beef, Homemade taco seasoning, Salsa, Cilantro lime rice, Grape tomatoes, Black beans, Corn, Avocad
          </p>
          <p className="font-[400] text-[16px] leading-[22.4px] text-[#282828]">Quantity RSVP&apos; ed: 0</p>
        </div>
      </div>
    </div>
  );
};
export default HiddenCard;
