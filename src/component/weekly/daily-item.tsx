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
        width={100} // 부모의 100% 너비에 맞게 크기 설정
        height={100} // 비율에 맞춰 height 자동 계산
        objectFit='cover' // 이미지가 부모 컨테이너를 덮도록 설정
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
