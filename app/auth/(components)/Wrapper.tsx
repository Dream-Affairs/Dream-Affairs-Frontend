import Image from 'next/image';
import React from 'react';
import logo from '../(assets)/logo.svg';
import da from '../(assets)/da.svg';

interface AuthWrapperProps {
  bg: string;
  bgTitle?: string;
  bgText?: string;
  sectionTitle: string;
  sectionText: string;
  showBgText: boolean;
  children?: React.ReactNode;
}

const Wrapper = ({ bg, bgTitle, bgText, sectionText, sectionTitle, showBgText, children }: AuthWrapperProps) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-full flex-1 relative">
        <Image width={0} height={0} src={bg} alt="bg" className="w-full h-full object-cover object-center" />
        <div className="absolute bg-[#371345] top-0 left-0 z-10 w-full h-full bg-opacity-0"></div>
        {showBgText && (
          <div className="absolute w-[70%] max-w-[400px] min-h-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-[#FCF7F9] bg-opacity-50 text-[#371345] rounded-lg p-5">
            <h1 className="font-extrabold text-3xl leading-10 tracking-wider mb-10">{bgTitle}</h1>
            <p className="text-lg tracking-wide">{bgText}</p>
          </div>
        )}
      </div>
      <div className="h-full flex-1 flex justify-center items-center">
        <div className="min-h-full max-h-full overflow-y-auto w-full no-scrollbar max-w-[600px] mx-auto p-10 lg:p-20">
          <div className="flex gap-5 mb-14">
            <Image width={0} height={0} src={logo} alt="logo" className="" />
            <Image width={0} height={0} src={da} alt="da" className="" />
          </div>
          <div className="min-h-full min-w-full">
            <div>
              <div className="flex flex-col gap-3 mb-10">
                <h2 className="font-semibold text-4xl">{sectionText}</h2>
                <p className="tracking-wide">{sectionTitle}</p>
              </div>

              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
