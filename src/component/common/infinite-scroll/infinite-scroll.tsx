import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useCallback, useEffect, useRef } from 'react';

interface InfiniteScrollProps {
  hasNextPage: boolean;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

function InfiniteScroll({ hasNextPage, fetchNextPage }: InfiniteScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersect: IntersectionObserverCallback = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry?.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    if (ref.current) {
      observer = new IntersectionObserver(handleIntersect, { threshold: 0.6 });
      observer.observe(ref.current);
    }
    return () => observer && observer.disconnect();
  }, [ref, handleIntersect]);

  return <>{hasNextPage ? <div ref={ref}></div> : null}</>;
}

export default InfiniteScroll;
