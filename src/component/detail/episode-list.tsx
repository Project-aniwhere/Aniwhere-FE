import useIsMobile from '@/hook/device-detect/use-is-mobile';
import EpisodeItem from './episode-item';
import MobileEpisodeItem from './episode-item-mobile';

const EpisodeList = () => {
  const isMobile = useIsMobile();

  return (
    <ul className='flex flex-col'>
      <li>{isMobile ? <MobileEpisodeItem /> : <EpisodeItem />}</li>
    </ul>
  );
};

export default EpisodeList;
