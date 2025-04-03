import { useQuery } from '@tanstack/react-query';
import CommentItem from './comment-item';
import { PageType } from '@/type/api/anime-api';
import animeQuery from '@/hook/query/anime';
import episodeQuery from '@/hook/query/episode';

interface CommentListProps {
  rating: number;
  id: string;
  type: PageType;
}

const CommentList = ({ rating, id, type }: CommentListProps) => {
  const { data: list } = useQuery(
    type === 'anime'
      ? animeQuery.query.reviews(id, {
          page: 1,
          size: 10,
          direction: 'ASC',
        })
      : episodeQuery.query.reviews(id, {
          page: 1,
          size: 10,
          direction: 'ASC',
        })
  );

  return (
    <div className='flex flex-col gap-4 p-3 md:p-5'>
      <div className='flex flex-col gap-3'>
        <p className='md:text-lg font-bold'>평균 평점</p>
        <div>
          <span className='text-xl md:text-3xl font-medium'>{rating} </span>
          <span className='text-xs md:text-sm'>({list?.content.length}개)</span>
        </div>
      </div>
      {list?.content.length ? (
        <ul className='grid md:grid-cols-4 gap-4'>
          {list.content.map((item) => (
            <li key={item.nickname}>
              <CommentItem item={item} id={id} type={type} />
            </li>
          ))}
        </ul>
      ) : (
        <div className='py-4 text-gray-400'>등록된 리뷰가 없습니다.</div>
      )}
    </div>
  );
};

export default CommentList;
