'use server';

import { Fetch } from '@/util/fetch';
import { redirect } from 'next/navigation';
// import { Router } from 'next/router';

type ActionResult = {
  success: boolean;
  message?: string;
};

export async function handleForm(formData: FormData): Promise<ActionResult> {
  const email = formData.get('email');
  const nickName = formData.get('nickname');
  const password = formData.get('password');
  const passwordAuth = formData.get('passwordAuth');
  const birth = formData.get('date');
  const birthyear = birth ? birth.slice(0, 4) : '';
  const birthday = birth ? `${birth.slice(6, 8)}${birth.slice(10, 12)}` : '';
  const authCode = formData.get('authCode');
  const sex = formData.get('gender');

  const errors = [];

  const obj = {
    nickname: nickName?.toString(),
    email: email?.toString(),
    password: password?.toString(),
    birthyear: birthyear?.toString(),
    birthday: birthday?.toString(),
    authCode: authCode?.toString(),
    sex: sex?.toString(),
  };

  // 클라이언트 1차 검토
  if (!obj.nickname?.trim()) errors.push('닉네임');
  if (!obj.email?.trim()) errors.push('이메일');
  if (!obj.password?.trim()) errors.push('비밀번호');
  if (!obj.birthyear?.trim() || obj.birthyear == '생년월일')
    errors.push('생년월일');
  if (!obj.sex?.trim()) errors.push('성별');

  if (passwordAuth != password) {
    return {
      success: false,
      message: '비밀번호 확인을 해주십시오',
    };
  }

  if (errors.length === 0 && !obj.authCode?.trim()) {
    return {
      success: false,
      message: '이메일 검증을 해주십시오',
    };
  }

  if (errors.length > 0) {
    return {
      success: false,
      message: `${errors.join(', ')}을 입력해주십시오`,
    };
  }

  const data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  };

  // signin 서버 통신
  try {
    const response = await Fetch('api/auth/signup', data);
    const result = await response.json();

    console.log('signup result : ', response);

    if (response.status === 200) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message:
          result.errors?.[0]?.reason ||
          result.message ||
          '서버 오류가 발생했습니다',
      };
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      success: false,
      message: '서버 오류가 발생했습니다',
    };
  }
}
