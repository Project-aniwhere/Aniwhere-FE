import MainImageSlider from '@/component/home/main-image-slider';
import ContentSlider from '@/component/home/content-slider';
import MainLayout from '@/component/common/layout/main-layout';
import Footer from '@/component/common/footer/footer';

import { AnimeRecommendResponse } from '@/type/api/anime-recommend-api';
import { getAnimeSelectedByAdminList } from '@/action/home';

export default async function Home() {
  const data: AnimeRecommendResponse = await getAnimeSelectedByAdminList();

  return (
    <div className='h-full flex flex-col items-center gap-4'>
      {data.length > 0 && <MainImageSlider {...data[0]} />}
      {data.length > 1 ? (
        <MainLayout>
          {data.slice(1).map(({ id, title, description, animes }) => (
            <ContentSlider
              key={id}
              id={id}
              title={title}
              description={description}
              animes={animes}
            />
          ))}
        </MainLayout>
      ) : (
        <div className='place-self-center mt-auto'>
          아직 정보가 없습니다. 다음에 더 훌륭한 정보로 찾아오겠습니다!
        </div>
      )}

      <Footer className='mt-auto self-end' />
    </div>
  );
}
