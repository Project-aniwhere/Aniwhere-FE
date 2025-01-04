import { API_URL } from '@/constant/api-url';
import { isLoginAtom } from '@/store/auth-atom';
import { isServer } from '@tanstack/react-query';
// import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const getURL = () => {
  if (process.env.NODE_ENV === 'production' && isServer) {
    return 'http://localhost:8080';
  }
  if (process.env.NODE_ENV === 'development' && !isServer) {
    return '';
  }
  return API_URL;
};

const getServerCookies = async () => {
  const { cookies } = await import('next/headers');
  return cookies;
};

export const Fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  return fetch(`${getURL()}${input}`, init);
};

export const FetchWithCookie = async (
  input: RequestInfo | URL,
  init?: RequestInit
) => {
  if (process.env.NODE_ENV === 'production' && isServer) {
    try {
      const cookies = await getServerCookies();
      const cookieString = cookies().toString();
      return Fetch(input, {
        ...init,
        headers: {
          ...init?.headers,
          'Content-Type': 'application/json',
          Cookie: cookieString,
        },
        credentials: 'include',
      });
    } catch (error) {
      console.error('Failed to get server cookies:', error);
      // 에러 상황에 대한 폴백 처리
      return Fetch(input, {
        ...init,
        credentials: 'include',
      });
    }
  }

  return Fetch(input, {
    ...init,
    credentials: 'include',
  });
};

export const FetchWithJWT = async (
  input: RequestInfo | URL,
  init?: RequestInit
) => {
  const res = await FetchWithCookie(input, init);

  if (res.status === 401) {
    const tokensRequest = await fetch('/api/reissue', init);
    if (!tokensRequest.ok) return tokensRequest;

    if (process.env.NODE_ENV === 'production' && isServer) {
      const cookies = await getServerCookies();
      const newCookies = tokensRequest.headers.getSetCookie();
      newCookies.forEach((cookie) => {
        const [name, value] = cookie.split('=');
        cookies().set(name, value);
      });
    }

    return FetchWithCookie(input, init);
  } else {
    return res;
  }
};
