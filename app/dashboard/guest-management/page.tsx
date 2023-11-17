'use client';

import AddGuest from '@/components/guest-management/add-guest-modal/add-guest';
import { AddGuestModal } from '@/components/guest-management/add-guest-modal/add-guest-modal';
import FilterBtn from '@/components/guest-management/filter-btn';
import ImportGuestModal from '@/components/guest-management/import-guest-modal/import-guest-modal';
import MenuPopup from '@/components/guest-management/menu-popup/menu-popup';
import {
  ArrowLeft,
  ArrowRight,
  Delete,
  Ellipsis,
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
import React, { ChangeEventHandler, useState } from 'react';

type Props = {};

const guests = [
  {
    id: 'guest1',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    rsvpStatus: 'confirmed',
    inviteCode: '1234567890',
    tags: ['church', 'rehearsal'],
    plusOne: 'yes',
  },
  {
    id: 'guest2',
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    rsvpStatus: 'pending',
    inviteCode: '0987654321',
    tags: ['church', 'after party'],
    plusOne: 'no',
  },
  {
    id: 'guest3',
    fullName: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    rsvpStatus: 'declined',
    inviteCode: '2345678901',
    tags: ['bridal shower', 'VIP bestman'],
    plusOne: 'yes',
  },
  {
    id: 'guest4',
    fullName: 'Bob Anderson',
    email: 'bob.anderson@example.com',
    rsvpStatus: 'confirmed',
    inviteCode: '3456789012',
    tags: ['church', 'rehearsal'],
    plusOne: 'no',
  },
  {
    id: 'guest4',
    fullName: 'Eva Rodriguez',
    email: 'eva.rodriguez@example.com',
    rsvpStatus: 'confirmed',
    inviteCode: '4567890123',
    tags: ['after party', 'VIP bestman'],
    plusOne: 'yes',
  },
  {
    id: 'guest5',
    fullName: 'Michael Brown',
    email: 'michael.brown@example.com',
    rsvpStatus: 'pending',
    inviteCode: '5678901234',
    tags: ['church', 'bridal shower'],
    plusOne: 'no',
  },
  {
    id: 'guest6',
    fullName: 'Emily Davis',
    email: 'emily.davis@example.com',
    rsvpStatus: 'confirmed',
    inviteCode: '6789012345',
    tags: ['rehearsal', 'after party'],
    plusOne: 'yes',
  },
  {
    id: 'guest7',
    fullName: 'Chris Wilson',
    email: 'chris.wilson@example.com',
    rsvpStatus: 'pending',
    inviteCode: '7890123456',
    tags: ['bridal shower', 'VIP bestman'],
    plusOne: 'no',
  },
  {
    id: 'guest8',
    fullName: 'Olivia Taylor',
    email: 'olivia.taylor@example.com',
    rsvpStatus: 'declined',
    inviteCode: '8901234567',
    tags: ['church', 'rehearsal'],
    plusOne: 'yes',
  },
  {
    id: 'guest9',
    fullName: 'Daniel Martinez',
    email: 'daniel.martinez@example.com',
    rsvpStatus: 'confirmed',
    inviteCode: '9012345678',
    tags: ['after party', 'VIP bestman'],
    plusOne: 'no',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed':
      return '#008D36';
    case 'pending':
      return '#FF8515';
    case 'declined':
      return '#F00';
    default:
      return 'black'; // Default color for unknown status
  }
};

const getStatusBg = (status: string) => {
  switch (status) {
    case 'confirmed':
      return '#E6F4EB';
    case 'pending':
      return '#FFF3E8';
    case 'declined':
      return '#FFE6E6';
    default:
      return 'black'; // Default color for unknown status
  }
};

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
      <div className=" guest-spacing w-full overflow-hidden">
        <header className="flex justify-between">
          <h2 className="text-3xl font-bold text-[#1c1c1c]">Guest Management</h2>
          <div className="flex gap-[22px]">
            <Button variant="disabled" className="gap-2.5" size={'lg'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path
                  d="M12.5 9V2L10.5 4"
                  stroke="#9C9C9C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 2L14.5 4"
                  stroke="#9C9C9C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.47998 13H6.88998C7.26998 13 7.60998 13.21 7.77998 13.55L8.94998 15.89C9.28998 16.57 9.97998 17 10.74 17H14.27C15.03 17 15.72 16.57 16.06 15.89L17.23 13.55C17.4 13.21 17.75 13 18.12 13H22.48"
                  stroke="#9C9C9C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 5.12988C3.96 5.64988 2.5 7.72988 2.5 11.9999V14.9999C2.5 19.9999 4.5 21.9999 9.5 21.9999H15.5C20.5 21.9999 22.5 19.9999 22.5 14.9999V11.9999C22.5 7.72988 21.04 5.64988 17.5 5.12988"
                  stroke="#9C9C9C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
              <Track />
              Track RSVP
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
                <td className="py-4 px-2">RSV Status</td>
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
                      <td className="py-4 px-2 whitespace-nowrap">{item.fullName}</td>
                      <td className="py-4 px-2">{item.email}</td>
                      <td className="py-4 px-2">
                        <div
                          style={{
                            color: getStatusColor(item.rsvpStatus),
                            backgroundColor: getStatusBg(item.rsvpStatus),
                          }}
                          className={`text-xs font-medium capitalize rounded-[20px] flex items-center w-fit mx-auto py-1 px-3 text-[${getStatusColor(
                            item.rsvpStatus,
                          )}] bg-[${getStatusBg(item.rsvpStatus)}]`}
                        >
                          <div
                            style={{ backgroundColor: getStatusColor(item.rsvpStatus) }}
                            className={`h-1.5 w-1.5 rounded-full mr-2`}
                          />
                          {item.rsvpStatus}
                        </div>
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

      <div className="flex w-fit border border-[#D1D5DB] rounded mx-auto mt-12 text-[#6B7280] text-sm font-medium">
        <button className="flex items-center border-r border-[#D1D5DB py-2 px-3 gap-2">
          <ArrowLeft />
          Previous
        </button>
        <button className="py-2 px-3 border-r border-[#D1D5DB]">1</button>
        <button className="py-2 px-3 border-r border-[#D1D5DB] bg-[#D1D5DB]">2</button>
        <button className="py-2 px-3 border-r border-[#D1D5DB]">3</button>
        <button className="flex items-center py-2 px-3 gap-2">
          Next
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default GuestManagement;
