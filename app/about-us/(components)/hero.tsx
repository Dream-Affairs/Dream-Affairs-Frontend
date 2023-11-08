import React from 'react';
import roundTable from '.././(assets)/round-table.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full h-[671px] flex flex-col items-center ">
      <Image
        src={roundTable}
        alt="round-table"
        width={1140}
        height={671}
        className="absolute w-full h-[671px] object-cover brightness-[80%] -z-10"
      />
      <div className="text-white  mt-[113px] flex flex-col gap-y-[23px] items-center">
        <h2 className="font-[700] font- text-[64px] leading-[89.6px]">Dream Affairs</h2>
        <h3 className="text-[40px] font-[600] leading-[56px]">Where Memories Never Fade</h3>
      </div>
    </section>
  );
};

export default Hero;
