import spylogo from '@/asset/img/mainslider/spylogo.png';
import FullStarSvg from '@/asset/svg/star/fullstar';
import sampleImage from '@/asset/img/mainslider/sample.jpg';
import Image from 'next/image';

// 컴포넌트를 어떤 폴더구조로 관리해야할까요?

const Video = () => {
  return (
    <div className='relative'>
      <div className='absolute z-0 bg-radial-gradient-r w-full h-full ' />
      <Image
        src={sampleImage.src}
        alt='메인비디오'
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-screen object-cover'
      ></Image>
      <div className='absolute bottom-16 left-16'>
        <p className='text-white font-semibold'>
          평범하지 않은 가족, 평범하지 않은 일상!
        </p>
        <Image
          src={spylogo.src}
          alt='스패로고'
          width={0}
          height={0}
          sizes='30vw'
          className='-z-10 min-w-[30vw] object-cover'
        ></Image>
        <div className='flex flex-row items-center gap-2'>
          <FullStarSvg />
          <p className='text-white'>4.2 • 일상 • 25분</p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Video />
      <div className='h-[200vw] w-full bg-white '>asdasd</div>
    </div>
  );
}
