'use client';
import React from 'react';
import { useState } from 'react';
import Teammgt from './teammgt';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectContent,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';

const InviteTeam: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [roleError, setRoleError] = useState('');

  //   full name input field
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
    if (!e.target.value) {
      setFullNameError('Please fill out this field');
    } else {
      setFullNameError('');
    }
  };

  //   email imput field
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError('Please fill out this field');
    } else {
      setEmailError('');
    }
  };

  //   change role dropdown
  const handleRoleChange = (selectedRole: string) => {
    // Log the selected role.
    console.log('Selected Role:', selectedRole);

    // Set the role state variable to the selected role.
    setRole(selectedRole);

    // Clear the role error message when a role is selected.
    setRoleError('');
  };

  //   sendinvite button
  const handleInviteClick = () => {
    let isValid = true;

    if (!fullName) {
      setFullNameError('Please fill out this field');
      isValid = false;
    }

    if (!email) {
      setEmailError('Please fill out this field');
      isValid = false;
    }

    // if (!role) {
    //   setRoleError('Please choose a role');
    //   isValid = false;
    // }

    if (isValid) {
      console.log('Full Name:', fullName);
      console.log('Email:', email);
      console.log('Role:', role);
    }
  };
  return (
    <>
      <div className="pl-6 mt-6">
        <h1 className=" text-[32px] font-semibold">Invite Team</h1>

        <p className=" lg:w-3/5 text-base leading-[22.4px] font-normal">
          Transform event planning by inviting family and friends to collaborate seamlessly and create lasting memories
          together.
        </p>
      </div>

      <div className="my-4 border border-border"></div>

      {/* invite team section */}
      <section className="mx-6 flex flex-col gap-4 rounded-md px-2 py-8 border border-border">
        <h1 className="text-2xl font-medium">Invite Team form</h1>

        <div className="flex flex-col items-center justify-center lg:flex-row gap-2">
          {/* full name input */}
          <div className="flex flex-col w-full gap-2">
            <Label htmlFor="fullname">
              Full Name <span className="text-red-600">*</span>
            </Label>
            <Input
              id="fullname"
              type="text"
              placeholder="Full Name"
              errorMessage={fullNameError}
              error={!!fullNameError}
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>

          {/* email input */}
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="email">
              Email <span className="text-red-600">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              errorMessage={emailError}
              error={!!emailError}
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          {/* dropdown for roles */}
          <div className="flex w-full flex-col gap-3">
            <Label>
              Role <span className="text-red-600">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full h-[59px]">
                <SelectValue placeholder="Choose Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Choose role</SelectLabel>
                  <SelectItem value="admin" onSelect={() => handleRoleChange('Admin')}>
                    Admin
                  </SelectItem>

                  <SelectItem value="decorator" onSelect={() => handleRoleChange('Decorator')}>
                    Decorator
                  </SelectItem>
                  <SelectItem value="guest" onSelect={() => handleRoleChange('Guest')}>
                    Guest
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {roleError && <p className="text-red-600">{roleError}</p>}
          </div>
        </div>

        <div className="flex lg:justify-start mt-4 items-center justify-center sm:w-full gap-6">
          <Button variant="outline" className=" w-32">
            Cancel
          </Button>
          <Button variant="secondary" className=" w-32" onClick={handleInviteClick}>
            Send Invite
          </Button>
        </div>
      </section>

      {/* team management section */}
      <section className="mx-6 my-6 flex flex-col gap-4 rounded-md px-2 pt-2 pb-6 border border-border">
        <h1 className=" text-2xl font-medium">Team management</h1>

        <Teammgt />
      </section>
      {/* {isModalOpen && (
        <MyModal
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
          modalRef={modalRef}
        />
      )} */}
    </>
  );
};

export default InviteTeam;
