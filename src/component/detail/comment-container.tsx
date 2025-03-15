import CommentList from './comment-list';
import Rating from './rating';
import { AnimeReviewInfoType } from '@/type/api/anime-api';

interface CommentContainerProps {
  list: AnimeReviewInfoType[];
  rating: number;
}

const CommentContainer = ({ list, rating }: CommentContainerProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <Rating />
      <CommentList list={list} rating={rating} />
    </div>
  );
};

export default CommentContainer;
