'use client';

import { handleLoginForm } from '@/action/login';
import HoverColorButton from '../common/button/hover-color-button';
import DefaultInput from '../common/input/default-input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { isLoginAtom } from '@/store/auth-atom';
import { useSetAtom } from 'jotai';
import { userInfoAtom } from '@/store/user-atom';
const LoginForm = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();
  const setIsLogin = useSetAtom(isLoginAtom);
  const setUserInfo = useSetAtom(userInfoAtom);

  const onSubmit = async (formData: FormData) => {
    const result = await handleLoginForm(formData);
    console.log(result);
    if (result.code < 400) {
      setErrorMsg('');
      setIsLogin(true);
      setUserInfo(result.userInfo);
      router.back();
    } else {
      setErrorMsg(result.message || '로그인에 실패했습니다.');
      setIsLogin(false);
    }
  };

  return (
    <form className='space-y-4' action={onSubmit}>
      <DefaultInput name='email' placeholder='이메일' className='w-full p-3' />
      <DefaultInput
        type='password'
        name='password'
        placeholder='비밀번호'
        className='w-full p-3'
      />
      <HoverColorButton className='w-full py-3' text='로그인' />
      {errorMsg && (
        <div className='text-center text-red-700 text-middle'>{errorMsg}</div>
      )}
    </form>
  );
};

export default LoginForm;
