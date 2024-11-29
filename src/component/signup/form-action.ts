'use server';

import { Fetch } from '@/util/fetch';

export async function handleForm(formData: FormData) {
  const email = formData.get('email');
  const nickName = formData.get('nickname');
  const password = formData.get('password');
  const birth = formData.get('date');
  const birthyear = birth ? birth.slice(0, 4) : '';
  const birthday = birth ? `${birth.slice(6, 8)}${birth.slice(10, 12)}` : '';
  const authCode = formData.get('authCode');
  const sex = formData.get('gender');

  console.log('FormData entries:', Object.fromEntries(formData.entries()));

  const obj = {
    nickname: nickName,
    email: email,
    password: password,
    birthyear: birthyear,
    birthday: birthday,
    authCode: authCode,
    sex: sex,
  };

  console.log('test:', JSON.stringify(obj));

  const data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  };

  // const response = await Fetch('api/auth/signup', data);
  // const responseBody = await response.json();
  // console.log(responseBody.status);

  Fetch('api/auth/signup', data)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
  // { status: 400, code: 'M005', message: '이메일 인증에 실패하셨습니다.', errors: [] }

  // Fetch('api/auth/signup', data)
  //   .then((res) => res.json())
  //   .then((result) => {
  //     console.log(result.status);
  //   });
}
