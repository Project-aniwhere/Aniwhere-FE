'use server';

import { Fetch } from '@/util/fetch';
import { redirect } from 'next/navigation';

export async function handleForm(formData: FormData) {
  const email = formData.get('email');
  const nickName = formData.get('nickname');
  const password = formData.get('password');
  const birth = formData.get('date');
  const birthyear = birth ? birth.slice(0, 4) : '';
  const birthday = birth ? `${birth.slice(6, 8)}${birth.slice(10, 12)}` : '';
  const authCode = formData.get('authCode');
  const sex = formData.get('gender');

  const errors = [];
  let errorMessage = '';

  const obj = {
    nickname: nickName?.toString(),
    email: email?.toString(),
    password: password?.toString(),
    birthyear: birthyear?.toString(),
    birthday: birthday?.toString(),
    authCode: authCode?.toString(),
    sex: sex?.toString(),
  };

  if (!obj.nickname?.trim()) errors.push('닉네임');
  if (!obj.email?.trim()) errors.push('이메일');
  if (!obj.password?.trim()) errors.push('비밀번호');
  if (!obj.birthyear?.trim() || obj.birthyear == '생년월일')
    errors.push('생년월일');
  if (!obj.sex?.trim()) errors.push('성별');
  if (errors.length == 0 && !obj.authCode?.trim()) {
    errorMessage = '이메일 검증을 해주십시오';
  } else {
    errorMessage = errors.join(', ') + '을 입력해주십시오';
  }
  if (errors.length == 0) {
    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    };
    Fetch('api/auth/signup', data)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          console.log('success');
          redirect('/');
        } else {
          console.log('error occur : ', result);
          redirect(
            `signup/?status=error&message=${encodeURIComponent(result.message)}`
          );
        }
      });
  } else {
    console.log(errorMessage);
    redirect(
      `signup/?status=error&message=${encodeURIComponent(errorMessage)}`
    );
  }
}
