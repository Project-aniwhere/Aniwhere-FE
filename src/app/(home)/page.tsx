import spylogo from '@/asset/img/mainslider/spylogo.png';
import FullStarSvg from '@/asset/svg/star/fullstar';
import sampleImage from '@/asset/img/mainslider/sample.jpg';
import Image from 'next/image';
import Carousel from '@/common/carousel/carousel';
import sample1 from '@/asset/img/subslider/sample1.jpg';
import sample2 from '@/asset/img/subslider/sample2.jpg';
import sample3 from '@/asset/img/subslider/sample3.jpg';
import sample4 from '@/asset/img/subslider/sample4.jpg';

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
        className='w-full h-[100dvh] object-cover'
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

const sampleData = [
  { src: sample1.src, alt: 'sample1' },
  { src: sample2.src, alt: 'sample2' },
  { src: sample3.src, alt: 'sample3' },
  { src: sample4.src, alt: 'sample4' },
];

export default function Home() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Video />

      <Carousel>
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <div
              className='relative flex flex-col items-start gap-2 cursor-pointer'
              key={index}
            >
              <div className='relative hover:scale-105 duration-200'>
                <p className='absolute top-2 left-2 rounded-lg flex items-center justify-center bg-aniviolet3 aspect-[3/2] w-12 text-white font-bold '>
                  1
                </p>
                <Image
                  src={sampleData[index % 4].src}
                  alt='메인비디오'
                  width={0}
                  height={0}
                  sizes='50vw'
                  className='w-full aspect-video object-cover rounded-lg '
                ></Image>
              </div>
              <div className='leading-tight'>
                <p className='text-black font-semibold'>스파이 패밀리</p>
                <p className='text-gray-500'>일상 • 힐링</p>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
}
