import React from 'react';
import Curly from './(assets)/curly.svg';
import Phone from './(assets)/ring.svg';
import Rosy from './(assets)/rosy.svg'
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section data-aos="zoom-in" data-aos-duration="700" className="max-w-[1440px] mx-auto px-8 lg:px-10 my-16">
      <section className="bg-[#FFF8FA] lg:flex lg:justify-between">
        <div>
          <Image src={Phone} width={0} alt="Phone" className="hidden lg:flex" />
        </div>
        <div
          style={{
            backgroundImage: `url${Rosy.src}`,
          }}
          className="lg:w-[700px] p-4 py-9 sm:p-8 lg:p-0 lg:py-12 lg:px-10 lg:pr-[150px] "
        >
          <div className=" text-center m-auto flex flex-col justify-center items-center">
            <h1 className="text-[18px] text-[#48195A] font-semibold lg:text-[56px]">Get Started</h1>
            <Image src={Curly} width={0} alt="Curly" className="w-[118px] md:w-[187px]" />
            <p className="text-[14px] text-center font-medium py-10 pb-12">
              Questions or visions to share? Reach out and let&apos;s start creating your dream day together. Contact
              us, and let the journey to your perfect wedding begin
            </p>
          </div>
          <form className="text-[#1C1C1C] w-full bg-cover bg-right bg-no-repeat flex flex-col">
            <label className="text-[16px] sm:text-[24px] font-medium " htmlFor="">
              Your name
            </label>
            <input
              type="text"
              className="border rounded-[5px] pl-2 focus:py-3 duration-500 outline-none focus:border-[#E0B0FF] hover:border-[#E0B0FF] pt-1 pb-4 mt-3 text-[12px] sm:text-[14px]"
              placeholder="Full name"
            />
            <label className="text-[16px] sm:text-[24px] font-medium pt-6" htmlFor="">
              Your email
            </label>
            <input
              type="email"
              className="border rounded-[5px] pl-2 focus:py-3 duration-500 outline-none focus:border-[#E0B0FF] hover:border-[#E0B0FF] pt-1 pb-4 mb-6 mt-3 text-[12px] sm:text-[14px]"
              placeholder="Email address"
            />
            <label className="text-[16px] sm:text-[24px] font-medium " htmlFor="">
              Your message
            </label>
            <textarea className="border rounded-[5px] p-2 focus:py-3 duration-500 outline-none focus:border-[#E0B0FF] hover:border-[#E0B0FF] mt-3 mb-0 h-[209px] overflow-scroll resize-none"></textarea>
            <p className="text-right mb-6 text-[10px]">0/1000</p>
            <Button variant="secondary" type="submit" className="duration-500">
              Send message
            </Button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contact;
