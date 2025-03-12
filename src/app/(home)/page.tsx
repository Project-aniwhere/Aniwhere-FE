import MainImageSlider from '@/component/home/main-image-slider';

import ContentSlider from '@/component/home/content-slider';
import MainLayout from '@/component/common/layout/main-layout';
import Footer from '@/component/common/footer/footer';
import CommentSlider from '@/component/home/comment-slider';
import Header from '@/component/common/header/header';
import { AnimeRecommendResponse } from '@/type/api/anime-recommend-api';
import { getAnimeRecommendList } from '@/action/home';
import AWImage from '@/component/common/image/cf-image';

export default async function Home() {
  const data: AnimeRecommendResponse = await getAnimeRecommendList();

  return (
    <div className='w-full min-h-dvh flex flex-col items-center gap-4'>
      <Header />
      <AWImage
        src={'posters/1iWzgAU9MMKrS67VnxH4XhDnTUa.jpg'}
        alt=''
        width={200}
        height={200}
      />
      {data.length > 0 && <MainImageSlider {...data[0]} />}

      {data.length > 1 ? (
        <MainLayout>
          {data.slice(1).map((anime) => (
            <ContentSlider key={anime.id} {...anime} />
          ))}
          <CommentSlider />
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
