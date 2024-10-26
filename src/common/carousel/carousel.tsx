'use client';

import { Children, useCallback, useEffect, useMemo, useState } from 'react';
import CarouselContainer from './carousel-container';
import CarouselItem from './carousel-item';

interface CarouselProps {
  children: React.ReactNode;
  itemPerCarousel?: number;
  animation?: 'slide' | 'fade';
}

const Carousel = ({
  children,
  itemPerCarousel,
  animation = 'slide',
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
    <CarouselContainer
      carouselIndex={currentIdx}
      countPerCarousel={itemPerCarousel || countPerCarousel}
      handleNext={handleNext}
      handlePrev={handlePrev}
      animation={animation}
    >
      {children}
    </CarouselContainer>
  );
};

export default Carousel;
