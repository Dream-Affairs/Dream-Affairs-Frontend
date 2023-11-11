'use client';
import React from 'react';
import { bottomNavMenu } from '../data/dashboard-data';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const BottomNav = () => {
  const params = usePathname();

  return (
    <div className="flex xl:hidden w-full fixed bottom-0 bg-white text-[10px] justify-evenly items-center leading-[14px] py-2.5 px-6">
      {bottomNavMenu.map((item) => (
        <Link key={item.id} href={item.route} className="flex flex-col gap-y-1 justify-center items-center">
          <Image src={params === item.route ? item.iconActive : item.iconInactive} alt={item.name} />
          <p className={`${params === item.route ? 'text-[#822DA4]' : 'text-[#7C7C7C]'}`}>{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
