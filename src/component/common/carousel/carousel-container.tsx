import { Children, ForwardedRef, forwardRef } from 'react';
import { motion } from 'framer-motion';
import CarouselItem from './carousel-item';
import ArrowButton from './arrow-button';

interface CarouselContainerProps {
  children: React.ReactNode;
  carouselIndex: number;
  countPerCarousel: number;
  handleNext: () => void;
  handlePrev: () => void;
  className?: string;
  animation?: 'slide' | 'fade';
}

const CarouselContainer = (
  {
    children,
    carouselIndex,
    className = '',
    countPerCarousel,
    animation,
    handleNext,
    handlePrev,
  }: CarouselContainerProps,
  ref?: ForwardedRef<HTMLOListElement>
) => {
  const carouselLength = Children.count(children);
  const childrenList = Children.toArray(children);
  if (!carouselLength) return <div>다음 기회에...</div>;

  return (
    <div className='relative flex items-center justify-between gap-2 w-full h-full overflow-x-hidden overflow-y-hidden'>
      <ArrowButton
        direction='left'
        onClick={handlePrev}
        className={
          animation === 'fade'
            ? 'absolute z-40 h-full w-10 flex items-center justify-center hover:scale-110 duration-200'
            : 'hover:scale-110 duration-200'
        }
        fill={animation === 'fade' ? 'white' : 'black'}
      />
      <div className='w-full h-full overflow-x-scroll scrollbar-none xl:overflow-x-hidden xl:scrollbar'>
        <motion.ol
          ref={ref}
          transition={{
            ease: 'easeInOut',
            duration: 0.3,
            x: { duration: animation === 'slide' ? 0.3 : 0 },
          }}
          className={'relative flex items-center ' + className}
          animate={{
            x:
              animation === 'slide'
                ? `-${(carouselIndex * 100) / countPerCarousel}%`
                : '',
          }}
        >
          {childrenList.map((child, idx) => (
            <CarouselItem
              key={idx}
              countPerItem={countPerCarousel}
              className={
                animation === 'fade'
                  ? carouselIndex === idx
                    ? 'relative  opacity-100 duration-1000 '
                    : 'absolute w-full h-full opacity-0  duration-1000 '
                  : ''
              }
            >
              {child}
            </CarouselItem>
          ))}
        </motion.ol>
      </div>
      <ArrowButton
        direction='right'
        onClick={handleNext}
        className={
          animation === 'fade'
            ? 'absolute z-40 right-0 h-full w-10 flex items-center justify-center hover:scale-110 duration-200'
            : 'hover:scale-110 duration-200'
        }
        fill={animation === 'fade' ? 'white' : 'black'}
      />
    </div>
  );
};

export default forwardRef(CarouselContainer);
