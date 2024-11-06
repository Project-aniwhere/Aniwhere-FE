import BulletItem from './bullet-item';

interface BulletProps {
  count: number;
  currentIdx: number;
  countPerCarousel: number;
  className?: string;
  setCurrentIdx: React.Dispatch<React.SetStateAction<number>>;
}

const getTargetIdx = (
  idx: number,
  countPerCarousel: number,
  childLength: number
) => {
  const nextIdx = idx * countPerCarousel;
  if (nextIdx + countPerCarousel <= childLength) return nextIdx;
  return childLength - countPerCarousel;
};

const CarouselBullet = ({
  count,
  currentIdx,
  setCurrentIdx,
  countPerCarousel,
  className = '',
}: BulletProps) => {
  return (
    <div className={'flex items-center ' + className}>
      {Array.from(
        { length: countPerCarousel ? Math.ceil(count / countPerCarousel) : 0 },
        (_, idx) => (
          <BulletItem
            key={idx}
            isCurrent={
              Math.ceil(currentIdx / countPerCarousel) ===
              Math.ceil(
                getTargetIdx(idx, countPerCarousel, count) / countPerCarousel
              )
            }
            onClick={() =>
              setCurrentIdx(getTargetIdx(idx, countPerCarousel, count))
            }
          />
        )
      )}
    </div>
  );
};

export default CarouselBullet;
