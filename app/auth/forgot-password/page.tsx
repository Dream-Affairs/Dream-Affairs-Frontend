'use client';
import React from 'react';
import Wrapper from '../(components)/Wrapper';
import bg from '../(assets)/image1.svg';
import fg from '../(assets)/fg.svg';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { isEmpty, isValidEmail } from '@/app/auth/(helpers)/helpers';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from '@/components/ui/use-toast';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState({
    state: false,
    message: '',
  });
  const [isValid, setIsValid] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_API_URL;
    if (isEmpty(email)) {
      setError({ state: true, message: 'Please fill out this field' });
      return;
    }
    if (!isValidEmail(email)) {
      setError({ state: true, message: 'Please enter a valid email address' });
      return;
    }

    try {
      setIsSubmitting(true);
      const data = await axios.post(`${url}/auth/forgot-password`, { email });
      console.log(data);
      // toast({
      //   title: 'Login Successful',
      //   description: 'You have successfully logged in',
      // });
      // setIsValid(true);
    } catch (error: any) {
      toast({
        title: 'Verification link sent',
        description: error.response.data.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper
      bg={bg}
      bgColor="bg-[#371345] bg-opacity-20"
      showBgText={false}
      sectionTitle={isValid ? '' : 'Forgot your Password?'}
      sectionText={isValid ? '' : 'Enter your registered Email address to receive reset instructions.'}
    >
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        {isValid ? (
          <div className="flex justify-center items-center flex-col gap-5">
            <Image src={fg} width={0} height={0} alt="" />
            <p className="text-sm">A Link has been sent to your Email</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                placeholder="johndoe@email.com"
                errorMessage={error.message}
                error={error.state}
                hasValue={email !== '' ? true : false}
                value={email}
                onChange={(e) => {
                  setError({ state: false, message: '' });
                  setEmail(e.target.value);
                }}
              />
            </div>
          </>
        )}
        <Button
          type="submit"
          variant={isValid ? 'disabled' : 'secondary'}
          className={`w-full h-[45px] ${isValid && 'cursor-auto'}`}
        >
          {isValid ? 'Check Mail to Proceed' : 'Send recovery Instructions'}
        </Button>

        <p className="text-sm text-center font-semibold">
          Go back to{' '}
          <Link href="/auth/login" className="text-primary">
            Sign in Page
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default ForgotPassword;
