import Image from 'next/image';

import sample1 from '@/asset/img/subslider/sample1.jpg';
import sample2 from '@/asset/img/subslider/sample2.jpg';
import sample3 from '@/asset/img/subslider/sample3.jpg';
import sample4 from '@/asset/img/subslider/sample4.jpg';

interface DailyItemProps {
  data: DailyAniProps;
}

const DailyItem = ({ data }: DailyItemProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <Image
        src={sample1.src}
        alt={`${data.titleName} 섬네일`}
        width={151.43}
        height={85.17}
        className='rounded hover:scale-105 duration-200'
      />
      <div>
        <p className='font-medium truncate'>{data.titleName}</p>
        <p className='text-sm text-gray-500 truncate'>{data.author}</p>
      </div>
    </div>
  );
};

export default DailyItem;
