import { Button } from '@/components/ui/button';
import { InviteMailingProp } from '@/index';
import { InviteTab } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  mailDetails: InviteMailingProp;
  setState: React.Dispatch<React.SetStateAction<InviteTab>>;
}

function SendInvite({ setState, mailDetails }: Props) {
  return (
    <div>
      <div className='bg-[#FFF8FA] w-full max-w-2xl mx-auto py-16 border border-black/30 bg-[url("/assets/transparent_flower.png")] bg-center bg-no-repeat'>
        <Image src="/logo_dream.png" height={82} width={142} alt="Logo" className="block mx-auto" />
        <article className="text-center max-w-md mx-auto pt-12">
          <h4 className="font-medium mb-8">
            {mailDetails.salutation}
            {mailDetails.use_guest_name && ' John'},
          </h4>

          <p>{mailDetails.message_content}</p>

          <p className="font-medium mt-14 mb-12">Your RSVP code; 237890</p>
          <Button variant="secondary" className="border border-primary w-72">
            View invitation
          </Button>

          <p className="text-[#282828] font-semibold mt-14 mb-[58px]">
            Click the link above to visit the website and use the code to login.
          </p>

          <div className="w-[519px] mx-auto h-px bg-[#A0A0A0] rounded-sm" />
        </article>
      </div>
      <div className="flex gap-10 justify-center pt-8">
        <Button variant="outline" onClick={() => setState(InviteTab.EDIT_EMAIL)} size="lg">
          Edit Email
        </Button>
        <Link href="rsvp-tracker">
          <Button variant="outline" size="lg">
            Track RSVP
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default SendInvite;
