import React from 'react';
import Sidebar from './(components)/Sidebar';

type Props = {};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-full transition-all duration-500">
      <Sidebar />
      <div className="flex-[9]">{children}</div>
    </main>
  );
};

export default DashboardLayout;
