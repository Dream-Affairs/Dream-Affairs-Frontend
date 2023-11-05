import Image from 'next/image';
import React from 'react';
import logo from '../../(assets)/logo.svg';
import da from '../../(assets)/da.svg';
import linkSent from '../../(assets)/linkSent.svg';
import { Button } from '@/components/ui/button';

interface Props {
  formOne: {
    email: string;
    password: string;
    confirmPassword: string;
    valid: boolean;
  };
}

const LinkSent = ({ formOne }: Props) => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-3">
      <div className="flex gap-5 mt-20 mb-14">
        <Image width={0} height={0} src={logo} alt="logo" className="" />
        <Image width={0} height={0} src={da} alt="da" className="" />
      </div>
      <Image width={0} height={0} src={linkSent} alt="linkSent" className="mb-5" />

      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-2xl font-bold">Verification Link Sent</h1>
        <p>We&apos;ve sent an email to {formOne.email} with a verification link</p>
        <Button variant="secondary" className="w-full">
          Resend Verification Link
        </Button>
        <div className="flex justify-between items-center w-[450px] mb-20 ">
          <p className="text-xs">Link expires in </p>
          <p className="text-xs">
            Incorrect email address? <span className="text-primary cursor-pointer">Change email address</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkSent;
