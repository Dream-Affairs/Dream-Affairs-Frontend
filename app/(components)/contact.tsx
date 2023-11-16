import React from 'react';
import Curly from './(assets)/curly.svg';
import Phone from './(assets)/phone.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section data-aos="zoom-in" data-aos-duration="700" className="max-w-[1440px] mx-auto px-8 lg:px-10 my-16">
      <section className="bg-[#FFF8FA] lg:flex lg:justify-between p-5 md:p-10 lg:p-14">
        <div className="lg:w-[500px]">
          <div className=" text-center m-auto flex flex-col justify-center items-center lg:justify-start lg:items-start lg:text-left">
            <h1 className="text-[30px] text-[#48195A] font-semibold lg:text-[40px]">Contact us</h1>
            <Image src={Curly} width={0} alt="Curly" className='w-[118px] sm:w-[187px]' />
            <p className="w-[300x] text-[12px] sm:text-[15px] py-4">
              Questions or visions to share? Reach out and let&apos;s start creating your dream day together. Contact
              us, and let the journey to your perfect wedding begin
            </p>
          </div>
          <Image src={Phone} width={0} alt="Phone" className="hidden lg:flex" />
        </div>
        <form className="text-[#1C1C1C] w-full lg:w-[500px] flex flex-col bg-white p-6 shadow-sm rounded-lg border border-white/">
          <label className="" htmlFor="">
            Your name
          </label>
          <input type="text" className="border rounded-[8px] p-2 mt-3 text" placeholder="Name" />
          <label className="pt-6" htmlFor="">
            Your email
          </label>
          <input type="email" className="border rounded-[8px] p-2 mb-6 mt-3 text" placeholder="Email" />
          <label className="" htmlFor="">
            Your message
          </label>
          <textarea
            className="border rounded-[5px] p-2 mt-3 mb-0 h-full overflow-scroll resize-none"
            placeholder="Message"
          ></textarea>
          <p className="text-right mb-6 text-[10px]">0/1000</p>
          <Button variant="secondary" type="submit" className="lg:h-24">
            Send message
          </Button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
