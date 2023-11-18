import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';

interface ImagesProp {
  betterHalfImages: StaticImageData[];
}

const Betterhalf = (props: ImagesProp) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="700" className="max-w-[1440px] mx-auto px-8 lg:px-10">
      <h1 className="text-center pt-[36px] pb-[26px] text-[18px] sm:text-[40px] text-[#48195A] font-semibold">
        Creating a beautiful experience for you and your better half
      </h1>
      <div className="flex justify-center items-center m-auto mb-16">
        <div className="w-full grid grid-cols-2 m-auto md:grid-cols-4 gap-5 md:gap-x-[32px]">
          {props.betterHalfImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="image-1"
              height={0}
              width={0}
              data-aos="fade-up"
              data-aos-duration="700"
              className="md:even:mt-[117px] rounded-[8px] object-cover w-[100%] h-[200px]"
            />
          ))}
        </div>
      </div>
      <Button variant="secondary" className="flex items-center m-auto w-[200px] h-[48px]">
        Start Planning
      </Button>
    </div>
  );
};

export default Betterhalf;
