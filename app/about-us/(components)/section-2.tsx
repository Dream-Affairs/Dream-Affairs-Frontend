'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import underline from '../(assets)/underline-1.svg';
import historyImg from '../(assets)/history-image.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
interface SubHeadingProps {
  title: string;
  alt?: string;
}
export const SubHeading = ({ title, alt }: SubHeadingProps) => {
  return (
    <div className="w-full flex flex-col gap-y-[2px] items-center">
      <h1 className="font-[600] leading-[33.6px] sm:leading-[50px] lg:leading-[78.4px] text-center text-[24px] sm:text-[32px] lg:text-[56px] text-[#48195A]">
        {title}
      </h1>
      <Image
        src={underline}
        alt=""
        width={0}
        height={0}
        className="w-[127px] sm:w-[160px] h-[13px] sm:h-[14px] lg:w-[295px] lg:h-[30px]"
      />
    </div>
  );
};

const Section2 = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="w-full flex flex-col items-center mt-[32px] sm:mt-[12px] lg:mt-[72px] lg:px-0 p-[24px]">
      <SubHeading title="About" />
      <div className="w-full flex flex-col sm:flex-row mt-[24px] sm:mt-[36px] lg:mt-[52px] sm:gap-x-[36px] gap-x-[87px] items-center">
        <Image
          data-aos="fade-up"
          src={historyImg}
          alt=""
          height={0}
          width={0}
          className="lg:w-[474px] lg:h-[604px] h-[328px] rounded-[8px] object-cover"
        />
        <div className="w-full mt-[24px] lg:mt-[0] lg:max-w-[696px] flex flex-col gap-y-[12px] lg:gap-y-[3px]">
          <h2 className="font-[600] text-[16px] sm:text-[24px] leading-[22.4px] sm:leading-[42.8px] lg:text-[48px] lg:leading-[67.2px] text-[#48195A]">
            Our History
          </h2>
          <p className="text-[12px] leading-[16.8px] lg:text-[24px] sm:text-[14px] font-[400] sm:leading-[18.6px] lg:leading-[33.6px] text-[#111111] sm:pr-[20px] lg:pr-0">
            Established with a passion for making Dream affair a seamless and joyful experience, Dream affair was
            founded in [Year]. Our journey began with a vision to revolutionize the way couples plan and share their
            special day. Over the years, we have grown to become a trusted name in the wedding planning industry,
            helping countless couples create unforgettable moments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
