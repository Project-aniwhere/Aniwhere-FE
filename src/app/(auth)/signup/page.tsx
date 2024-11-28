import GoogleSvg from '@/asset/svg/google/google-svg';
import KakaotalkSvg from '@/asset/svg/kakaotalk/kakaotalk-svg';
import UnderlineButton from '@/component/common/button/hover-underline-button';
import IconButton from '@/component/common/button/icon-button';
import SignupForm from '@/component/signup/signup-form';
import SocialSignIn from '@/component/signup/social-signin';
import { useState } from 'react';

const Page = () => {
  return (
    <div className='w-full h-dvh flex items-center justify-center'>
      <div className='bg-white w-full max-w-md p-6 relative flex flex-col items-center gap-2'>
        {/* Logo */}
        <h1 className='text-aniviolet3 text-3xl font-bold'>ANIWHERE</h1>

        {/* Title */}
        <h2 className='text-2xl mb-6'>회원가입</h2>

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

          <SocialSignIn />
        </div>
      </div>
    </div>
  );
};

export default Page;
