import Carousel from '../common/carousel/carousel';
import { AnimeRecommendInfoType } from '@/type/api/anime-recommend-api';
import CFImage from '../common/image/cf-image';
import FullStarSvg from '@/asset/svg/star/full-star-svg';

const MainImageSlider = async ({ animes }: AnimeRecommendInfoType) => {
  return (
    <section className='relative w-full h-full'>
      <Carousel
        itemPerCarousel={1}
        animation='fade'
        bullet
        bulletContainer='inner'
        bulletPosition='right'
      >
        {animes.map((anime) => (
          <div key={anime.poster} className='relative w-full h-dvh'>
            <div className='absolute size-full bg-radial-gradient-r' />
            <CFImage
              src={anime.poster}
              alt='main slider image'
              fill
              className='object-cover -z-10'
            />
            <div className='absolute left-4 bottom-4 text-white'>
              <p>{anime.releaseDate}</p>
              <p className='text-[2rem] font-bold'>{anime.title}</p>
              <p className='w-1/2 line-clamp-3'>{anime.description}</p>
              <div className='flex'>
                <FullStarSvg />
                <p>{anime.anilistId}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default MainImageSlider;
