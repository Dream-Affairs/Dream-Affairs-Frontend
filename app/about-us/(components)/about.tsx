'use client'
import React from 'react';
import watermark from '../(assets)/rose-watermark.png';
import brideGroom from '../(assets)/bride-groom.png';
import entrance from '../(assets)/entrance.png';
import Image from 'next/image';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <section className="relative w-full px-[24px] lg:h-[919px] flex flex-col lg:flex-row lg:mt-[50px] lg:pl-[81px] lg:pt-[125px] gap-x-[135px]">
      <Image
        src={watermark}
        alt="rose flower"
        width={874}
        height={912}
        className=" lg:block w-full h-[394px] lg:w-[874px] -z-10 lg:h-[912px] absolute top-0 bottom-0 left-0 right-0 m-auto"
      />
      <div className="lg:w-[617px] flex flex-col gap-y-[16px]">
        <div data-aos='fade-right' className="lg:w-[617px] flex flex-col gap-y-[16px] lg:gap-y-[11px]">
        <Image src={brideGroom} alt='bride & groom ' width={327} height={314} className='lg:hidden lg:w-[372px] w-full h-[314px] lg:h-[291px] object-cover rounded-[8px]'/>
          <h3 className="font-[600] text-[16px] lg:text-[48px] leading-[22.4px] lg:leading-[67.2px] text-[#48195A]">Our Mission</h3>
          <p className="font-[400] text-[12px] lg:text-[24px] leading-[16.8px] lg:leading-[33.6px] text-[#111111]">
            At Dream Affair , our mission is to empower couples with innovative tools that simplify wedding planning,
            foster meaningful connections, and turn their dreams into reality. We strive to provide a platform that
            ensures every detail of their special day is executed flawlessly, leaving a lasting impression on them and
            their guests.
          </p>
        </div>
        <div data-aos='fade-left' className="lg:w-[617px] mt-[24px] lg:mt-[88px] flex flex-col gap-y-[16px] lg:gap-y-[11px]">
        <Image src={entrance} alt='ailse entrance ' width={327} height={308} className='w-full lg:hidden h-[308px] rounded-[8px] object-cover'/>
          <h3 className="font-[600] text-[16px] lg:text-[48px] leading-[22.4px] lg:leading-[67.2px] text-[#48195A]">Our Vision</h3>
          <p className="font-[400] text-[12px] lg:text-[24px] leading-[16.8px] lg:leading-[33.6px] text-[#111111]">
            Our vision is to be the go-to wedding planning solution, setting the standard for personalized, efficient,
            and memorable celebrations. We aim to continuously innovate, leveraging technology to enhance the wedding
            planning experience for couples around the world.
          </p>
        </div>
      </div>
      <div data-aos='fade-right' className='hidden lg:block mt-[78px]'>
        <Image src={brideGroom} alt='bride & groom ' width={291} height={372} className=''/>
        <Image src={entrance} alt='ailse entrance ' width={291} height={372} className='ml-[185px] -mt-[113px]'/>
      </div>
    </section>
  );
};

export default AboutUs;
