import React from 'react';

type Props = {
  bg: {
    src: string;
  };
  title: string;
  text: string;
  children?: React.ReactNode;
};

const Wrapper = ({ bg, title, text, children }: Props) => {
  return (
    <div
      className="relative px-8 lg:px-10 bg-cover bg-center h-[400px] text-center text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50"></div>
      <h1
        data-aos="zoom-in"
        className="text-xl text-[22px] md:text-[54px] lg:text[64px] leading-[50px] font-semibold z-10 mb-5"
      >
        {title}
      </h1>
      <p
        data-aos="zoom-in"
        className="font-[400] tracking-tight w-[300px] sm:w-[400px] lg:text-[24px] lg:w-[586px] z-10 mb-16"
      >
        {text}
      </p>
      {children}
    </div>
  );
};

export default Wrapper;
