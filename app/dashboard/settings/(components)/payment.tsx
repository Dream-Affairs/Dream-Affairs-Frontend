import freemium from '../(assets)/notification-circle.svg';
import proIcon from '../(assets)/medal-star.svg';
import coreIcon from '../(assets)/share.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { BsCalendar2Date } from 'react-icons/bs';
import { Modal } from '@/components/ui/ModalTwo';
import PricingModal from './pricingModal';

const arrowR = (
  <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 9.98172V15.3217C6 18.6417 8.35 19.9917 11.22 18.3417L12.5 17.6017C12.81 17.4217 13 17.0917 13 16.7317V8.57172C13 8.21172 12.81 7.88172 12.5 7.70172L11.22 6.96172C8.35 5.31172 6 6.66172 6 9.98172Z"
      className="fill-[#AB72C2] group-hover:fill-white transition duration-100"
    />
    <path
      d="M14 9.44172V15.8717C14 16.2617 14.42 16.5017 14.75 16.3017L15.85 15.6617C18.72 14.0117 18.72 11.2917 15.85 9.64171L14.75 9.00172C14.42 8.81172 14 9.05172 14 9.44172Z"
      className="fill-[#AB72C2] group-hover:fill-white transition duration-100"
    />
  </svg>
);

const subscriptionData = [
  {
    account: 'free',
    price: 0,
    info: 'Basic Event Management',
    subscription: 'free',
  },
  {
    account: 'pro',
    price: 10,
    info: 'Comprehensive Event Suite',
    subscription: 'one time fee',
  },
  {
    account: 'core',
    price: 5,
    info: 'Advanced Planning Features',
    subscription: 'one time fee',
  },
];

