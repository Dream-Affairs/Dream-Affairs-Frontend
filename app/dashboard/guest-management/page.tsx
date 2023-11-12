'use client';

import FilterBtn from '@/components/guest-management/filter-btn';
import { Delete, HashTag, Import, Plus, Send, Store, Tags, Track } from '@/components/svg-icons/svg-icons';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

type Props = {};

const guests = [
  {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    rsvpStatus: 'confirmed',
    inviteCode: '1234567890',
    tags: ['church', 'rehearsal'],
    plusOne: 'yes',
  },
  {
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    rsvpStatus: 'pending',
    inviteCode: '0987654321',
    tags: ['church', 'after party'],
    plusOne: 'no',
  },
  {
    fullName: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    rsvpStatus: 'declined',
    inviteCode: '2345678901',
    tags: ['bridal shower', 'VIP bestman'],
    plusOne: 'yes',
  },
  {
    fullName: 'Bob Anderson',
    email: 'bob.anderson@example.com',
    rsvpStatus: 'confirmed',
    inviteCode: '3456789012',
    tags: ['church', 'rehearsal'],
    plusOne: 'no',
  },
  {
    fullName: 'Eva Rodriguez',
    email: 'eva.rodriguez@example.com',
    rsvpStatus: 'confirmed',
    inviteCode: '4567890123',
    tags: ['after party', 'VIP bestman'],
    plusOne: 'yes',
  },
  {
    fullName: 'Michael Brown',
    email: 'michael.brown@example.com',
    rsvpStatus: 'pending',
    inviteCode: '5678901234',
    tags: ['church', 'bridal shower'],
    plusOne: 'no',
  },
  {
    fullName: 'Emily Davis',
    email: 'emily.davis@example.com',
    rsvpStatus: 'confirmed',
    inviteCode: '6789012345',
    tags: ['rehearsal', 'after party'],
    plusOne: 'yes',
  },
  {
    fullName: 'Chris Wilson',
    email: 'chris.wilson@example.com',
    rsvpStatus: 'pending',
    inviteCode: '7890123456',
    tags: ['bridal shower', 'VIP bestman'],
    plusOne: 'no',
  },
  {
    fullName: 'Olivia Taylor',
    email: 'olivia.taylor@example.com',
    rsvpStatus: 'declined',
    inviteCode: '8901234567',
    tags: ['church', 'rehearsal'],
    plusOne: 'yes',
  },
  {
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
  const [activeFilter, setActiveFilter] = useState<string>('All guest');

  return (
    <div className="pt-10 w-full h-full py-6 space-y-8">
      <div className=" guest-spacing w-full overflow-hidden">
        <header className="flex justify-between">
          <h2 className="text-3xl font-bold text-[#1c1c1c]">Guest Management</h2>
          <div className="flex gap-[22px]">
            <Button variant="disabled" className="gap-2.5" size={'lg'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path
                  d="M12.5 9V2L10.5 4"
                  stroke="#9C9C9C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 2L14.5 4"
                  stroke="#9C9C9C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.47998 13H6.88998C7.26998 13 7.60998 13.21 7.77998 13.55L8.94998 15.89C9.28998 16.57 9.97998 17 10.74 17H14.27C15.03 17 15.72 16.57 16.06 15.89L17.23 13.55C17.4 13.21 17.75 13 18.12 13H22.48"
                  stroke="#9C9C9C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 5.12988C3.96 5.64988 2.5 7.72988 2.5 11.9999V14.9999C2.5 19.9999 4.5 21.9999 9.5 21.9999H15.5C20.5 21.9999 22.5 19.9999 22.5 14.9999V11.9999C22.5 7.72988 21.04 5.64988 17.5 5.12988"
                  stroke="#9C9C9C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Export
            </Button>
            <Button size="lg" variant="secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18.5 19.5H14.5"
                  stroke="#282828"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 21.5V17.5"
                  stroke="#282828"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.44997 10.79 7.55997 8.84 7.55997 6.44C7.54997 3.99 9.53997 2 11.99 2C14.44 2 16.43 3.99 16.43 6.44C16.43 8.84 14.53 10.79 12.16 10.87Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.99 21.8097C10.17 21.8097 8.36004 21.3497 6.98004 20.4297C4.56004 18.8097 4.56004 16.1697 6.98004 14.5597C9.73004 12.7197 14.24 12.7197 16.99 14.5597"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Add Guest
            </Button>
          </div>
        </header>
        <div className="flex items-stretch gap-3.5 py-8">
          <div className="flex items-center w-5/6 border border-[#D0D5DD] px-3 gap-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.58329 1.66699C5.21104 1.66699 1.66663 5.2114 1.66663 9.58366C1.66663 13.9559 5.21104 17.5003 9.58329 17.5003C11.4692 17.5003 13.2012 16.8409 14.5611 15.7399L16.9107 18.0896C17.2361 18.415 17.7638 18.415 18.0892 18.0896C18.4147 17.7641 18.4147 17.2365 18.0892 16.9111L15.7396 14.5614C16.8405 13.2015 17.5 11.4696 17.5 9.58366C17.5 5.2114 13.9555 1.66699 9.58329 1.66699ZM3.33329 9.58366C3.33329 6.13188 6.13151 3.33366 9.58329 3.33366C13.0351 3.33366 15.8333 6.13188 15.8333 9.58366C15.8333 13.0354 13.0351 15.8337 9.58329 15.8337C6.13151 15.8337 3.33329 13.0354 3.33329 9.58366Z"
                fill="#8E8E8E"
              />
            </svg>
            <input type="text" placeholder="Search for guests" className="focus:outline-none" />
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M2.79167 1.66699H10.2084C10.825 1.66699 11.3333 2.17533 11.3333 2.792V4.02531C11.3333 4.47531 11.05 5.03366 10.775 5.317L8.35838 7.45033C8.02504 7.73366 7.80001 8.29198 7.80001 8.74198V11.1587C7.80001 11.492 7.57502 11.942 7.29169 12.117L6.50835 12.6253C5.77502 13.0753 4.76666 12.567 4.76666 11.667V8.69199C4.76666 8.30032 4.54168 7.792 4.31668 7.50867L2.18335 5.25866C1.90002 4.97532 1.67503 4.47532 1.67503 4.13365V2.842C1.66669 2.17533 2.175 1.66699 2.79167 1.66699Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.66663 9.99955V12.4996C1.66663 16.6662 3.33329 18.3329 7.49996 18.3329H12.5C16.6666 18.3329 18.3333 16.6662 18.3333 12.4996V7.49955C18.3333 4.89955 17.6833 3.26621 16.1749 2.41621C15.7499 2.17455 14.9 1.99121 14.125 1.86621"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8334 10.833H15"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.16663 14.167H15"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Filters
          </Button>
        </div>
        <div className="w-full overflow-hidden">
          <div className="flex items-center gap-3.5 w-full overflow-scroll no-scrollbar">
            <Button variant="outline" size={'sm'} className="gap-2">
              <Delete />
              Delete Guest
            </Button>
            <Button size="sm" className="guest-btn">
              <Import />
              Import List
            </Button>
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
        <FilterBtn name="All guest" count={112} activeBtn={activeFilter} setFunc={setActiveFilter} />
        <FilterBtn name="Confirmed" count={80} activeBtn={activeFilter} setFunc={setActiveFilter} />
        <FilterBtn name="Regretfully Declined" count={2} activeBtn={activeFilter} setFunc={setActiveFilter} />
        <FilterBtn name="Awaiting Response" count={20} activeBtn={activeFilter} setFunc={setActiveFilter} />
      </div>
      <div className="mt-5 guest-spacing">
        <div className="w-full rounded-lg overflow-hidden border border-[#E1E1E1]">
          <table className="w-full">
            <thead className="bg-[#FFF8FA] font-medium">
              <tr>
                <td className="py-4 px-3">
                  <input type="checkbox" />
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
                <td className="py-4 px-2">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="18" viewBox="0 0 4 18" fill="none">
                      <path
                        d="M2 17C2.26522 17 2.51957 16.8946 2.70711 16.7071C2.89464 16.5196 3 16.2652 3 16C3 15.7348 2.89464 15.4804 2.70711 15.2929C2.51957 15.1054 2.26522 15 2 15C1.73478 15 1.48043 15.1054 1.29289 15.2929C1.10536 15.4804 1 15.7348 1 16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17ZM2 10C2.26522 10 2.51957 9.89464 2.70711 9.70711C2.89464 9.51957 3 9.26522 3 9C3 8.73478 2.89464 8.48043 2.70711 8.29289C2.51957 8.10536 2.26522 8 2 8C1.73478 8 1.48043 8.10536 1.29289 8.29289C1.10536 8.48043 1 8.73478 1 9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10ZM2 3C2.26522 3 2.51957 2.89464 2.70711 2.70711C2.89464 2.51957 3 2.26522 3 2C3 1.73478 2.89464 1.48043 2.70711 1.29289C2.51957 1.10536 2.26522 1 2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2C1 2.26522 1.10536 2.51957 1.29289 2.70711C1.48043 2.89464 1.73478 3 2 3Z"
                        stroke="#A0A0A0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </thead>
            <tbody>
              {guests.map((item, index) => {
                return (
                  <tr key={index} className="border border-b-[#E1E1E1] last:border-none text-[#282828]">
                    <td className="py-4 px-3">
                      <input type="checkbox" />
                    </td>
                    <td className="py-4 px-2">{item.fullName}</td>
                    <td className="py-4 px-2">{item.email}</td>
                    <td className="py-4 px-2">
                      <div
                        style={{
                          color: getStatusColor(item.rsvpStatus),
                          backgroundColor: getStatusBg(item.rsvpStatus),
                        }}
                        className={`text-xs font-medium capitalize rounded-[4px] flex items-center py-1 px-2 text-[${getStatusColor(
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
                              className="block px-2 py-1 bg-[#E6F4EB] text-xs text-[#008D36] font-medium rounded-[8px]"
                            >
                              {item}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    <td className="py-4 px-2 capitalize">{item.plusOne}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GuestManagement;
