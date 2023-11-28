import { Modal } from '@/components/ui/ModalTwo';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

interface modalProps {
  disabled: boolean;
  price: number;
  info: string;
  subscription: string;
  account: string;
}

const closeBtn = (
  <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.9 2.5H9.10001C8.42001 2.5 7.46 2.9 6.98 3.38L2.88 7.48001C2.4 7.96001 2 8.92001 2 9.60001V15.4C2 16.08 2.4 17.04 2.88 17.52L6.98 21.62C7.46 22.1 8.42001 22.5 9.10001 22.5H14.9C15.58 22.5 16.54 22.1 17.02 21.62L21.12 17.52C21.6 17.04 22 16.08 22 15.4V9.60001C22 8.92001 21.6 7.96001 21.12 7.48001L17.02 3.38C16.54 2.9 15.58 2.5 14.9 2.5Z"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.5 16L15.5 9" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.5 16L8.5 9" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PricingModal: React.FC<modalProps> = ({ disabled, price, info, subscription, account }) => {
  const [paymentOption, setPaymentOption] = useState('');

  return (
    <div className="lg:mt-[55px] lg:mb-[26px] h-[56px]">
      <Modal
        width="700"
        padding="0"
        customCloseIcon={closeBtn}
        customCloseClass={
          'rounded-[10px] p-1 absolute top-4 right-2 md:right-4 hover:border-primary transition-all duration-200 ease-in-out hover:text-primary scale-75'
        }
        showXIcon={true}
        btnTiggerText={
          <Button
            size="lg"
            variant={disabled ? 'disabled' : 'outline'}
            className={`${
              disabled ? '' : 'group-hover:bg-primary group-hover:text-white'
            } w-[100%] text-[16px] py-[1.62rem] mt-3 md:mt-0`}
            disabled={disabled}
          >
            Choose Plan
          </Button>
        }
        btnTriggerStyle="w-full"
      >
        <div className="">
          <div className="-mt-1">
            <h3 className="text-[#1C1C1C] text-lg md:text-2xl font-semibold px-4 md:px-8 border-b pb-4">
              Confirm plan
            </h3>
          </div>
          <div className="px-4 md:px-8 py-4">
            <div className="flex justify-between">
              <span className="text-[#6F6F6F]">Your plan</span>
              <div className="text-xs">
                <span className="text-lg font-medium">${price}</span> / {subscription}
              </div>
            </div>
            <div className="mt-3 md:mt-1">
              <span className="font-semibold capitalize">{account} Plan:</span> {info}
            </div>
          </div>
          <div className="">
            <p className="mt-4 pb-3 border-b font-medium px-4 md:px-8 pe-7">Payment Method</p>
            <div className="py-3 px-4 md:px-8 pe-7 pb-6">
              <form className="flex flex-col gap-3">
                <div className="flex gap-1.5 items-center min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#E0B0FF]"
                    type="radio"
                    name="payment-method"
                    id="stripe"
                    value={'stripe'}
                    checked={paymentOption === 'stripe'}
                    onChange={() => {
                      setPaymentOption('stripe');
                      console.log(paymentOption);
                    }}
                  />
                  <label className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="stripe">
                    Stripe
                  </label>
                </div>
                <div className="flex gap-1.5 items-center min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#E0B0FF]"
                    type="radio"
                    name="payment-method"
                    id="paystack"
                    value={'paystack'}
                    checked={paymentOption === 'paystack'}
                    onChange={() => {
                      setPaymentOption('paystack');
                      console.log(paymentOption);
                    }}
                  />
                  <label className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="paystack">
                    Paystack
                  </label>
                </div>
                <div className="flex gap-1.5 items-center min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#E0B0FF]"
                    type="radio"
                    name="payment-method"
                    id="flutterwave"
                    value={'flutterwave'}
                    checked={paymentOption === 'flutterwave'}
                    onChange={() => {
                      setPaymentOption('flutterwave');
                      console.log(paymentOption);
                    }}
                  />
                  <label className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="flutterwave">
                    Flutterwave
                  </label>
                </div>
                <Button variant={'secondary'} className="w-44 mt-4">
                  Continue
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PricingModal;
