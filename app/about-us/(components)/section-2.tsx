'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import underline from '../(assets)/underline-1.svg';
import historyImg from '../(assets)/history-image.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
interface SubHeadingProps{
    title: string;
    alt?: string;
}
export const SubHeading=({title, alt}: SubHeadingProps)=>{
  return(
  <div className="w-full flex flex-col gap-y-[2px] items-center">
        <h1 className="font-[600] leading-[33.6px] lg:leading-[78.4px] text-center text-[24px] lg:text-[56px] text-[#48195A]">{title}</h1>
        <Image src={underline} alt="" width={0} height={0} className="w-[127px] h-[13px] lg:w-[295px] lg:h-[30px]" />
      </div>
)}

const Section2 = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <section className="w-full flex flex-col items-center mt-[32px] lg:mt-[72px] lg:px-0 p-[24px]">
      <SubHeading title='About'/>
      <div  className='w-full flex flex-col lg:flex-row mt-[24px] lg:mt-[52px] gap-x-[87px] items-center'>
        <Image data-aos='fade-left' src={historyImg} alt='' height={0} width={0} className='lg:w-[474px] lg:h-[604px] h-[328px] rounded-[8px] object-cover'/>
        <div className='w-full mt-[24px] lg:mt-[0] lg:max-w-[696px] flex flex-col gap-y-[12px] lg:gap-y-[3px]'>
          <h2 className='font-[600] text-[16px] leading-[22.4px] lg:text-[48px] lg:leading-[67.2px] text-[#48195A]'>Our History</h2>
          <p className='text-[12px] leading-[16.8px] lg:text-[24px] font-[400] lg:leading-[33.6px] text-[#111111]'>Established with a passion for making Dream affair a seamless and joyful experience, Dream affair was founded in [Year]. Our journey began with a vision to revolutionize the way couples plan and share their special day. Over the years, we have grown to become a trusted name in the wedding planning industry, helping countless couples create unforgettable moments.</p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
