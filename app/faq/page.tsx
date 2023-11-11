'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AOS from 'aos';
import React, { useEffect } from 'react';
import faqBg from './(assets)/faqBg.svg';
import need from '../auth/(assets)/image1.svg';
import ExternalLayout from '../(components)/External-Layout';

const Faq = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const links = [
    { id: 1, name: 'General', href: '/faq/general' },
    { id: 2, name: 'Account & Registrations', href: '/faq/account' },
    { id: 3, name: 'Guest List Management', href: '/faq/guestlist' },
    { id: 4, name: 'Invitations and RSVP', href: '/faq/rsvp' },
    { id: 5, name: 'Gift Management', href: '/faq/gift' },
    { id: 6, name: 'Pricing & Billing', href: '/faq/billing' },
  ];

  return (
    <ExternalLayout>
      <div
        className="relative px-8 lg:px-10 bg-cover bg-center h-[400px] text-center text-white flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${faqBg.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50"></div>
        <h1 data-aos="zoom-in" className="text-[40px] lg:text-[64px] font-semibold z-10">
          Frequently Asked Questions
        </h1>
        <p
          data-aos="zoom-in"
          className="text-[14px] pt-6 pb-12 sm:text-[18px] w-[300px] sm:w-[400px] lg:text-[24px] lg:w-[586px] leading-7 z-10"
        >
          Navigate through our extensive list of frequently asked questions to find answers and solutions for typical
          queries.
        </p>
      </div>
      <div className="min-h-[50vh]"></div>
      <div
        className="relative px-8 lg:px-10 bg-cover bg-center h-[400px] text-center text-white flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${need.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-50"></div>
        <h1 data-aos="zoom-in" className="text-[40px] lg:text-[64px] font-semibold z-10">
          Need more help?
        </h1>
        <p
          data-aos="zoom-in"
          className="text-[14px] pt-6 pb-12 sm:text-[18px] w-[300px] sm:w-[400px] lg:text-[24px] lg:w-[586px] leading-7 z-10"
        >
          Our team is here to assist you with any technical questions or issues you may encounter
        </p>
        <Button variant="secondary" className="z-10 h-auto px-10 py-3">
          Contact Us
        </Button>
      </div>
    </ExternalLayout>
  );
};

export default Faq;
