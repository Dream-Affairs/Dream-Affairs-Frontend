'use client';

import AddGuest from '@/components/guest-management/add-guest-modal/add-guest';
import { AddGuestModal } from '@/components/guest-management/add-guest-modal/add-guest-modal';
import FilterBtn from '@/components/guest-management/filter-btn';
import GuestProfiles from '@/components/guest-management/guest-profile-modal/guest-profile-modal';
import ImportGuestModal from '@/components/guest-management/import-guest-modal/import-guest-modal';
import MenuPopup from '@/components/guest-management/menu-popup/menu-popup';
import {
  ArrowLeft,
  ArrowRight,
  Delete,
  Ellipsis,
  ExportIcon,
  HashTag,
  Import,
  Plus,
  Search,
  Send,
  Store,
  Tags,
  Track,
} from '@/components/svg-icons/svg-icons';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import React, { useState } from 'react';
import guests from '../../../data/dummy_guests';
import Link from 'next/link';
import StatusTag from '@/components/guest-management/status-tag/status-tag';
import Pagination from '@/components/guest-management/pagination/pagination';

type Props = {};

const GuestManagement = (props: Props) => {
  const [activeFilter, setActiveFilter] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedGuest, setSelectedGuests] = useState<string[]>([]);
  const [deletedGuests, setDeletedGuests] = useState<string[]>([]);

  const showMenu = (e: any) => {
    setShowPopup(true);
  };

  const selectAllGuest = () => {
    if (selectedGuest.length === guests.length) {
      setSelectedGuests([]);
    } else {
      setSelectedGuests(guests.map((item) => item.id));
    }
  };

  const handleChange = (id: string) => {
    setSelectedGuests((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((item) => item != id);
      } else {
        return [...prevState, id];
      }
    });
  };

  const deleteSelected = () => {
    setDeletedGuests(selectedGuest);
    setSelectedGuests([]);
  };

  return (
    <div className="pt-10 relative w-full h-full py-6">
      {showPopup && <MenuPopup closePop={setShowPopup} />}
      <div className="guest-spacing w-full overflow-hidden">
        <header className="flex justify-between">
          <h2 className="text-3xl font-bold text-[#1c1c1c]">Guest Management</h2>
          <div className="flex gap-[22px]">
            <Button variant="disabled" className="gap-2.5" size={'lg'}>
              <ExportIcon />
              Export
            </Button>
            <AddGuest />
          </div>
        </header>
        <div className="flex items-center gap-10 py-8">
          <div className="flex items-center flex-1 border border-[#D0D5DD] px-3 py-2.5 gap-2 rounded-md">
            <Search height="20" width="20" />
            <input type="text" placeholder="Search for guests" className="focus:outline-none w-full" />
          </div>
          <div className="flex items-center">
            <Label className="whitespace-nowrap mr-2">Filter By</Label>
            <Select>
              <SelectTrigger className="w-[165px] p-4">
                <SelectValue placeholder="Select a filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Seat Allocation</SelectLabel>
                  <SelectItem value="apple">Tags</SelectItem>
                  <SelectItem value="banana">RSVP Status</SelectItem>
                  <SelectItem value="gifts">Gifts</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="flex items-center gap-3.5 w-full overflow-scroll no-scrollbar">
            <Button
              variant={selectedGuest.length ? null : 'outline'}
              size={'sm'}
              className={selectedGuest.length ? 'guest-btn' : 'gap-2'}
              onClick={deleteSelected}
            >
              <Delete color={selectedGuest.length ? '#282828' : '#9C9C9C'} />
              Delete Guest
            </Button>
            <ImportGuestModal />
            <Button size="sm" className="guest-btn">
              <Tags />
              Assign Tags
            </Button>
            <Button size="sm" className="guest-btn">
              <Store />
              Manage Tags
            </Button>
            <Button size="sm" className="guest-btn">
              <Link href="/dashboard/guest-management/rsvp-tracker" className="flex gap-2">
                <Track />
                Track RSVP
              </Link>
            </Button>
            <Button size="sm" className="guest-btn">
              <Send />
              Send Invites
            </Button>
            <Button size="sm" className="guest-btn">
              <HashTag />
              Populate Tables
            </Button>
          </div>
        </div>
      </div>
      <div className="flex gap-9 pt-8 guest-spacing border-b border-[#E1E1E1]">
        <FilterBtn statusFilter="" name="All guest" count={112} activeBtn={activeFilter} setFunc={setActiveFilter} />
        <FilterBtn
          statusFilter="confirmed"
          name="Confirmed"
          count={80}
          activeBtn={activeFilter}
          setFunc={setActiveFilter}
        />
        <FilterBtn
          statusFilter="declined"
          name="Regretfully Declined"
          count={2}
          activeBtn={activeFilter}
          setFunc={setActiveFilter}
        />
        <FilterBtn
          statusFilter="pending"
          name="Awaiting Response"
          count={20}
          activeBtn={activeFilter}
          setFunc={setActiveFilter}
        />
      </div>
      <div className="mt-5 guest-spacing">
        <div className="border border-[#E1E1E1] rounded-[10px] overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#FFF8FA] font-medium border-b border-b-[#E1E1E1]">
              <tr>
                <td className="py-4 px-3">
                  <Checkbox onClick={selectAllGuest} checked={selectedGuest.length === guests.length} />
                </td>
                <td className="py-4 px-2">Guest Name</td>
                <td className="py-4 px-2">Email</td>
                <td className="py-4 px-2 text-center">RSV Status</td>
                <td className="py-4 px-2">Invite Code</td>
                <td className="py-4 px-2">Tags</td>
                <td className="py-4 px-2">Plus One?</td>
                <td className="py-4 px-2">
                  <button>
                    <Plus />
                  </button>
                </td>
                <td className="py-4 px-4">
                  <button onClick={showMenu}>
                    <Ellipsis />
                  </button>
                </td>
              </tr>
            </thead>
            <tbody>
              {guests
                .filter((item) => item.rsvpStatus.includes(activeFilter) && !deletedGuests.includes(item.id))
                .map((item, index) => {
                  return (
                    <tr key={item.id} className="border-b border-b-[#E1E1E1] last:border-none text-[#282828]">
                      <td className="py-4 px-3 bg-[#FFF8FA]">
                        <Checkbox
                          id={item.id}
                          onClick={() => handleChange(item.id)}
                          checked={selectedGuest.includes(item.id)}
                        />
                        {/* <input type="checkbox" className='accent-[#292D32]' /> */}
                      </td>
                      <td className="py-4 px-2 whitespace-nowrap">
                        <GuestProfiles name={item.fullName} id={item.id} />
                      </td>
                      <td className="py-4 px-2">{item.email}</td>
                      <td className="py-4 px-2">
                        <StatusTag status={item.rsvpStatus} />
                      </td>
                      <td className="py-4 px-2">{item.inviteCode}</td>
                      <td className="py-4 px-2">
                        <div className="flex gap-2">
                          {item.tags.map((item, index) => {
                            return (
                              <span
                                key={index}
                                className="block whitespace-nowrap px-2 py-1 bg-[#E6F4EB] text-xs text-[#008D36] font-medium rounded-[8px]"
                              >
                                {item}
                              </span>
                            );
                          })}
                        </div>
                      </td>
                      <td className="py-4 px-2 capitalize text-center">{item.plusOne}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default GuestManagement;
