'use client';

import { sessionInitialState } from '@/store/session-atom';
import { SessionType } from '@/type/auth';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

interface PageProtectorProps {
  needLogin: boolean;
  redirectUrl: string;
}

const PageProtector = ({ needLogin, redirectUrl }: PageProtectorProps) => {
  useEffect(() => {
    const session = localStorage.getItem('session');
    if (!session && needLogin) redirect(redirectUrl);

    const sessionData: SessionType = session
      ? JSON.parse(session)
      : sessionInitialState;

    if (sessionData.isLogin !== needLogin) {
      redirect(redirectUrl);
    }
  }, [needLogin, redirectUrl]);

  return null;
};

export default PageProtector;
