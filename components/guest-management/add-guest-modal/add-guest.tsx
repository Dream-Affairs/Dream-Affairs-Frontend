import React, { useEffect, useState } from 'react';
import { AddGuestModal } from './add-guest-modal';
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
import { AddIcon } from '@/components/svg-icons/svg-icons';

function AddGuest() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [plusOneEnabled, setPlusOneEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (!toggle) {
      setPlusOneEnabled(false);
    }
  }, [toggle]);

  return (
    <AddGuestModal
      Icon={AddIcon}
      size="lg"
      variant="secondary"
      triggerBtnText="Add Guest"
      modalTitle="Add Guest Manually"
    >
      <form className="-mx-5 text-[#282828] pb-20">
        <section className="px-14">
          <p className="text-sm leading-loose my-5">
            Manually input guests and/or their plus one details onto your guest list, where it automatically generates a
            guest code
          </p>
          <div className="flex flex-col gap-2 mb-5">
            <Label htmlFor="guest_name" className="font-semibold">
              Guest Name
              <Asterisk />
            </Label>
            <Input
              id="guest_name"
              type="text"
              placeholder="Enter Full Name"
              errorMessage="Please fill out this field"
              error={false}
              hasValue={false}
            />
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <Label htmlFor="guest_email" className="font-semibold">
              Email
              <Asterisk />
            </Label>
            <Input
              id="guest_email"
              type="text"
              placeholder="e.g abc@website.com"
              errorMessage="Please fill out this field"
              error={false}
              hasValue={false}
            />
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div className="flex flex-col col-span-4">
              <Label className="mb-2 font-semibold">
                Phone Number
                <Asterisk />
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
                id="guest_phone_number"
                type="text"
                placeholder="0000000000000000"
                errorMessage="Please fill out this field"
                error={false}
                hasValue={false}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <Label htmlFor="location" className="font-semibold">
              Location
            </Label>
            <Input
              id="location"
              type="text"
              placeholder="Enter location"
              errorMessage="Please fill out this field"
              error={false}
              hasValue={false}
            />
          </div>
          <div className="flex flex-col col-span-4 w-1/2 mb-5">
            <Label className="mb-2 font-semibold">Table Assignment</Label>
            <Select>
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
          <div className="flex flex-col col-span-4 mb-5">
            <Label className="mb-2 font-semibold">Tags</Label>
            <Select>
              <SelectTrigger className="w-full h-[55px]">
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tags</SelectLabel>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Label htmlFor="plus_one_tuggle" className="font-medium">
                Toggle
              </Label>
              <input
                type="checkbox"
                id="plus_one_tuggle"
                checked={toggle}
                onChange={() => setToggle((p) => !p)}
                className="peer hidden"
                disabled={false}
              />
              <label
                htmlFor="plus_one_tuggle"
                className='flex p-0.5 w-10 h-6 rounded-xl bg-[#E5E7EB] border-2 border-gray-400 peer-checked:bg-primary peer-checked:border-primary transition-all relative after:content-[""] after:block after:h-full after:aspect-square after:rounded-full after:bg-gray-400 after:transition-all peer-checked:after:bg-white peer-checked:after:ml-auto peer-disabled:opacity-50'
              ></label>
            </div>
            {!plusOneEnabled && (
              <div className="font-medium text-xs">
                Required
                <Asterisk />
              </div>
            )}
          </div>
        </section>
        {!plusOneEnabled && (
          <div className="py-4 mb-2 px-14">
            <Button
              onClick={() => setPlusOneEnabled(true)}
              type="button"
              variant="ghost"
              disabled={!toggle}
              size="lg"
              className="px-0 py-4 gap-2 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 12H18" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 18V6" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium">Add Plus One</span>
            </Button>
          </div>
        )}

        {plusOneEnabled && (
          <section className="border-t mt-6 pt-8 border-[#E1E1E1] px-14">
            <div className="flex flex-col gap-2 mb-5">
              <Label htmlFor="plus_one_name" className="font-semibold">
                Plus One Name
                <Asterisk />
              </Label>
              <Input
                id="plus_one_name"
                type="text"
                placeholder="Enter Full Name"
                errorMessage="Please fill out this field"
                error={false}
                hasValue={false}
              />
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <Label htmlFor="plus_one_email" className="font-semibold">
                Email
                <Asterisk />
              </Label>
              <Input
                id="plus_one_email"
                type="text"
                placeholder="e.g abc@website.com"
                errorMessage="Please fill out this field"
                error={false}
                hasValue={false}
              />
            </div>
            <div className="grid grid-cols-12 gap-8">
              <div className="flex flex-col col-span-4">
                <Label className="mb-2 font-semibold">
                  Phone Number
                  <Asterisk />
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
                  id="plus_one_phone_number"
                  type="text"
                  placeholder="0000000000000000"
                  errorMessage="Please fill out this field"
                  error={false}
                  hasValue={false}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <Label htmlFor="plus_one_location" className="font-semibold">
                Location
              </Label>
              <Input
                id="plus_one_location"
                type="text"
                placeholder="Enter location"
                errorMessage="Please fill out this field"
                error={false}
                hasValue={false}
              />
            </div>
            <div className="font-medium text-xs text-end py-3">
              Required
              <Asterisk />
            </div>
          </section>
        )}

        <div className="px-14">
          <Button variant="secondary" className="w-[185px] text-xs font-semibold" size="lg">
            Save
          </Button>
        </div>
      </form>
    </AddGuestModal>
  );
}

export default AddGuest;
