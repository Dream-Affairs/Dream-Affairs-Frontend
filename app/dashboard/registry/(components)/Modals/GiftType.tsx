'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Product from 'app/dashboard/(assets)/products.png';

const GiftType = () => {
  return (
    <div className="mb-16">
      <p className="text-[32px] font-medium leading-none tracking-tight pl-[79px] pt-12 mb-[14px]">
        Add gifts to registry
      </p>
      <div className="h-[1px] bg-border w-full"></div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-8 w-[606px] mt-24">
          <p className="text-base font-medium text-foreground">
            Customize your Dream Affairs registry by creating a range of gift collections for your guests to pick from
          </p>
          <div className="flex gap-[70px]">
            <div className="w-[268px] h-[326px] flex flex-col gap-6 justify-center items-center border rounded-md">
              <Image src={Product} alt="" />
              <Button variant="secondary" className="font-medium text-base w-[185px] flex gap-2">
                <span>Add products</span>
              </Button>
            </div>
            <div className="w-[268px] h-[326px] flex flex-col gap-6 justify-center items-center border rounded-md">
              <Image src={Product} alt="" />
              <Button variant="secondary" className="font-medium text-base w-[185px] flex gap-2">
                <span>Add products</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftType;
