import EmptyStar from '@/asset/svg/star/empty-star-svg';
import FullStarSvg from '@/asset/svg/star/full-star-svg';

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
  disabled?: boolean;
}

const StarRating = ({ rating, setRating, disabled }: StarRatingProps) => {
  const handleClickStar = (star: number) => {
    setRating(star);
  };

  return (
    <div className='flex gap-2.5 text-xl md:text-3xl font-medium'>
      {[1, 2, 3, 4, 5].map((v) => (
        <button key={v} onClick={() => handleClickStar(v)} disabled={disabled}>
          {rating >= v ? (
            <FullStarSvg fill='#613DC1' width='2.5rem' height='2.5rem' />
          ) : (
            <EmptyStar fill='#613DC1' width='2.5rem' height='2.5rem' />
          )}
        </button>
      ))}
    </div>
  );
};

export default StarRating;
