'use client';

import { Children, useCallback, useEffect, useMemo, useState } from 'react';
import CarouselContainer from './carousel-container';
import CarouselItem from './carousel-item';

interface CarouselProps {
  children: React.ReactNode;
  itemPerCarousel?: number;
}

const Carousel = ({ children, itemPerCarousel }: CarouselProps) => {
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
  const [countPerCarousel, setCountPerCarousel] = useState(2);

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
    screenWidthHandler();
    window.addEventListener('resize', screenWidthHandler);

    return () => window.removeEventListener('resize', screenWidthHandler);
  }, [screenWidthHandler]);

  return (
    <CarouselContainer
      carouselIndex={currentIdx}
      countPerCarousel={itemPerCarousel ?? countPerCarousel}
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
