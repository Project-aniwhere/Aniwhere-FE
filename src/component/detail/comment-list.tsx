import { AnimeReviewProps } from '@/type/anime';
import CommentItem from './comment-item';

interface CommentListProps {
  list: AnimeReviewProps[];
}

const CommentList = ({ list }: CommentListProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <p className='font-medium'>평균 별점</p>
        <div>
          <span className='text-3xl font-medium'>4.1 </span>
          <span className='text-sm'>({list.length}명)</span>
        </div>
      </div>
      <ul className='grid grid-cols-4 gap-4'>
        {list.map((item) => (
          <li key={item.reviewId}>
            <CommentItem />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
