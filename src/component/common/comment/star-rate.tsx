import EmptyStarSvg from '@/asset/svg/star/empty-star-svg';
import FullStarSvg from '@/asset/svg/star/full-star-svg';
import HalfStarSvg from '@/asset/svg/star/half-star-svg';

interface StarScoreProps {
  rate: number;
}

const StarRate = ({ rate }: StarScoreProps) => {
  const fullStar = Math.floor(rate);
  const halfStar = rate - fullStar;
  const emptyStar = 5 - fullStar - Math.ceil(halfStar);
  return (
    <div className='flex gap-0.5'>
      {[...Array(fullStar)].map((_, idx) => (
        <FullStarSvg key={idx} fill='#613DC1' />
      ))}
      {halfStar > 0 && <HalfStarSvg fill='#613DC1' />}
      {[...Array(emptyStar)].map((_, idx) => (
        <EmptyStarSvg key={idx} fill='#613DC1' />
      ))}
    </div>
  );
};

export default StarRate;
