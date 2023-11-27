import React, { useEffect, useState } from 'react';
import { AddGuestModal } from '../add-guest-modal/add-guest-modal';
import { Input } from '@/components/ui/input';
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
import Asterisk from '../asterisk/asterisk';
import country_codes from '../../../data/country_codes';
import { Button } from '@/components/ui/button';
import guests_list from '../../../data/dummy_guests';

enum Tab {
  MAIN = 'main_guest',
  PLUS_ONE = 'plus_one',
}

function GuestProfiles({ id, name }: { id: string; name: string }) {
  const [activeTab, setActiveTab] = useState<'main_guest' | 'plus_one'>(Tab.MAIN);
  const [selectedGuestData, setSelectedGuestsData] = useState(guests_list.find((item) => item.id === id));

  return (
    <AddGuestModal size="sm" variant="ghost" triggerBtnText={name} modalTitle="Profiles">
      <div className="flex items-center justify-center gap-4 -mt-4">
        <Button
          variant="ghost"
          onClick={() => setActiveTab(Tab.MAIN)}
          size="sm"
          className={`profile-tab-btn ${activeTab === Tab.MAIN && 'active'}`}
        >
          Main Guest
        </Button>
        <Button
          variant="ghost"
          onClick={() => setActiveTab(Tab.PLUS_ONE)}
          size="sm"
          className={`profile-tab-btn ${activeTab === Tab.PLUS_ONE && 'active'}`}
        >
          Plus One
        </Button>
      </div>

      <form className="text-[#282828] pt-10 pb-20 guest-modal-border">
        {activeTab === Tab.MAIN && (
          <section className="px-14">
            <div className="flex flex-col gap-2 mb-5">
              <Label htmlFor="profile_guest_name" className="font-semibold">
                Guest Name
                <Asterisk color="#1C1C1C" />
              </Label>
              <Input
                id="profile_guest_name"
                type="text"
                placeholder="Enter Full Name"
                errorMessage="Please fill out this field"
                error={false}
                hasValue={false}
                value={selectedGuestData?.fullName}
              />
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <Label htmlFor="profile_guest_email" className="font-semibold">
                Email
                <Asterisk color="#1C1C1C" />
              </Label>
              <Input
                id="profile_guest_email"
                type="text"
                placeholder="e.g abc@website.com"
                errorMessage="Please fill out this field"
                error={false}
                hasValue={false}
                value={selectedGuestData?.email}
              />
            </div>
            <div className="grid grid-cols-12 gap-8">
              <div className="flex flex-col col-span-4">
                <Label className="mb-2 font-semibold">
                  Phone Number
                  <Asterisk color="#1C1C1C" />
                </Label>
                <Select value="+1">
                  <SelectTrigger className="w-full h-[55px]">
                    <SelectValue placeholder="Country Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Country Code</SelectLabel>
                      <SelectItem value="+1">+1</SelectItem>
                      {country_codes.map((item) => {
                        if (item.code === '+1') return;
                        return (
                          <SelectItem key={item.name} value={item.code}>
                            {item.code}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2 mb-5 mt-auto col-span-8">
                <Label className="mb-4"></Label>
                <Input
                  id="profile_guest_phone_number"
                  type="text"
                  placeholder="0000000000000000"
                  errorMessage="Please fill out this field"
                  error={false}
                  hasValue={false}
                  value="234 334466 7840"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <Label htmlFor="profile_location" className="font-semibold">
                Location
              </Label>
              <Input
                id="profile_location"
                type="text"
                placeholder="Enter location"
                errorMessage="Please fill out this field"
                error={false}
                hasValue={false}
                value="12 Avenue, Manchester, Switzerland."
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col mb-5">
                <Label className="mb-2 font-semibold">Table Assignment</Label>
                <Select value="4">
                  <SelectTrigger className="w-full h-[55px]">
                    <SelectValue placeholder="Select a Table" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Table Assignment</SelectLabel>
                      {Array.from({ length: 50 }, (x, i) => i + 1).map((item) => {
                        return (
                          <SelectItem key={item} value={item.toString()}>
                            {item}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2 mb-5">
                <Label htmlFor="profile_invite_code" className="font-semibold">
                  Invite Code
                </Label>
                <Input
                  id="profile_invite_code"
                  type="text"
                  placeholder="Enter location"
                  errorMessage="Please fill out this field"
                  error={false}
                  hasValue={false}
                  value="12 Avenue, Manchester, Switzerland."
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col mb-5">
                <Label className="mb-2 font-semibold">RSVP Status</Label>
                <Select value={selectedGuestData?.rsvpStatus}>
                  <SelectTrigger className="w-full h-[55px]">
                    <SelectValue placeholder="RSVP Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>RSVP Status</SelectLabel>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="declined">Declined</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col mb-5">
                <Label className="mb-2 font-semibold">Gifts</Label>
                <Select value="purchased">
                  <SelectTrigger className="w-full h-[55px]">
                    <SelectValue placeholder="Gift" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gifts</SelectLabel>
                      <SelectItem value="purchased">Purchased</SelectItem>
                      <SelectItem value="donated">Donated</SelectItem>
                      <SelectItem value="null">Null</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col col-span-4 mb-5">
              <Label className="mb-2 font-semibold">Meal Preferences</Label>
              <Select value="floating-berries-groceries">
                <SelectTrigger className="w-full h-[55px]">
                  <SelectValue placeholder="Meal Preferences" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Meal Preferences</SelectLabel>
                    <SelectItem value="floating-berries-groceries">Floating berries & groceries</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col col-span-4 mb-5">
              <Label className="mb-2 font-semibold">Tags</Label>
              <Select value="Bride-s-friend-Grooms-ex-friendsNfamily-Long-Distance">
                <SelectTrigger className="w-full h-[55px]">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tags</SelectLabel>
                    <SelectItem value="Bride-s-friend-Grooms-ex-friendsNfamily-Long-Distance">
                      Bride’s friend, Groom’s ex, friendsNfamily, Long Distance
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </section>
        )}

        {activeTab === Tab.PLUS_ONE && (
          <section className=" px-14">
            <div className="flex flex-col gap-2 mb-5">
              <Label htmlFor="profile_plus_one_name" className="font-semibold">
                Plus One Name
                <Asterisk color="#1C1C1C" />
              </Label>
              <Input
                id="profile_plus_one_name"
                type="text"
                placeholder="Enter Full Name"
                errorMessage="Please fill out this field"
                error={false}
                hasValue={false}
                value="Bryanne Odjede"
              />
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <Label htmlFor="profile_plus_one_email" className="font-semibold">
                Email
                <Asterisk color="#1C1C1C" />
              </Label>
              <Input
                id="profile_plus_one_email"
                type="text"
                placeholder="e.g abc@website.com"
                errorMessage="Please fill out this field"
                error={false}
                hasValue={false}
                value="xyx@website.com"
              />
            </div>
            <div className="grid grid-cols-12 gap-8">
              <div className="flex flex-col col-span-4">
                <Label className="mb-2 font-semibold">
                  Phone Number
                  <Asterisk color="#1C1C1C" />
                </Label>
                <Select>
                  <SelectTrigger className="w-full h-[55px]">
                    <SelectValue placeholder="Country Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Country Code</SelectLabel>
                      <SelectItem value="+1">+1</SelectItem>
                      {country_codes.map((item) => {
                        if (item.code === '+1') return;
                        return (
                          <SelectItem key={item.name} value={item.code}>
                            {item.code}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2 mb-5 mt-auto col-span-8">
                <Label className="mb-4"></Label>
                <Input
                  id="profile_plus_one_phone_number"
                  type="text"
                  placeholder="0000000000000000"
                  errorMessage="Please fill out this field"
                  error={false}
                  hasValue={false}
                  value="234 334466 7840"
                />
              </div>
            </div>
            <div className="flex flex-col col-span-4 mb-5">
              <Label className="mb-2 font-semibold">Meal Preferences</Label>
              <Select value="floating-berries-groceries">
                <SelectTrigger className="w-full h-[55px]">
                  <SelectValue placeholder="Meal Preferences" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Meal Preferences</SelectLabel>
                    <SelectItem value="floating-berries-groceries">Floating berries & groceries</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </section>
        )}

        <div className="px-14 mt-8">
          <Button variant="destructive" className="w-[185px] font-semibold mr-6 text-[#282828]" size="lg">
            Remove Guest
          </Button>
          <Button disabled={true} variant="secondary" className="w-[185px] font-semibold" size="lg">
            Save
          </Button>
        </div>
      </form>
    </AddGuestModal>
  );
}

export default GuestProfiles;
