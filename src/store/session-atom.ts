import { SessionType } from '@/type/auth';
import { atomWithStorage } from 'jotai/utils';

const initialState: SessionType = {
  isLogin: false,
  userInfo: null,
};

// Session atom
export const sessionAtom = atomWithStorage<SessionType>(
  'session',
  initialState
);
