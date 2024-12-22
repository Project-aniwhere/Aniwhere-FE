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
  const result = await response.json();

  if (response.status < 400) {
    return {
      code: 200,
      message: '',
    };
  } else {
    return {
      code: 400,
      message: SERVER_RESPONSE[result.code] || '서버 오류가 발생했습니다',
    };
  }
}
