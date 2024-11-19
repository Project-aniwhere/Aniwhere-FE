import EpisodeItem from './episode-item';

const EpisodeList = () => {
  return (
    <ul className='flex flex-col gap-8'>
      <li>
        <EpisodeItem />
      </li>
      <li>
        <EpisodeItem />
      </li>
      <li>
        <EpisodeItem />
      </li>
      <li>
        <EpisodeItem />
      </li>
      <li>
        <EpisodeItem />
      </li>
      <li>
        <EpisodeItem />
      </li>
      <li>
        <EpisodeItem />
      </li>
    </ul>
  );
};

export default EpisodeList;
