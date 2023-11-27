'use client';

import ConfirmSend from '../(components)/guest-management/confirm-send/confirm-send';
import EditEmail from '../(components)/guest-management/edit-email/edit-email';
import SendInviteModal from '../(components)/guest-management/send-invite-modal/send-invite-modal';
import SendInvite from '../(components)/guest-management/send-invite/send-invite';
import { Send } from '../(components)/svg-icons/svg-icons';
import { Button } from '@/components/ui/button';
import { InviteMailingProp } from '@/index';
import { InviteTab, cn } from '@/lib/utils';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

function Page() {
  const [selectedGuests, setSelectedGuests] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState(InviteTab.EMAIL_SAMPLE);
  const [emailDetails, setEmailDetails] = useState<InviteMailingProp>({
    my_email: 'bryan@website.com',
    salutation: 'Hi',
    message_content:
      'We’re making it official on 30th October, 2024, and you’re cordially invited! We have a wedding website and app with all the details—from travel and lodging to the day-of schedule and what to wear. Take a look to RSVP and find more information. We hope you can join us!',
    use_guest_name: true,
  });

  return (
    <div className="pt-10 relative w-full h-full py-6 overflow-hidden">
      <div className="guest-spacing w-full overflow-hidden  text-[#1c1c1c]">
        <header className="flex justify-between mb-8">
          <h2 className="text-3xl font-bold flex items-center">
            <Link href="/dashboard/guest-management">
              <ArrowLeftIcon size={28} color="#282828" />
            </Link>
            <span className="ml-4">Send Invites</span>
          </h2>
          <div className="flex gap-[22px]">
            <SendInviteModal
              Icon={Send}
              variant={selectedGuests.length ? 'secondary' : 'disabled'}
              btnText="Send Invites"
              setState={setSelectedGuests}
              className="gap-2.5"
              disable={!selectedGuests.length}
            />
          </div>
        </header>
      </div>
      <div>
        <div className="flex items-center justify-center border-b border-[#E1E1E1] gap-4 -mt-4">
          <Button
            variant="ghost"
            onClick={() => setActiveTab(InviteTab.EMAIL_SAMPLE)}
            size="sm"
            className={cn('profile-tab-btn', activeTab === InviteTab.EMAIL_SAMPLE && 'active')}
          >
            Email Sample
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActiveTab(InviteTab.EDIT_EMAIL)}
            size="sm"
            className={cn('profile-tab-btn', activeTab === InviteTab.EDIT_EMAIL && 'active')}
          >
            Edit Email
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActiveTab(InviteTab.CONFIRM_SEND)}
            size="sm"
            className={cn('profile-tab-btn', activeTab === InviteTab.CONFIRM_SEND && 'active')}
          >
            Confirm & Send
          </Button>
        </div>
        <div className="pt-8">
          {activeTab === InviteTab.EMAIL_SAMPLE && <SendInvite mailDetails={emailDetails} setState={setActiveTab} />}
          {activeTab === InviteTab.EDIT_EMAIL && (
            <EditEmail emailDetails={emailDetails} setEmailDetailsState={setEmailDetails} setState={setActiveTab} />
          )}
          {activeTab === InviteTab.CONFIRM_SEND && (
            <ConfirmSend selectedGuests={selectedGuests} setSelectedGuests={setSelectedGuests} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
