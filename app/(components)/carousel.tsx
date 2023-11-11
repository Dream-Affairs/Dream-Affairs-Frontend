'use client';

import { useState } from 'react';
import Curly from './(assets)/curly.svg';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Dot } from 'lucide-react';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      url: 'https://shorturl.at/blFHR',
      title: 'Website templates',
      description:
        'Elevate your love story with our stunning wedding website templates – choose a design as unique as your bond and share your journey in style',
    },
    {
      id: 2,
      url: 'https://shorturl.at/imrxP',
      title: 'Guest management',
      description:
        'Simplify your RSVPs and guest list with ease. Our intuitive guest management feature helps you organize and celebrate with the ones who matter most',
    },
    {
      id: 3,
      url: 'https://shorturl.at/rGJOR',
      title: 'Communications',
      description:
        'Make every announcement memorable. From elegant invitations to heartfelt emails, our customisable templates help you share your joy with style and grace',
    },
    {
      id: 4,
      url: 'https://shorturl.at/aOUW5',
      title: 'Event management',
      description:
        'Seamlessly plan every detail of your celebration. Our event management tool empowers you to create, organize, and execute the perfect day',
    },
    {
      id: 5,
      url: 'https://shorturl.at/PQ139',
      title: 'Gift registry',
      description:
        'Turn wishes into cherished gifts. Create your personalized gift registry effortlessly, ensuring your guests contribute to your perfect start together',
    },
    {
      id: 6,
      url: 'https://shorturl.at/fkvz6',
      title: 'Meal management',
      description:
        "Culinary perfection for your special day. Manage meal preferences effortlessly, ensuring every guest enjoys a feast that matches your wedding's unique flavor.",
    },
    {
      id: 7,
      url: 'https://shorturl.at/iMUV6',
      title: 'Budgeting',
      description:
        'Budgeting made beautiful. Take control of your wedding expenses with our user-friendly budgeting feature, ensuring your dream day stays within reach',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const linearGradient = {
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.34) 0%, rgba(0, 0, 0, 0.90) 100%)',
  };
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-10">
        <div className="m-auto text-center flex flex-col items-center pt-10">
          <h1 className="text-[40px] sm:text-[56px] text-[#48195A] font-semibold">What we offer</h1>
          <Image src={Curly} width={0} alt="Curly" className="w-[240px] sm:w-[400px]" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration=""
          style={{ backgroundImage: `url(${slides[currentIndex]?.url})` }}
          className="w-full max-w-[1270px] mx-auto mt-20 px-8 lg:px-10 relative h-[400px] lg:h-[629px] rounded-2xl bg-center bg-cover"
        >
          <div style={linearGradient} className="absolute w-full h-[400px] lg:h-[629px] inset-0 rounded-2xl"></div>
          <div className="absolute bottom-[34%] lg:bottom-[40%] -translate-y-[50%] left-5 text-2xl rounded-full p-1 border-2 border-white text-white cursor-pointer">
            <ChevronLeft size={30} onClick={prevSlide} />
          </div>
          <div className="absolute bottom-[34%] lg:bottom-[40%] -translate-y-[50%] right-5 text-2xl rounded-full p-1 border-2 border-white text-white cursor-pointer">
            <ChevronRight size={30} onClick={nextSlide} />
          </div>

          <div className="absolute bottom-[28%] lg:bottom-[30%] left-10 sm:left-[14%] lg:left-[32%] m-auto text-center text-white mt-10">
            <h3 className="text-[16px] sm:text-[56px] font-semibold m-auto">{slides[currentIndex]?.title}</h3>
            <p className="text-[12px] sm:text-[16px] w-[237px] sm:w-[400px] m-auto leading-7">
              {slides[currentIndex]?.description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-[227px] mx-auto">
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.id}
            onClick={() => setCurrentIndex(slideIndex)}
            className={slideIndex === currentIndex ? 'text-[#48195A]' : 'text-black/20'}
          >
            <Dot size={70} className="ml-[-45px] px-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
