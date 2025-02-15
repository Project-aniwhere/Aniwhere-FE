import { SERVER_RESPONSE } from '@/constant/common';
import { SignupResponse } from '@/type/api/signup';
import { APIResult } from '@/type/common';
import { Fetch } from '@/util/fetch';

export async function handleSignupForm(
  formData: FormData
): Promise<APIResult<SignupResponse>> {
  const birth = formData.get('date');

  const signUpFormData = {
    nickname: formData.get('nickname')?.toString(),
    email: formData.get('email')?.toString(),
    password: formData.get('password')?.toString(),
    birthyear: (birth ? birth.slice(0, 4) : '')?.toString(),
    birthday: (birth
      ? `${birth.slice(6, 8)}${birth.slice(10, 12)}`
      : ''
    )?.toString(),
    sex: formData.get('gender')?.toString(),
  };

  const data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signUpFormData),
  };

  // signin 서버 통신
  const response = await Fetch('/api/auth/signup', data);

  if (response.ok) {
    return {
      code: response.status,
      message: '',
    };
  } else {
    const result = await response.json();
    return {
      code: response.status,
      message: SERVER_RESPONSE[result.code] || '서버 오류가 발생했습니다',
    };
  }
}
