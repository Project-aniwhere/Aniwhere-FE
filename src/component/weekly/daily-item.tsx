import { AnimeWeeklyInfoType } from '@/type/api/anime-api';
import AWImage from '../common/image/cf-image';

interface DailyItemProps {
  data: AnimeWeeklyInfoType;
}

const DailyItem = ({ data }: DailyItemProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='relative w-full h-[150px] md:h-[250px] rounded hover:scale-105 duration-200 bg-gray-200'>
        {data.poster && (
          <AWImage
            src={data.poster}
            alt={`${data.title} 포스터`}
            fill
            sizes='(min-width: 768px) 14vw, 33vw'
            className='rounded object-cover'
          />
        )}
      </div>
      <p className='font-medium truncate text-sm md:text-base'>{data.title}</p>
    </div>
  );
};

export default DailyItem;
