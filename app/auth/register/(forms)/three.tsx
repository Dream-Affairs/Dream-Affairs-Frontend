'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../(assets)/logo.svg';
import da from '../../(assets)/da.svg';
import linkSent from '../../(assets)/linkSent.svg';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface Props {
  formOne: {
    email: string;
    password: string;
    confirmPassword: string;
    valid: boolean;
  };
}

const LinkSent = ({ formOne }: Props) => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      router.replace('/auth/login');
    }

    if (minutes === 0 && seconds === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [seconds, minutes, isActive, router]);

  return (
    <div className="flex flex-col w-full h-[100svh] md:justify-start md:items-center gap-3">
      <div className="flex gap-5 md:p-0 pl-5 md:flex-auto flex-[2] w-[60%] sm:w-auto">
        <Image width={0} height={0} src={logo} alt="logo" className="" />
        <Image width={0} height={0} src={da} alt="da" className="" />
      </div>
      <div className="w-[min(90vw,1000px)] mx-auto flex flex-col md:flex-auto flex-[8] justify-center items-center md:justify-normal text-center md:text-left">
        <Image width={0} height={0} src={linkSent} alt="linkSent" className="mb-5 w-[40%] md:w-auto" />

        <div className="flex flex-col justify-center items-center gap-3  bg-[#e0b3ff] bg-opacity-10 py-10 rounded-xl px-5 md:px-20">
          <h1 className="text-2xl font-bold">Verification Link Sent</h1>
          <p>We&apos;ve sent an email to {formOne.email} with a verification link</p>
          <Button variant="secondary" className="w-full">
            Resend Verification Link
          </Button>
          <div className="flex flex-col md:flex-row justify-between w-full md:items-center md:w-[450px]">
            <p className="text-xs">
              Link expires in{' '}
              <span className="text-primary">{`${minutes.toString().padStart(2, '0')}:${seconds
                .toString()
                .padStart(2, '0')}`}</span>
            </p>
            <p className="text-xs">
              Incorrect email address? <span className="text-primary cursor-pointer">Change email address</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkSent;
