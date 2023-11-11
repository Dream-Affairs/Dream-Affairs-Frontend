import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ImagesProp {
  betterHalfImages: StaticImageData[];
}

const Betterhalf = (props: ImagesProp) => {
  return (
    <div className="max-w-[1440px] mx-auto px-8 lg:px-10">
      <h1 className="text-center py-[60px] text-[20px] lg:text-[25px] text-[#48195A] font-semibold">
        Creating a beautiful experience for you and your better half
      </h1>
      <div className='flex justify-center items-center m-auto mb-20'>
        <div className="w-full mt-[56px] grid grid-cols-1 m-auto md:grid-cols-4 gap-y-5 md:gap-x-[32px]">
          {props.betterHalfImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="image-1"
              height={0}
              width={0}
              data-aos="fade-up"
              data-aos-duration="700"
              className="md:even:mt-[117px] rounded-[20px] object-cover w-[100%] h-[234px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Betterhalf;
