'use client';

import { handleLogout } from '@/action/logout';
import { sessionAtom } from '@/store/session-atom';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useCallback } from 'react';

const useSession = () => {
  const [session, setSession] = useAtom(sessionAtom);

  const logoutAction = useCallback(async () => {
    await handleLogout(session.userInfo?.loginType);
    setSession(RESET);
  }, [session, setSession]);

  return {
    ...session,
    setSession,
    logoutAction,
  };
};

export default useSession;
