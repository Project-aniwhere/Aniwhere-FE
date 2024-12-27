'use client';

import { getAnimeDetail } from '@/action/anime';
import Header from '@/component/common/header/header';
import Tabs from '@/component/common/tab/tab-list';
import DetailBanner from '@/component/detail/banner';
import CastProductList from '@/component/detail/cast-production-list';
import CommentContainer from '@/component/detail/comment-container';
import EpisodeList from '@/component/detail/episode-list';
import { DETAIL_TABS } from '@/constant/common';
import { ANIME_DUMMY } from '@/constant/dummy';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

const DetailPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'episode';

  const { data } = useQuery({
    queryKey: ['animeDetail', id],
    queryFn: () => getAnimeDetail(id as string),
    enabled: !!id,
  });

  const handleChangeTab = (tab: string) => {
    router.push(`/detail/${id}?tab=${tab}`);
  };

  return (
    <div>
      <Header />
      <DetailBanner
        poster={ANIME_DUMMY.poster}
        title={ANIME_DUMMY.title}
        rating={4.3}
        runningTime={46}
        categories={ANIME_DUMMY.categories}
      />
      <div className='py-5 px-5 md:px-8 flex flex-col gap-5'>
        <Tabs
          list={Object.entries(DETAIL_TABS).map(([id, value]) => ({
            id,
            value,
          }))}
          value={tab}
          setValue={handleChangeTab}
        />
        <div>
          {tab === 'episode' && <EpisodeList />}
          {tab === 'cast_production' && (
            <CastProductList list={ANIME_DUMMY.castings} />
          )}
          {tab === 'comment' && <CommentContainer list={ANIME_DUMMY.reviews} />}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
