'use client';
import React, { useEffect } from 'react';
import underline from '../(assets)/underline-1.svg';
import historyImg from '../(assets)/history-image.png';
import watermark from '../(assets)/rose-watermark.png';
import brideGroom from '../(assets)/bride-groom.png';
import entrance from '../(assets)/entrance.png';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
interface SubHeadingProps {
  title: string;
  alt?: string;
}
export const SubHeading = ({ title, alt }: SubHeadingProps) => {
  return (
    <div className="w-full bg-white flex flex-col gap-y-[2px] items-center">
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

const AboutUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const ourApproach = [
    'Personalization',
    'Attention to Detail',
    'Collaboration',
    'unforgettable Memories',
    'Flexibility and Innovation',
  ];
  return (
    <>
      <section className="w-full flex flex-col items-center mt-[28px] sm:mt-[12px] lg:mt-[56px] lg:px-0 lg:pt-0 px-[24px]">
        <SubHeading title="About" />
        <div className="w-full bg-[#FFF8FA] lg:bg-none lg:pr-0 px-[24px] pt-[24px] xl:pt-0  lg:px-[80px] xl:h-[724px] flex flex-col sm:flex-row mt-[24px] sm:mt-[36px] lg:mt-[40px] sm:gap-x-[36px] lg:gap-x-[44px] gap-x-[87px] gap-y-[24px] lg:gap-y-0 items-center border-2 border-red-600">
          <Image
            data-aos="fade-up"
            src={historyImg}
            alt=""
            height={0}
            width={0}
            className="xl:w-[510px] lg:w-[400px] sm:h-[450px] md:h-[500px] sm:w-[280px] md:w-[300px] lg:h-[724px] h-[328px] rounded-[8px] lg:rounded-none object-cover"
          />
          <div className="flex flex-col lg:flex-col gap-y-[24px] lg:gap-y-[58px]">
            <div className="w-full lg:border-2 border-red-400 lg:mt-0 lg:max-w-[696px] flex flex-col gap-y-[12px] lg:gap-y-[3px]">
              <h2 className="font-[600] text-[16px] sm:text-[22px] md:text-[24px] leading-[22.4px] sm:leading-[42.8px] lg:text-[40px] lg:leading-[56px] text-[#48195A]">
                Our Product Summary
              </h2>
              <p className="text-[12px] leading-[16.8px] lg:text-[24px] md:text-[14px] font-[400] sm:leading-[18.6px] lg:leading-[33.6px] text-[#111111] lg:text-justify sm:pr-[20px] lg:pr-0">
                Introducing DreamAffiars, where we aim to transform your wedding dreams into reality. Our intuitive
                platform offers customisable templates, effortless guest management, and integrated gift registry.
                Coordinate events, manage meals, and budget wisely, all in one place. Our goal is to provide a
                stress-free, intuitive experience, ensuring your journey to &apos;I do&apos; is as joyful and memorable
                as the celebration itself. Join us in creating the perfect beginning to your forever
              </p>
            </div>
            <div className="flex flex-col gap-y-[12px] lg:gap-y-[3px]">
              <h1 className="font-[600] text-[16px] leading-[22.4px]  lg:text-[40px] lg:leading-[56px] text-[#48195A]">
                Our Approach
              </h1>
              <ul className="flex flex-col sm:gap-y-[12px] gap-y-[16px] lg:gap-y-[24px]">
                {ourApproach.map((approach, index) => (
                  <li key={index} className="flex flex-row items-center gap-x-[4px]">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 12.44V19.56C8 23.9867 11.1333 25.7867 14.96 23.5867L16.6667 22.6C17.08 22.36 17.3333 21.92 17.3333 21.44V10.56C17.3333 10.08 17.08 9.64 16.6667 9.4L14.96 8.41334C11.1333 6.21334 8 8.01334 8 12.44Z"
                        fill="#AB72C2"
                      />
                      <path
                        d="M18.6665 11.72V20.2933C18.6665 20.8133 19.2265 21.1333 19.6665 20.8667L21.1332 20.0133C24.9598 17.8133 24.9598 14.1867 21.1332 11.9867L19.6665 11.1333C19.2265 10.88 18.6665 11.2 18.6665 11.72Z"
                        fill="#AB72C2"
                      />
                    </svg>
                    <span className="text-[12px] lg:text-[24px] font-[400] leading-[15.8px] lg:leading-[33.6px] text-[#111111]">
                      {approach}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full px-[24px] lg:px-[80px] lg:h-[868px] lg:bg-[#FFF8FA] flex flex-col sm:flex-row sm:justify-between pt-[40px lg:mt-[50px] sm:pt-[32px] lg:pt-0 sm:gap-x-[117px] overflow-hidden">
        <Image
          src={watermark}
          alt="rose flower"
          width={874}
          height={912}
          className="z-10 hidden sm:block w-full h-[394px] sm:h-full sm:w-full lg:w-[874px] lg:h-[912px] absolute top-0 bottom-0 left-0 right-0 m-auto"
        />
        <div className="w-full pt-[40px] bg-[#FFF8FA] px-[24px] lg:px-0 lg:w-[644px] lg:mt-[125px] sm:w-full flex flex-col gap-y-[40px] lg:gap-y-[73px]">
          <div data-aos="fade-up" className="w-full lg:w-[617px] flex flex-col lg:gap-y-[11px]">
            <Image
              src={brideGroom}
              alt="bride & groom "
              width={327}
              height={314}
              className="sm:hidden lg:w-[372px] w-full h-[314px] lg:h-[291px] object-cover rounded-[8px]"
            />
            <h3 className="font-[600] mt-[24px] lg:mt-0 text-[16px] sm:text-[18px] lg:text-[40px] leading-[22.4px] sm:leading-[24.6px] lg:leading-[56px] text-[#48195A]">
              Our Mission
            </h3>
            <p className="font-[400] mt-[12px] lg:mt-0 text-[12px] sm:text-[14px] lg:text-[24px] leading-[16.8px] lg:leading-[33.6px] text-[#111111]">
              At Dream Affair , our mission is to empower couples with innovative tools that simplify wedding planning,
              foster meaningful connections, and turn their dreams into reality. We strive to provide a platform that
              ensures every detail of their special day is executed flawlessly, leaving a lasting impression on them and
              their guests.
            </p>
          </div>
          <div data-aos="fade-up" className="lg:w-[617px] lg:mt-[88px] flex flex-col lg:gap-y-[11px]">
            <Image
              src={entrance}
              alt="ailse entrance "
              width={327}
              height={308}
              className="w-full sm:hidden h-[308px] rounded-[8px] object-cover"
            />
            <h3 className="font-[600] mt-[24px] lg:mt-0 text-[16px] sm:text-[18px] lg:text-[40px] leading-[22.4px] sm:leading-[24.6px] lg:leading-[56px] text-[#48195A]">
              Our Vision
            </h3>
            <p className="font-[400] mt-[12px] lg:mt-0 text-[12px] sm:text-[14px] lg:text-[24px] leading-[16.8px]  lg:leading-[33.6px] text-[#111111] max-sm  :pb-[24px]">
              Our vision is to be the go-to wedding planning solution, setting the standard for personalized, efficient,
              and memorable celebrations. We aim to continuously innovate, leveraging technology to enhance the wedding
              planning experience for couples around the world.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="sm:w-[500px] lg:w-[519px] sm:h-[500px] lg:h-[657px] hidden sm:block lg:mt-[92px] sm:fle  lg:flex flex-col justify-between"
        >
          <Image
            src={brideGroom}
            alt="bride & groom "
            width={291}
            height={372}
            className=" sm:-ml-[40px] lg:-ml-0  lg:pr-0 sm:w-[362px] sm:h-[254px] lg:w-[291px] lg:h-[372px] object-cover"
          />
          <Image
            src={entrance}
            alt="ailse entrance "
            width={291}
            height={372}
            className="sm:w-[362px] sm:h-[254px] lg:w-[291px] sm:pl[40px] lg:place-self-end lg:h-[372px] sm:-mt-[50px] lg:-mt-[90px] object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
