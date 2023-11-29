'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import menu from '../(assets)/menu.svg';
import notification from '../(assets)/notification-nav.svg';
import avatar from '../(assets)/avatar.png';
import HamburgerMenu from './HamburgerMenu';
import { usePathname } from 'next/navigation';
import { hamburgerMenu } from '../data/dashboard-data';
import { title } from 'process';

type Props = {};

const TopNav = (props: Props) => {
  const [toggleMenu, setMenuToggle] = useState(false);
  const [title, setTitle] = useState<string>('');
  const params = usePathname();

  console.log(params);

  useEffect(() => {
    for (let i = 0; i < hamburgerMenu.length; i++) {
      let newTitle: string;
      if (params === hamburgerMenu[i].route) {
        newTitle = hamburgerMenu[i].name;
      } else {
        newTitle = 'Dashboard';
      }
      setTitle(newTitle);
    }
  }, [params, title]);

  function toggleMenuOn() {
    setMenuToggle(true);
  }

  function toggleMenuOff() {
    setMenuToggle(false);
  }
  return (
    <nav className="flex xl:hidden fixed top-0 w-full px-6 py-3 justify-between bg-white z-50 transition-all duration-1000">
      <div className="flex items-center gap-x-3">
        <Image src={menu} alt="menu" width={24} height={24} onClick={toggleMenuOn} />
        <p className=" capitalize">{title}</p>
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
