import Image from 'next/image';
import Carousel from '../common/carousel/carousel';
import { ContentSliderProps } from '@/type/content-slider';

const ContentSlider = ({
  mainTitle,
  subTitle,
  contentList,
}: ContentSliderProps) => {
  return (
    <section className='flex flex-col items-start gap-3'>
      <div className='px-8'>
        {subTitle && (
          <h3 className='text-aniviolet2 text-[0.875rem]'>{subTitle}</h3>
        )}
        <h2 className='font-bold text-xl'>{mainTitle}</h2>
      </div>
      <Carousel>
        {contentList.map((content) => (
          <div
            key={content.imageSrc + content.title}
            className='p-2 hover:scale-105 duration-200 flex flex-col gap-2 cursor-pointer h-fit'
          >
            <Image
              src={content.imageSrc}
              alt='image list'
              width={0}
              height={0}
              sizes='25%'
              className='w-full rounded-lg'
            />
            <div>
              <p className='font-bold text-lg leading-5'>{content.title}</p>
              <p className='text-[0.875rem] text-gray-500'>
                {content.tag.join(', ')}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ContentSlider;
