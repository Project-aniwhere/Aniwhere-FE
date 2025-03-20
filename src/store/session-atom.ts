import { SessionType } from '@/type/auth';

import { atomWithStorage } from 'jotai/utils';

export const sessionInitialState: SessionType = {
  isLogin: false,
  userInfo: null,
};

export const sessionAtom = atomWithStorage<SessionType>(
  'session',
  sessionInitialState
);
