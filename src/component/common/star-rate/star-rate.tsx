import EmptyStarSvg from '@/asset/svg/star/empty-star-svg';
import FullStarSvg from '@/asset/svg/star/full-star-svg';
import HalfStarSvg from '@/asset/svg/star/half-star-svg';

interface StarScoreProps {
  rate: number;
  setRate?: (rate: number) => void;
  disabled?: boolean;
  size?: string;
}

const StarRate = ({ rate, setRate, disabled, size }: StarScoreProps) => {
  const fullStar = Math.floor(rate);
  const halfStar = rate - fullStar;
  const emptyStar = 5 - fullStar - Math.ceil(halfStar);

  return (
    <div className='flex gap-1'>
      {[...Array(5)].map((_, idx) => {
        const starValue = idx + 1;

        return (
          <button
            key={idx}
            onClick={() => setRate && setRate(starValue)}
            disabled={disabled}
          >
            {starValue <= fullStar ? (
              <FullStarSvg fill='#613DC1' width={size} height={size} />
            ) : starValue - 0.5 === rate ? (
              <HalfStarSvg fill='#613DC1' width={size} height={size} />
            ) : (
              <EmptyStarSvg fill='#613DC1' width={size} height={size} />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default StarRate;
