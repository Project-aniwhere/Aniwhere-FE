'use client';

import { getAnimeDetail, getAnimeEpisodeList } from '@/action/anime';
import Layout from '@/app/(default)/layout';
import Header from '@/component/common/header/header';
import Tabs from '@/component/common/tab/tab-list';
import DetailBanner from '@/component/detail/banner';
import CastProductList from '@/component/detail/cast-production-list';
import CommentContainer from '@/component/detail/comment-container';
import EpisodeList from '@/component/detail/episode-list';
import { DETAIL_TABS } from '@/constant/common';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

const DetailPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'episode';

  const { data, isSuccess, isError } = useQuery({
    queryKey: ['animeDetail', id],
    queryFn: () => getAnimeDetail(id as string),
    enabled: !!id,
  });
  const { data: episodes } = useQuery({
    queryKey: ['animeEpisodeList', id],
    queryFn: () => getAnimeEpisodeList(id as string),
    enabled: isSuccess,
  });

  const handleChangeTab = (tab: string) => {
    router.push(`/detail/${id}?tab=${tab}`);
  };

  // if (isError) return <div>에러 페이지로 이동</div>;

  return (
    <div>
      <Header />
      {data ? (
        <>
          <DetailBanner
            poster={data.poster}
            title={data.title}
            rating={4.3}
            runningTime={data.runningTime}
            categories={data.categories}
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
              {tab === 'episode' && episodes ? (
                <EpisodeList list={episodes.content} />
              ) : (
                <div>데이터가 없습니다</div>
              )}
              {tab === 'cast' && <CastProductList list={data.castings} />}
              {tab === 'comment' && <CommentContainer list={data.reviews} />}
            </div>
          </div>
        </>
      ) : (
        <Layout>데이터가 없습니다.</Layout>
      )}
    </div>
  );
};

export default DetailPage;
