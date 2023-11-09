'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaPlus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import Modal from './modal';

type Props = {};

const MealManagement = (props: Props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="mt-10 h-full flex flex-col flex-1">
      <div className="font-bold text-2xl">Meal Management</div>
      <div className="flex justify-between items-center gap-28 mt-10 mb-4 mx-8">
        <h2 className="font-semibold">All Meals: 0</h2>

        <Button variant="secondary" onClick={toggleModal} className="flex gap-3 items-center">
          <FaPlus />
          Add meal
        </Button>
      </div>
      <div className="flex  mx-8 gap-3">
        <div className="border rounded-lg p-8 flex flex-col gap-3 h-screen">
          <h3 className="font-medium">Meal Categories</h3>
          <div className="flex gap-2 text-accent items-center">
            <FaPlus className="w-5 h-5 border rounded-full p-1 bg-white" />
            <h4 className="text-accent text-sm">Add category</h4>
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="relative">
            <Input placeholder="search" className="pl-8" />
            <div className="absolute inset-y-0 left-0 pl-3 pr-5  flex items-center pointer-events-none">
              <FaSearch className="text-acent" />
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center border-2 border-dashed rounded-lg px-12 py-8">
            <FaPlus className="w-10 h-10 border rounded-full p-2 bg-accent " />
            <p className="text-sm font-semibold">Customize your menu with meal selection for guests.</p>
          </div>
        </div>
      </div>
      {showModal && <Modal isOpen={showModal} toggleModal={toggleModal} />}
    </section>
  );
};

export default MealManagement;
