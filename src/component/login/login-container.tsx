'use client';

import GoogleSvg from '@/asset/svg/google/google-svg';
import KakaotalkSvg from '@/asset/svg/kakaotalk/kakaotalk-svg';
import HoverColorButton from '../common/button/hover-color-button';
import UnderlineButton from '../common/button/hover-underline-button';
import IconButton from '../common/button/icon-button';
import DefaultInput from '../common/input/default-input';

const LoginContainer = () => {
  return (
    <div className='bg-white w-full max-w-md p-6 relative flex flex-col items-center gap-2'>
      {/* Logo */}
      <h1 className='text-aniviolet3 text-2xl font-bold text-center'>
        ANIWHERE
      </h1>

      {/* Title */}
      <h2 className='text-lg font-medium text-center mb-6'>로그인</h2>

      {/* Form */}
      <form className='space-y-4'>
        <DefaultInput
          type='email'
          placeholder='이메일'
          className='w-full p-3'
        />
        <DefaultInput
          type='password'
          placeholder='비밀번호'
          className='w-full p-3'
        />
        <HoverColorButton className='w-full py-3' text='로그인' />
      </form>

      {/* Links */}
      <div className='mt-4 text-center text-sm flex flex-col items-center'>
        <span className='text-gray-600 inline-flex'>
          <p className='whitespace-nowrap'>비밀번호를 잊어버리셨나요?</p>
          <UnderlineButton className='ml-1' text='찾기' />
        </span>
        <span className='mt-2 text-gray-600 inline-flex'>
          <p>계정이 없으신가요?</p>
          <UnderlineButton className='ml-1' text='회원가입' />
        </span>
      </div>

      {/* Social Login */}
      <div className='mt-6 w-full'>
        <div className='flex flex-row items-center'>
          <div className='flex-grow border-t border-gray-300' />
          <span className='px-2 bg-white text-gray-500'>OR</span>
          <div className='flex-grow border-t border-gray-300' />
        </div>

        <div className='flex justify-center gap-4'>
          <IconButton Icon={KakaotalkSvg} height='3rem' width='3rem' />
          <IconButton Icon={GoogleSvg} height='3rem' width='3rem' />
        </div>
      </div>
    </div>
  );
};
export default LoginContainer;
