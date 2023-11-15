'use client';

import { useEffect } from 'react';
import couples from './(assets)/couples.svg';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Herosection = () => {
  console.log(couples.src);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div
      className="max-w-[1440px] mx-auto px-8 lg:px-10 bg-cover bg-center h-screen text-center text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${couples.src})` }}
    >
      <h1 data-aos="zoom-in" className="text-[40px] lg:text-[64px] font-semibold">
        Creating your dream wedding
      </h1>
      <p
        data-aos="zoom-in"
        className="text-[14px] pt-6 pb-12 sm:text-[18px] w-[300px] sm:w-[400px] lg:text-[24px] lg:w-[586px] leading-7"
      >
        Create your perfect all-in-one personalized website and registry; uniting love, elegance, and convenience for
        dream wedding celebration
      </p>
      <div data-aos="zoom-in" data-aos-duration="400" className="flex flex-col sm:flex-row  gap-7">
        <Link href="/">
          <button className="w-[300px] sm:w-[217px] h-[56px] text-[#EAEAEA] border border-[#EAEAEA] rounded-sm hover:bg-secondary/30 hover:duration-700 duration-700">
            See demo
          </button>
        </Link>
        <Link href="/">
          <Button variant="secondary" className="w-[300px] sm:w-[217px] h-[56px] hover:duration-700 duration-700">
            Get started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Herosection;
