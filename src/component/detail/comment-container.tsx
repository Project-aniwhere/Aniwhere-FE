import { AnimeReviewProps } from '@/type/anime';
import CommentList from './comment-list';
import Rating from './rating';

interface CommentContainerProps {
  list: AnimeReviewProps[];
}

const CommentContainer = ({ list }: CommentContainerProps) => {
  return (
    <div className='flex flex-col gap-8'>
      <Rating />
      <CommentList list={list} />
    </div>
  );
};

export default CommentContainer;
