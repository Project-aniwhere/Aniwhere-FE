'use client';

import Link from 'next/link';
import SearchInput from '@/component/search/search-input';
import useSession from '@/hook/session/use-session';

const DesktopNav = () => {
  const { isLogin, logoutAction } = useSession();

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
        {isLogin ? (
          <button onClick={logoutAction}>로그아웃</button>
        ) : (
          <Link href='/login'>로그인</Link>
        )}
      </div>
    </div>
  );
};

export default DesktopNav;
