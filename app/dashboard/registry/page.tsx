'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Manage from './(components)/Manage';

type Props = {};

const Registry = (props: Props) => {
  return (
    <div className="w-full">
      <div className="pl-9 pt-9 pb-6">
        <h2 className="text-4xl font-semibold">Registry</h2>
      </div>
      <div>
        <Tabs defaultValue="manage" className="">
          <TabsList className="bg-white flex flex-row gap-12 pl-9">
            <TabsTrigger value="manage">
              <p>Manage Registry</p>
            </TabsTrigger>
            <TabsTrigger value="tracker">Gift Tracker</TabsTrigger>
            <TabsTrigger value="shipping">Shipping Preferences</TabsTrigger>
          </TabsList>
          <div className="h-[1px] bg-border"></div>

          <TabsContent value="manage">
            <Manage />
          </TabsContent>
          <TabsContent value="tracker">Track your Gift here</TabsContent>
          <TabsContent value="shipping">Check your preferences here</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Registry;
