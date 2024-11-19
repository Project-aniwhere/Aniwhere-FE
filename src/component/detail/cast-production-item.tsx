import sample1 from '@/asset/img/subslider/sample1.jpg';
import Image from 'next/image';

const CastProductItem = () => {
  return (
    <div className='flex items-center gap-4'>
      <Image
        src={sample1.src}
        alt='프로필'
        width={80}
        height={80}
        className='object-cover rounded-md'
      />
      <div className='flex flex-col gap-1'>
        <p className='font-medium'>이름</p>
        <div className='text-sm text-gray-400'>
          <span>성우 </span>
          <span>캐릭터이름</span>
        </div>
      </div>
    </div>
  );
};

export default CastProductItem;
