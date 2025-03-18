'use client';

import { getAnimeDetail } from '@/action/anime';
import Layout from '@/app/(default)/layout';
import Tabs from '@/component/common/tab/tab-list';
import DetailBanner from '@/component/detail/banner';
import CastProductList from '@/component/detail/cast-production-list';
import CommentContainer from '@/component/detail/comment-container';
import EpisodeList from '@/component/detail/episode-list';
import { DETAIL_TABS } from '@/constant/common';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

const AnimeDetailClientPage = () => {
  const router = useRouter();
  const { animeId } = useParams();
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'episode';

  const { data } = useQuery({
    queryKey: ['animeDetail', animeId],
    queryFn: () => getAnimeDetail(animeId as string),
    enabled: !!animeId,
  });

  const handleChangeTab = (tab: string) => {
    router.push(`/detail/${animeId}?tab=${tab}`);
  };

  return data ? (
    <>
      <DetailBanner
        poster={data.poster}
        title={data.title}
        rating={data.averageRating}
        categories={data.categories}
        releaseDate={data.releaseDate}
        endDate={data.endDate}
        status={data.status}
        isAdult={data.isAdult}
        description={data.description}
        trailer={data.trailer}
        isClampDescription
        isAwImage
      />
      <div className='pt-5 pb-20 px-5 md:px-8 flex flex-col gap-5'>
        <Tabs
          list={Object.entries(DETAIL_TABS).map(([id, value]) => ({
            id,
            value,
          }))}
          value={tab}
          setValue={handleChangeTab}
        />
        <div>
          {tab === 'episode' && <EpisodeList list={data.episodes} />}
          {tab === 'cast' && (
            <CastProductList
              list={data.castings}
              studio={data.studio}
              director={data.director}
              script={data.script}
            />
          )}
          {tab === 'comment' && (
            <CommentContainer
              list={data.reviews}
              rating={data.averageRating}
              id={animeId as string}
              type='anime'
            />
          )}
        </div>
      </div>
    </>
  ) : (
    <Layout>데이터가 없습니다.</Layout>
  );
};

export default AnimeDetailClientPage;
