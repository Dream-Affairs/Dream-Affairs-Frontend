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
import React, { useEffect, useRef, useState } from 'react';
import guests from '../../../data/dummy_guests';
import Link from 'next/link';
import StatusTag from '@/components/guest-management/status-tag/status-tag';
import Pagination from '@/components/guest-management/pagination/pagination';
import ManageTagsModal from '@/components/guest-management/manage-tags-modal/manage-tags-modal';
import AssignTagsModal from '@/components/guest-management/assign-tags-modal/assign-tags-modal';
import DisabledButton from '@/components/guest-management/tool-tip/tool-tip';

type Props = {};

const columns: { id: string; name: string; isShown: boolean }[] = [
  {
    id: 'column1',
    name: 'Guest Name',
    isShown: true,
  },
  {
    id: 'column2',
    name: 'Email',
    isShown: true,
  },
  {
    id: 'column3',
    name: 'RSVP Status',
    isShown: true,
  },
  {
    id: 'column4',
    name: 'Invite Code',
    isShown: true,
  },
  {
    id: 'column5',
    name: 'Tags',
    isShown: true,
  },
  {
    id: 'column6',
    name: 'Plus one?',
    isShown: true,
  },
  {
    id: 'column7',
    name: 'Meal Preferences',
    isShown: true,
  },
  {
    id: 'column8',
    name: 'Gifts',
    isShown: true,
  },
  {
    id: 'column9',
    name: 'Seat Allocation',
    isShown: true,
  },
  {
    id: 'column10',
    name: 'Location',
    isShown: false,
  },
];

