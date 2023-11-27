import { Modal } from '@/components/ui/ModalTwo';
import { Button } from '@/components/ui/button';
import React from 'react';
import { BsCalendar2Date } from 'react-icons/bs';

interface modalProps {
  disabled: boolean;
}

const PricingModal: React.FC<modalProps> = ({ disabled }) => {
  return (
    <div className="lg:mt-[55px] lg:mb-[26px] h-[56px]">
      <Modal
        width="700"
        showXIcon={true}
        btnTiggerText={
          <Button
            size="lg"
            variant={disabled ? 'disabled' : 'outline'}
            className={`${
              disabled ? '' : 'group-hover:bg-primary group-hover:text-white'
            } w-[100%] text-[16px] py-[1.62rem]`}
            disabled={disabled}
          >
            Choose Plan
          </Button>
        }
        btnTriggerStyle="w-full"
      >
        <div>Hllo</div>
      </Modal>
    </div>
  );
};

export default PricingModal;
