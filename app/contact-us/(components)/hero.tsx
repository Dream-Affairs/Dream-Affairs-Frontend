import React from 'react';
import bgLogo from '../(assets)/img.svg';

const Hero = () => {
  return (
    <section>
      <div
        className="bg-cover bg-center lg:h-[434px] h-[70vh] flex items-center justify-center lg:mb-[100px] mb-[40px] p-4"
        style={{ backgroundImage: `url(${bgLogo.src})` }}
      >
        <div className="text-center text-white">
          <h1 className="lg:text-[64px] text-[28px] font-[600]">Get in touch with us</h1>
          <p className="lg:text-[24px] text-[18px] font-[500] lg:w-[791px]">
            We&lsquo;re here to assist you! Whether you have questions, feedback, or just want to say hello, we&lsquo;d
            love to hear from you.{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
