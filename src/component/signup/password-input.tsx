'use client';
import { useEffect, useRef, useState } from 'react';
import DefaultInput from '../common/input/default-input';
import modalDialog from '../common/modal/modal-dialog';
import ModalDialog from '../common/modal/modal-dialog';
import { ModalRef } from '@/type/modal';

const PasswordInput = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [checkPasswordError, setCheckPasswordError] = useState<boolean>(false);
  const regex_pwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!regex_pwd.test(e.target.value)) {
      e.target.value = '';
      setPasswordError(true);
    } else {
      setPassword(e.target.value);
      setPasswordError(false);
    }
  };
  const handlePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (password != e.target.value) {
      e.target.value = '';
      setCheckPasswordError(true);
    } else {
      setCheckPasswordError(false);
    }
  };
  useEffect(() => {
    console.log('password state changed:', password);
  }, [password]);
  return (
    <div className='space-y-2'>
      <DefaultInput
        type='password'
        placeholder='비밀번호'
        className='w-full p-3'
        onBlur={handlePasswordChange}
      />
      {passwordError && (
        <div className='text-sm text-red-700 ml-4'>
          비밀번호는 최소 8자 이상의 영문자와 숫자로 이루어져야 합니다
        </div>
      )}
      <DefaultInput
        type='password'
        name='password'
        placeholder='비밀번호 확인'
        className='w-full p-3'
        disabled={passwordError}
        onBlur={handlePasswordCheck}
      />
      {checkPasswordError && (
        <div className='text-sm text-red-700 ml-4'>
          비밀번호가 일치하지 않습니다.
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
