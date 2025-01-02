import { SERVER_RESPONSE } from '@/constant/common';
import { SignupResponse } from '@/type/api/signup';
import { APIResult } from '@/type/common';
import { FetchWithCookie } from '@/util/fetch';

export async function handleLogout(): Promise<APIResult<SignupResponse>> {
  // login 서버 통신
  const data = {
    method: 'POST',
  };
  const response = await FetchWithCookie('api/auth/logout', data);

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
