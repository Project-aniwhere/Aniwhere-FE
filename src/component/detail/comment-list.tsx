import CommentItem from './comment-item';
import { AnimeReviewInfoType } from '@/type/api/anime-api';

interface CommentListProps {
  list: AnimeReviewInfoType[];
}

const CommentList = ({ list }: CommentListProps) => {
  return (
    <div className='flex flex-col gap-4 p-3 md:p-5'>
      <div className='flex flex-col gap-2'>
        <p className='text-sm md:text-base font-medium'>평균 별점</p>
        <div>
          {/* TODO 평균 별점 추가 */}
          <span className='text-xl md:text-3xl font-medium'>4.1 </span>
          <span className='text-xs md:text-sm'>({list.length}명)</span>
        </div>
      </div>
      <ul className='grid grid-cols-4 gap-4'>
        {list.map((item) => (
          <li key={item.nickname}>
            <CommentItem data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
