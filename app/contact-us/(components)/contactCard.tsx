import React from 'react';
import Form from './form';
import icon from '../../pricing/(assets)/arrow-right.svg';
import Image from 'next/image';
import patternBg from '../(assets)/bg-flower.svg';

const contactCard = () => {
  return (
    <section className="flex lg:w-[90%] mx-auto lg:mb-[100px] mb-[40px] lg:flex-row flex-col">
      <div className="h-auto lg:w-[559px] bg-[#FFF8FA] relative mb-[24px] lg:mb-0 rounded-[8px]">
        <div className="border border-primary m-[34px] lg:h-[655px] lg:w-[490px] w-[90%] h-auto p-4 mx-auto text-[#1C1C1C] lg:px-[27px] lg:pt-[98px] lg:pb-[327px] text-[16px] rounded-[4px]">
          <h3 className="lg:text-[32px] text-[24px] font-[500] text-[#48195A)] mt-[24px] lg:mt-0">
            Contact Information
          </h3>
          <p className="lg:mb-[52px] mb-[24px]">Don&lsquo;t be shy - get in touch with us using these options</p>
          <p>Email Address</p>
          <p className="text-primary lg:mb-[32px] mb-[20px]">dreamaffairs@gmail.com</p>
          <p>Phone Number</p>
          <p className="text-primary">+234 998 234 3243</p>
          <div className="mt-[29px]">
            <h3 className="lg:text-[32px] text-[24px] font-[500] text-[#48195A)]">Business Hours</h3>
            <div className="flex mb-[17px]">
              <Image src={icon} alt="" width={24} height={24} className="self-baseline" />
              <p className="">Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
            <div className="flex lg:mb-0 mb-[40px]">
              <Image src={icon} alt="" width={24} height={24} className="self-baseline" />
              <p className="">Saturday - Sunday: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image src={patternBg} alt="" className="self-baseline lg:w-[234px] lg:h-[199px] w-[200px] h-[120px]" />
        </div>
      </div>
      <div className="lg:w-[50%] lg:ml-[79px] w-[90%] mx-auto mt-[24px] lg:mt-0">
        <Form />
      </div>
    </section>
  );
};

export default contactCard;
