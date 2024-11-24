'use client';

import { useState } from 'react';
import HoverColorButton from '../common/button/hover-color-button';
import DefaultDatepicker from '../common/datepicker/custom-datepicker';
import DefaultInput from '../common/input/default-input';
import RadioInput from '../common/input/radio-input';

const SignupForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  return (
    <form className='space-y-4'>
      {/* From-NickName */}
      <div className='flex gap-2'>
        <DefaultInput type='text' placeholder='닉네임' className='flex-1 p-2' />
        <HoverColorButton className='w-28 py-2' text='중복확인' />
      </div>
      {/* From-Email */}
      <div className='flex gap-2'>
        <DefaultInput
          type='email'
          placeholder='이메일'
          className='flex-1 p-2'
        />
        <HoverColorButton className='w-28 py-2' text='인증번호 발송' />
      </div>
      <div className='flex gap-2'>
        <DefaultInput
          type='text'
          placeholder='인증번호'
          className='flex-1 p-2'
        />
        <HoverColorButton className='w-28 py-2' text='인증번호 확인' />
      </div>
      {/* From-Password */}
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
  );
};
export default SignupForm;
