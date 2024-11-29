'use client';
import { useEffect, useRef, useState } from 'react';
import DefaultInput from '../common/input/default-input';
import modalDialog from '../common/modal/modal-dialog';
import ModalDialog from '../common/modal/modal-dialog';
import { ModalRef } from '@/type/modal';

const PasswordInput = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordVerification, setPasswordVerification] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [checkPasswordError, setCheckPasswordError] = useState<boolean>(false);
  const regex_pwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (passwordVerification !== '') {
      setPasswordVerification('');
    }
  };

  const handlePasswordVerificationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordVerification(e.target.value);
  };

  const handlePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!regex_pwd.test(e.target.value)) {
      e.target.value = '';
      setPasswordError(true);
    } else {
      setPassword(e.target.value);
      setPasswordError(false);
    }
  };

  const handlePasswordVerification = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (password != e.target.value) {
      e.target.value = '';
      setCheckPasswordError(true);
    } else {
      setPasswordVerification(e.target.value);
      setCheckPasswordError(false);
    }
  };
  return (
    <div className='space-y-2'>
      <DefaultInput
        type='password'
        name='password'
        placeholder='비밀번호'
        className='w-full p-3'
        onChange={handlePasswordChange}
        onBlur={handlePasswordCheck}
      />
      {passwordError && (
        <span className='text-sm text-red-700 ml-2'>
          비밀번호는 최소 8자 이상의 영문자와 숫자로 이루어져야 합니다
        </span>
      )}
      <DefaultInput
        type='password'
        name='passwordAuth'
        placeholder='비밀번호 확인'
        className='w-full p-3'
        value={passwordVerification}
        onChange={handlePasswordVerificationChange}
        onBlur={handlePasswordVerification}
      />
      {checkPasswordError && (
        <span className='text-sm text-red-700 ml-2'>
          비밀번호가 일치하지 않습니다.
        </span>
      )}
    </div>
  );
};

export default PasswordInput;
