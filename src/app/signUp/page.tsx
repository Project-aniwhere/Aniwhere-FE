'use client';

import GoogleSvg from '@/asset/svg/google/google-svg';
import KakaotalkSvg from '@/asset/svg/kakaotalk/kakaotalk-svg';
import HoverColorButton from '@/component/common/button/hover-color-button';
import UnderlineButton from '@/component/common/button/hover-underline-button';
import IconButton from '@/component/common/button/icon-button';
import DefaultDatepicker from '@/component/common/datepicker/custom-datepicker';
import DefaultInput from '@/component/common/input/default-input';
import RadioInput from '@/component/common/input/radio-input';
import { useState } from 'react';

const Page = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
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
        <form className='space-y-4'>
          {/* From-NickName */}
          <div className='flex gap-2'>
            <DefaultInput
              type='text'
              placeholder='닉네임'
              className='flex-1 p-2'
            />
            <HoverColorButton className='px-4 py-2' text='중복확인' />
          </div>
          {/* From-Email */}
          <div className='flex gap-2'>
            <DefaultInput
              type='email'
              placeholder='이메일'
              className='flex-1 p-2'
            />
            <HoverColorButton className='px-4 py-2' text='인증번호' />
          </div>
          {/* From-NickName */}
          <DefaultInput
            type='password'
            placeholder='비밀번호'
            className='w-full p-3'
          />
          <DefaultInput
            type='password'
            placeholder='비밀번호 확인'
            className='w-full p-3'
          />
          {/* From-Birthday, gender */}
          <div className='flex gap-4 items-center'>
            <DefaultDatepicker
              value={selectedDate}
              onChange={handleDateChange}
              placeholder='생년월일'
            />
            <div className='flex gap-4'>
              <label className='flex gap-2'>
                <RadioInput name='gender' className='w-full p-3' />
                <span>남</span>
              </label>
              <label className='flex gap-2'>
                <RadioInput name='gender' className='w-full p-3' />
                <span>여</span>
              </label>
            </div>
          </div>
          <HoverColorButton className='w-full py-3' text='회원가입' />
        </form>

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
            <IconButton Icon={KakaotalkSvg} height='3rem' width='3rem' />
            <IconButton Icon={GoogleSvg} height='3rem' width='3rem' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
