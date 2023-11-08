'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../(assets)/logo.svg';
import dashboard1 from '../(assets)/category1.svg';
import dashboard2 from '../(assets)/category2.svg';
import event1 from '../(assets)/calendar-add1.svg';
import event2 from '../(assets)/calendar-add2.svg';
import guest1 from '../(assets)/user-tick1.svg';
import guest2 from '../(assets)/user-tick2.svg';
import invite1 from '../(assets)/directbox-notif1.svg';
import invite2 from '../(assets)/directbox-notif2.svg';
import meal1 from '../(assets)/cake1.svg';
import meal2 from '../(assets)/cake2.svg';
import people1 from '../(assets)/people1.svg';
import people2 from '../(assets)/people2.svg';
import notification1 from '../(assets)/notification1.svg';
import notification2 from '../(assets)/notification2.svg';
import registry1 from '../(assets)/gift1.svg';
import registry2 from '../(assets)/gift2.svg';
import budgeting1 from '../(assets)/wallet-money1.svg';
import budgeting2 from '../(assets)/wallet-money2.svg';
import checklist1 from '../(assets)/tick-square1.svg';
import checklist2 from '../(assets)/tick-square2.svg';
import settings1 from '../(assets)/setting-21.svg';
import settings2 from '../(assets)/setting-22.svg';
import mode1 from '../(assets)/lightmode1.svg';
import mode2 from '../(assets)/lightmode2.svg';
import avatar from '../(assets)/avatar.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {};

const sidebarMenu: any[] = [
  {
    id: 1,
    iconActive: dashboard1,
    iconInactive: dashboard2,
    name: 'Dashboard',
    route: '/dashboard',
  },
  {
    id: 2,
    iconActive: event1,
    iconInactive: event2,
    name: 'Event Management',
    route: '/dashboard/event-management',
  },
  {
    id: 3,
    iconActive: guest1,
    iconInactive: guest2,
    name: 'Guest Management',
    route: '/dashboard/guest-management',
  },
  {
    id: 4,
    iconActive: invite1,
    iconInactive: invite2,
    name: 'Invitation',
    route: '/dashboard/invitation',
  },
  {
    id: 5,
    iconActive: meal1,
    iconInactive: meal2,
    name: 'Meal Management',
    route: '/dashboard/meal-management',
  },
  {
    id: 6,
    iconActive: people1,
    iconInactive: people2,
    name: 'Invite Team',
    route: '/dashboard/invite-team',
  },
  {
    id: 7,
    iconActive: notification1,
    iconInactive: notification2,
    name: 'Notification',
    route: '/dashboard/notification',
  },
  {
    id: 8,
    iconActive: registry1,
    iconInactive: registry2,
    name: 'Registry',
    route: '/dashboard/registry',
  },
  {
    id: 9,
    iconActive: budgeting1,
    iconInactive: budgeting2,
    name: 'Budgeting',
    route: '/dashboard/budgeting',
  },
  {
    id: 10,
    iconActive: checklist1,
    iconInactive: checklist2,
    name: 'Checklist',
    route: '/dashboard/checklist',
  },
];

const Sidebar = (props: Props) => {
  const [viewMenu, setViewMenu] = useState<boolean>(false);
  const [mode, setMode] = useState<boolean>(false);
  const params = usePathname();
  console.log(params);
  return (
    <nav
      onMouseEnter={() => setViewMenu(true)}
      onMouseLeave={() => setViewMenu(false)}
      className={`${viewMenu ? 'w-fit' : 'w-fit'} px-8 py-6 min-h-screen border-r ${
        viewMenu ? 'min-w-[325px]' : 'min-w-fit'
      }`}
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
      </div>
    </nav>
  );
};

export default Sidebar;
