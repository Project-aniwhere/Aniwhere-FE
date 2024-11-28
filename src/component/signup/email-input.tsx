'use client';
import HoverColorButton from '../common/button/hover-color-button';
import DefaultInput from '../common/input/default-input';
import { useEffect, useState } from 'react';

const EmailInput = () => {
  const isShowEmailCheck: boolean = false;
  const regex_email = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const [showEmailCheck, setShowEmailCheck] = useState(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailValidateError, setEmailValidateError] = useState<boolean>(false);
  const [errorMsgValidateEmail, setErrorMsgValidateEmail] = useState('');
  const [count, setCount] = useState(10);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!regex_email.test(e.target.value)) {
      e.target.value = '';
      setShowEmailCheck(false);
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  useEffect(() => {
    let id: NodeJS.Timeout;

    if (isTimerRunning && count >= 0) {
      id = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    }

    if (count === -1) {
      setErrorMsgValidateEmail('시간초과로 인해 재인증 부탁드립니다');
      setEmailValidateError(true);
      setIsTimerRunning(false);
    }

    return () => clearInterval(id);
  }, [count, isTimerRunning]);

  function sendEmailCode() {
    if (!emailError) {
      setShowEmailCheck(true);
      setIsTimerRunning(true);
      setCount(10);
    }
  }

  function sendEmailValidation() {}

  return (
    <div className='space-y-2'>
      <div className='flex gap-2'>
        <DefaultInput
          name='email'
          type='email'
          placeholder='이메일'
          className='flex-1 p-2'
          disabled={showEmailCheck}
          onBlur={handleEmailChange}
        />
        <HoverColorButton
          type='button'
          className='w-28 py-2'
          text='인증번호 발송'
          onClick={sendEmailCode}
        />
      </div>
      {emailError && (
        <div className='text-sm text-red-700 ml-2'>
          올바른 이메일을 입력해주십시오
        </div>
      )}
      {showEmailCheck && (
        <div className='flex gap-2'>
          <DefaultInput
            type='text'
            placeholder='인증번호'
            className='flex-1 p-2'
            disabled={emailValidateError}
          />
          <HoverColorButton
            type='button'
            className='w-28 py-2'
            text='인증번호 확인'
            onClick={sendEmailValidation}
          />
        </div>
      )}
      {showEmailCheck &&
        (emailValidateError ? (
          <div className='text-sm text-red-700 ml-2'>
            {errorMsgValidateEmail}
          </div>
        ) : (
          <div className='text-sm text-red-700 ml-2'>
            {count}초 안에 입력해주십시오
          </div>
        ))}
    </div>
  );
};

export default EmailInput;
