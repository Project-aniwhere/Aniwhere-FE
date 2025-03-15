'use client';

import { getAnimeDetail } from '@/action/anime';
import Layout from '@/app/(default)/layout';
import DetailBanner from '@/component/detail/banner';
import CommentContainer from '@/component/detail/comment-container';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const EpisodeDetailPage = () => {
  const { episodeId } = useParams();

  const { data } = useQuery({
    queryKey: ['episodeDetail', episodeId],
    queryFn: () => getAnimeDetail(episodeId as string),
    enabled: !!episodeId,
  });

  return data ? (
    <>
      <DetailBanner
        poster={data.poster}
        title={data.title}
        rating={data.averageRating}
        runningTime={data.runningTime}
        categories={data.categories}
      />
      <div className='py-5 px-5 md:px-8 flex flex-col gap-5'>
        <CommentContainer list={data.reviews} rating={data.averageRating} />
      </div>
    </>
  ) : (
    <Layout>데이터가 없습니다.</Layout>
  );
};

export default EpisodeDetailPage;
