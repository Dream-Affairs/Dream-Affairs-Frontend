import Aos from 'aos';
import React, { useEffect } from 'react';

const Head = ({ img }: any) => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div
      className="bg-cover bg-center h-[430px] text-center text-white flex flex-col justify-center items-center gap-4"
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <p data-aos="zoom-in" className="font-[400] tracking-tight text-2xl max-w-[500px] z-10 mb-6">
        Welcome to DreamAffairs
      </p>
      <h1 data-aos="zoom-in" className="text-6xl leading-[50px] font-semibold z-10 ">
        Our Blog
      </h1>
      <p data-aos="zoom-in" data-aos-duration="400" className="font-[400] tracking-tight text-2xl z-10 max-w-[500px]">
        Capturing Moments: Insights, Ideas, and Inspiration on Dream Affairs Blog
      </p>
    </div>
  );
};

export default Head;
