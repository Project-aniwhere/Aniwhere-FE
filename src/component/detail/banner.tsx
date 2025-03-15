import FullStarSvg from '@/asset/svg/star/full-star-svg';
import AWImage from '../common/image/cf-image';

interface DetailBannerProps {
  poster: string;
  title: string;
  rating: number;
  runningTime: string;
  categories: string[];
}

const DetailBanner = ({
  poster,
  title,
  rating,
  runningTime,
  categories,
}: DetailBannerProps) => {
  return (
    <div className='relative'>
      <div className='size-full absolute z-10 bg-gradient-to-b from-transparent to-black/50'></div>
      <AWImage
        src={poster}
        alt='배너 이미지'
        width={1280}
        height={720}
        className='object-cover max-h-96 md:max-h-[480px]'
      />
      <div className='w-full absolute bottom-0 z-20 flex justify-between items-end px-5 md:px-12 py-6 md:py-8 text-white'>
        <div className='flex flex-col gap-2'>
          <p className='text-2xl md:text-4xl font-bold'>{title}</p>
          <div className='flex gap-1.5 md:text-lg font-medium'>
            <div className='flex gap-1 items-center'>
              <FullStarSvg />
              <span>{rating}</span>
            </div>
            <span>·</span>
            <span>{categories[0]}</span>
            <span>·</span>
            <span>{runningTime || '-'}분</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;
