import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import ring from '.././(assets)/ring-bg.png';

const Contact = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center mt-[100px] h-[661px] text-white px-[157px]">
      <div
        className="absolute top-0 w-full brightness-[50%] z-0 "
        style={{
          backgroundImage: 'linear-gradient(rgba(224,176,255, 0.9), rgba(224,176,255, 0.9))',
        }}
      >
        <Image src={ring} width={1024} height={661} alt="ring-bg" className="w-full object-cover opacity-50 " />
      </div>
      <div className="w-fit flex flex-col items-center justify-center gap-y-[79px] text-white z-30">
        <div className="flex flex-col gap-y-[23px]">
          <h2 className="font-[700] text-[64px] leading-[89.6px]">Start Planning Your Dream Wedding</h2>
          <p className="font-[500] text-[40px] leading-[56px] text-center px-[39px]">
            Sign up now and unlock a world of powerful tools to create the perfect wedding experience
          </p>
        </div>
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Contact;
