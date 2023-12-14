'use client';
import { useEffect, useState } from 'react';

type Org = {
  organizationId: string;
  organizationMemberId: string;
};

const useAuth = () => {
  const [userId, setUserId] = useState('');
  const [org, setOrg] = useState<Org | null>(null);

  useEffect(() => {
    const cookie = document.cookie.split(';').find((c) => c.trim().startsWith('user='));
    const info = cookie?.split('=')[1];
    const user_org = info ? JSON.parse(info) : null;

    if (user_org) {
      setUserId(user_org.userId);
      setOrg({ organizationId: user_org.organizationId, organizationMemberId: user_org.organizationMemberId });
    }
  }, []);

  return {
    userId,
    org,
  };
};

export default useAuth;
