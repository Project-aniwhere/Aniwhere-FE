import useIsMobile from '@/hook/device-detect/use-is-mobile';
import EpisodeItem from './episode-item';
import MobileEpisodeItem from './episode-item-mobile';
import { AnimeDetailEpisodeInfoType } from '@/type/api/anime-api';

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
            {isMobile ? (
              <MobileEpisodeItem data={item} />
            ) : (
              <EpisodeItem data={item} />
            )}
          </li>
        ))
      ) : (
        <div className='p-4'>에피소드가 없습니다.</div>
      )}
    </ul>
  );
};

export default EpisodeList;
