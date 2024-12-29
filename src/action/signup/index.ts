import { SERVER_RESPONSE } from '@/constant/common';
import { SignupResponse } from '@/type/api/signup';
import { APIResult } from '@/type/common';
import { Fetch } from '@/util/fetch';

export async function handleSignupForm(
  formData: FormData
): Promise<APIResult<SignupResponse>> {
  const passwordAuth = formData.get('passwordAuth')?.toString();
  const birth = formData.get('date');
  const errors = [];

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

  // 클라이언트 1차 검토
  if (!signUpFormData.nickname?.trim()) errors.push('닉네임');
  if (!signUpFormData.email?.trim()) errors.push('이메일');
  if (!signUpFormData.password?.trim()) errors.push('비밀번호');
  if (
    !signUpFormData.birthyear?.trim() ||
    signUpFormData.birthyear == '생년월일'
  )
    errors.push('생년월일');
  if (!signUpFormData.sex?.trim()) errors.push('성별');

  if (passwordAuth != signUpFormData.password) {
    return {
      code: 400,
      message: '비밀번호 확인을 해주십시오',
    };
  }

  if (errors.length === 0 && !formData.get('authCode')?.toString().trim()) {
    return {
      code: 400,
      message: '이메일 검증을 해주십시오',
    };
  }

  if (errors.length > 0) {
    return {
      code: 400,
      message: `${errors.join(', ')}을 입력해주십시오`,
    };
  }

  const data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signUpFormData),
  };

  // signin 서버 통신
  const response = await Fetch('api/auth/signup', data);

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
