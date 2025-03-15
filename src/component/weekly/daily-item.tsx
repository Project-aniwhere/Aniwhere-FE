import { AnimeWeeklyInfoType } from '@/type/api/anime-api';
import AWImage from '../common/image/cf-image';

interface DailyItemProps {
  data: AnimeWeeklyInfoType;
}

const DailyItem = ({ data }: DailyItemProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <AWImage
        src={data.poster || `${data.title} 포스터`}
        alt={`${data.title} 포스터`}
        width={384}
        height={543}
        sizes='(min-width: 768px) 15vw, 33vw'
        className='rounded hover:scale-105 duration-200'
      />
      <p className='font-medium truncate text-sm md:text-base'>{data.title}</p>
    </div>
  );
};

export default DailyItem;
