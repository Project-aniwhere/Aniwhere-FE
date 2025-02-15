import { headers } from 'next/headers';

export const isMobile = async () => {
  const userAgent = (await headers()).get('user-agent') || '';
  return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
};
