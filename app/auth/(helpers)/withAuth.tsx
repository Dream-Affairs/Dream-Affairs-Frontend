'use client';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import isAuthenticated from './isAuthenticated';

const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const path = usePathname();

    useEffect(() => {
      const token = sessionStorage.getItem('daff');
      const isLoggedIn = isAuthenticated(token as string);

      if ((path.includes('/dashboard') && !isLoggedIn) || !isLoggedIn) {
        sessionStorage.removeItem('daff');
        router.replace('/auth/login');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const wrappedComponent = React.createElement(WrappedComponent, props);
    return wrappedComponent;
  };

  return Wrapper;
};

export default withAuth;
