import React from 'react';
import Subtitle from './subtitle';
import ChangePassword from './password-change';
import { Button } from '@/components/ui/button';

const PasswordUpdate = () => {
  return (
    <div className=" p-5 lg:p-16">
      <ChangePassword />
      <div className="border rounded-2xl p-6 mt-6">
        <div>
          <Subtitle text="Enable Two-Factor Authentication" />
          <p className="sm:w-[70%] lg:w-[70%] xl:w-[38%] text-sm sm:text-base mt-4">
            Protect your account with a login code when you sign in on a device we don’t recognize.
          </p>
        </div>
        <Button variant="outline" className="px-10 mt-10 sm:w-[70%] xl:w-[35%] w-full">
          Set Up Two-Factor Authentication
        </Button>
      </div>
      <button className="px-10 mt-10 text-[#EAEAEA]" disabled>
        Log out
      </button>
      <button className="block mt-6 text-[#FF8A8A]">Delete Account</button>
    </div>
  );
};

export default PasswordUpdate;
