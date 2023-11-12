"use client"
import React, { MouseEvent, useState } from 'react';
import EmailTemplate from '../(components)/invitation/EmailTemplate';
import banner from "../(assets)/invitation_top_banner.png"
import Image from 'next/image';

type Props = {};


const Invitation = (props: Props) => {

  return <div>
    <h3 className='text-3xl font-semibold p-8'>Invitation</h3>
    {/* Top Banner */}
    <div className='w-full h-[280px] bg-red-500'>
      <Image src={banner} alt='top-banner' 
      width={0} 
      height={0}
      style={{width: '100vw', height: "100%"}}
       />
    </div>

    <h3 className="font-semibold px-[45px] mt-[60px] text-2xl pb-2 cursor-pointer" >Email Templates</h3>

    <div className='w-full flex pt-[60px] gap-x-[40px] gap-y-8 px-[4%] mb-[90px] flex-wrap'>
      <div className="shrink-0 basis-[23%]">
        <EmailTemplate title='RSVP Invitation' description='This the email you send to guests, for them to
            get access code, view website and RSVP' image='/assets/email_template.png' />
      </div>
      <div className="shrink-0 basis-[23%]">
        <EmailTemplate title='Thank you Email' description='This the email you send to guests, for them to
            get access code, view website and RSVP' image='/assets/email_template.png' />
      </div>
      
    </div>
  </div>;
};

export default Invitation;
