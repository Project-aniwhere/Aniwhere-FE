import CommentItem from './comment-item';
import { AnimeReviewInfoType } from '@/type/api/anime-api';

interface CommentListProps {
  list: AnimeReviewInfoType[];
  rating: number;
  refetchGetAnimeDetail: () => void;
}

const CommentList = ({
  list,
  rating,
  refetchGetAnimeDetail,
}: CommentListProps) => {
  return (
    <div className='flex flex-col gap-4 p-3 md:p-5'>
      <div className='flex flex-col gap-3'>
        <p className='md:text-lg font-bold'>평균 평점</p>
        <div>
          <span className='text-xl md:text-3xl font-medium'>{rating} </span>
          <span className='text-xs md:text-sm'>({list.length}개)</span>
        </div>
      </div>
      <ul className='grid md:grid-cols-4 gap-4'>
        {list.map((item) => (
          <li key={item.nickname}>
            <CommentItem
              data={item}
              refetchGetAnimeDetail={refetchGetAnimeDetail}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
