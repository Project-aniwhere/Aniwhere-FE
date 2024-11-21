import Image from 'next/image';

import sample1 from '@/asset/img/subslider/sample1.jpg';
import { DailyAniProps } from '@/type/weekly';

interface DailyItemProps {
  data: DailyAniProps;
}

const DailyItem = ({ data }: DailyItemProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <Image
        src={sample1.src}
        alt={`${data.titleName} 섬네일`}
        layout='responsive'
        width={1280}
        height={720}
        sizes='(min-width: 768px) 15vw, 33vw'
        objectFit='cover'
        className='rounded hover:scale-105 duration-200'
      />
      <div>
        <p className='font-medium truncate text-sm md:text-base'>
          {data.titleName}
        </p>
        <p className='text-gray-500 truncate text-xs md:text-sm'>
          {data.author}
        </p>
      </div>
    </div>
  );
};

export default DailyItem;
