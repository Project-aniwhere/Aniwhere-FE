import { API_URL } from '@/constant/api-url';
import { isServer } from '@tanstack/react-query';
// import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const getURL = () => {
  if (process.env.NODE_ENV === 'production' && isServer) {
    return 'http://localhost:8080';
  }
  return API_URL;
};

const getServerCookies = async () => {
  const { cookies } = await import('next/headers');
  return cookies;
};

export const Fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  return fetch(`${getURL()}/${input}`, init);
};

const FetchWithCookie = async (
  input: RequestInfo | URL,
  init?: RequestInit
) => {
  if (process.env.NODE_ENV === 'production' && isServer) {
    const cookies = await getServerCookies();
    return Fetch(input, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookies().toString(),
      },
      credentials: 'include',
    });
  }
  return Fetch(input, {
    ...init,
  });
};

export const FetchWithJWT = async (
  input: RequestInfo | URL,
  init?: RequestInit
) => {
  const res = await FetchWithCookie(input, init);

  if (res.status === 401) {
    const tokensRequest = await fetch('/reissue', init);
    if (!tokensRequest.ok) return redirect('/login');

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
