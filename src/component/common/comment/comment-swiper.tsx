'use client';

import { Review } from '@/type/api/anime-recommend-api';
import { useEffect, useState } from 'react';
import FullStarSvg from '@/asset/svg/star/full-star-svg';
interface CommentSwiper {
  reviews: Review[];
  lineCount?: number;
}

const CommentSwiper = ({ reviews, lineCount }: CommentSwiper) => {
  const [reviewIdx, setReviewIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const curReview = reviews[reviewIdx];

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    const intervalId = setInterval(() => {
      setIsVisible(false);
      timerId = setTimeout(() => {
        setReviewIdx((prev) => (prev + 1) % reviews.length);
      }, 300);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timerId);
    };
  }, [reviews]);

  useEffect(() => {
    setIsVisible(true);
  }, [reviewIdx]);

  return (
    <div
      className={`w-full flex flex-row gap-2 items-center ${isVisible ? 'opacity-100' : 'opacity-0'} duration-300`}
    >
      <div className='flex flex-row items-center text-aniviolet3 '>
        <FullStarSvg fill='#613DC1' />
        <p>{curReview.rating}</p>
      </div>
      <p
        style={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitLineClamp: lineCount ?? 1,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {curReview.content}
      </p>
    </div>
  );
};

export default CommentSwiper;
