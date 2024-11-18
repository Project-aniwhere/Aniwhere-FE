import MypageMobile from '@/component/mypage/mypage-mobile';
import MypageSidebar from '@/component/mypage/mypage-sidebar';
import MypageUserInfo from '@/component/mypage/mypage-userInfo';
import { useState } from 'react';

const Page = () => {
  return (
    <>
      <div className='hidden md:block md:flex justify-center items-center h-screen w-4/5 mx-auto'>
        {/* Left Sidebar */}
        <MypageSidebar />
        {/* Main Content */}
        <MypageUserInfo />
      </div>
      <div className='flex mt-20 h-screen md:hidden'>
        <MypageMobile />
      </div>
    </>
  );
};

export default Page;
