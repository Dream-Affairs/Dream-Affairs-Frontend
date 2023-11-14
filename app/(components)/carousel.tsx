'use client';

import { useState, useEffect } from 'react';
import Curly from './(assets)/curly.svg';
import Image from 'next/image';
import Web from './(assets)/web.svg'
import Gift from './(assets)/gift.svg';
import Event from './(assets)/event.svg'
import Guest from './(assets)/guest.svg'
import Comm from './(assets)/comm.svg';
import Meal from './(assets)/meal.svg';
import Budget from './(assets)/budget.svg';
import { ChevronLeft, ChevronRight, Dot } from 'lucide-react';
import { Comment } from 'postcss';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      url: Web,
      title: 'Website templates',
      description:
        'Elevate your love story with our stunning wedding website templates – choose a design as unique as your bond and share your journey in style',
    },
    {
      id: 2,
      url: Guest,
      title: 'Guest management',
      description:
        'Simplify your RSVPs and guest list with ease. Our intuitive guest management feature helps you organize and celebrate with the ones who matter most',
    },
    {
      id: 3,
      url: Comm,
      title: 'Communications',
      description:
        'Make every announcement memorable. From elegant invitations to heartfelt emails, our customisable templates help you share your joy with style and grace',
    },
    {
      id: 4,
      url: Event,
      title: 'Event management',
      description:
        'Seamlessly plan every detail of your celebration. Our event management tool empowers you to create, organize, and execute the perfect day',
    },
    {
      id: 5,
      url: Gift,
      title: 'Gift registry',
      description:
        'Turn wishes into cherished gifts. Create your personalized gift registry effortlessly, ensuring your guests contribute to your perfect start together',
    },
    {
      id: 6,
      url: Meal,
      title: 'Meal management',
      description:
        "Culinary perfection for your special day. Manage meal preferences effortlessly, ensuring every guest enjoys a feast that matches your wedding's unique flavor.",
    },
    {
      id: 7,
      url: Budget,
      title: 'Budgeting',
      description:
        'Budgeting made beautiful. Take control of your wedding expenses with our user-friendly budgeting feature, ensuring your dream day stays within reach',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 7;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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
        <div className="m-auto text-center flex flex-col items-center pt-[32px] pb-[24px]">
          <h1 className="text-[24px] sm:text-[56px] text-[#48195A] font-semibold">What we offer</h1>
          <Image src={Curly} width={0} alt="Curly" className="w-[108px] sm:w-[400px]" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration=""
        >
          <Image
            src={slides[currentIndex]?.url}
            width={0}
            alt="Curly"
            className="h-[178px] sm:h-[400px] lg:h-[629px] rounded-[8px] lg:w-[1270px] mx-auto"
          />
          <div className="absolute sm:top-[50%] top-[40%] left-2 md:left-14 text-2xl rounded-full p-1 border-2 border-white text-white cursor-pointer">
            <ChevronLeft size={20} onClick={prevSlide} />
          </div>
          <div className="absolute sm:top-[50%] top-[40%] right-2 md:right-14 text-2xl rounded-full p-1 border-2 border-white text-white cursor-pointer">
            <ChevronRight size={20} onClick={nextSlide} />
          </div>

          <div className="absolute top-[50%] lg:top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full m-auto text-center text-white mt-10">
            <h3 className="text-[16px] sm:text-[60px] font-semibold m-auto">{slides[currentIndex]?.title}</h3>
            <p className="text-[11px]  sm:text-[18px] w-[237px] sm:w-[400px] m-auto sm:leading-7">
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
