import Image from 'next/image';
import React from 'react';
import logo from '../(assets)/logo.svg';
import close from '../(assets)/close-square.svg';
import { hamburgerMenu } from '../data/dashboard-data';
import Link from 'next/link';
import hamburgerImage from '../(assets)/hamburgerImage.png';

const HamburgerMenu = ({ closeMenu }: { closeMenu: any }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen text-[#F1F0F0] bg-black/50 z-[99]">
      <div className="md:w-[50%] w-[90%] bg-[#371345] pt-7 h-full flex flex-col items-stretch md:gap-y-24  gap-y-0 relative">
        <div className="flex items-center justify-between md:pl-10 pl-5 md:pr-16 pr-8">
          <Image src={logo} alt="logo" width={36} height={36} />
          <Image src={close} alt="close" onClick={closeMenu} width={30} height={30} />
        </div>

        <div className="text-sm font-medium leading-tight mt-10 space-y-7 relative">
          {hamburgerMenu.map((item) => (
            <Link
              key={item.id}
              href={item.route}
              className="flex gap-x-3 items-center md:pl-10 pl-5 md:pr-16 pr-8"
              onClick={closeMenu}
            >
              <Image src={item.icon} alt={item.name} />
              <p className="mt-1">{item.name}</p>
            </Link>
          ))}
        </div>
        <Image
          src={hamburgerImage}
          alt={`hamburger Image`}
          className="w-full md:h-full h-fit object-contain relative bottom-0"
        />
      </div>
    </div>
  );
};

export default HamburgerMenu;
