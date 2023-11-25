import { Modal } from '@/components/ui/ModalTwo';
import { Button } from '@/components/ui/button';
import React from 'react';
import { BsCalendar2Date } from 'react-icons/bs';

const pricingModal = () => {
  return (
    <Modal
      width="700"
      showXIcon={true}
      btnTiggerText={'Modal with another button width' + '700'}
      btnTriggerStyle="bg-accent p-4 rounded-md text-sm font-medium"
      showCloseBtn={true}
      closeBtnText="Close"
      closeBtnStyle="bg-secondary p-4 rounded-md text-sm font-medium w-full mt-5"
    >
      <div className="flex justify-center items-center gap-2 flex-col">
        <h1 className="font-bold text-lg">Save The Date</h1>
        <span className="bg-secondary p-2 rounded-full">
          <BsCalendar2Date className="text-lg" />
        </span>
        <p className="text-center text-sm text-gray-400">
          You have successfully sent out 1050 save the date wedding reminder to your guest list.
        </p>
      </div>
    </Modal>
  );
};

export default pricingModal;
