'use client';

import GoogleSvg from '@/asset/svg/google/google-svg';
import KakaotalkSvg from '@/asset/svg/kakaotalk/kakaotalk-svg';
import HoverColorButton from '@/component/common/button/hover-color-button';
import UnderlineButton from '@/component/common/button/hover-underline-button';
import IconButton from '@/component/common/button/icon-button';
import DefaultDatepicker from '@/component/common/datepicker/custom-datepicker';
import DefaultInput from '@/component/common/input/default-input';
import RadioInput from '@/component/common/input/radio-input';
import SignupForm from '@/component/signup/signup-form';
import { useState } from 'react';

const Page = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='bg-white w-full max-w-md p-6 relative flex flex-col items-center gap-2'>
        {/* Logo */}
        <h1 className='text-aniviolet3 text-2xl font-bold text-center'>
          ANIWHERE
        </h1>

        {/* Title */}
        <h2 className='text-lg font-medium text-center mb-6'>회원가입</h2>

        {/* Form */}
        <SignupForm />

        {/* Links */}
        <div className='mt-4 text-center flex flex-col items-center'>
          <span className='text-gray-600 inline-flex'>
            <p className='whitespace-nowrap'>이미 가입하셨나요?</p>
            <UnderlineButton className='ml-1' text='로그인' />
          </span>
        </div>

        {/* Social Sign-up */}
        <div className='mt-6 w-full'>
          <div className='flex flex-row items-center'>
            <div className='flex-grow border-t border-gray-300' />
            <span className='px-2 bg-white text-gray-500'>OR</span>
            <div className='flex-grow border-t border-gray-300' />
          </div>

          <div className='flex justify-center gap-4 mt-6'>
            <IconButton>
              <KakaotalkSvg height='3rem' width='3rem' />
            </IconButton>

            <IconButton>
              <GoogleSvg height='3rem' width='3rem' />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
