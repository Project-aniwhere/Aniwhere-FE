'use client';

import { Children, useCallback, useMemo, useState } from 'react';
import CarouselContainer from './carousel-container';
import CarouselItem from './carousel-item';
import { useMotionValue } from 'framer-motion';

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const childList = useMemo(() => Children.toArray(children), [children]);

  const x = useMotionValue(0);

  const handleNext = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1 === childList.length ? 0 : prev + 1));
  }, [childList]);

  const handlePrev = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 < 0 ? childList.length - 1 : prev - 1));
  }, [childList]);

  return (
    <CarouselContainer carouselIndex={currentIdx}>
      {Array(10)
        .fill(0)
        .map((_, idx) => (
          <CarouselItem key={idx}>
            <div>{idx + 1}</div>
          </CarouselItem>
        ))}
    </CarouselContainer>
  );
};

export default Carousel;
