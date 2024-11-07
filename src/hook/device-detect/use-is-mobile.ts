import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (/android.+mobile|ip(hone|[oa]d)/i.test(navigator.userAgent))
      setIsMobile(true);
  }, []);

  return isMobile;
};

export default useIsMobile;
