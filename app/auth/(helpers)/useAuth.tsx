'use client';
import { useEffect, useState } from 'react';

const useAuth = () => {
  const [userId, setUserId] = useState('');
  const [org, setOrg] = useState({});

  useEffect(() => {
    const user_org = sessionStorage.getItem('daff-data');
    if (user_org) {
      const object = JSON.parse(user_org);
      setUserId(object.user);
      setOrg(object.organization);
    }
  }, []);

  return {
    userId,
    org,
  };
};

export default useAuth;
