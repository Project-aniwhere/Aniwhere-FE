import CommentList from './comment-list';
import Rating from './rating';
import { AnimeReviewInfoType } from '@/type/api/anime-api';

interface CommentContainerProps {
  list: AnimeReviewInfoType[];
  rating: number;
  id: string;
}

const CommentContainer = ({ list, rating, id }: CommentContainerProps) => {
  return (
    <div className='flex flex-col'>
      <Rating id={id} />
      <CommentList list={list} rating={rating} />
    </div>
  );
};

export default CommentContainer;
