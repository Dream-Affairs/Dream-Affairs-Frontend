import Image from 'next/image'
import React from 'react'
import watermark from '.././(assets)/watermark.png';
import flower from '.././(assets)/flower.svg';


const History = () => {
  return (
    <section className="relative w-full flex flex-col items-center py-[100px]">
          <Image
            src={watermark}
            width={143}
            height={100}
            alt="flower"
            className="object-cover lg:w-[1024px] lg:h-[1100px] absolute top-[50%] -translate-y-[50%]"
          />
          <Image src={flower} alt="flower image" width={351.91} height={249.62} className="absolute top-0 right-0" />
          <div className=" flex flex-col gap-y-10">
            <div className="w-[527px] mt-[44px] flex flex-col items-center gap-y-[11px]">
              <h3 className="font-[400] text-[40px] leading-[56px] text-primary">Our History</h3>
              <p className="font-[400] text-[24px] leading-[33.6px] text-center text-[#111111]">
                Established with a passion for making Dream affair a seamless and joyful experience, Dream affair was
                founded in [Year]. Our journey began with a vision to revolutionize the way couples plan and share their
                special day. Over the years, we have grown to become a trusted name in the wedding planning industry,
                helping countless couples create unforgettable moments.
              </p>
            </div>
            <div className="w-[527px] gap-y-[11px] flex flex-col items-center">
              <h3 className="font-[400] text-[40px] leading-[56px] text-primary">Our Mission</h3>
              <p className="font-[400] text-[24px] leading-[33.6px] text-center text-[#111111]">
                At Dream Affair , our mission is to empower couples with innovative tools that simplify wedding
                planning, foster meaningful connections, and turn their dreams into reality. We strive to provide a
                platform that ensures every detail of their special day is executed flawlessly, leaving a lasting
                impression on them and their guests.
              </p>
            </div>
            <div className="w-[527px] gap-y-[11px] flex flex-col items-center">
              <h3 className="font-[400] text-[40px] leading-[56px] text-primary">Our Vison</h3>
              <p className="font-[400] text-[24px] leading-[33.6px] text-center text-[#111111]">
                Our vision is to be the go-to wedding planning solution, setting the standard for personalized,
                efficient, and memorable celebrations. We aim to continuously innovate, leveraging technology to enhance
                the wedding planning experience for couples around the world.
              </p>
            </div>
          </div>
          <Image
            src={flower}
            alt="flower image"
            width={351.91}
            height={249.62}
            className="absolute bottom-0  left-0 rotate-180"
          />
        </section>
  )
  }
  export default History