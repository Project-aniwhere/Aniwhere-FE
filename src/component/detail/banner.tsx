import Image from 'next/image';

interface DetailBannerProps {
  poster: string;
  title: string;
  rating: number;
  runningTime: number;
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
      <div className='w-full h-full absolute z-10 bg-gradient-to-b from-transparent to-black/50'></div>
      <Image
        src={poster}
        alt='배너'
        layout='responsive'
        width={1280}
        height={720}
        className='object-cover max-h-[480px]'
      />
      <div className='w-full absolute bottom-0 z-20 flex justify-between items-end py-8 px-12 text-white'>
        <div className='flex flex-col gap-2'>
          <p className='text-4xl font-bold'>{title}</p>
          <div className='flex gap-2 text-lg font-medium'>
            <div className='flex gap-1'>
              <span>별</span>
              <span>{rating}</span>
            </div>
            <span>{categories[0]}</span>
            <span>{runningTime}</span>
          </div>
        </div>
        <button className='flex flex-col items-center gap-1 opacity-85'>
          <span>+</span>
          <span className='font-medium'>위시 리스트</span>
        </button>
      </div>
    </div>
  );
};

export default DetailBanner;
