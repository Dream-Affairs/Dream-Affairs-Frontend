import React from 'react';
import freemium from '../(assets)/notification-circle.svg';
import proIcon from '../(assets)/medal-star.svg';
import coreIcon from '../(assets)/share.svg';
import arrowR from '../(assets)/arrow-right.svg';
import arrowRw from '../(assets)/arrow-right-w.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Pricecards = () => {
  return (
    <section className="w-[80%] mx-auto flex lg:flex-row flex-col items-center justify-between lg:mt-[-100px] my-[40px] lg:mb-[118px]">
      <div className="lg:w-[325px] w-[327px] lg:h-[700px] h-[644px] rounded-[20px] lg:px-4 px-[19px] border-[#EBEBEB] border text-[14px] bg-white mb-[20px] lg:mb-0">
        <div className="h-[195px] border-b border-[#BCBCBC] mt-[20px]">
          <Image src={freemium} alt="" width={24} height={24} />
          <h3 className="text-[24px] font-[600] mt-[12px]">Free Plan</h3>
          <p className="text-[#6F6F6F] mt-0">Basic Event Management</p>
          <h2 className="text-[64px] font-[500] text-[#242424]">
            <span className="text-[14px] text-[#6F6F6F] align-top">$</span>0
            <span className="text-[14px] text-[#6F6F6F]">/free</span>
          </h2>
        </div>
        <div>
          <div className="flex lg:my-[24px] mt-[24px] mb-[20px]">
            <Image src={arrowR} alt="" width={24} height={24} className="self-baseline" />
            <p className="">
              <strong>Event Dashboard:</strong> Main event overview, Customizable URLs.
            </p>
          </div>
          <div className="flex lg:mb-[24px] mb-[20px]">
            <Image src={arrowR} alt="" width={24} height={24} className="self-baseline" />
            <p className="">
              <strong>Guest Management:</strong>Manage and track RSVPs for up to 30 guests, Manage 3 categories.
            </p>
          </div>
          <div className="flex lg:mb-[24px] mb-[20px]">
            <Image src={arrowR} alt="" width={24} height={24} className="self-baseline" />
            <p className="">
              <strong>Invitations:</strong>Basic templates for the main event and &quot;Save the Date&quot;.
            </p>
          </div>
          <div className="flex lg:mb-[24px] mb-[20px]">
            <Image src={arrowR} alt="" width={24} height={24} className="self-baseline" />
            <p className="">
              <strong>Communication:</strong>Send bulk emails.
            </p>
          </div>
          <div className="flex">
            <Image src={arrowR} alt="" width={24} height={24} className="self-baseline" />
            <p className="">
              <strong>Template Selection:</strong>Limited access to basic website templates.
            </p>
          </div>
        </div>
        <Button size="lg" variant="outline" className="w-[100%] lg:mt-[55px] mt-[40px] h-[56px] text-[16px]">
          Choose Plan
        </Button>
      </div>
      <div className="lg:w-[395px] w-[327px] lg:h-[814px] h-[723px] rounded-[20px] border-[#EBEBEB] border text-[14px] bg-[#FFF8FA] mb-[20px] lg:mb-0 relative">
        <p className="text-[#008D36] lg:text-[16px] text-[10px] font-[500] bg-[#E6F4EB] lg:w-[134px] w-[86px] lg:h-[30px] h-[22px] rounded-[8px] self-end flex justify-center items-center absolute lg:top-[27px] top-[8px] lg:right-[24px] right-[8px]">
          Recommended
        </p>
        <div className="lg:px-4 px-[19px]">
          <div className="h-[195px] border-b border-[#BCBCBC] mt-[20px] lg:mt-[72px]">
            <Image src={proIcon} alt="" width={24} height={24} />
            <h3 className="text-[24px] font-[600] lg:mt-4 mt-[12px]">Pro plan</h3>
            <p className="text-[#6F6F6F]">Comprehensive Event Suite</p>
            <h2 className="text-[64px] font-[500] text-[#242424]">
              <span className="text-[14px] text-[#6F6F6F] align-top">$</span>10
              <span className="text-[14px] text-[#6F6F6F]">/one time fee</span>
            </h2>
          </div>
          <div>
            <div className="flex lg:my-4 my-[24px] lg:mt-[33px] lg:mb-[28px]">
              <Image src={arrowRw} alt="" width={24} height={24} className="self-baseline" />
              <p className="">
                <strong>Everything in Core Plan</strong>
              </p>
            </div>
            <div className="flex lg:mb-[24px] mb-[20px]">
              <Image src={arrowRw} alt="" width={24} height={24} className="self-baseline" />
              <p className="">
                <strong>On-the-Go Management:</strong> Access all your wedding details and tools right from your mobile
                device.
              </p>
            </div>
            <div className="flex lg:mb-[24px] mb-[20px]">
              <Image src={arrowRw} alt="" width={24} height={24} className="self-baseline" />
              <p className="">
                <strong>Guest Communication:</strong> Directly interact with guests, send reminders or updates with
                ease.
              </p>
            </div>
            <div className="flex lg:mb-[24px] mb-[20px]">
              <Image src={arrowRw} alt="" width={24} height={24} className="self-baseline" />
              <p className="">
                <strong>Unlimited Guest Management:</strong> Import, export, seating arrangements, and unlimited
                categories, guest tracking.
              </p>
            </div>
            <div className="flex">
              <Image src={arrowRw} alt="" width={24} height={24} className="self-baseline" />
              <p className="">
                <strong>Customizable Invitations:</strong> Unlimited templates and full customization.
              </p>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="w-[100%] lg:mt-[22px] mt-[40px] mb-[28px] h-[56px] text-[16px]"
            >
              Choose Plan
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:w-[325px] w-[327px] lg:h-[700px] h-[683px] rounded-[20px] lg:px-4 px-[19px] border-[#EBEBEB] border text-[14px] bg-white mb-[20px] lg:mb-0">
        <div className="h-[195px] border-b border-[#BCBCBC] mt-[20px]">
          <Image src={coreIcon} alt="" width={24} height={24} />
          <h3 className="text-[24px] font-[600] mt-[12px]">Core Plan</h3>
          <p className="text-[#6F6F6F]">Advanced Planning Features</p>
          <h2 className="text-[64px] font-[500] text-[#242424]">
            <span className="text-[14px] text-[#6F6F6F] align-top">$</span>5
            <span className="text-[14px] text-[#6F6F6F]">/one time fee</span>
          </h2>
        </div>
        <div>
          <div className="flex lg:mb-[28px] lg:mt-[24px] my-[24px]">
            <Image src={arrowR} alt="" width={24} height={24} className="self-baseline" />
            <p className="">
              <strong>Everything in Free Plan.</strong>
            </p>
          </div>
          <div className="flex lg:mb-[24px] mb-[20px]">
            <Image src={arrowR} alt="" width={24} height={24} className="self-baseline" />
            <p className="">
              <strong>Enhanced Guest Management:</strong> Up to 60 guests, Import guests, sub-events, 6 categories, and
              guest limits.
            </p>
          </div>
          <div className="flex lg:mb-[24px] mb-[20px]">
            <Image src={arrowR} alt="" width={24} height={24} className="self-baseline" />
            <p className="">
              <strong>Advanced Invitations: </strong> Additional templates and invites for sub-events.
            </p>
          </div>
          <div className="flex lg:mb-[24px] mb-[20px]">
            <Image src={arrowR} alt="" width={24} height={24} className="self-baseline" />
            <p className="">
              <strong>Meal Management: </strong> Define and manage guest meal choices.
            </p>
          </div>
          <div className="flex">
            <Image src={arrowR} alt="" width={24} height={24} className="self-baseline" />
            <p className="">
              <strong>Gift Management: </strong> Curate an e-commerce wishlist and accept cash donations.
            </p>
          </div>
        </div>
        <Button size="lg" variant="outline" className="w-[100%] lg:mt-[32px] mt-[40px] mb-[28px] h-[56px] text-[16px]">
          Choose Plan
        </Button>
      </div>
    </section>
  );
};

export default Pricecards;
