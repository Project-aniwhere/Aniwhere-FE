import Carousel from '../common/carousel/carousel';
import { AnimeRecommendInfo } from '@/type/api/anime-recommend-api';
import CFImage from '../common/image/cf-image';

const ContentSlider = ({ title, description, animes }: AnimeRecommendInfo) => {
  return (
    <section className='w-full flex flex-col items-start gap-3'>
      <div className='px-2'>
        {description && (
          <h3 className='text-aniviolet2 text-[0.875rem]'>{description}</h3>
        )}
        <h2 className='font-bold text-xl'>{title}</h2>
      </div>
      <Carousel>
        {animes.map((anime) => (
          <div
            key={anime.poster + anime.title}
            className='p-2 hover:scale-105 duration-200 flex flex-col gap-2 cursor-pointer h-fit'
          >
            <CFImage
              src={anime.poster}
              alt='image list'
              width={0}
              height={0}
              sizes='25%'
              className='w-full rounded-lg'
            />
            <div>
              <p className='font-bold text-lg leading-5'>{anime.title}</p>
              <p className='text-[0.875rem] text-gray-500'>
                {anime.categories
                  .map((category) => category.categoryName)
                  .join(', ')}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ContentSlider;
