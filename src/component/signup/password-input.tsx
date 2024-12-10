'use client';
import { useState } from 'react';
import DefaultInput from '../common/input/default-input';

const REGEX_PWD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

const PasswordInput = () => {
  // 비밀번호
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');

  // 비밀번호 에러
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordCheckError, setPasswordCheckError] = useState<boolean>(false);

  // 비밀번호 정규식 체크
  const validatePassword = (passwordValue: string) =>
    REGEX_PWD.test(passwordValue);

  // 비밀번호 체크
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(!validatePassword(newPassword));

    if (passwordCheck) {
      setPasswordCheckError(newPassword !== passwordCheck);
    }
  };

  // 비밀번호 확인 체크
  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPasswordCheck = e.target.value;
    setPasswordCheck(newPasswordCheck);
    setPasswordCheckError(password !== newPasswordCheck);
  };

  return (
    <div className='space-y-2'>
      <DefaultInput
        type='password'
        name='password'
        placeholder='비밀번호'
        className='w-full p-3'
        onChange={handlePasswordChange}
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
        onChange={handlePasswordCheckChange}
      />
      {passwordCheckError && (
        <span className='text-sm text-red-700 ml-2'>
          비밀번호가 일치하지 않습니다.
        </span>
      )}
    </div>
  );
};

export default PasswordInput;
