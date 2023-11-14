import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

type Props = {
    subject?: string,
    title: string,
    couple: string,
    salutation: string,
    body: string,
    button: string
    dangerouslySetInnerHTML?: {
        __html: string}
}


export default function PreviewPage({title, salutation, subject, couple, body, button,dangerouslySetInnerHTML}: Props) {
    const bodyText = ((body as string) || "").replace(/\n/g, '<br />');
    dangerouslySetInnerHTML = {__html: `<p className="mt-4">${bodyText}</p>` }
  return (
    <>
      <div className="w-full h-[250px]">
        <Image
          src="/assets/image_banner.png"
          alt="image"
          sizes="100vw"
          style={{ width: '100vw', height: '100%' }}
          height={0}
          width={0}
        />
      </div>
      <div className="text-center text-[#48195A] mt-8">
        <h3 className="text-[40px] font-semibold">{couple}</h3>
        <h5 className="text-2xl">{title}</h5>
      </div>
      <div className="text-center font-normal pt-8">
        <p>{salutation} [Guest Name] </p>
        <div dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
      </div>
      <div className="flex justify-center my-8">
        <Button
          id="save_email_button"
          className="w-2/5 border border-[#E6C0FF] bg-[#F5E7FF] text-black hover:text-[#fff]"
        >
          {button}
        </Button>
      </div>
    </>
  );
}
