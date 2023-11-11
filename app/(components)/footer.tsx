import Image from 'next/image';
import React from 'react';
import logo from './(assets)/footerIcon.svg';
import { IoIosArrowForward } from 'react-icons/io';
import google from '../auth/(assets)/google.svg';
import apple from '../auth/(assets)/apple.svg';
import Link from 'next/link';
import fb from '../auth/(assets)/fb.svg';
import x from '../auth/(assets)/x.svg';
import ig from '../auth/(assets)/ig.svg';
import linkedin from '../auth/(assets)/linkedin.svg';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const links = [
    { id: 3, name: 'Customer Support', path: '/' },
    { id: 2, name: 'Product Overview', path: '/' },
    { id: 1, name: 'About', path: '/about-us' },
    { id: 4, name: 'FAQ', path: '/' },
    { id: 5, name: 'Contact us', path: '/' },
  ];

  const resources = [
    { id: 1, name: 'Website templates', path: '/' },
    { id: 2, name: 'Gift registry', path: '/' },
    { id: 3, name: 'Guest management', path: '/' },
    { id: 4, name: 'Communications', path: '/' },
    { id: 5, name: 'Event Management', path: '/' },
  ];

  const icons = [
    { id: 1, name: 'facebook', icon: fb, path: '/' },
    { id: 2, name: 'x', icon: x, path: '/' },
    { id: 3, name: 'ig', icon: ig, path: '/' },
    { id: 4, name: 'linkedin', icon: linkedin, path: '/' },
  ];
  const data = [
    { id: 2, name: 'Terms of Use', path: '/' },
    { id: 1, name: 'Privacy Policy', path: '/' },
  ];

  const h3 = `font-semibold text-gray-600`;
  const linkWrapper = `flex flex-col gap-2 text-gray-500 text-sm`;

  return (
    <div className="bg-[hsla(278,100%,98%,1)]">
      <div className="max-w-[1440px] min-h-[300px] mx-auto px-8 lg:px-10 lg:py-28 py-14">
        <div className="mb-10">
          <Image src={logo} alt="logo" />
        </div>
        <div className="flex items-start justify-between gap-8 md:gap-16 lg:gap-20 flex-wrap">
          {/* part 1 */}
          <div className="flex-[3] flex flex-col min-w-[min(300px,100%)] gap-5">
            <div className="flex flex-col gap-2 order-2 md:order-1">
              <Label className="text-gray-600">Subscribe to our newsletter</Label>
              <div className="flex border rounded-xl">
                <span className="w-full">
                  <Input placeholder="Enter your email address" className="bg-transparent border-0 flex-1" />
                </span>
                <Button variant="secondary" className="text-gray-600 px-5 rounded-xl">
                  <IoIosArrowForward className="text-2xl" />
                </Button>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h3 className={h3}>About Us</h3>
              <p className="text-gray-600 leading-1 text-sm font-[400] trt">
                Passionate about making dreams come true, we are DreamAffairs, dedicated to crafting unforgettable
                moments on your special day.
              </p>
            </div>
          </div>

          {/* part 2 */}
          <div className="flex-[2] min-w-[150px] flex flex-col gap-5">
            <h3 className={h3}>Dream-Affairs</h3>
            <ul className={linkWrapper}>
              {links.map((link) => (
                <li key={link.id}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* part 3 */}
          <div className="flex-[2] min-w-[150px] flex flex-col gap-5">
            <h3 className={h3}>Resources</h3>
            <ul className={linkWrapper}>
              {resources.map((link) => (
                <li key={link.id}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* part 4 */}
          <div className="flex flex-col justify-center items-start gap-2">
            <p className={h3}>Download the app</p>
            <div className="flex gap-3 mb-5">
              <Link href="/" className="">
                <Image width={0} height={0} src={apple} alt="logo" className="" />
              </Link>
              <Link href="/">
                <Image width={0} height={0} src={google} alt="logo" className="" />
              </Link>
            </div>

            <ul className="flex gap-10 mb-5 self-center md:self-auto">
              {icons.map((icon) => (
                <li key={icon.id}>
                  <Link href={icon.path}>
                    <Image width={0} height={0} src={icon.icon} alt={icon.name} className="" />
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={'flex gap-5 tracking-tight text-[13px] text-gray-400 self-center md:self-auto'}>
              {data.map((link) => (
                <li className="" key={link.id}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center bg-[hsla(283,57%,17%,1)] py-3 text-white text-sm">©️ Copyright 2023 Dream-Affairs</p>
    </div>
  );
};

export default Footer;
