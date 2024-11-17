'use client';

import HoverColorButton from '@/component/common/button/hover-color-button';
import UnderlineButton from '@/component/common/button/hover-underline-button';
import CheckInput from '@/component/common/input/check-input';
import DefaultInput from '@/component/common/input/default-input';
import MypageSidebar from '@/component/mypage/mypage-sidebar';
import MypageUserInfo from '@/component/mypage/mypage-userInfo';
import { useState } from 'react';

const Page = () => {
  return (
    <div className='flex justify-center items-center h-screen w-4/5 mx-auto'>
      {/* Left Sidebar */}
      <MypageSidebar />

      {/* Main Content */}
      <MypageUserInfo />
    </div>
  );
};

export default Page;
