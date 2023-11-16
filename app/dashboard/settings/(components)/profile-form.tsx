import React, { useState, useEffect } from 'react';
import Subtitle from './subtitle';
import DynamicInput from './DynamicInput';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import currencies from './currency';
import { Button } from '@/components/ui/button';

const ProfileDetail = () => {
  const [checkedData, setCheckedData] = useState<string>('male');
  const [currency, setCurrency] = useState<string>('Dollar ($)');

  useEffect(() => {
    console.log(checkedData);
    console.log(currency);
  }, [checkedData, currency]);

  const handleCheck = (data: string) => {
    setCheckedData(data);
  };

  return (
    <div className="md:mt-20">
      <form className="w-full">
        <div className="border rounded-xl px-5 py-8">
          <div className="w-full">
            <Subtitle text={'Personal Details'} />
            <div className="mt-6 md:mt-8 flex flex-wrap md:flex-nowrap items-center gap-8 md:gap-10">
              <div className="flex flex-wrap md:flex-nowrap items-center w-full md:w-[68%] gap-8 md:gap-10">
                <DynamicInput
                  onChange={() => {}}
                  type={'text'}
                  placeholder={'Enter first name'}
                  InputId={'fname'}
                  errorMessage={''}
                  error={false}
                  hasValue={false}
                  name={'fname'}
                  required={true}
                  label="First Name"
                  className="w-[90%] md:w-full"
                />
                <DynamicInput
                  onChange={() => {}}
                  type={'text'}
                  placeholder={'Enter last name'}
                  InputId={'lname'}
                  errorMessage={''}
                  error={false}
                  hasValue={false}
                  name={'email'}
                  label="Last Name"
                  className="w-[90%] md:w-full"
                />
              </div>
              <div className="w-[90%] md:w-[28%]">
                <p className="block mb-2 font-[500] text-[#1C1C1C]">Gender</p>
                <div className="flex gap-5 w-full">
                  <div
                    onClick={() => {
                      handleCheck('male');
                    }}
                    className="flex items-center h-full w-full rounded-lg border border-input bg-background px-3 py-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 focus:border-muted transition-colors duration-200 ease-in-out hover:border-primary false cursor-pointer group/item"
                  >
                    {checkedData === 'male' ? (
                      <BsCheckCircleFill className="text-[#535353] text-xl me-2 group/edit group-hover/item:text-primary" />
                    ) : (
                      <BsCheckCircle className="text-[#535353] text-xl me-2 group-hover/item:text-primary" />
                    )}
                    Male
                  </div>
                  <div
                    onClick={() => {
                      handleCheck('female');
                    }}
                    className="flex items-center h-full w-full rounded-lg border border-input bg-background px-3 py-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none ring-0 focus:border-muted transition-colors duration-200 ease-in-out hover:border-primary false false cursor-pointer group/item"
                  >
                    {checkedData === 'female' ? (
                      <BsCheckCircleFill className="text-[#535353] text-xl me-2 group/edit group-hover/item:text-primary" />
                    ) : (
                      <BsCheckCircle className="text-[#535353] text-xl me-2 group-hover/item:text-primary" />
                    )}
                    Female
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-14 flex flex-wrap md:flex-nowrap items-center gap-10">
            <div className="w-full md:w-[68%]">
              <Subtitle text={'Contact Information'} />
              <div className="w-full mt-6 md:mt-8 flex flex-wrap md:flex-nowrap items-center gap-8 md:gap-10">
                <div className="w-full flex flex-wrap md:flex-nowrap items-center gap-8 md:gap-10">
                  <DynamicInput
                    onChange={() => {}}
                    type={'email'}
                    placeholder={'example@gmail.com'}
                    InputId={'fname'}
                    errorMessage={''}
                    error={false}
                    hasValue={true}
                    value="example@gmail.com"
                    name={'eml'}
                    required={true}
                    label="Email"
                    className="w-[90%] md:w-full disabled:bg-secondary disabled:border-primary disabled:text-black"
                    disabled={true}
                    rightIcon={
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
                          stroke="#282828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
                          stroke="#282828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                          stroke="#282828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                  />
                  <DynamicInput
                    onChange={() => {}}
                    type={'number'}
                    placeholder={'Enter phone number'}
                    InputId={'phone'}
                    errorMessage={''}
                    error={false}
                    hasValue={false}
                    name={'phone'}
                    label="Phone"
                    className="w-[90%] md:w-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-[90%] md:w-[28%]">
              <Subtitle text={'Currency'} />
              <div className="mt-6 md:mt-8">
                <div className="flex flex-col">
                  <Label className="mb-3 text-base font-[500]">Select Currency</Label>
                  <Select>
                    <SelectTrigger className="w-full h-[55px]">
                      <SelectValue placeholder={currency} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Currency</SelectLabel>
                        {currencies.map((currency) => (
                          <div key={currency}>
                            <SelectItem onClick={() => setCurrency(currency)} value={currency}>
                              {currency}
                            </SelectItem>
                          </div>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button variant="secondary" className="px-10 mt-10">
          Update
        </Button>
      </form>
    </div>
  );
};

export default ProfileDetail;
