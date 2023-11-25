import Image from 'next/image';
import React from 'react';
import logo from '../(assets)/logo.svg';
import da from '../(assets)/da.svg';

interface AuthWrapperProps {
  bg: string;
  bgColor?: string;
  bgTitle?: string;
  bgText?: string;
  sectionTitle: string;
  sectionText: string;
  showBgText: boolean;
  children?: React.ReactNode;
}

const Wrapper = ({
  bg,
  bgColor,
  bgTitle,
  bgText,
  sectionText,
  sectionTitle,
  showBgText,
  children,
}: AuthWrapperProps) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="hidden md:block h-full flex-1 relative transition-all duration-200 ease-in-out">
        <Image priority width={0} height={0} src={bg} alt="bg" className="w-full h-full object-cover object-center" />
        <div className={`absolute top-0 left-0 z-10 w-full h-full ${bgColor}`}></div>
        {showBgText && (
          <div className="absolute w-[70%] max-w-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-[#FCF7F9] bg-opacity-50 text-[#371345] rounded-3xl  p-5 py-10">
            <h1 className="font-extrabold text-3xl leading-10 mb-10">{bgTitle}</h1>
            <p className="text-sm leading-5">{bgText}</p>
          </div>
        )}
      </div>
      <div className="h-full flex-1 flex justify-center items-center">
        <div className="min-h-full max-h-full overflow-y-auto w-full no-scrollbar max-w-[600px] mx-auto p-5 md:p-10 lg:p-20">
          <div className="flex gap-5 mb-14 sm:w-auto w-[60%]">
            <Image priority width={0} height={0} src={logo} alt="logo" className="" />
            <Image priority width={0} height={0} src={da} alt="da" className="" />
          </div>
          <div className="min-h-full min-w-full">
            <div className="flex flex-col gap-3 mb-10">
              <h2 className="font-semibold text-4xl">{sectionTitle}</h2>
              <p className="md:text-base text-sm">{sectionText}</p>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
