import React from 'react';
import Header from './header';
import Footer from './footer';

type ExternalLayoutProps = {
  children?: React.ReactNode;
};

const ExternalLayout = ({ children }: ExternalLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default ExternalLayout;
