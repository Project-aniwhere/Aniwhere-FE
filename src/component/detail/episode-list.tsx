import useIsMobile from '@/hook/device-detect/use-is-mobile';
import EpisodeItem from './episode-item';
import MobileEpisodeItem from './episode-item-mobile';
import { AnimeDetailEpisodeInfoType } from '@/type/api/anime-api';
import Link from 'next/link';

interface EpisodeListProps {
  list: AnimeDetailEpisodeInfoType[];
}

const EpisodeList = ({ list }: EpisodeListProps) => {
  const isMobile = useIsMobile();

  return (
    <ul className='flex flex-col'>
      {list ? (
        list.map((item) => (
          <li key={item.episode_id}>
            <Link href={`/detail/${item.animeId}/${item.episode_id}`}>
              {isMobile ? (
                <MobileEpisodeItem data={item} />
              ) : (
                <EpisodeItem data={item} />
              )}
            </Link>
          </li>
        ))
      ) : (
        <div className='p-4'>에피소드가 없습니다.</div>
      )}
    </ul>
  );
};

export default EpisodeList;
