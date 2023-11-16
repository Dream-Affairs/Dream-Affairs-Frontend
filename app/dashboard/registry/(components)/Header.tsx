'use client';
import Image from 'next/image';
import Banner from 'app/dashboard/(assets)/banner.png';
import Board from './Board';
import React from 'react';

const Header = () => {
  return (
    <div>
      {/* header starts here  */}
      <div className="relative bg-foreground h-[126px] lg:h-[216px] pt-5 px-8  lg:pl-12 lg:pt-11 gap-3 lg:gap-7 lg:mb-12 overflow-hidden">
        <div className="absolute -top-[50%] inset-0 overflow-hidden">
          <Image
            src={Banner}
            alt=""
            style={{ objectFit: 'contain' }}
            width={0}
            height={0}
            className="z-4 opacity-50 "
          />
        </div>
        <div className="relative text-background  z-15 justify-center">
          <div className="flex flex-col gap-3 lg:gap-6 ">
            <div className="flex flex-col gap-2 lg:gap-4">
              <div className="flex gap-3">
                <h2 className="font-medium text-base lg:text-3xl w-[437px]">Donald and Kate’s Wedding</h2>
              </div>
              <div>
                <p className="text-sm lg:text-base font-medium ">28th December, 2023</p>
              </div>
            </div>
            <div className="w-[338px] lg:w-[787px]">
              <p className="font-normal text-[10px]  lg:text-sm">
                Your presence is our cherished gift. If you&apos;d like to add something extra, explore our wishlist
                with love and thanks
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Header ends here  */}
    </div>
  );
};

export default Header;