const Payment = () => {
  const [free, setFree] = useState<boolean>(false);
  const [pro, setPro] = useState<boolean>(false);
  const [core, setCore] = useState<boolean>(false);

  const handlePlan = () => {};

  return (
    <div className="p-5 lg:px-16 lg:py-12">
      <section className="w-full mx-auto flex flex-col lg:flex-row  items-center gap-6 lg:gap-10">
        <div className="group hover:bg-[#E0B0FF] transition-all duration-100 lg:w-[325px] w-[327px] h-auto rounded-[20px] lg:px-4 px-[19px] border-[#EBEBEB] border text-[14px] bg-white mb-[20px] lg:mb-0">
          <div className="h-[195px] border-b border-[#BCBCBC] mt-[20px]">
            <Image src={freemium} alt="" width={24} height={24} />
            <h3 className="text-[24px] font-[600] mt-[12px] capitalize">{subscriptionData[0].account} Plan</h3>
            <p className="text-[#6F6F6F] mt-0">{subscriptionData[0].info}</p>
            <h2 className="text-[64px] font-[500] text-[#242424]">
              <span className="text-[14px] text-[#6F6F6F] align-top mt-4 inline-block">$</span>
              {subscriptionData[0].price}
              <span className="text-[14px] text-[#6F6F6F]">/{subscriptionData[0].subscription}</span>
            </h2>
          </div>
          <div>
            <div className="flex items-start lg:my-[24px] mt-[24px] mb-[20px]">
              <span className="self-baseline">{arrowR}</span>
              <p className="">
                <strong>Event Dashboard:</strong> Main event overview, Customizable URLs.
              </p>
            </div>
            <div className="flex items-start lg:mb-[24px] mb-[20px]">
              <span className="self-baseline">{arrowR}</span>
              <p className="">
                <strong>Guest Management:</strong>Manage and track RSVPs for up to 30 guests, Manage 3 categories.
              </p>
            </div>
            <div className="flex items-start lg:mb-[24px] mb-[20px]">
              <span className="self-baseline">{arrowR}</span>
              <p className="">
                <strong>Invitations:</strong>Basic templates for the main event and &quot;Save the Date&quot;.
              </p>
            </div>
            <div className="flex items-start lg:mb-[24px] mb-[20px]">
              <span className="self-baseline">{arrowR}</span>
              <p className="">
                <strong>Communication:</strong>Send bulk emails.
              </p>
            </div>
            <div className="flex items-start">
              <span className="self-baseline">{arrowR}</span>
              <p className="">
                <strong>Template Selection:</strong>Limited access to basic website templates.
              </p>
            </div>
          </div>
          {free ? (
            <Button
              size="lg"
              variant={free ? 'disabled' : 'outline'}
              className={`${
                free ? '' : 'group-hover:bg-primary group-hover:text-white'
              } w-[100%] lg:mt-[55px] lg:mb-[26px] mt-[40px] mb-[28px] h-[56px] text-[16px]`}
              disabled={free}
            >
              Curerent Plan
            </Button>
          ) : (
            <PricingModal disabled={free} />
          )}
        </div>
        <div className="group hover:bg-[#E0B0FF] transition-all duration-100 lg:w-[395px] w-[327px] h-auto rounded-[20px] border-[#EBEBEB] border text-[14px] mb-[20px] lg:mb-0 relative">
          <p className="text-[#008D36] lg:text-[16px] text-[10px] font-[500] bg-[#E6F4EB] lg:w-[134px] w-[86px] lg:h-[30px] h-[22px] rounded-[8px] self-end flex justify-center items-center absolute lg:top-[27px] top-[8px] lg:right-[24px] right-[8px]">
            Recommended
          </p>
          <div className="lg:px-4 px-[19px]">
            <div className="h-[195px] border-b border-[#BCBCBC] mt-[20px] lg:mt-[72px]">
              <Image src={proIcon} alt="" width={24} height={24} />
              <h3 className="text-[24px] font-[600] lg:mt-4 mt-[12px] capitalize">
                {subscriptionData[1].account} plan
              </h3>
              <p className="text-[#6F6F6F]">{subscriptionData[1].info}</p>
              <h2 className="text-[64px] font-[500] text-[#242424]">
                <span className="text-[14px] text-[#6F6F6F] align-top mt-4 inline-block">$</span>
                {subscriptionData[1].price}
                <span className="text-[14px] text-[#6F6F6F]">/{subscriptionData[1].subscription}</span>
              </h2>
            </div>
            <div>
              <div className="flex items-start lg:my-4 my-[24px] lg:mt-[33px] lg:mb-[28px]">
                <span className="self-baseline">{arrowR}</span>
                <p className="">
                  <strong>Everything in Core Plan</strong>
                </p>
              </div>
              <div className="flex items-start lg:mb-[24px] mb-[20px]">
                <span className="self-baseline">{arrowR}</span>
                <p className="">
                  <strong>On-the-Go Management:</strong> Access all your wedding details and tools right from your
                  mobile device.
                </p>
              </div>
              <div className="flex items-start lg:mb-[24px] mb-[20px]">
                <span className="self-baseline">{arrowR}</span>
                <p className="">
                  <strong>Guest Communication:</strong> Directly interact with guests, send reminders or updates with
                  ease.
                </p>
              </div>
              <div className="flex items-start lg:mb-[24px] mb-[20px]">
                <span className="self-baseline">{arrowR}</span>
                <p className="">
                  <strong>Unlimited Guest Management:</strong> Import, export, seating arrangements, and unlimited
                  categories, guest tracking.
                </p>
              </div>
              <div className="flex items-start">
                <span className="self-baseline">{arrowR}</span>
                <p className="">
                  <strong>Customizable Invitations:</strong> Unlimited templates and full customization.
                </p>
              </div>
              <Button
                size="lg"
                variant={pro ? 'disabled' : 'outline'}
                className={`${
                  pro ? '' : 'group-hover:bg-primary group-hover:text-white'
                } w-[100%] lg:mt-[80px] lg:mb-[30px] mt-[40px] mb-[28px] h-[56px] text-[16px]`}
                disabled={pro}
              >
                Choose Plan
              </Button>
            </div>
          </div>
        </div>
        <div className="group hover:bg-[#E0B0FF] transition-all duration-100 lg:w-[325px] w-[327px] lg:h-auto h-[683px] rounded-[20px] lg:px-4 px-[19px] border-[#EBEBEB] border text-[14px] bg-white mb-[20px] lg:mb-0">
          <div className="h-[195px] border-b border-[#BCBCBC] mt-[20px]">
            <Image src={coreIcon} alt="" width={24} height={24} />
            <h3 className="text-[24px] font-[600] mt-[12px] capitalize">{subscriptionData[2].account} Plan</h3>
            <p className="text-[#6F6F6F]">{subscriptionData[2].info}</p>
            <h2 className="text-[64px] font-[500] text-[#242424]">
              <span className="text-[14px] text-[#6F6F6F] align-top mt-4 inline-block">$</span>
              {subscriptionData[2].price}
              <span className="text-[14px] text-[#6F6F6F]">/{subscriptionData[2].subscription}</span>
            </h2>
          </div>
          <div>
            <div className="flex items-start lg:mb-[28px] lg:mt-[24px] my-[24px]">
              <span className="self-baseline">{arrowR}</span>
              <p className="">
                <strong>Everything in Free Plan.</strong>
              </p>
            </div>
            <div className="flex items-start lg:mb-[24px] mb-[20px]">
              <span className="self-baseline">{arrowR}</span>
              <p className="">
                <strong>Enhanced Guest Management:</strong> Up to 60 guests, Import guests, sub-events, 6 categories,
                and guest limits.
              </p>
            </div>
            <div className="flex items-start lg:mb-[24px] mb-[20px]">
              <span className="self-baseline">{arrowR}</span>
              <p className="">
                <strong>Advanced Invitations: </strong> Additional templates and invites for sub-events.
              </p>
            </div>
            <div className="flex items-start lg:mb-[24px] mb-[20px]">
              <span className="self-baseline">{arrowR}</span>
              <p className="">
                <strong>Meal Management: </strong> Define and manage guest meal choices.
              </p>
            </div>
            <div className="flex items-start">
              <span className="self-baseline">{arrowR}</span>
              <p className="">
                <strong>Gift Management: </strong> Curate an e-commerce wishlist and accept cash donations.
              </p>
            </div>
          </div>
          <Button
            size="lg"
            variant={core ? 'disabled' : 'outline'}
            className={`${
              core ? '' : 'group-hover:bg-primary group-hover:text-white'
            } w-[100%] lg:mt-[32px] lg:mb-[25px] mt-[40px] mb-[28px] h-[56px] text-[16px]`}
            disabled={core}
          >
            Choose Plan
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Payment;
