'use client';

import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const VeriftAccount = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const url = process.env.NEXT_PUBLIC_API_URL;

  const [verified, setVerified] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {}, []);

  useEffect(() => {
    const verify = async () => {
      try {
        await axios.post(`${url}/auth/verify-account`, { token });
        setVerified(true);
        setTimeout(() => {
          router.replace('/auth/login');
        }, 3000);
      } catch (error: any) {
        setError(error.response.data.message);
        setVerified(false);
      }
    };

    if (token) {
      verify();
    }
    return setVerifying(false);
  }, [router, token, url]);

  return <>{verifying ? <p>Verifying</p> : verified ? <p>Verified, redirecting...</p> : <p>{error}</p>}</>;
};

export default VeriftAccount;
