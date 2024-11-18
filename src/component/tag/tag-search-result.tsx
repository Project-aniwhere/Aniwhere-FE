import AnimeCard from '../common/card/anime-card';

const TagSearchResult = () => {
  return (
    <div className='relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
      {Array(50)
        .fill(0)
        .map((_, idx) => (
          <AnimeCard
            key={idx}
            title='스파이 패밀리'
            genre='action'
            tag={['healing', 'humor', 'ishkai']}
            season={1}
            releaseType='tva'
            isBroadcasting='broadcasting'
          />
        ))}
    </div>
  );
};

export default TagSearchResult;
