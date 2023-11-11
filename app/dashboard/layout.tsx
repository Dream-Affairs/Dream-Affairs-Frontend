import React from 'react';
import Sidebar from './(components)/Sidebar';
import TopNav from './(components)/TopNav';
import BottomNav from './(components)/BottomNav';

type Props = {};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex xl:flex-row flex-col w-full h-full transition-all duration-500 relative">
      <TopNav />
      <Sidebar />
      <div className="lg:flex-[9] flex-[0] w-full h-full xl:mt-0 mt-[60px] xl:mb-0 mb-[65px]">{children}</div>
      <BottomNav />
    </main>
  );
};

export default DashboardLayout;
