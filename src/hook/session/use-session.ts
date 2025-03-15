'use client';

import { handleLogout } from '@/action/logout';
import { sessionAtom } from '@/store/session-atom';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useCallback } from 'react';

const useSession = () => {
  const [session, setSession] = useAtom(sessionAtom);

  const logoutAction = useCallback(
    () => async (e: React.MouseEvent) => {
      e.preventDefault();
      const result = await handleLogout();

      if (result.code < 400) {
        setSession(RESET);
      }
    },
    [setSession]
  );

  return {
    ...session,
    logoutAction,
  };
};

export default useSession;
