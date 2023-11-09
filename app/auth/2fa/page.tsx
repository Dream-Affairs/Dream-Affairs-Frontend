'use client';
import React, { ChangeEvent } from 'react';
import bg from '../(assets)/image2.svg';
import Wrapper from '../(components)/Wrapper';
import { Button } from '@/components/ui/button';

type InputRef = React.RefObject<HTMLInputElement>;

const Twofa = () => {
  const [digits, setDigits] = React.useState<string[]>(['', '', '', '', '', '']);

  const inputRefs: InputRef[] = [
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
  ];

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>, index: number) {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const pastedDigits = pastedData.replace(/\D/g, '');

    if (digits.every((digit) => !digit)) {
      const newDigits = pastedDigits.split('').slice(0, 6);
      setDigits([...newDigits, ...new Array(6 - newDigits.length).fill('')]);

      const nextEmptyFieldIndex = newDigits.findIndex((digit) => !digit);
      if (nextEmptyFieldIndex !== -1 && inputRefs[nextEmptyFieldIndex].current) {
        inputRefs[nextEmptyFieldIndex]?.current?.focus();
      }
    } else {
      const newDigits = [...digits];
      newDigits[index] = pastedDigits[0] || '';
      setDigits(newDigits);

      if (index < 5 && inputRefs[index + 1].current) {
        inputRefs[index + 1]?.current?.focus();
      }
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, index: number) {
    const input = e.target as HTMLInputElement;
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    if ((e.key === 'Backspace' || e.key === 'Delete') && input.value === '') {
      e.preventDefault();
      const newDigits = [...digits];
      newDigits[index] = '';
      setDigits(newDigits);
      if (previousInput?.current) {
        previousInput.current.focus();
      }
    } else if (e.key === 'ArrowRight' && nextInput?.current) {
      nextInput.current.focus();
    } else if (e.key === 'ArrowLeft' && previousInput?.current) {
      previousInput.current.focus();
    }
  }

  const handleDigitChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (/^\d?$/.test(newValue)) {
      // Allow single digit or empty value
      const newDigits = [...digits];
      newDigits[index] = newValue;
      setDigits(newDigits);

      // Move focus to the next input field if a digit is entered
      if (newValue && index < 5 && inputRefs[index + 1].current) {
        inputRefs[index + 1]?.current?.focus();
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const code = digits.join('');
    console.log(code);
  };

  return (
    <Wrapper
      bg={bg}
      bgColor="bg-[#371345] bg-opacity-20"
      bgText="This extra layer of protection ensures that only you can access your wedding planning details."
      bgTitle="2-Factor Authentication"
      sectionTitle="Kindly enter your 2FA code"
      sectionText="To continue, kindly enter the Code from your authenticator app"
      showBgText={true}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <p className="text-sm">Enter 6-Digit Code to complete 2FA</p>
        <div className="grid grid-cols-7 gap-1  md:gap-3 aspect-square h-12">
          {digits.map((digit, index) => (
            <>
              <input
                key={index}
                name={index.toString()}
                type="tel"
                maxLength={1}
                pattern="\d"
                required
                value={digit}
                onChange={(e) => handleDigitChange(index, e)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={(e) => handlePaste(e, index)}
                ref={inputRefs[index]}
                aria-label={`Digit ${index + 1}`}
                className="border border-gray-300 rounded-md text text-center focus:outline-none focus:ring-1 focus:border-0 focus:ring-secondary transition-all duration-200 ease-in-out"
              />
              {index === 2 && <div className="grid place-content-center text-gray-400">-</div>}
            </>
          ))}
        </div>
        <Button variant="secondary">Continue</Button>
        <p className="text-center text-sm">
          Did not recieve Code? <span className="font-semibold text-primary cursor-pointer">Resend Code</span>
        </p>
      </form>
    </Wrapper>
  );
};

export default Twofa;
