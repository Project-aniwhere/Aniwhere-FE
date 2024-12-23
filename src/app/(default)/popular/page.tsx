import AnimeCard from '@/component/common/card/anime-card';

const PopularPage = () => {
  return (
    <>
      <p className='font-bold text-2xl'>인기 작품</p>
      <p className='text-sm text-gray-500'>요즘 가장 인기있는 애니 목록</p>
      <div className='mt-8 relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        {Array(50)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className='relative rounded-lg'>
              <AnimeCard
                id={idx}
                title='스파이 패밀리'
                genre='action'
                tag={['healing', 'humor', 'ishkai']}
                season={1}
                releaseType='tva'
                isBroadcasting='broadcasting'
                rating={4.5}
                ranking={idx + 1}
                reviews={Array(10)
                  .fill(0)
                  .map((_, idx) => ({
                    anime: '스파이 패밀리',
                    content: `테스트 내용입니다. 이건 truncate 테스트 내용이라${idx}`,
                    createdAt: '2020-10-27',
                    rating: 4.5,
                    reviewId: 1,
                  }))}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default PopularPage;
