import Image from 'next/image';
import { AnimeWeeklyInfoType } from '@/type/api/anime-api';

interface DailyItemProps {
  data: AnimeWeeklyInfoType;
}

const DailyItem = ({ data }: DailyItemProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <Image
        src={data.poster}
        alt={`${data.title} 섬네일`}
        layout='responsive'
        width={1280}
        height={720}
        sizes='(min-width: 768px) 15vw, 33vw'
        objectFit='cover'
        className='rounded hover:scale-105 duration-200'
      />
      <div>
        <p className='font-medium truncate text-sm md:text-base'>
          {data.title}
        </p>
        <p className='text-gray-500 truncate text-xs md:text-sm'>작가이름</p>
      </div>
    </div>
  );
};

export default DailyItem;
