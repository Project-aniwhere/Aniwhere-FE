'use client';
import HoverColorButton from '../common/button/hover-color-button';
import DefaultInput from '../common/input/default-input';
import { useEffect, useState } from 'react';

const SET_VERIFICATION_TIME = 10;

const EmailInput = () => {
  const regex_email = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const [showEmailCheck, setShowEmailCheck] = useState(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailValidateError, setEmailValidateError] = useState<boolean>(false);
  const [errorMsgValidateEmail, setErrorMsgValidateEmail] = useState('');
  const [count, setCount] = useState(10);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [authCode, setAuthCode] = useState('');
  const [successAuth, setSuccessAuth] = useState(false);

  const handleEmailCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!regex_email.test(e.target.value)) {
      e.target.value = '';
      setShowEmailCheck(false);
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handelEmailchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowEmailCheck(false);
    setIsTimerRunning(false);
    setSuccessAuth(false);
    setAuthCode('');
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
      setEmailValidateError(false);
      setAuthCode('');
      setCount(SET_VERIFICATION_TIME);
    }
  }

  function sendEmailValidation() {
    setSuccessAuth(true);
  }

  return (
    <div className='space-y-2'>
      <div className='flex gap-2'>
        <DefaultInput
          name='email'
          placeholder='이메일'
          className='flex-1 p-2'
          onChange={handelEmailchange}
          onBlur={handleEmailCheck}
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
        <div className={`${successAuth ? 'hidden' : 'block'}`}>
          <div className='flex gap-2'>
            <DefaultInput
              type='text'
              name='authCode'
              value={authCode}
              onChange={(e) => setAuthCode(e.target.value)}
              placeholder='인증번호'
              className='flex-1 p-2'
            />
            <HoverColorButton
              type='button'
              className='w-28 py-2'
              text='인증번호 확인'
              onClick={sendEmailValidation}
            />
          </div>
          {emailValidateError ? (
            <div className='text-sm text-red-700 ml-2'>
              {errorMsgValidateEmail}
            </div>
          ) : (
            <div className='text-sm text-red-700 ml-2'>
              {count}초 안에 입력해주십시오
            </div>
          )}
        </div>
      )}
      {successAuth && (
        <div className='text-sm text-green-600 ml-2'>
          이메일 인증이 완료되었습니다
        </div>
      )}
    </div>
  );
};

export default EmailInput;
