import { Children, ForwardedRef, forwardRef } from 'react';
import { motion } from 'framer-motion';

interface CarouselContainerProps {
  children: React.ReactNode;
  carouselIndex: number;
  className?: string;
}

const CarouselContainer = (
  { children, carouselIndex, className }: CarouselContainerProps,
  ref?: ForwardedRef<HTMLOListElement>
) => {
  const carouselLength = Children.count(children);

  if (!carouselLength) return <div>다음 기회에...</div>;

  return (
    <div className='relative w-full h-full overflow-x-hidden overflow-y-hidden'>
      <motion.ol
        ref={ref}
        transition={{
          ease: 'easeInOut',
          duration: 0.3,
          type: 'spring',
        }}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${carouselLength},calc(33.333333% - 0.66666rem))`,
        }}
        className={'relative w-full p-2 gap-4 ' + className}
        animate={{ x: `-${3}00%` }}
      >
        {children}
      </motion.ol>
    </div>
  );
};

export default forwardRef(CarouselContainer);
