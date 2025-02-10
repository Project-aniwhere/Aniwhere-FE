'use client';
import HoverColorButton from '../common/button/hover-color-button';
import DefaultInput from '../common/input/default-input';
import { useEffect, useState } from 'react';
import { Fetch } from '@/util/fetch';
import { SERVER_RESPONSE } from '@/constant/common';
import { SignupInputProps } from '@/type/common';

interface EmailState {
  value: string;
  errorMsg: string;
  showVerification: boolean;
  isVerified: boolean;
}

interface VerificationState {
  value: string;
  errorMsg: string;
  timeRemaining: number;
  isActive: boolean;
}

const VERIFICATION_TIME = 300;
const EMAIL_REGEX = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const EmailInput = ({ onValidation }: SignupInputProps) => {
  const [email, setEmail] = useState<EmailState>({
    value: '',
    errorMsg: '',
    showVerification: false,
    isVerified: false,
  });

  const [verification, setVerification] = useState<VerificationState>({
    value: '',
    errorMsg: '',
    timeRemaining: VERIFICATION_TIME,
    isActive: false,
  });

  // 이메일 정규식 체크
  const validateEmail = (emailValue: string) => EMAIL_REGEX.test(emailValue);

  // 이메일 체크
  const handleEmailchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    const checkEmail = validateEmail(newEmail);
    setEmail({
      value: newEmail,
      errorMsg: !checkEmail ? '올바른 이메일을 입력해주십시오' : '',
      showVerification: false,
      isVerified: false,
    });

    setVerification({
      value: '',
      errorMsg: '',
      timeRemaining: VERIFICATION_TIME,
      isActive: false,
    });
  };

  // 인증 코드 보내는 코드
  const sendAuthCode = async () => {
    if (email.errorMsg || !email.value) {
      setEmail((prev) => ({
        ...prev,
        errorMsg: '올바른 이메일을 입력해주십시오',
        showVerification: false,
      }));
      return;
    }

    setVerification({
      value: '',
      errorMsg: '',
      timeRemaining: VERIFICATION_TIME,
      isActive: true,
    });
    setEmail((prev) => ({
      ...prev,
      errorMsg: '',
      showVerification: true,
    }));

    const verifyEmailData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value }),
    };

    const response = await Fetch(
      '/api/auth/email/verifications-requests',
      verifyEmailData
    );

    if (!response.ok) {
      setEmail((prev) => ({
        ...prev,
        errorMsg: '서버 에러가 발생했습니다',
        showVerification: false,
      }));
      const result = await response.json();
      setEmail((prev) => ({
        ...prev,
        errorMsg: SERVER_RESPONSE[result.code],
        showVerification: false,
      }));
      setVerification((prev) => ({
        ...prev,
        timeRemaining: VERIFICATION_TIME,
        isActive: false,
      }));
    }
  };

  // 이메일 인증코드 검사
  const verifyCode = async () => {
    const verifyAuthCodeData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value, code: verification.value }),
    };

    const response = await Fetch(
      '/api/auth/email/verifications',
      verifyAuthCodeData
    );

    if (!response.ok) {
      setVerification((prev) => ({
        ...prev,
        errorMsg: '서버 에러가 발생했습니다.',
        isActive: false,
      }));
    }

    if (response.status === 200) {
      setEmail((prev) => ({ ...prev, isVerified: true }));
      onValidation(true);
      setVerification((prev) => ({
        ...prev,
        errorMsg: '',
        isActive: false,
      }));
    } else {
      onValidation(false);
      setVerification((prev) => ({
        ...prev,
        errorMsg: '인증코드가 일치하지 않습니다.',
        isActive: false,
      }));
    }
  };

  // 타이머 설정
  useEffect(() => {
    if (!verification.isActive) return;
    if (verification.timeRemaining < 0) {
      setVerification((prev) => ({
        ...prev,
        errorMsg: '시간초과로 인해 재인증 부탁드립니다.',
        isActive: false,
      }));
      return;
    }

    const countDown = setTimeout(() => {
      setVerification((prev) => ({
        ...prev,
        timeRemaining: prev.timeRemaining - 1,
      }));
    }, 1000);

    return () => clearTimeout(countDown);
  }, [verification]);

  return (
    <div className='space-y-2'>
      <div className='flex gap-2'>
        <DefaultInput
          name='email'
          placeholder='이메일'
          className='flex-1 p-2'
          value={email.value}
          onChange={handleEmailchange}
        />
        <HoverColorButton
          type='button'
          className='w-28 py-2'
          text='인증번호 발송'
          onClick={sendAuthCode}
        />
      </div>
      {email.errorMsg && (
        <div className='text-sm text-red-700 ml-2'>{email.errorMsg}</div>
      )}
      <div
        className={`${email.showVerification && !email.isVerified ? 'block' : 'hidden'}`}
      >
        <div className='text-sm text-green-600 ml-2 mb-2'>
          인증 코드가 포함된 메일이 발송되었습니다.
        </div>
        <div className='flex gap-2'>
          <DefaultInput
            type='text'
            name='authCode'
            value={verification.value}
            onChange={(e) =>
              setVerification((prev) => ({ ...prev, value: e.target.value }))
            }
            placeholder='인증번호'
            className='flex-1 p-2'
          />
          <HoverColorButton
            type='button'
            className='w-28 py-2'
            text='인증번호 확인'
            onClick={verifyCode}
          />
        </div>
        {verification.errorMsg ? (
          <div className='text-sm text-red-700 ml-2'>
            {verification.errorMsg}
          </div>
        ) : (
          <div className='text-sm text-red-700 ml-2'>
            {verification.timeRemaining}초 안에 입력해주십시오
          </div>
        )}
      </div>
      <span
        className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full transition-colors ${
          email.isVerified
            ? 'bg-green-50 text-green-700 border border-green-200'
            : 'bg-red-400 text-gray-100 border border-gray-200'
        }`}
      >
        이메일 인증
      </span>
    </div>
  );
};

export default EmailInput;
