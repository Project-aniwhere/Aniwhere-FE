import CommentList from './comment-list';
import Rating from './rating';
import { AnimeReviewInfoType } from '@/type/api/anime-api';

interface CommentContainerProps {
  list: AnimeReviewInfoType[];
}

const CommentContainer = ({ list }: CommentContainerProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <Rating />
      <CommentList list={list} />
    </div>
  );
};

export default CommentContainer;