const GuestManagement = (props: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const guests_list = guests.slice((currentPage - 1) * 10, currentPage * 10);
  const [activeFilter, setActiveFilter] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [selectedGuest, setSelectedGuests] = useState<string[]>([]);
  const [deletedGuests, setDeletedGuests] = useState<string[]>([]);
  const [columnsList, setColumnsList] = useState(columns);
  const [tags, setTags] = useState<string[]>([
    'Bridal Shower',
    'Bestman ',
    'Parents',
    'Bride’s friend',
    "Groom's Colleagues",
    'Long Distance',
    'Church',
    'Band',
    'Ex',
    "Bride's-Maid",
    'Family Friend',
    'Flight',
    'Co-Worker',
    'VIP',
  ]);

  const selectAllGuest = () => {
    if (selectedGuest.length === guests_list.length) {
      setSelectedGuests([]);
    } else {
      setSelectedGuests(guests_list.map((item) => item.id));
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

  const isColumnEnabled = (id: string): boolean | undefined => {
    let column = columnsList.find((item) => item.id === id);
    return column?.isShown;
  };

  return (
    <div className="pt-10 relative w-full h-full py-6">
      <div className="guest-spacing w-full overflow-hidden">
        <header className="flex justify-between">
          <h2 className="text-3xl font-bold text-[#1c1c1c]">Guest Management</h2>
          <div className="flex gap-[22px]">
            <DisabledButton />
            <AddGuest />
          </div>
        </header>
        <div className="flex items-center gap-10 py-8">
          <div className="flex items-center flex-1 border border-[#D0D5DD] px-3 py-2.5 gap-2 rounded-md">
            <Search height="20" width="20" />
            <input
              type="text"
              placeholder="Search for guests"
              className="focus:outline-none w-full"
              onChange={(e) => setSearch(e.target.value)}
            />
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
              disabled={selectedGuest.length ? false : true}
            >
              <Delete color={selectedGuest.length ? '#282828' : '#9C9C9C'} />
              Delete Guest
            </Button>
            <ImportGuestModal />
            <AssignTagsModal tags={tags} selectedGuestNumber={selectedGuest.length} />
            <ManageTagsModal tags={tags} tagSetter={setTags} />
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
        <FilterBtn
          statusFilter=""
          name="All guest"
          count={guests.length}
          activeBtn={activeFilter}
          setFunc={setActiveFilter}
        />
        <FilterBtn
          statusFilter="confirmed"
          name="Confirmed"
          count={guests.filter((item) => item.rsvpStatus === 'confirmed')?.length}
          activeBtn={activeFilter}
          setFunc={setActiveFilter}
        />
        <FilterBtn
          statusFilter="declined"
          name="Regretfully Declined"
          count={guests.filter((item) => item.rsvpStatus === 'declined')?.length}
          activeBtn={activeFilter}
          setFunc={setActiveFilter}
        />
        <FilterBtn
          statusFilter="pending"
          name="Awaiting Response"
          count={guests.filter((item) => item.rsvpStatus === 'pending')?.length}
          activeBtn={activeFilter}
          setFunc={setActiveFilter}
        />
      </div>
      <div className="mt-5 guest-spacing">
        <div className="border border-[#E1E1E1] rounded-[10px] overflow-x-scroll">
          <table className="w-full text-sm">
            <thead className="bg-[#FFF8FA] text-left font-medium border-b border-b-[#E1E1E1]">
              <tr>
                <td className="py-4 px-3">
                  <Checkbox onClick={selectAllGuest} checked={selectedGuest.length === guests_list.length} />
                </td>
                {isColumnEnabled('column1') && <th className="py-4 px-2">Guest Name</th>}
                {isColumnEnabled('column2') && <th className="py-4 px-2">Email</th>}
                {isColumnEnabled('column3') && <th className="py-4 px-2 text-center">RSV Status</th>}
                {isColumnEnabled('column4') && <th className="py-4 px-2">Invite Code</th>}
                {isColumnEnabled('column5') && <th className="py-4 px-2">Tags</th>}
                {isColumnEnabled('column6') && <th className="py-4 px-2 whitespace-nowrap">Plus One?</th>}
                {isColumnEnabled('column7') && <th className="py-4 px-4">Meal Preferences</th>}
                {isColumnEnabled('column8') && <th className="py-4 px-2">Gift</th>}
                {isColumnEnabled('column9') && (
                  <th className="py-4 px-2 text-center whitespace-nowrap"> Seat Allocation</th>
                )}
                {isColumnEnabled('column10') && <th className="py-4 px-2 text-center whitespace-nowrap"> Location</th>}
                <th className="py-4 px-6">
                  <MenuPopup columns={columnsList} columnSetter={setColumnsList} />
                </th>
              </tr>
            </thead>
            <tbody>
              {guests_list
                .filter(
                  (item) =>
                    item.rsvpStatus.includes(activeFilter) &&
                    !deletedGuests.includes(item.id) &&
                    item.fullName.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
                )
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
                      {isColumnEnabled('column1') && (
                        <td className="py-4 px-2 whitespace-nowrap">
                          <GuestProfiles name={item.fullName} id={item.id} />
                        </td>
                      )}
                      {isColumnEnabled('column2') && <td className="py-4 px-2">{item.email}</td>}
                      {isColumnEnabled('column3') && (
                        <td className="py-4 px-2">
                          <StatusTag status={item.rsvpStatus} />
                        </td>
                      )}
                      {isColumnEnabled('column4') && <td className="py-4 px-2">{item.inviteCode}</td>}
                      {isColumnEnabled('column5') && (
                        <td className="py-4 px-2">
                          <div className="flex gap-2">
                            {item.tags.map((item, index) => (
                              <span key={index} className="block tags">
                                {item}
                              </span>
                            ))}
                          </div>
                        </td>
                      )}
                      {isColumnEnabled('column6') && (
                        <td className="py-4 px-2 capitalize text-center">{item.plusOne}</td>
                      )}
                      {isColumnEnabled('column7') && (
                        <td className="py-4 px-4 text-sm whitespace-nowrap">{item.mealPreferecences}</td>
                      )}
                      {isColumnEnabled('column8') && (
                        <td className="py-4 px-2 whitespace-nowrap">{item.gift.join(', ')}</td>
                      )}
                      {isColumnEnabled('column9') && <td className="py-4 px-2 text-center">{item.seatAllocation}</td>}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default GuestManagement;
