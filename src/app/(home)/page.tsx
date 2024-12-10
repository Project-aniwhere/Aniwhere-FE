import MainImageSlider from '@/component/home/main-image-slider';

import sample1 from '@/asset/img/subslider/sample1.jpg';
import sample2 from '@/asset/img/subslider/sample2.jpg';
import sample3 from '@/asset/img/subslider/sample3.jpg';
import sample4 from '@/asset/img/subslider/sample4.jpg';
import ContentSlider from '@/component/home/content-slider';
import MainLayout from '@/component/common/layout/main-layout';
import Footer from '@/component/common/footer/footer';
import CommentSlider from '@/component/home/comment-slider';
import Header from '@/component/common/header/header';
import { Fetch } from '@/util/fetch';
import { AnimeRecommendResponse } from '@/type/api/anime-recommend-api';

export default async function Home() {
  const data: AnimeRecommendResponse = await (
    await Fetch('recommend', { next: { revalidate: 1200 } })
  ).json();

  return (
    <div className='w-full flex flex-col items-center gap-4'>
      <Header />
      <MainImageSlider {...data[0]} />
      <MainLayout>
        {data.slice(1).map((anime) => (
          <ContentSlider key={anime.id} {...anime} />
        ))}
        <CommentSlider />
      </MainLayout>
      <Footer />
    </div>
  );
}
