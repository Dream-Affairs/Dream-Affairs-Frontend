'use client';

import React, { useState } from 'react';

import {
  AddIcon,
  ArrowLeft,
  Clock,
  CloseCircle,
  DocumentText,
  ExportIcon,
  Search,
  TickCircle,
} from '@/components/svg-icons/svg-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';
import TrackerSummaryCard from '@/components/guest-management/tracker-summary-card/tracker-summary-card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import StatusTag from '@/components/guest-management/status-tag/status-tag';
import Pagination from '@/components/guest-management/pagination/pagination';

const guests: any[] = [
  {
    name: 'Bola Tinubu',
    email: 'bola.tinubu@example.com',
    response: 'confirmed',
    plusOne: 'yes',
    mealPreference: ['Sauce'],
    address: '456 Aso Rock, Abuja, Nigeria',
  },
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    response: 'confirmed',
    plusOne: 'no',
    mealPreference: ['Pasta', 'Jollof Rice'],
    address: '3334 Queen Street, New York, USA',
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    response: 'pending',
    plusOne: 'yes',
    mealPreference: ['Moimoi', 'Barbeque Cips', 'Jollof Rice'],
    address: '5556 Princess Street, Abuja, Nigeria',
  },
  {
    name: 'Michael Jones',
    email: 'michaeljones@example.com',
    response: 'confirmed',
    plusOne: 'yes',
    mealPreference: ['Barbeque Cips', 'Jollof Rice'],
    address: '7778 Duchess Street, New York, USA',
  },
  {
    name: 'Emily Brown',
    email: 'emilybrown@example.com',
    response: 'pending',
    plusOne: 'yes',
    mealPreference: ['Sauce', 'Juice', 'Afang Soup'],
    address: '456 Elm Street, New York, USA',
  },
  {
    name: 'David Miller',
    email: 'davidmiller@example.com',
    response: 'declined',
    plusOne: 'yes',
    mealPreference: ['Moimoi', 'Afang Soup'],
    address: '6667 Duke Street, London, UK',
  },
  {
    name: 'Sarah Williams',
    email: 'sarahwilliams@example.com',
    response: 'confirmed',
    plusOne: 'no',
    mealPreference: ['Barbeque Cips', 'Afang Soup'],
    address: '456 Elm Street, New York, USA',
  },
  {
    name: 'Christopher Taylor',
    email: 'christophertaylor@example.com',
    response: 'pending',
    plusOne: null,
    mealPreference: ['Afang Soup', 'Beans'],
    address: '6667 Duke Street, London, UK',
  },
  {
    name: 'Patricia Johnson',
    email: 'patriciajohnson@example.com',
    response: 'confirmed',
    plusOne: 'yes',
    mealPreference: ['Sauce'],
    address: '456 Elm Street, New York, USA',
  },
  {
    name: 'Robert Anderson',
    email: 'robertanderson@example.com',
    response: 'confirmed',
    plusOne: null,
    mealPreference: ['Sauce', 'Barbeque Cips'],
    address: '2223 King Street, London, UK',
  },
  {
    name: 'Susan Jackson',
    email: 'susanj@example.com',
    response: 'declined',
    plusOne: 'no',
    mealPreference: ['Egusi Soup', 'Beans'],
    address: '2223 King Street, London, UK',
  },
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    response: 'confirmed',
    plusOne: 'no',
    mealPreference: ['Pasta', 'Jollof Rice'],
    address: '3334 Queen Street, New York, USA',
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    response: 'pending',
    plusOne: 'yes',
    mealPreference: ['Moimoi', 'Barbeque Cips', 'Jollof Rice'],
    address: '5556 Princess Street, Abuja, Nigeria',
  },
  {
    name: 'Michael Jones',
    email: 'michaeljones@example.com',
    response: 'pending',
    plusOne: 'yes',
    mealPreference: ['Barbeque Cips', 'Jollof Rice'],
    address: '7778 Duchess Street, New York, USA',
  },
  {
    name: 'Emily Brown',
    email: 'emilybrown@example.com',
    response: 'confirmed',
    plusOne: 'yes',
    mealPreference: ['Sauce', 'Juice', 'Afang Soup'],
    address: '456 Elm Street, New York, USA',
  },
  {
    name: 'David Miller',
    email: 'davidmiller@example.com',
    response: 'confirmed',
    plusOne: 'yes',
    mealPreference: ['Moimoi', 'Afang Soup'],
    address: '6667 Duke Street, London, UK',
  },
  {
    name: 'Sarah Williams',
    email: 'sarahwilliams@example.com',
    response: 'pending',
    plusOne: 'no',
    mealPreference: ['Barbeque Cips', 'Afang Soup'],
    address: '456 Elm Street, New York, USA',
  },
  {
    name: 'Christopher Taylor',
    email: 'christophertaylor@example.com',
    response: 'confirmed',
    plusOne: null,
    mealPreference: ['Afang Soup', 'Beans'],
    address: '6667 Duke Street, London, UK',
  },
  {
    name: 'Patricia Johnson',
    email: 'patriciajohnson@example.com',
    response: 'confirmed',
    plusOne: 'yes',
    mealPreference: ['Sauce'],
    address: '456 Elm Street, New York, USA',
  },
  {
    name: 'Robert Anderson',
    email: 'robertanderson@example.com',
    response: 'confirmed',
    plusOne: null,
    mealPreference: ['Sauce', 'Barbeque Cips'],
    address: '2223 King Street, London, UK',
  },
  {
    name: 'Susan Jackson',
    email: 'susanj@example.com',
    response: 'confirmed',
    plusOne: 'no',
    mealPreference: ['Egusi Soup', 'Beans'],
    address: '2223 King Street, London, UK',
  },
];

