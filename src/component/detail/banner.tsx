import FullStarSvg from '@/asset/svg/star/full-star-svg';
import AWImage from '../common/image/cf-image';
import PlaySvg from '@/asset/svg/play/play';

interface DetailBannerProps {
  poster: string;
  title: string;
  rating: number;
  categories: string[];
  isAdult: boolean;
  releaseDate: string[];
  endDate: string[] | null;
  status: string;
  description: string;
  trailer: string;
}

const DetailBanner = ({
  poster,
  title,
  rating,
  categories,
  releaseDate,
  endDate,
  status,
  isAdult,
  description,
  trailer,
}: DetailBannerProps) => {
  return (
    <div className='relative'>
      <div className='size-full absolute z-10 bg-gradient-to-b from-transparent to-black/50'></div>
      <AWImage
        src={poster}
        alt='배너 이미지'
        width={2000}
        height={3000}
        className='object-cover max-h-96 md:max-h-[480px]'
      />
      <div className='w-full absolute bottom-0 z-20 flex flex-col md:flex-row justify-between items-end gap-4 px-5 md:px-12 py-6 md:py-8 text-white'>
        <div className='flex flex-col gap-2'>
          <p className='text-2xl md:text-4xl font-bold'>{title}</p>
          <div className='flex gap-1.5 md:text-lg font-medium'>
            <div className='flex gap-1 items-center'>
              <FullStarSvg />
              <span>{rating}</span>
            </div>
            <span>|</span>
            <span>{categories.join('·')}</span>
            <span>|</span>
            <span>{isAdult ? '성인' : '전체'}</span>
          </div>
          <div className='flex gap-1.5 text-sm md:text-base opacity-70 font-medium'>
            <span>
              {releaseDate.join('.')} ~ {endDate?.join('.')}
            </span>
            <span>|</span>
            <span>{status}</span>
          </div>
          <p className='line-clamp-3 text-xs md:text-sm opacity-70 whitespace-pre-wrap'>
            {description}
          </p>
        </div>
        <a href={trailer} target='_blanck'>
          <button className='flex flex-col items-center gap-1 text-sm md:text-base opacity-70 font-medium'>
            <PlaySvg width='1.5em' height='1.5em' />
            <span>예고편</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default DetailBanner;
