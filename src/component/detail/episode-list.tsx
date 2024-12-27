import useIsMobile from '@/hook/device-detect/use-is-mobile';
import EpisodeItem from './episode-item';
import MobileEpisodeItem from './episode-item-mobile';
import { AnimeEpisodeInfoType } from '@/type/api/anime-api';

interface EpisodeListProps {
  list: AnimeEpisodeInfoType[];
}

const EpisodeList = ({ list }: EpisodeListProps) => {
  const isMobile = useIsMobile();

  return (
    <ul className='flex flex-col'>
      {list.map((item) => (
        <li key={item.episode_id}>
          {isMobile ? (
            <MobileEpisodeItem data={item} />
          ) : (
            <EpisodeItem data={item} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default EpisodeList;
