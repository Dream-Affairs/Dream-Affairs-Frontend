import React from 'react';
import Sidebar from './(components)/Sidebar';

type Props = {};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-full transition-all duration-[2000]">
      <Sidebar />
      <>{children}</>
    </main>
  );
};

export default DashboardLayout;
