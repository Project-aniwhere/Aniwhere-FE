'use client';

import Link from 'next/link';
import { useAtomValue, useSetAtom } from 'jotai';
import { isLoginAtom } from '@/store/auth-atom';
import { handleLogout } from '@/action/logout';

const DesktopNav = () => {
  const isLogin = useAtomValue(isLoginAtom);
  const setIsLogin = useSetAtom(isLoginAtom);

  const logoutAction = async (e: React.MouseEvent) => {
    e.preventDefault(); // 기본 이벤트 동작 방지
    const result = await handleLogout();
    if (result.code < 400) {
      setIsLogin(false);
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
      <div className='flex flex-row items-center gap-5'>
        <search>검색</search>
        <Link href='/mypage'>마이페이지</Link>
        {isLogin ? (
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
