import Image from 'next/image';
import sample1 from '@/asset/img/subslider/sample1.jpg';

const EpisodeItem = () => {
  return (
    <div className='p-5 flex items-center gap-6'>
      <Image
        src={sample1.src}
        alt='섬네일'
        width={200}
        height={150}
        className='object-cover rounded-md'
      />
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-0.5'>
          <div className='text-xl font-bold'>
            <span>3화 </span>
            <span>수험 대책을 세워라</span>
          </div>
          <div className='flex gap-1 text-sm font-medium text-gray-400'>
            <span>24분</span>
            <span>2022.04.24</span>
          </div>
        </div>
        <p className='text-gray-400'>
          가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라
          가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라
          가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라
          가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라가나다라
        </p>
      </div>
    </div>
  );
};

export default EpisodeItem;
