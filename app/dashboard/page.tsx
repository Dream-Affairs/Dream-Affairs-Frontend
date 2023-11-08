import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import add from './(assets)/add.svg';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <section className="w-full py-6 px-[52px] space-y-8">
      {/* Header, Add Guest and Upgrade Plan  */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl leading-[44.8px] font-medium">Hi Funsho!</h1>
          <span className="text-base leading-5 font-normal">
            Here is your website URL: <Link href={``}>www.funshoandNonye.com</Link>
          </span>
        </div>

        <div className="flex gap-x-6 items-center">
          <Button className="px-8 py-4" variant={'outline'}>
            <Image src={add} alt="add" /> <span>Add Guest</span>
          </Button>
          <Button className="px-8 py-4" variant={'secondary'}>
            Upgrade Plan
          </Button>
        </div>
      </div>

      {/* Event Details and Countdown Clock  */}
      <div></div>

      {/* RSVP Overview and Financial Overview  */}
      <div></div>

      {/* Checklist and Gifts  */}
      <div></div>
    </section>
  );
};

export default Dashboard;
