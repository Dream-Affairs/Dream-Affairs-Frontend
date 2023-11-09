import React from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEye } from 'react-icons/ai';
import { PiEyeSlashLight } from 'react-icons/pi';
import { ImSpinner8 } from 'react-icons/im';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { isEmpty, passwordChecker, isValidEmail } from '@/app/auth/(helpers)/helpers';

interface FormOneProps {
  formOne: {
    email: string;
    password: string;
    confirmPassword: string;
    valid: boolean;
  };
  setFormOne: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      confirmPassword: string;
      valid: boolean;
    }>
  >;
}

const One = ({ formOne, setFormOne }: FormOneProps) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formError, setFormOneError] = React.useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [errorMessages, setErrorMessages] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormOneError((prev) => ({ ...prev, [e.target.id]: false }));
    const { id, value } = e.target;
    setFormOne((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (isEmpty(formOne.email)) {
      setFormOneError((prev) => ({ ...prev, email: true }));
      setErrorMessages((prev) => ({ ...prev, email: 'Please fill out this field' }));
      return;
    }

    if (!isValidEmail(formOne.email)) {
      setFormOneError((prev) => ({ ...prev, email: true }));
      setErrorMessages((prev) => ({ ...prev, email: 'Please enter a valid email address' }));
      return;
    }

    if (isEmpty(formOne.password)) {
      setFormOneError((prev) => ({ ...prev, password: true }));
      setErrorMessages((prev) => ({ ...prev, password: 'Please fill out this field' }));
      return;
    }

    if (passwordChecker(formOne.password)) {
      setFormOneError((prev) => ({ ...prev, password: true }));
      setErrorMessages((prev) => ({ ...prev, password: passwordChecker(formOne.password) }));
      return;
    }

    if (isEmpty(formOne.confirmPassword)) {
      setFormOneError((prev) => ({ ...prev, confirmPassword: true }));
      setErrorMessages((prev) => ({ ...prev, confirmPassword: 'Please fill out this field' }));
      return;
    }

    if (formOne.password !== formOne.confirmPassword) {
      setFormOneError((prev) => ({ ...prev, confirmPassword: true }));
      setErrorMessages((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }));
      return;
    }

    setIsSubmitting(true);
    setFormOne((prev) => ({ ...prev, valid: true }));
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="text"
          placeholder="johndoe@email.com"
          errorMessage={errorMessages.email}
          error={formError.email}
          hasValue={formOne.email !== '' ? true : false}
          value={formOne.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type={passwordVisible ? 'text' : 'password'}
          placeholder="********"
          errorMessage={errorMessages.password}
          error={formError.password}
          hasValue={formOne.password !== '' ? true : false}
          value={formOne.password}
          onChange={handleInputChange}
          icon={
            passwordVisible ? (
              <AiOutlineEye
                onClick={() => setPasswordVisible((p) => !p)}
                className="cursor-pointer text-lg text-primary"
              />
            ) : (
              <PiEyeSlashLight
                onClick={() => setPasswordVisible((p) => !p)}
                className="cursor-pointer text-lg text-primary"
              />
            )
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type={passwordVisible ? 'text' : 'password'}
          placeholder="********"
          errorMessage={errorMessages.confirmPassword}
          error={formError.confirmPassword}
          hasValue={formOne.confirmPassword !== '' ? true : false}
          value={formOne.confirmPassword}
          onChange={handleInputChange}
          icon={
            passwordVisible ? (
              <AiOutlineEye
                onClick={() => setPasswordVisible((p) => !p)}
                className="cursor-pointer text-lg text-primary"
              />
            ) : (
              <PiEyeSlashLight
                onClick={() => setPasswordVisible((p) => !p)}
                className="cursor-pointer text-lg text-primary"
              />
            )
          }
        />
      </div>

      <div className="flex flex-col gap-4">
        <Button
          variant={isSubmitting ? 'disabled' : 'secondary'}
          disabled={isSubmitting ? true : false}
          className="flex gap-3"
          onClick={handleSubmit}
        >
          {isSubmitting ? <ImSpinner8 className="animate-spin" /> : null}
          {isSubmitting ? 'Please wait' : 'Next'}
        </Button>
        <p className="text-center">
          Already have an account?{' '}
          <Link href="/auth/login" className="cursor-pointer font-semibold text-primary">
            Sign in
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
          <FcGoogle className="text-xl" /> Sign up with Google
        </Button>
      </div>
    </div>
  );
};

export default One;
