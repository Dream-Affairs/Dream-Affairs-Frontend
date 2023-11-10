import Image from 'next/image';
import React from 'react';
import logo from '../auth/(assets)/logo.svg';
import da from '../auth/(assets)/da.svg';
import google from '../auth/(assets)/google.svg';
import apple from '../auth/(assets)/apple.svg';
import Link from 'next/link';
import fb from '../auth/(assets)/fb.svg';
import twitter from '../auth/(assets)/twitter.svg';
import ig from '../auth/(assets)/ig.svg';
import linkedin from '../auth/(assets)/linkedin.svg';

const Footer = () => {
  const links = [
    { id: 1, name: 'About', path: '/about-us' },
    { id: 2, name: 'Product Overview', path: '/' },
    { id: 3, name: 'Customer Support', path: '/' },
    { id: 4, name: 'FAQ', path: '/' },
    { id: 5, name: 'Contact us', path: '/' },
  ];

  const icons = [
    { id: 1, name: 'facebook', icon: fb, path: '/' },
    { id: 2, name: 'twitter', icon: twitter, path: '/' },
    { id: 3, name: 'ig', icon: ig, path: '/' },
    { id: 4, name: 'linkedin', icon: linkedin, path: '/' },
  ];
  const data = [
    { id: 1, name: 'Privacy Policy', path: '/' },
    { id: 2, name: 'Terms of Use', path: '/' },
  ];
  return (
    <div className="max-w-[1440px] min-h-[300px] mx-auto px-8 lg:px-10 py-10">
      <div className="flex gap-5 mb-10 lg:mb-8 sm:w-auto w-[60%]">
        <Image width={0} height={0} src={logo} alt="logo" className="" />
        <Image width={0} height={0} src={da} alt="da" className="" />
      </div>
      <div className="flex md:flex-row flex-col justify-between md:items-end gap-10">
        <ul className="flex gap-2 md:gap-5 flex-col lg:flex-row ">
          {links.map((link) => (
            <li className="font-semibold text-gray-700" key={link.id}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="font-semibold">Download the app</p>
          <div className="flex gap-3">
            <Link href="/" className="">
              <Image width={0} height={0} src={apple} alt="logo" className="" />
            </Link>
            <Link href="/">
              <Image width={0} height={0} src={google} alt="logo" className="" />
            </Link>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 mt-10 mb-6" />

      <div className="flex justify-between md:items-center flex-col gap-10 md:flex-row">
        <ul className="flex gap-5">
          {icons.map((icon) => (
            <li key={icon.id}>
              <Link href={icon.path}>
                <Image width={0} height={0} src={icon.icon} alt={icon.name} className="" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-5 self-center">
          {data.map((link) => (
            <li className="text-gray-400 text-sm md:text-base" key={link.id}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
