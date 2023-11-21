import React from 'react';
import contactBg from '../(assets)/contactbg.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Contact = () => {
  return (
    <div
      className="bg-[#090909] bg-opacity-[60%] bg-blend-overlay bg-cover bg-center h-auto flex items-center justify-center mb-[40px] lg:mb-[83px]"
      style={{ backgroundImage: `url(${contactBg.src})` }}
    >
      <div className="text-center text-white lg:w-[1048px] w-[316px] lg:my-[97px] mt-[40.5px] mb-[39.5px]">
        <h2 className="lg:text-[56px] text-[32px] lg:font-[700] font-[500] sm:mb-4">
          Start Planning Your Dream Wedding
        </h2>
        <p className="lg:text-[32px] text-[16px] font-[500] lg:mt-[23px] mt-[28px]">
          Sign up now and unlock a world of powerful tools to create the perfect wedding experience
        </p>
        <Link href="/auth/register">
          <Button
            size="lg"
            variant="secondary"
            className="lg:mt-[79px] mt-[80px] w-[244px] h-[58px] text-[24px] font-[400] text-[#282828]"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
