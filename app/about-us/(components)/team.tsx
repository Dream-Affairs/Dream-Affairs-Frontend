'use client';
import React, { ComponentProps, useEffect } from 'react';
import { SubHeading } from './about';
import founder from '../(assets)/founder.png';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Team = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const teams = [
    {
      image: founder,
      name: 'Chinaza Obiekwe M.',
      role: 'Founder & CEO',
    },
    {
      image: founder,
      name: 'Chinaza Obiekwe M.',
      role: 'Founder & CEO',
    },
    {
      image: founder,
      name: 'Chinaza Obiekwe M.',
      role: 'Founder & CEO',
    },
    {
      image: founder,
      name: 'Chinaza Obiekwe M.',
      role: 'Founder & CEO',
    },
    {
      image: founder,
      name: 'Chinaza Obiekwe M.',
      role: 'Founder & CEO',
    },
    {
      image: founder,
      name: 'Chinaza Obiekwe M.',
      role: 'Founder & CEO',
    },
  ];
  return (
    <section className="w-full px-[24px] mt-[40px] lg:mt-0 lg:px-[81px] lg:hidden flex flex-col items-center pb-[96px]">
      <SubHeading title="Meet the team" />
      <div className="w-full place-items-center grid grid-cols-2 md:grid-cols-3 mt-[24px] lg:mt-[23px] lg:gap-x-[37px] gap-y-[40px] gap-x-[15px]">
        {teams.map((team, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="w-[155px] h-[195px] lg:w-[392px] lg:h-[469px]  rounded-[12px] bg-[#FFF8FA] flex flex-col items-center pt-[6px] "
          >
            <Image
              src={team.image}
              alt=""
              width={379}
              height={304}
              className="h-[127px] w-[147px] lg:w-[379px] lg:h-[304px] rounded-[12px] object-cover"
            />
            <div
              className="flex flex-col items-center
               lg:px-[24px] mt-[15px] lg:mt-[24px] lg:gap-y-[15px]"
            >
              <h3 className="text-[#48195A] text-[14px] leading-[19.6px] lg:text-[32px] font-[500] lg:leading-[44.8px]">
                {team.name}
              </h3>
              <p className="font-[400] mt-[8px] text-[12px] lg:text-[24px] leading-[16.8px] llg:eading-[33.6px] text-[#535353]">
                {team.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
