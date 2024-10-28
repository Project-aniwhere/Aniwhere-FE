'use client';

import { Children, useCallback, useEffect, useMemo, useState } from 'react';
import CarouselContainer from './carousel-container';
import CarouselBullet from './bullet';

interface CarouselProps {
  children: React.ReactNode;
  itemPerCarousel?: number;
  animation?: 'slide' | 'fade';
  bullet?: boolean;
  bulletContainer?: 'inner' | 'outer';
  bulletPosition?: 'left' | 'center' | 'right';
}

const Carousel = ({
  children,
  itemPerCarousel,
  animation = 'slide',
  bullet = true,
  bulletPosition = 'center',
  bulletContainer = 'outer',
}: CarouselProps) => {
  const childListLength = useMemo(() => Children.count(children), [children]);

  const screenWidthHandler = useCallback(() => {
    if (window.innerWidth < 640) {
      setCountPerCarousel(childListLength < 2 ? childListLength : 2);
    } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
      setCountPerCarousel(childListLength < 3 ? childListLength : 3);
    } else {
      setCountPerCarousel(childListLength < 4 ? childListLength : 4);
    }
  }, [childListLength]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [countPerCarousel, setCountPerCarousel] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIdx((prev) => {
      const currentPerCount = itemPerCarousel || countPerCarousel;
      const nextIdx = prev + currentPerCount;
      if (nextIdx >= childListLength) {
        return 0;
      } else if (
        childListLength -
          (currentPerCount - (childListLength % currentPerCount)) <=
        nextIdx
      ) {
        return childListLength - currentPerCount;
      } else {
        return nextIdx;
      }
    });
  }, [itemPerCarousel, countPerCarousel, childListLength]);

  const handlePrev = useCallback(() => {
    setCurrentIdx((prev) => {
      const currentPerCount = itemPerCarousel || countPerCarousel;
      const nextIdx = prev - (itemPerCarousel || countPerCarousel);
      if (!prev) return childListLength - currentPerCount;
      else if (nextIdx < 0) return 0;
      else return nextIdx;
    });
  }, [itemPerCarousel, countPerCarousel, childListLength]);

  useEffect(() => {
    if (!itemPerCarousel) {
      screenWidthHandler();
      window.addEventListener('resize', screenWidthHandler);

      return () => window.removeEventListener('resize', screenWidthHandler);
    }
  }, [itemPerCarousel, screenWidthHandler]);

  return (
    <div
      className='relative flex flex-col gap-2'
      style={{
        alignItems:
          bulletPosition === 'left'
            ? 'flex-start'
            : bulletPosition === 'right'
              ? 'flex-end'
              : 'center',
      }}
    >
      <CarouselContainer
        carouselIndex={currentIdx}
        countPerCarousel={itemPerCarousel || countPerCarousel}
        handleNext={handleNext}
        handlePrev={handlePrev}
        animation={animation}
      >
        {children}
      </CarouselContainer>
      {bullet && (
        <CarouselBullet
          count={childListLength}
          currentIdx={currentIdx}
          countPerCarousel={itemPerCarousel || countPerCarousel}
          setCurrentIdx={setCurrentIdx}
          className={
            bulletContainer === 'inner' ? 'absolute bottom-4 mx-4' : 'mx-4'
          }
        />
      )}
    </div>
  );
};

export default Carousel;
