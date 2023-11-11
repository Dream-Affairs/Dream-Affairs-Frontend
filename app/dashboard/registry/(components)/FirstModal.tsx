// FirstModal.js
import React, { useState } from 'react';
import { DialogContent } from '@/components/ui/dialog';
import GiftType from './Modals/GiftType';
import AddProduct from './Modals/AddProduct';

const FirstModal = () => {
  return (
    <DialogContent className="h-[806px]">
      <GiftType />
    </DialogContent>
  );
};

export default FirstModal;
