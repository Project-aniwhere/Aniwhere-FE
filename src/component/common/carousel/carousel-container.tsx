import {
  Children,
  ForwardedRef,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react';
import CarouselItem from './carousel-item';
import ArrowButton from './arrow-button';
import useIsMobile from '@/hook/device-detect/use-is-mobile';

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
  const carouselLength = useMemo(() => Children.count(children), [children]);
  const childrenList = useMemo(() => Children.toArray(children), [children]);

  const isMobile = useIsMobile();
  const [isMouseHover, setIsMouseHover] = useState(false);

  const handleMouseEnter = useCallback(() => setIsMouseHover(true), []);
  const handleMouseLeave = useCallback(() => setIsMouseHover(false), []);

  const isRenderArrow = useMemo(() => {
    if (animation === 'fade') return true;
    if (!isMobile && isMouseHover) return true;
    return false;
  }, [animation, isMobile, isMouseHover]);

  if (!carouselLength) return <div>다음 기회에...</div>;

  return (
    <div
      className='relative flex items-center justify-between gap-2 w-full h-full '
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ArrowButton
        isShow={isRenderArrow}
        direction='left'
        onClick={handlePrev}
        className={
          animation === 'fade'
            ? 'absolute z-40 h-full w-10 flex items-center justify-center hover:scale-150 scale-125 hover:opacity-100 duration-200 origin-left '
            : 'absolute -left-2 z-40 p-2 rounded-lg bg-aniviolet3 hover:scale-110 duration-200'
        }
        fill='white'
      />

      <ArrowButton
        isShow={isRenderArrow}
        direction='right'
        onClick={handleNext}
        className={
          animation === 'fade'
            ? 'absolute right-0 z-40 h-full w-10 flex items-center justify-center hover:scale-150 scale-125 hover:opacity-100 origin-right opacity-75 duration-200 '
            : 'absolute -right-2 z-40 p-2 rounded-lg bg-aniviolet3 hover:scale-110 duration-200'
        }
        fill='white'
      />

      <div className='w-full h-full overflow-x-scroll scrollbar-none xl:overflow-x-hidden xl:scrollbar'>
        <ol
          ref={ref}
          className={
            'relative flex items-stretch transition-transform ease-in-out duration-300 ' +
            className
          }
          style={{
            transform: `translateX(${
              animation === 'slide'
                ? `-${(carouselIndex * 100) / countPerCarousel}%`
                : ''
            })`,
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
        </ol>
      </div>
    </div>
  );
};

export default forwardRef(CarouselContainer);
