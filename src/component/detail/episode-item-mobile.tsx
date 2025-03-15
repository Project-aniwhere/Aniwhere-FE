import Image from 'next/image';
import sample1 from '@/asset/img/subslider/sample1.jpg';

const MobileEpisodeItem = () => {
  return (
    <div className='p-3 flex flex-col gap-3'>
      <div className='flex gap-3'>
        <Image
          src={sample1.src}
          alt='섬네일'
          width={100}
          height={100}
          className='object-cover rounded-md'
        />
        <div className='flex flex-col gap-0.5'>
          <div className='font-bold'>
            <span>3화 </span>
            <span>수험 대책을 세워라</span>
          </div>
          <div className='flex gap-1 text-xs font-medium text-gray-400'>
            <span>24분</span>
            <span>2022.04.24</span>
          </div>
        </div>
      </div>
      <p className='text-gray-400 text-sm'>
        가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라
        가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라
        가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라
        가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라
      </p>
    </div>
  );
};

export default MobileEpisodeItem;
