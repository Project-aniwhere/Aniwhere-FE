import AnimeCard from '@/component/common/card/anime-card';

const PopularPage = () => {
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
            reviews={Array(10)
              .fill(0)
              .map((_, idx) => ({
                anime: '스파이 패밀리',
                content: `테스트 내용입니다. ${idx}`,
                createdAt: '2020-10-27',
                rating: 4.5,
                reviewId: 1,
              }))}
          />
        ))}
    </div>
  );
};

export default PopularPage;
