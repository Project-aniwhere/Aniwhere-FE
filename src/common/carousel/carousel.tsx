'use client';

import { Children, useCallback, useEffect, useMemo, useState } from 'react';
import CarouselContainer from './carousel-container';
import CarouselItem from './carousel-item';

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const childListLength = useMemo(() => Children.count(children), [children]);

  const screenWidthHandler = useCallback(() => {
    if (window.innerWidth < 640) {
      return childListLength < 2 ? childListLength : 2;
    } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
      return childListLength < 3 ? childListLength : 3;
    } else {
      return childListLength < 4 ? childListLength : 4;
    }
  }, [childListLength]);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [countPerCarousel, setCountPerCarousel] = useState(screenWidthHandler);

  const childList = useMemo(() => {
    return Children.toArray(children);
  }, [children]);

  const handleNext = useCallback(() => {
    setCurrentIdx((prev) => {
      const nextIdx = prev + countPerCarousel;
      if (nextIdx >= childListLength) {
        return 0;
      } else if (
        childListLength -
          (countPerCarousel - (childListLength % countPerCarousel)) <=
        nextIdx
      ) {
        return childListLength - countPerCarousel;
      } else {
        return nextIdx;
      }
    });
  }, [countPerCarousel, childListLength]);

  const handlePrev = useCallback(() => {
    setCurrentIdx((prev) => {
      const nextIdx = prev - countPerCarousel;
      if (!prev) return childListLength - countPerCarousel;
      else if (nextIdx < 0) return 0;
      else return nextIdx;
    });
  }, [countPerCarousel, childListLength]);

  useEffect(() => {
    const resizeHandler = () => setCountPerCarousel(screenWidthHandler());
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [screenWidthHandler]);

  return (
    <CarouselContainer
      carouselIndex={currentIdx}
      countPerCarousel={countPerCarousel}
      handleNext={handleNext}
      handlePrev={handlePrev}
    >
      {childList.map((child, idx) => (
        <CarouselItem key={idx}>{child}</CarouselItem>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
