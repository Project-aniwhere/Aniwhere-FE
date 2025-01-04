import { SERVER_RESPONSE } from '@/constant/common';
import { SignupResponse } from '@/type/api/signup';
import { APIResult } from '@/type/common';
import { Fetch } from '@/util/fetch';

export async function handleLoginForm(
  formData: FormData
): Promise<APIResult<SignupResponse>> {
  const errors = [];

  const loginFormData = {
    email: formData.get('email')?.toString(),
    password: formData.get('password')?.toString(),
  };

  // 클라이언트 1차 검토
  if (!loginFormData.email?.trim()) errors.push('이메일');
  if (!loginFormData.password?.trim()) errors.push('비밀번호');

  if (errors.length > 0) {
    return {
      code: 400,
      message: `${errors.join(', ')}을 입력해주십시오`,
    };
  }

  const data: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(loginFormData),
  };

  // login 서버 통신
  const response = await Fetch('/api/auth/login', data);
  const result = await response.json();

  if (response.status < 400) {
    return {
      code: response.status,
      message: '',
      userInfo: result,
    };
  } else {
    return {
      code: response.status,
      message: SERVER_RESPONSE[result.code] || '서버 오류가 발생했습니다',
    };
  }
}
