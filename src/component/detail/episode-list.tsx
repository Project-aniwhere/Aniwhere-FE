import useIsMobile from '@/hook/device-detect/use-is-mobile';
import EpisodeItem from './episode-item';
import MobileEpisodeItem from './episode-item-mobile';
import Link from 'next/link';
import { useInfiniteQuery } from '@tanstack/react-query';
import animeQuery from '@/hook/query/anime';
import InfiniteScroll from '../common/infinite-scroll/infinite-scroll';

interface EpisodeListProps {
  id: string;
}

const EpisodeList = ({ id }: EpisodeListProps) => {
  const isMobile = useIsMobile();

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    animeQuery.infiniteQuery.episodes(id)
  );

  return (
    <>
      {data?.pages[0].totalCount ? (
        <ul className='flex flex-col'>
          {data.pages.flatMap((page) =>
            page.content.map((item) => (
              <li key={item.episode_id}>
                <Link href={`/detail/${item.animeId}/${item.episode_id}`}>
                  {isMobile ? (
                    <MobileEpisodeItem item={item} />
                  ) : (
                    <EpisodeItem item={item} />
                  )}
                </Link>
              </li>
            ))
          )}
        </ul>
      ) : (
        <div className='p-4 text-gray-400'>등록된 에피소드가 없습니다.</div>
      )}
      <InfiniteScroll hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
    </>
  );
};

export default EpisodeList;
