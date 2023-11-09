'use client';
import React from 'react';
import bg from '../(assets)/image1.svg';
import Wrapper from '../(components)/Wrapper';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEye } from 'react-icons/ai';
import { PiEyeSlashLight } from 'react-icons/pi';
import { ImSpinner8 } from 'react-icons/im';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formError, setFormError] = React.useState({
    email: false,
    password: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormError((prev) => ({ ...prev, [e.target.id]: false }));
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.email === '') {
      setFormError((prev) => ({ ...prev, email: true }));
      return;
    }
    if (form.password === '') {
      setFormError((prev) => ({ ...prev, password: true }));
      return;
    }
    // setIsSubmitting(true);
  };

  return (
    <Wrapper
      bg={bg}
      bgColor="bg-[#371345] bg-opacity-20"
      bgText="Sign in to your account and continue planning your dream wedding with ease."
      bgTitle="Welcome Back to Dream Affairs Project!"
      sectionTitle="Sign in"
      sectionText="Sign in to Continue using Dream Affairs"
      showBgText={true}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="text"
            placeholder="Email"
            errorMessage="Please fill out this field"
            error={formError.email}
            hasValue={form.email !== '' ? true : false}
            value={form.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            errorMessage="Please fill out this field"
            error={formError.password}
            hasValue={form.password !== '' ? true : false}
            value={form.password}
            onChange={handleInputChange}
            icon={
              passwordVisible ? (
                <AiOutlineEye
                  onClick={() => setPasswordVisible((p) => !p)}
                  className="cursor-pointer text-lg text-gray-500"
                />
              ) : (
                <PiEyeSlashLight
                  onClick={() => setPasswordVisible((p) => !p)}
                  className="cursor-pointer text-lg text-gray-500"
                />
              )
            }
          />
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/auth/forgot-password"
            type="button"
            className="max-w-fit self-end cursor-pointer font-semibold text-sm text-primary"
          >
            Forgot Password?
          </Link>

          <Button
            variant={isSubmitting ? 'disabled' : 'secondary'}
            disabled={isSubmitting ? true : false}
            className="flex gap-3"
          >
            {isSubmitting ? <ImSpinner8 className="animate-spin" /> : null}
            {isSubmitting ? 'Signing in' : 'Sign in'}
          </Button>
          <p className="text-center">
            Don&rsquo;t have an account?{' '}
            <Link href="/auth/register" className="cursor-pointer font-semibold text-primary">
              Sign up
            </Link>
          </p>
          <div className="flex gap-5 justify-center items-center">
            <hr className="border-gray-300 w-full" />
            <p className="text-center text-gray-500 text-sm">OR</p>
            <hr className="border-gray-300 w-full" />
          </div>
          <Button
            variant="outline"
            className="border-[1px] rounded-lg p-3 font-semibold flex justify-center items-center gap-2"
          >
            <FcGoogle className="text-xl" /> Sign in with Google
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Login;
