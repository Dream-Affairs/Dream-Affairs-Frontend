'use client';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
// import isAuthenticated from './isAuthenticated';

const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const path = usePathname();

    useEffect(() => {
      const token = document.cookie.split(';').find((c) => c.trim().startsWith('token='));
      if (token?.split('=')[1] && path.includes('/auth')) {
        router.replace('/dashboard');
      }

      if (!token?.split('=')[1] && path.includes('/dashboard')) {
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
