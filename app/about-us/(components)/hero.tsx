import React from 'react';
import heroBg from '.././(assets)/img.svg';
import herobg from '.././(assets)/hero-bg.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full h-[265px] md:h-[400px] lg:h-[434px] flex flex-col justify-center items-center px-[24px] lg:px-[80px]">
      <Image
        src={heroBg}
        alt="hero bg"
        width={265}
        height={321}
        className="lg:hidden absolute w-full h-[265px] md:h-[400px] lg:h-[434px] object-cover -z-10"
      />
      <Image
        src={herobg}
        alt="hero bg"
        width={1428}
        height={434}
        className="absolute hidden lg:block lg:mt-0 w-full h-[321px] md:h-[400px] lg:h-[434px] object-cover -z-10"
      />
      <div className="text-white lg:text-[#ECF1F8] mt-[55px] lg:mt-[99px] flex flex-col items-center gap-y-[20px] lg:gap-y-0 px-[13px] lg:px-0">
        <h4 className="font-[500] text-[12px] sm:text-[18px] lg:text-[24px] leading-[16.8px] sm:leading-[18.6px] lg:leading-[33.6px]">Welcome to DreamAffairs</h4>
        <h2 className=" lg:mt-0 font-[700] lg:font-[600] text-center text-[24px] sm:text-[32px] lg:text-[64px] lg:leading-[89.6px] leading-[33.6px]">Plan the perfect wedding</h2>
        <p className="px[24px] max-lg:max-w-[327px] lg:px-0 lg:w-[586px] text-[14px] lg:text-[24px] sm:text-[16px] mt-[20p] lg:mt-[16px] text-center font-[500] leading-[19.6px] lg:leading-[33.6px]">
          We transform dreams into reality, crafting unique and unforgettable weddings that celebrate your love story
        </p>
      </div>
    </section>
  );
};

export default Hero;
