import Image from 'next/image';
import Carousel from '../common/carousel/carousel';
import { ContentSliderProps } from '@/type/content-slider';

const MainImageSlider = async ({ contentList }: ContentSliderProps) => {
  return (
    <section className='relative w-full h-full'>
      <Carousel
        itemPerCarousel={1}
        animation='fade'
        bullet
        bulletContainer='inner'
        bulletPosition='right'
      >
        {contentList.map((content) => (
          <Image
            key={content.imageSrc}
            src={content.imageSrc}
            alt='main slider image'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-dvh object-cover'
          />
        ))}
      </Carousel>
    </section>
  );
};

export default MainImageSlider;
