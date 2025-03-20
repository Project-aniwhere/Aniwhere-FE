import { SERVER_RESPONSE } from '@/constant/common';
import { SignupResponse } from '@/type/api/signup';
import { APIResult } from '@/type/common';
import { FetchWithJWT } from '@/util/fetch';

export async function handleLogout(
  oauth?: 'local' | 'kakao' | 'google'
): Promise<APIResult<SignupResponse>> {
  // login 서버 통신
  const data = {
    method: 'POST',
  };

  const url =
    oauth === 'local' ? '/api/auth/logout' : `/api/auth/${oauth}/logout`;

  const response = await FetchWithJWT(url, data);

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
