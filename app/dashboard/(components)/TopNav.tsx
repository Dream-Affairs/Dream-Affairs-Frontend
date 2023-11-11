'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import menu from '../(assets)/menu.svg';
import notification from '../(assets)/notification-nav.svg';
import avatar from '../(assets)/avatar.png';
import HamburgerMenu from './HamburgerMenu';

type Props = {};

const TopNav = (props: Props) => {
  const [toggleMenu, setMenuToggle] = useState(false);
  function toggleMenuOn() {
    setMenuToggle(true);
  }

  function toggleMenuOff() {
    setMenuToggle(false);
  }
  return (
    <nav className="flex xl:hidden fixed top-0 w-full px-6 py-3 justify-between bg-white z-50 transition-all duration-1000">
      <div className="flex items-center gap-x-6">
        <Image src={menu} alt="menu" width={24} height={24} onClick={toggleMenuOn} />
        <p className="mt-1">Title</p>
      </div>
      <div className="flex items-center gap-x-3">
        <Image src={notification} alt="notiifications" width={24} height={24} />
        <Image src={avatar} alt="profile avatar" width={36} height={36} />
      </div>
      {toggleMenu && <HamburgerMenu closeMenu={toggleMenuOff} />}
    </nav>
  );
};

export default TopNav;
