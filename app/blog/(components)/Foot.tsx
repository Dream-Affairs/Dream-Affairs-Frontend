import { Button } from '@/components/ui/button';
import React from 'react';

const Foot = ({ img }: any) => {
  return (
    <div
      className="relative px-8 lg:px-10 bg-cover bg-center h-[400px] text-center text-white flex flex-col justify-center items-center mb-24"
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50"></div>
      <h1
        data-aos="zoom-in"
        className="text-xl text-[22px] md:text-[54px] lg:text[64px] leading-[50px] font-semibold z-10 mb-5"
      >
        Start Planning Your Dream Wedding
      </h1>
      <p
        data-aos="zoom-in"
        className="font-[400] tracking-tight w-[300px] sm:w-[400px] lg:text-[24px] lg:w-[586px] z-10 mb-16"
      >
        Sign up now and unlock a world of powerful tools to create the perfect wedding experience
      </p>
      <Button variant="secondary" className="z-10 h-auto px-10 py-3 scale-125 md:scale-150">
        Get Started
      </Button>
    </div>
  );
};

export default Foot;
