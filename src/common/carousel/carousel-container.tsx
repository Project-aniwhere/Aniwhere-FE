import { Children, ForwardedRef, forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import ArrowSvg from '@/asset/svg/arrow/arrow';

interface CarouselContainerProps {
  children: React.ReactNode;
  carouselIndex: number;
  countPerCarousel: number;
  handleNext: () => void;
  handlePrev: () => void;
  className?: string;
}

const ArrowButton = ({
  direction,
  onClick,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick}>
      <ArrowSvg direction={direction} />
    </button>
  );
};

const CarouselContainer = (
  {
    children,
    carouselIndex,
    className,
    countPerCarousel,
    handleNext,
    handlePrev,
  }: CarouselContainerProps,
  ref?: ForwardedRef<HTMLOListElement>
) => {
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const carouselLength = Children.count(children);

  if (!carouselLength) return <div>다음 기회에...</div>;

  return (
    <div
      className='flex items-center justify-between gap-2 w-full h-full'
      onMouseEnter={() => setIsArrowVisible(true)}
      onMouseLeave={() => setIsArrowVisible(false)}
    >
      <ArrowButton direction='left' onClick={handlePrev} />
      <div className='w-full h-full overflow-x-scroll scrollbar-none xl:overflow-x-hidden xl:scrollbar'>
        <motion.ol
          ref={ref}
          transition={{
            ease: 'easeInOut',
            duration: 0.3,
          }}
          className={'w-full flex gap-4 items-center ' + className}
          animate={{
            x: `calc(-${(carouselIndex * 100) / countPerCarousel}% - ${carouselIndex / countPerCarousel}rem)`,
          }}
        >
          {children}
        </motion.ol>
      </div>
      <ArrowButton direction='right' onClick={handleNext} />
    </div>
  );
};

export default forwardRef(CarouselContainer);
