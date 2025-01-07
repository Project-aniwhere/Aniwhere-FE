'use client';

import { API_URL } from '@/constant/api-url';
import { Fetch } from '@/util/fetch';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const KakaoCallbackPage = () => {
  const query = useSearchParams();
  const router = useRouter();
  const code = query.get('code');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (code) {
      // need to fix...
      Fetch(`${API_URL}/api/auth/kakao/callback?code=${code}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            alert('로그인에 실패했습니다. 다시 시도해주세요.');
            timer = setTimeout(() => {
              router.push('/login');
            }, 3000);
          }
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
          alert('로그인에 실패했습니다. 다시 시도해주세요.');
          timer = setTimeout(() => {
            router.push('/login');
          }, 3000);
        });
    }

    return () => {
      clearTimeout(timer);
    };
  }, [code]);

  return <div>KakaoCallbackPage</div>;
};

export default KakaoCallbackPage;
