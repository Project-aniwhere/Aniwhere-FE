'use client';

import { handleLoginForm } from '@/action/login';
import HoverColorButton from '../common/button/hover-color-button';
import DefaultInput from '../common/input/default-input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { isFetchError } from '@/util/fetch';
import { RESET } from 'jotai/utils';
import useSession from '@/hook/session/use-session';
import { UserInfo } from '@/type/auth';

const LoginForm = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();
  const { setSession } = useSession();

  const onSubmit = async (formData: FormData) => {
    const result = await handleLoginForm(formData);
    if (!isFetchError(result)) {
      setErrorMsg('');
      setSession({
        isLogin: true,
        userInfo: {
          ...(result as UserInfo),
          loginType: 'local',
        },
      });
      router.back();
    } else {
      setErrorMsg(result.message || '로그인에 실패했습니다.');
      setSession(RESET);
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
