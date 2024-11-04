import { headers } from 'next/headers';

export const isMobile = () => {
  const userAgent = headers().get('user-agent') || '';
  return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
};
