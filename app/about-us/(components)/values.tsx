'use client';
import { SubHeading } from './about';
import { useEffect } from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import boxTick from '../(assets)/box-tick.svg';
import pathSquare from '../(assets)/path-square.svg';
import designTools from '../(assets)/designtools.svg';
import userOctagon from '../(assets)/user-octagon.svg';
import profile2User from '../(assets)/profile-2user.svg';
import book from '../(assets)/book.svg';

const Values = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const values = [
    {
      icon: pathSquare,
      title: 'Integrity',
      desc: ' We operate with transparency, honesty, and a commitment to ethical practices. You can trust us to navigate the intricate details of your wedding with integrity and professionalism, ensuring your celebration is built on a foundation of trust and reliability.',
    },
    {
      icon: designTools,
      title: 'Creativity',
      desc: ' We believe in pushing the boundaries of conventional wedding planning. Our innovative ideas, artistic flair, and imaginative solutions ensure that every wedding we design is a unique and unforgettable masterpiece, tailored to your distinct love story',
    },
    {
      icon: userOctagon,
      title: 'Client-Centric Approach',
      desc: 'Our team is committed to delivering exceptional service, meticulous planning, and flawless execution. We believe that the pursuit of excellence is the key to creating weddings that exceed expectations and leave a lasting impression',
    },
    {
      icon: profile2User,
      title: 'Team Collaboration',
      desc: 'Our diverse team brings together unique skills, perspectives, and talents to create a harmonious planning process. By working seamlessly together, we ensure that your wedding day is a result of collective expertise, dedication, and creativity.',
    },
    {
      icon: book,
      title: 'Client Education',
      desc: "we guide you through the wedding planning process, offering insights, advice, and options to make informed decisions. We believe that an educated client is a confident client, and we're here to support you at every step of your wedding journey.",
    },
    {
      icon: boxTick,
      title: 'Excellence',
      desc: 'Our team is committed to delivering exceptional service, meticulous planning, and flawless execution. We believe that the pursuit of excellence is the key to creating weddings that exceed expectations and leave a lasting impression',
    },
  ];
  return (
    <section className="w-full px-[24px] lg:px-[80px] mt-[40px] lg:mt-[100px] flex flex-col items-center mb-[40px] lg:mb-[100px]">
      <SubHeading title="Our Values" />
      <div className="w-full mt-[24px] lg:mt-[56px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[20px] sm:gap-[24px] lg:gap-[44px]">
        {values.map((value, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="lg:w-[393px] px-[25px] lg:h-[384px] flex flex-col bg-[#FFF8FA] py-[33px] lg:py-0 lg:px-[35px] lg:pt-[70px] items-center lg:gap-y-0 gap-y-[24px]"
          >
            <Image src={value.icon} width={40} height={40} alt={value.icon} className="" />

            <h4 className="lg:mt-[16px] font-[600] text-[16px] lg:text-[24px] leading-[22.4px] lg:leading-[33.6px] text-center text-[#48195A]">
              {value.title}
            </h4>
            <p className="lg:mt-[15px] font-[400] text-[12px] lg:text-[16px] leading-[16.8px] lg:leading-[22.4px] text-center text-[#111111]">
              {value.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
