'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaPlus } from 'react-icons/fa';
import Image from 'next/image';
import Modal from './modal';
import search from '../(assets)/Solid.png';
import more from '../(assets)/more.png';

type Props = {};

const MealManagement = (props: Props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="mt-10 h-full border-l flex flex-col flex-1">
      <div className="font-bold text-2xl">Meal Management</div>
      <div className="flex justify-between items-center gap-28 mt-10 mb-4 mx-8">
        <h2 className="font-semibold">All Meals: 0</h2>
        <div className="flex gap-4 items-center">
          <Button variant="secondary" onClick={toggleModal} className="flex gap-3 items-center">
            <FaPlus />
            Add meal
          </Button>
          <div>
            <Image src={more} width={20} height={20} alt={'see-more'} />
          </div>
        </div>
      </div>
      <div className="flex  mx-8 gap-3">
        <div className="border rounded-lg p-8 flex flex-col gap-3 h-screen">
          <h3 className="font-medium">Meal Categories</h3>
          <div className="flex gap-2 text-accent items-center">
            <FaPlus className="w-5 h-5 border border-[#40414166] rounded-full p-1 text-[#40414166]" />
            <h4 className="text-[#40414166] text-sm">Add category</h4>
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="relative">
            <Input placeholder="search" className="pl-8" />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Image src={search} width={15} height={15} alt={'search-icon'} />
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center border-2 border-dashed rounded-lg px-12 py-8">
            <FaPlus className="text-4xl border rounded-full p-2 bg-accent " />
            <p className="text-sm font-semibold text-[#282828]">Customize your menu with meal selection for guests.</p>
          </div>
        </div>
      </div>
      {showModal && <Modal isOpen={showModal} toggleModal={toggleModal} />}
    </section>
  );
};

export default MealManagement;
