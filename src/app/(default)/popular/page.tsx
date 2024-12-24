import AnimeCard from '@/component/common/card/anime-card';
import CommentSwiper from '@/component/common/comment/comment-swiper';
import StarRate from '@/component/common/comment/star-rate';
import CFImage from '@/component/common/image/cf-image';
import TagItem from '@/component/tag/tag-item';

const getRankColor = (idx: number) => {
  switch (idx) {
    case 1:
      return 'bg-aniviolet1';
    case 2:
      return 'bg-aniviolet2';
    case 3:
      return 'bg-aniviolet3';
    default:
      return 'bg-aniviolet4';
  }
};

const PopularPage = () => {
  return (
    <>
      <p className='font-bold text-2xl'>인기 작품</p>
      <p className='text-sm text-gray-500'>요즘 가장 인기있는 애니 목록</p>
      <div className='my-8 relative flex flex-col gap-8'>
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className='flex flex-col sm:flex-row flex-grow rounded-lg border p-2 sm:p-4 gap-4'
            >
              <div className='relative w-full aspect-video'>
                <div
                  className={`absolute z-10 w-10 h-10 font-bold text-lg flex items-center justify-center text-white rounded-ss-lg rounded-ee-lg ${getRankColor(idx)}`}
                >
                  {idx + 1}
                </div>
                <CFImage
                  src='https://image.tmdb.org/t/p/original/gDvxT2z6TNxervG97WfpePRZ3aR.jpg'
                  alt='랭킹 이미지'
                  fill
                  className='object-cover rounded-lg'
                />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='font-bold text-xl'>슈타인즈 게이트</p>
                <div className='flex flex-row justify-between items-center'>
                  <div className='flex flex-row gap-2'>
                    <TagItem tagName='추리' />
                    <TagItem tagName='SF' />
                  </div>
                  <StarRate rate={4.5} />
                </div>
                <p className='line-clamp-3 text-gray-600'>
                  무대는 2010년 여름의 아키하바라. 중증 중2병에서 아직도
                  헤어나오지 못한 대학생 오카베 린타로는, 「미래가젯트
                  연구소」를 설립하여, 용도불명의 희괴한 발명품들을 만들어 내고
                  있었다. 그러나 어느 날, 우연히 그들은 과거로 문자 메시지를
                  보낼 수 있는 「타임머신」을 만들어내고 만다. 세기의 발명에
                  흥분을 억누르지 못하고, 흥미 본위로 과거에 대한 간섭을
                  되풀이하는 오카베 일행. 그 결과, 세계를 휘말리게 하는 커다란
                  비극이 오카베 일행 앞에 찾아오게 되었다. 그리고 그 비극을
                  벗어나기 위한, 오카베의 고독한 싸움이 시작된다. 과연 그는
                  운명을 뒤바꾸고, 그것을 뛰어넘어 극복해낼 수 있을 것인가?
                </p>
                <div className='grid grid-cols-3'>
                  <div>
                    <p className='font-bold'>출시 연도</p>
                    <p>2006</p>
                  </div>
                  <div>
                    <p className='font-bold'>제작사</p>
                    <p>Sun TV</p>
                  </div>
                  <div>
                    <p className='font-bold'>총 에피소드</p>
                    <p>24회</p>
                  </div>
                </div>
                <CommentSwiper
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
            </div>
          ))}
      </div>
      <div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        {Array(47)
          .fill(0)
          .map((_, idx) => (
            <AnimeCard
              id={idx}
              key={idx}
              title='스파이 패밀리'
              genre='action'
              tag={['healing', 'humor', 'ishkai']}
              season={1}
              releaseType='tva'
              isBroadcasting='broadcasting'
              rating={4.5}
              ranking={idx + 4}
              imageAspect='16/9'
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
          ))}
      </div>
    </>
  );
};

export default PopularPage;
