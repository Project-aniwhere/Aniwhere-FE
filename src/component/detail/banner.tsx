import Image from 'next/image';

import sample1 from '@/asset/img/subslider/sample1.jpg';

const DetailBanner = () => {
  return (
    <div className='relative'>
      <div className='w-full h-full absolute z-10 bg-gradient-to-b from-transparent to-black/50'></div>
      <Image
        src={sample1.src}
        alt='배너'
        layout='responsive'
        width={1280}
        height={720}
        className='object-cover max-h-[480px]'
      />
      <div className='w-full absolute bottom-0 z-20 flex justify-between items-end p-8 text-white'>
        <div className='flex flex-col gap-2'>
          <p className='text-4xl font-bold'>스파이 패밀리 시즌1</p>
          <div className='flex gap-2 text-lg font-medium'>
            <div className='flex gap-1'>
              <span>별</span>
              <span>4.2</span>
            </div>
            <span>일상</span>
            <span>25분</span>
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
