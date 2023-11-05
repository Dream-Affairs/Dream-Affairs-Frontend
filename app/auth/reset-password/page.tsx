'use client';
import React from 'react';
import Wrapper from '../(components)/Wrapper';
import bg from '../(assets)/image1.svg';
import fg from '../(assets)/fg.svg';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { isEmpty, passwordChecker } from '@/app/auth/helpers';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineEye } from 'react-icons/ai';
import { PiEyeSlashLight } from 'react-icons/pi';

const ResetPassword = () => {
  const [password, setPassword] = React.useState({
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = React.useState({
    password: {
      state: false,
      message: '',
    },
    confirmPassword: {
      state: false,
      message: '',
    },
  });
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmpty(password.password)) {
      setError((prev) => ({ ...prev, password: { state: true, message: 'New password is required' } }));
      return;
    }

    if (passwordChecker(password.password)) {
      setError((prev) => ({
        ...prev,
        password: {
          state: true,
          message: passwordChecker(password.password),
        },
      }));
      return;
    }

    if (isEmpty(password.confirmPassword)) {
      setError((prev) => ({ ...prev, confirmPassword: { state: true, message: 'Confirm password is required' } }));
      return;
    }

    if (password.password !== password.confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: {
          state: true,
          message: 'Password does not match',
        },
      }));
      return;
    }

    setIsValid(true);
  };

  return (
    <Wrapper
      bg={bg}
      bgColor="bg-[#371345] bg-opacity-20"
      showBgText={false}
      sectionTitle={isValid ? 'Password Changed' : 'Reset Password'}
      sectionText={
        isValid ? 'Your Password has been Successfully changed' : 'Enter new password to complete account recovery'
      }
    >
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        {isValid ? (
          <></>
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type={passwordVisible ? 'text' : 'password'}
                placeholder="********"
                errorMessage={error.password.message}
                error={error.password.state}
                hasValue={password.password !== '' ? true : false}
                value={password.password}
                onChange={(e) => {
                  setError({ ...error, password: { state: false, message: '' } });
                  setPassword({ ...password, password: e.target.value });
                }}
                icon={
                  passwordVisible ? (
                    <PiEyeSlashLight
                      className="text-primary cursor-pointer"
                      onClick={() => setPasswordVisible(false)}
                    />
                  ) : (
                    <AiOutlineEye className="text-primary cursor-pointer" onClick={() => setPasswordVisible(true)} />
                  )
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="confirmPassword">Confirm new Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="********"
                errorMessage={error.confirmPassword.message}
                error={error.confirmPassword.state}
                hasValue={password.confirmPassword !== '' ? true : false}
                value={password.confirmPassword}
                onChange={(e) => {
                  setError({ ...error, confirmPassword: { state: false, message: '' } });
                  setPassword({ ...password, confirmPassword: e.target.value });
                }}
                icon={
                  passwordVisible ? (
                    <PiEyeSlashLight
                      className="text-primary cursor-pointer"
                      onClick={() => setPasswordVisible(false)}
                    />
                  ) : (
                    <AiOutlineEye className="text-primary cursor-pointer" onClick={() => setPasswordVisible(true)} />
                  )
                }
              />
            </div>
          </>
        )}
        {isValid ? (
          <Button type="button" variant={'secondary'} className={`w-full h-[45px]`}>
            <Link href="/auth/login">Sign in to Account</Link>
          </Button>
        ) : (
          <Button
            type="submit"
            variant={isValid ? 'disabled' : 'secondary'}
            className={`w-full h-[45px] ${isValid && 'cursor-auto'}`}
          >
            Reset Password
          </Button>
        )}

        {!isValid && (
          <p className="text-sm text-center font-semibold">
            Go back to{' '}
            <Link href="/auth/login" className="text-primary">
              Sign in Page
            </Link>
          </p>
        )}
      </form>
    </Wrapper>
  );
};

export default ResetPassword;
