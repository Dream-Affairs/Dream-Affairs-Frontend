'use client';
import Modal from '@/app/dashboard/registry/(components)/Modals/Modal';
import React, { useEffect, useState } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import AddProduct from './AddProduct';
import AddCash from './AddCash';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Product from 'app/dashboard/(assets)/products.png';

interface ModalContentProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

// This is for every form modal in registry

const ModalContent: React.FC<ModalContentProps> = ({ modal, setModal }) => {
  const [modalContent, setModalContent] = useState<string>(''); //to change the content of the modal

  useEffect(() => {
    if (!modal) {
      setModalContent('');
    }
  }, [modal]);

  const handleAddProductClick = () => {
    setModalContent('add-product');
  };

  const handleAddCashClick = () => {
    setModalContent('add-cash');
  };

  const hidden = modal ? 'visible opacity-100' : 'invisible opacity-0';

  return (
    <Modal modal={modal} setModal={setModal} hidden={hidden}>
      <section
        className={`fixed left-[50%] top-[50%] z-50 grid w-[886px] h-auto max-h-[850px] rounded-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 overflow-auto transition-all ${hidden} `}
      >
        <button
          onClick={() => setModal(false)}
          className="absolute right-12 top-12  border-[1.5px] border-[#292D32] w-5 h-5 rounded-md opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <Cross2Icon className="h-[10px] w-[10px] m-auto stroke-black" />
        </button>
        {modalContent === '' ? (
          <>
            <div className="mb-16">
              <p className="text-[32px] font-medium leading-none tracking-tight pl-[79px] pt-12 mb-[14px]">
                Add gifts to registry
              </p>
              <div className="h-[1px] bg-border w-full"></div>
              <div className="flex justify-center">
                <div className="flex flex-col gap-8 w-[606px] mt-24">
                  <p className="text-base font-medium text-foreground">
                    Customize your Dream Affairs registry by creating a range of gift collections for your guests to
                    pick from
                  </p>
                  <div className="flex gap-[70px]">
                    <div className="w-[268px] h-[326px] flex flex-col gap-6 justify-center items-center border rounded-md">
                      <Image src={Product} alt="" />
                      <Button
                        onClick={handleAddProductClick}
                        variant="secondary"
                        className="font-medium text-base w-[185px] flex gap-2"
                      >
                        <span>Add products</span>
                      </Button>
                    </div>
                    <div className="w-[268px] h-[326px] flex flex-col gap-6 justify-center items-center border rounded-md">
                      <Image src={Product} alt="" />
                      <Button
                        onClick={handleAddCashClick}
                        variant="secondary"
                        className="font-medium text-base w-[185px] flex gap-2"
                      >
                        <span>Add cash funds</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
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
