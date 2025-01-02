import { atomWithStorage } from 'jotai/utils';

// 사용자 타입 정의
interface User {
  birthday: string;
  birthyear: string;
  email: string;
  nickname: string;
  role: string;
  sex: string;
  userId: number;
  // user_profile_img: string;
}

// 기본 사용자 atom
export const userInfoAtom = atomWithStorage<User | null>('userInfo', null);