function RsvpTracker() {
  const [search, setSearch] = useState<string>('');

  const filter = (item: any) => {
    return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  };

  console.log(guests.filter((item) => item?.response !== 'pending').length);

  return (
    <div className="pt-10 relative w-full h-full py-6 overflow-hidden">
      <div className="guest-spacing w-full overflow-hidden  text-[#1c1c1c]">
        <header className="flex justify-between mb-8">
          <h2 className="text-3xl font-bold flex items-center">
            <Link href="/dashboard/guest-management">
              <ArrowLeftIcon size={28} color="#282828" />
            </Link>
            <span className="ml-4">RSVP Tracker</span>
          </h2>
          <div className="flex gap-[22px]">
            <Button variant="disabled" className="gap-2.5" size={'lg'}>
              <ExportIcon />
              Export
            </Button>
            <Button variant="secondary" className="gap-2.5" size={'lg'}>
              <AddIcon />
              Add RSVP
            </Button>
          </div>
        </header>
        <section className="mb-12">
          <h3 className="text-xl mb-5">Summary</h3>
          <ul className="grid grid-cols-3 gap-7">
            <TrackerSummaryCard title="Responses">
              <p className=" text-5xl mt-auto">
                {guests.filter((item) => item.response === 'confirmed' || item.response === 'declined')?.length}
              </p>
            </TrackerSummaryCard>
            <TrackerSummaryCard title="Guest Counts">
              <div>
                <ul>
                  <li className="summary-count">
                    <TickCircle />
                    Attending:
                    <span className="font-semibold ml-auto">
                      {guests.filter((item) => item.response === 'confirmed')?.length}
                    </span>
                  </li>
                  <li className="summary-count">
                    <CloseCircle />
                    Not Attending:
                    <span className="font-semibold ml-auto">
                      {guests.filter((item) => item.response === 'declined')?.length}
                    </span>
                  </li>
                  <li className="summary-count">
                    <Clock />
                    Pending:
                    <span className="font-semibold ml-auto">
                      {guests.filter((item) => item.response === 'pending')?.length}
                    </span>
                  </li>
                </ul>
              </div>
            </TrackerSummaryCard>
            <TrackerSummaryCard title="Invite Status">
              <div>
                <ul>
                  <li className="summary-count">
                    <TickCircle />
                    Sent:
                    <span className="font-semibold ml-auto">{guests.length}</span>
                  </li>
                  <li className="summary-count">
                    <CloseCircle />
                    Not Sent:
                    <span className="font-semibold ml-auto">
                      {guests.filter((item) => item.response === 'declined' || item.response === 'pending')?.length}
                    </span>
                  </li>
                </ul>
              </div>
            </TrackerSummaryCard>
          </ul>
        </section>
        <section className="overflow-hidden">
          <h3 className="text-xl mb-5">Collected RSVPs</h3>
          <div className="rounded-[8px] border border-[#F0C5C5] overflow-hidden">
            <header className="pt-5 pb-10 px-8 flex gap-20 border-b border-[#E1E1E1]">
              <div className="flex flex-1 items-center rounded-[6px] p-4 gap-2 border border-[#D0D5DD]">
                <Search height="20" width="20" />
                <input
                  type="text"
                  className="flex-1 focus:outline-none"
                  placeholder="Search RSVPs"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div>
                <div className="flex items-center gap-3 w-60">
                  <Label className="mb-3 whitespace-nowrap">Sort By</Label>
                  <Select value="recent">
                    <SelectTrigger className="w-full h-[55px]">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Sort</SelectLabel>
                        <SelectItem value="recent">Recent</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </header>
            <div className="px-2 w-full overflow-hidden max-w-full">
              <table className="table-fixed w-full text-sm">
                <thead>
                  <tr className="font-medium text-left text-[#282828] bg-[#FFF8FA]">
                    <th className="py-4 px-2">Guest Name</th>
                    <th className="py-4 px-2">Email</th>
                    <th className="py-4 px-2 text-center">Response</th>
                    <th className="py-4 px-2 text-center whitespace-nowrap">Plus One</th>
                    <th className="py-4 px-2 w-[20%]">Meal Preference</th>
                    <th className="py-4 px-2 w-[18%]">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {guests.filter(filter).map((item, index) => {
                    return (
                      <tr key={index} className="border-t border-[#E7E7E7]">
                        <td className="px-2 py-4 whitespace-nowrap">{item.name}</td>
                        <td className="px-2 py-4 overflow-hidden">{item.email}</td>
                        <td className="px-2 py-4">
                          <StatusTag status={item.response} />
                        </td>
                        <td className="px-2 py-4 capitalize text-center">{item.plusOne ?? 'Null'}</td>
                        <td className="px-2 py-4  w-[20%] overflow-hidden">
                          <p className="whitespace-nowrap w-full overflow-hidden text-clip">
                            {item.mealPreference.join(', ')}
                          </p>
                        </td>
                        <td className="px-2 py-4 w-[18%] whitespace-nowrap overflow-hidden">
                          <div>{item.address}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {guests.length === 0 && (
                <div className="text-center py-14">
                  <div className="h-20 w-20 rounded-full mx-auto bg-[#E8E8E8] grid place-content-center">
                    <DocumentText />
                  </div>
                  <h4 className="text-2xl font-medium py-6 text-[#282828]">No RSVPs yet!</h4>
                  <p className="text-[#535353]">When you send invites, RSVPs will appear here</p>
                </div>
              )}
            </div>
          </div>
          <Pagination />
        </section>
      </div>
    </div>
  );
}

export default RsvpTracker;
