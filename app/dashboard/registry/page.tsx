'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Manage from './(components)/Manage';
import Shipping from './(components)/Shipping';
import Tracker from './(components)/Tracker';

type Props = {};

const Registry = (props: Props) => {
  return (
    <div className="w-screen lg:w-full ">
      <div className="pl-9 pt-9 pb-6 hidden lg:block">
        <h2 className="text-4xl font-semibold">Registry</h2>
      </div>
      <div>
        <Tabs defaultValue="manage" className="">
          <TabsList className="bg-white flex flex-row gap-4 lg:gap-12 lg:mx-9 p-0  justify-center lg:justify-start  rounded-[0]">
            <TabsTrigger value="manage" className="text-xs lg:text-base">
              <p>Manage Registry</p>
            </TabsTrigger>
            <TabsTrigger value="tracker" className="text-xs lg:text-base">
              Gift Tracker
            </TabsTrigger>
            <TabsTrigger value="shipping" className="text-xs lg:text-base">
              Shipping Preferences
            </TabsTrigger>
          </TabsList>
          <div className="h-[1px] bg-border"></div>

          <TabsContent value="manage">
            <Manage />
          </TabsContent>
          <TabsContent value="tracker">
            {' '}
            <Tracker />
          </TabsContent>
          <TabsContent value="shipping">
            <Shipping />{' '}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Registry;
