'use client';

import { getEpisodeDetail } from '@/action/episode';
import Layout from '@/app/(default)/layout';
import DetailBanner from '@/component/detail/banner';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import CommentContainer from './comment-container';

const EpisodeDetailClientPage = () => {
  const { episodeId } = useParams();

  const { data } = useQuery({
    queryKey: ['episodeDetail', episodeId],
    queryFn: () => getEpisodeDetail(episodeId as string),
    enabled: !!episodeId,
  });

  return data?.[0] ? (
    <>
      <DetailBanner
        poster={data[0].stillImage}
        title={`${data[0].episodeNumber}화 ${data[0].title}`}
        rating={data[0].averageRating}
        releaseDate={[data[0].releaseDate]}
        description={data[0].episodeStory}
      />
      <div className='pt-5 pb-20 px-5 md:px-8 flex flex-col gap-5'>
        <CommentContainer
          list={data[0].reviews}
          rating={data[0].averageRating}
          id={episodeId as string}
          type='episode'
        />
      </div>
    </>
  ) : (
    <Layout>데이터가 없습니다.</Layout>
  );
};

export default EpisodeDetailClientPage;
