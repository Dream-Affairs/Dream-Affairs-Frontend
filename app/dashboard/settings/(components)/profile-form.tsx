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
  const [form, setForm] = useState({
    firstname: 'John',
    lastname: '',
    email: 'example@gmail.com',
    phone: '',
    gender: '',
    currency: 'US Dollar ($)',
  });

  const [formError, setFormError] = React.useState({
    firstname: { status: false, message: '' },
    lastname: { status: false, message: '' },
    email: { status: false, message: '' },
    phone: { status: false, message: '' },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormError((prev) => ({ ...prev, [e.target.id]: false }));
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    console.log(form);
  };

  useEffect(() => {
    console.log(checkedData);
  }, [checkedData]);

  const handleCheck = (data: string) => {
    setCheckedData(data);
    setForm({ ...form, gender: data });
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
                  onChange={handleInputChange}
                  type={'text'}
                  value={form.firstname}
                  placeholder={'Enter first name'}
                  InputId={'firstname'}
                  errorMessage={formError.firstname.message}
                  error={formError.firstname.status}
                  // hasValue={form.firstname !== '' ? true : false}
                  name={'firstname'}
                  required={true}
                  label="First Name"
                  className="w-[90%] md:w-full"
                />
                <DynamicInput
                  onChange={handleInputChange}
                  type={'text'}
                  value={form.lastname}
                  placeholder={'Enter last name'}
                  InputId={'lastname'}
                  errorMessage={formError.lastname.message}
                  error={formError.lastname.status}
                  hasValue={form.lastname !== '' ? true : false}
                  name={'lastname'}
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
            <div className="w-full pe-2">
              <Subtitle text={'Contact Information'} />
              <div className="w-full mt-6 md:mt-8 flex flex-wrap md:flex-nowrap items-center gap-8 md:gap-10">
                <div className="w-full flex flex-wrap md:flex-nowrap items-center gap-8 md:gap-10">
                  <DynamicInput
                    onChange={handleInputChange}
                    type={'email'}
                    placeholder={'example@gmail.com'}
                    InputId={'email'}
                    errorMessage={formError.email.message}
                    error={formError.email.status}
                    hasValue={form.email !== '' ? true : false}
                    value={form.email}
                    name={'email'}
                    required={true}
                    label="Email"
                    className="w-[90%] md:w-full disabled:bg-secondary disabled:border-primary text-primary"
                    disabled={true}
                  />
                  <DynamicInput
                    onChange={handleInputChange}
                    type={'number'}
                    placeholder={'Enter phone number'}
                    InputId={'phone'}
                    errorMessage={formError.phone.message}
                    error={formError.phone.status}
                    hasValue={form.phone !== '' ? true : false}
                    name={'phone'}
                    label="Phone"
                    className="w-[90%] md:w-full"
                  />
                  <div className="flex flex-col w-[90%]">
                    <Label className="mb-3 text-base font-[500]">Select Currency</Label>
                    <Select
                      onValueChange={(value) => {
                        setForm({ ...form, currency: value });
                      }}
                    >
                      <SelectTrigger className="w-full h-[55px]">
                        <SelectValue placeholder={form.currency} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Currency</SelectLabel>
                          {currencies.map((currency) => (
                            <div onClick={() => alert(currency.name)} key={currency.code}>
                              <SelectItem value={currency.name}>{`${currency.name} (${currency.symbol})`}</SelectItem>
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
        </div>
        <Button variant="secondary" className="px-10 mt-10">
          Update
        </Button>
      </form>
    </div>
  );
};

export default ProfileDetail;
