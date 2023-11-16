import React from 'react';
import bg from '../pricing/(assets)/contactbg.svg';
import { Button } from '@/components/ui/button';

const Final = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="bg-[#090909] bg-opacity-[60%] bg-blend-overlay bg-cover bg-center lg:h-[522px] h-[402px] flex items-center justify-center mb-[40px] lg:mb-[83px]"
    >
      <div className="text-center text-white w-[1126px] mx-w-[1440px] mx-auto px-8 lg:px-[10]">
        <h2 className="lg:text-[56px] text-[32px] lg:font-[700] font-[500]">
          Start Planning Your Dream Wedding
        </h2>
        <p className="lg:text-[30px] md:text-[20px] text-[16px] font-[500] py-6">
          Sign up now and unlock a world of powerful tools to create the perfect wedding experience
        </p>
        <Button variant="secondary" className="flex items-center m-auto w-[200px] h-[48px]">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Final;
