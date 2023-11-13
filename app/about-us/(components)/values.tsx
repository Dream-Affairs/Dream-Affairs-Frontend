'use client';
import { SubHeading } from './section-2';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Values = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const values = [
    {
      title: 'Integrity',
      desc: ' We operate with transparency, honesty, and a commitment to ethical practices. You can trust us to navigate the intricate details of your wedding with integrity and professionalism, ensuring your celebration is built on a foundation of trust and reliability.',
    },
    {
      title: 'Creativity',
      desc: ' We believe in pushing the boundaries of conventional wedding planning. Our innovative ideas, artistic flair, and imaginative solutions ensure that every wedding we design is a unique and unforgettable masterpiece, tailored to your distinct love story',
    },
    {
      title: 'Client-Centric Approach',
      desc: 'Our team is committed to delivering exceptional service, meticulous planning, and flawless execution. We believe that the pursuit of excellence is the key to creating weddings that exceed expectations and leave a lasting impression',
    },
    {
      title: 'Team Collaboration',
      desc: 'Our diverse team brings together unique skills, perspectives, and talents to create a harmonious planning process. By working seamlessly together, we ensure that your wedding day is a result of collective expertise, dedication, and creativity.',
    },
    {
      title: 'Client Education',
      desc: "we guide you through the wedding planning process, offering insights, advice, and options to make informed decisions. We believe that an educated client is a confident client, and we're here to support you at every step of your wedding journey.",
    },
    {
      title: 'Excellence',
      desc: 'Our team is committed to delivering exceptional service, meticulous planning, and flawless execution. We believe that the pursuit of excellence is the key to creating weddings that exceed expectations and leave a lasting impression',
    },
  ];
  return (
    <section className="w-full px-[24px] lg:px-[80px] mt-[44px] lg:mt-[36px] flex flex-col items-center">
      <SubHeading title="Our Value" />
      <div className="w-full mt-[24px] lg:mt-[56px] grid grid-cols-1 lg:grid-cols-3 gap-y-[20px] lg:gap-[44px]">
        {values.map((value, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="lg:w-[393px] px-[25px] lg:h-[384px] flex flex-col bg-[#FFF8FA] py-[33px] lg:py-0 lg:px-[35px] lg:pt-[70px] items-center lg:gap-y-0 gap-y-[24px]"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.2915 43.3541C25.5832 43.6041 24.4165 43.6041 23.7082 43.3541C17.6665 41.2916 4.1665 32.6874 4.1665 18.1041C4.1665 11.6666 9.354 6.45825 15.7498 6.45825C19.5415 6.45825 22.8957 8.29159 24.9998 11.1249C27.104 8.29159 30.479 6.45825 34.2498 6.45825C40.6457 6.45825 45.8332 11.6666 45.8332 18.1041C45.8332 32.6874 32.3332 41.2916 26.2915 43.3541Z"
                stroke="#292D32"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4 className="lg:mt-[16px] font-[600] text-[16px] lg:text-[24px] leading-[22.4px] lg:leading-[33.6px] text-center text-[#48195A]">
              {value.title}
            </h4>
            <p className="lg:mt-[15px] font-[400] text-[12px] lg:text-[16px] leading-[16.8px] lg:leading-[22.4px] text-center text-[#111111]">
              {value.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
