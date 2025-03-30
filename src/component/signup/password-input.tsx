'use client';
import { useState } from 'react';
import DefaultInput from '../common/input/default-input';
import { SignupInputProps } from '@/type/common';

const PasswordInput = ({ onValidation, className }: SignupInputProps) => {
  // 비밀번호
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');

  // 비밀번호 에러
  const [passwordCheckError, setPasswordCheckError] = useState<boolean>(true);

  // 비밀번호 체크
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

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
    onValidation(password === newPasswordCheck);
  };

  // 개별 비밀번호 요구사항 검증
  const requirements = [
    {
      label: '8자 이상 20자 이하',
      met: password.length >= 8 && password.length <= 20,
    },
    {
      label: '영문자',
      met: /[a-zA-Z]/.test(password),
    },
    {
      label: '숫자',
      met: /\d/.test(password),
    },
  ];

  return (
    <div className={`space-y-2 ${className}`}>
      <DefaultInput
        type='password'
        name='password'
        placeholder='비밀번호'
        className='w-full p-3'
        onChange={handlePasswordChange}
      />
      <div className='flex flex-wrap gap-2 mt-2'>
        {requirements.map((req, index) => (
          <span
            key={index}
            className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full transition-colors ${
              req.met
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-400 text-gray-100 border border-gray-200'
            }`}
          >
            {req.label}
          </span>
        ))}
      </div>

      <DefaultInput
        type='password'
        name='passwordAuth'
        placeholder='비밀번호 확인'
        className='w-full p-3'
        onChange={handlePasswordCheckChange}
      />
      <span
        className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full transition-colors ${
          !passwordCheckError
            ? 'bg-green-50 text-green-700 border border-green-200'
            : 'bg-red-400 text-gray-100 border border-gray-200'
        }`}
      >
        비밀번호 일치
      </span>
    </div>
  );
};

export default PasswordInput;
