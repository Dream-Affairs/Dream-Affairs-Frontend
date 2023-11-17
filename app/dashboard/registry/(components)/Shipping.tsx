import { Input } from '@/components/ui/input';
import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const Shipping = () => {
  return (
    <div className="mx-5 md:mx-9 mt-5 border rounded-md px-4 md:px-16 py-4 md:py-9 flex flex-col gap-11 ">
      <h2 className="text-sm md:text-2xl font-medium text-foreground ">
        Add your shipping details to let gift givers know where to send their gifts
      </h2>
      <div>
        <form action="">
          <div className="flex flex-col gap-2 mb-6 md:mb-12">
            <label htmlFor="name" className="text-sm md:text-base font-semibold ">
              Name
            </label>
            <div>
              <Input type="text" placeholder="Enter name" id="name" className="text-sm font-normal" />
              <p className="text-xs font-normal mt-1">Only one recipient name is required</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-6 md:mb-12">
            <label htmlFor="phone" className="text-sm md:text-base font-semibold ">
              Phone number
            </label>
            <Input
              type="tel"
              placeholder="Enter phone number"
              id="phone"
              className="placeholder-foreground text-sm font-normal "
            />
          </div>

          <div className="flex flex-col gap-2 mb-6 md:mb-12">
            <label htmlFor="country" className="text-sm md:text-base font-semibold ">
              Country
            </label>
            <Select>
              <SelectTrigger className=" h-11 md:h-[55px] text-sm font-normal">
                <SelectValue className="placeholder-gray-400" placeholder="Select" />
              </SelectTrigger>
              <SelectContent id="country">
                <SelectGroup className="text-sm font-normal">
                  <SelectItem value="apple">Nigeria</SelectItem>
                  <SelectItem value="banana">Canada</SelectItem>
                  <SelectItem value="blueberry">Ghana</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2 mb-6 md:mb-12">
            <label htmlFor="address1" className="text-sm md:text-base font-semibold ">
              Address1
            </label>
            <Input
              type="text"
              placeholder="Enter Address"
              id="address1"
              className="placeholder-foreground text-sm font-normal "
            />
          </div>

          <div className="flex flex-col gap-2 mb-6 md:mb-12 ">
            <label htmlFor="address2" className="text-sm md:text-base font-semibold ">
              Address2
            </label>
            <Input
              type="text"
              placeholder="Enter Address"
              id="address2"
              className="placeholder-foreground text-sm font-normal "
            />
          </div>

          <div className="flex gap-6 md:gap-12 mb-6 md:mb-12">
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="city" className="text-sm md:text-base font-semibold ">
                City
              </label>
              <Input
                type="text"
                placeholder="Enter City"
                id="city"
                className="placeholder-foreground text-sm font-normal "
              />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="state" className="text-sm md:text-base font-semibold ">
                State/Province
              </label>
              <Input
                type="text"
                placeholder="Enter state"
                id="state"
                className="placeholder-foreground text-sm font-normal "
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-6 md:mb-12 ">
            <label htmlFor="zip" className="text-sm md:text-base font-semibold ">
              Zip Code
            </label>
            <Input
              type="zip"
              placeholder="Enter zip code"
              id="address2"
              className="placeholder-foreground text-sm font-normal "
            />
          </div>

          <div className="flex justify-end">
            <Button
              variant="secondary"
              type="submit"
              className="font-medium text-sm md:text-base w-[185px] flex gap-2 h-11 md:h-[52px]"
            >
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
