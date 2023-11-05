'use client';
import React from 'react';
import bg from '../(assets)/image2.svg';
import Wrapper from '../(components)/Wrapper';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEye } from 'react-icons/ai';
import { PiEyeSlashLight } from 'react-icons/pi';

const Register = () => {
  return (
    <Wrapper
      bg={bg}
      bgText="Create your account to start planning, organizing, and sharing your special day with our comprehensive wedding planning and management application. Your dream wedding journey begins here."
      bgTitle="Join Dream Affairs and Make Your Event a Reality!"
      sectionText="Lets get planning "
      sectionTitle="Let’s get you Started"
      showBgText={true}
    >
      <form className="flex flex-col gap-8">
        <label className="flex flex-col gap-2 font-semibold text-gray-700">
          Email
          <input
            type="text"
            placeholder="First Name"
            className="border font-normal rounded-lg p-3 outline-none ring-0"
          />
        </label>
        <label className="flex flex-col gap-2 font-semibold text-gray-700">
          Password
          <input
            type="password"
            placeholder="Password"
            className="border font-normal rounded-lg p-3 outline-none ring-0"
          />
        </label>
        <label className="flex flex-col gap-2 font-semibold text-gray-700">
          Confirm Password
          <input
            type="password"
            placeholder="Password"
            className="border font-normal rounded-lg p-3 outline-none ring-0"
          />
        </label>
        <div className="flex flex-col gap-3">
          <button type="button" className="max-w-fit self-end cursor-pointer font-semibold text-sm text-[#822DA4]">
            Forgot Password?
          </button>
          <button className="bg-[#E0B0FF] text-black rounded-lg p-3 font-semibold">Sign in</button>
          <p className="text-center">
            Already have an account?{' '}
            <Link href="/auth/login" className="cursor-pointer font-semibold text-[#822DA4]">
              Sign up
            </Link>
          </p>
          <div className="flex gap-5 justify-center items-center">
            <hr className="border-gray-300 w-full" />
            <p className="text-center text-gray-500 text-sm">OR</p>
            <hr className="border-gray-300 w-full" />
          </div>
          <button className="border-[#822DA4] border-[1px] rounded-lg p-3 font-semibold flex justify-center items-center gap-2">
            <FcGoogle className="text-xl" /> Sign up with Google
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;
