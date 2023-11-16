'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../(assets)/logo.svg';
import settings1 from '../(assets)/setting-21.svg';
import settings2 from '../(assets)/setting-22.svg';
import mode1 from '../(assets)/lightmode1.svg';
import mode2 from '../(assets)/lightmode2.svg';
import avatar from '../(assets)/avatar.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sidebarMenu } from '../data/dashboard-data';
import { Button } from '@/components/ui/button';

type Props = {};

const Sidebar = (props: Props) => {
  const [viewMenu, setViewMenu] = useState<boolean>(false);
  const [mode, setMode] = useState<boolean>(false);
  const params = usePathname();
  return (
    <nav
      onMouseEnter={() => setViewMenu(true)}
      onMouseLeave={() => setViewMenu(false)}
      className={`${
        viewMenu ? 'min-w-[325px] lg:flex-[1] flex-[0]' : 'min-w-fit flex-[0]'
      } px-8 py-6 min-h-screen h-full w-fit xl:block hidden`}
    >
      <Link href={`/`} className="flex items-center py-2 px-3 mb-4 gap-x-3">
        <Image src={logo} alt="logo" />
        {viewMenu && <h1 className="uppercase mt-1">Dream Affairs</h1>}
      </Link>

      <div className="py-3 space-y-4 mx-auto">
        {sidebarMenu.map((item) => (
          <Link
            href={`${item.route}`}
            key={item.id}
            className={`flex items-center p-3 rounded text-base leading-6 font-semibold h-fit ${
              viewMenu ? 'w-full' : 'w-fit'
            } ${
              params === item.route
                ? 'text-[#101928] bg-[#E0B0FF]'
                : 'text-[#3A3A3A] bg-none hover:text-[#101928] hover:bg-[#E0B0FF]'
            }`}
          >
            <Image
              src={params === item.route ? item.iconActive : item.iconInactive}
              alt="icon"
              width={24}
              height={24}
              className="object-center"
            />
            {viewMenu && <p className="mt-1 ml-3">{item.name}</p>}
          </Link>
        ))}
        <hr />
      </div>

      <div className="flex flex-col gap-y-4 justify-center item-center">
        <Link
          href={`/dashboard/settings`}
          className={`${viewMenu ? 'w-full' : 'w-fit'} flex items-center p-3 text-sm font-normal rounded ${
            params === '/dashboard/settings'
              ? 'text-[#101928] bg-[#E0B0FF]'
              : 'text-[#3A3A3A] bg-none hover:text-[#101928] hover:bg-[#E0B0FF]'
          }`}
        >
          <Image src={params === '/dashboard/settings' ? settings1 : settings2} alt="setting" />
          {viewMenu && <p className="mt-1 ml-3">Settings</p>}
        </Link>

        <div className="flex items-center">
          <div className="relative">
            <Image src={avatar} alt="user" width={60} height={60} />
            <span className="w-4 h-4 rounded-full bg-[#04802E] absolute right-1 top-11"></span>
          </div>
          {viewMenu && (
            <div className="mt-1 ml-3">
              <p>Jane Doe</p>
              <p>jane@dreamaffairs</p>
            </div>
          )}
        </div>

        <button onClick={() => setMode((prev) => !prev)}>
          <Image src={mode ? mode1 : mode2} alt="mode" />
        </button>

        <Button
          className="h-auto w-auto text-white"
          onClick={() => {
            sessionStorage.removeItem('daff');
            window.location.href = '/auth/login';
          }}
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Sidebar;
