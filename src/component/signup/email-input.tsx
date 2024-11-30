'use client';
import HoverColorButton from '../common/button/hover-color-button';
import DefaultInput from '../common/input/default-input';
import { useEffect, useState } from 'react';
import { Fetch } from '@/util/fetch';

const SET_VERIFICATION_TIME = 300;

const EmailInput = () => {
  const regex_email = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  // 이메일
  const [showEmailCheck, setShowEmailCheck] = useState(false);
  const [email, setEmail] = useState('');

  // 이메일 인증 에러
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailValidateError, setEmailValidateError] = useState<boolean>(false);
  const [errorMsgValidateEmail, setErrorMsgValidateEmail] = useState('');

  // Timer 설정
  const [count, setCount] = useState(10);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // 인증코드
  const [authCode, setAuthCode] = useState('');
  const [successAuth, setSuccessAuth] = useState(false);

  const handleEmailCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!regex_email.test(e.target.value)) {
      e.target.value = '';
      setShowEmailCheck(false);
      setEmailError(true);
    } else {
      setEmail(e.target.value);
      setEmailError(false);
    }
  };
  const handelEmailchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowEmailCheck(false);
    setIsTimerRunning(false);
    setSuccessAuth(false);
    setAuthCode('');
    setEmail(e.target.value);
  };

  // const handleEmailCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!regex_email.test(e.target.value)) {
  //     e.target.value = '';
  //     setShowEmailCheck(false);
  //     setEmailError(true);
  //   } else {
  //     setEmailError(false);
  //   }
  // };

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

  async function sendEmailCode() {
    if (!emailError && email !== '') {
      const obj = {
        email: email,
      };
      const data = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      };

      Fetch('api/auth/email/verifications-requests', data)
        .then((res) => {
          console.log('Response status:', res.status); // HTTP 상태 코드 확인
          if (res.status == 200) {
            setAuthCode('');
            setCount(SET_VERIFICATION_TIME);
            setShowEmailCheck(true);
            setIsTimerRunning(true);
            setEmailValidateError(false);
          }
          return res.text();
        })
        .then((result) => {
          console.log('Result:', result);
        });
    } else {
      setShowEmailCheck(false);
      setEmailError(true);
    }
  }

  function sendEmailValidation() {
    const obj = {
      email: email,
      code: authCode,
    };
    const data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    };

    Fetch('api/auth/email/verifications', data).then((res) => {
      console.log('Response status:', res.status); // HTTP 상태 코드 확인
      if (res.status === 200) {
        setSuccessAuth(true);
      } else {
        setErrorMsgValidateEmail('인증코드가 일치하지 않습니다');
        setEmailValidateError(true);
        setIsTimerRunning(false);
      }
      return res.json();
    });
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
          <div className='text-sm text-green-600 ml-2 mb-2'>
            인증 코드가 포함된 메일이 발송되었습니다.
          </div>
          <div className='flex gap-2'>
            <DefaultInput
              type='text'
              name='authCode'
              value={authCode}
              onChange={(e) => setAuthCode(e.target.value)}
              disabled={emailValidateError}
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
