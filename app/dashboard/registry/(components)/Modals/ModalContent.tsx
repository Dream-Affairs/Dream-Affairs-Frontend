import Modal from '@/components/ui/Modal';
import React, { useState } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import GiftType from './GiftType';
import AddProduct from './AddProduct';
import AddCash from './AddCash';

// This is for every form modal in registry

const ModalContent = () => {
  const [modalContent, setModalContent] = useState('add-product');
  return (
    <Modal>
      <section className="fixed left-[50%] top-[50%] z-50 grid w-[886px] h-auto rounded-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 overflow-auto">
        <button className="absolute right-12 top-12  border-[1.5px] border-[#292D32] w-5 h-5 rounded-md opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <Cross2Icon className="h-[10px] w-[10px] m-auto stroke-black" />
        </button>
        {modalContent === '' ? (
          <GiftType />
        ) : modalContent === 'add-product' ? (
          <AddProduct />
        ) : modalContent === 'add-cash' ? (
          <AddCash />
        ) : null}
      </section>
    </Modal>
  );
};

export default ModalContent;
