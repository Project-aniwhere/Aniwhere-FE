import useIsMobile from '@/hook/device-detect/use-is-mobile';
import EpisodeItem from './episode-item';
import MobileEpisodeItem from './episode-item-mobile';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import animeQuery from '@/hook/query/anime';

interface EpisodeListProps {
  id: string;
}

const EpisodeList = ({ id }: EpisodeListProps) => {
  const isMobile = useIsMobile();

  const { data: list } = useQuery(
    animeQuery.query.episodes(id, {
      page: 1,
      size: 10,
      direction: 'ASC',
    })
  );

  return list?.content.length ? (
    <ul className='flex flex-col'>
      {list.content.map((item) => (
        <li key={item.episode_id}>
          <Link href={`/detail/${item.animeId}/${item.episode_id}`}>
            {isMobile ? (
              <MobileEpisodeItem item={item} />
            ) : (
              <EpisodeItem item={item} />
            )}
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <div className='p-4 text-gray-400'>등록된 에피소드가 없습니다.</div>
  );
};

export default EpisodeList;
