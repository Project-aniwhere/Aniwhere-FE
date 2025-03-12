'use client';

import Link from 'next/link';
import { useAtomValue, useSetAtom } from 'jotai';
import { handleLogout } from '@/action/logout';
import { sessionAtom } from '@/store/session-atom';
import { RESET } from 'jotai/utils';
import SearchInput from '@/component/search/search-input';

const DesktopNav = () => {
  const session = useAtomValue(sessionAtom);
  const setSession = useSetAtom(sessionAtom);

  const logoutAction = async (e: React.MouseEvent) => {
    e.preventDefault(); // 기본 이벤트 동작 방지
    const result = await handleLogout();

    if (result.code < 400 || result.code == 401) {
      setSession(RESET);
    }
  };

  return (
    <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center gap-8'>
        <div className='flex flex-row gap-8'>
          <Link href='/tag'>태그 검색</Link>
          <Link href='/popular'>인기 작품</Link>
          <Link href='/weekly'>요일별 작품</Link>
        </div>
      </div>
      <div className='flex flex-row items-center gap-5 whitespace-nowrap'>
        <SearchInput />
        <Link href='/mypage'>마이페이지</Link>
        {session.isLogin ? (
          <Link href='#' onClick={logoutAction}>
            로그아웃
          </Link>
        ) : (
          <Link href='/login'>로그인</Link>
        )}
      </div>
    </div>
  );
};

export default DesktopNav;
