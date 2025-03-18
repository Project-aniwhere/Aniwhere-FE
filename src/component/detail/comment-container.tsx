import CommentList from './comment-list';
import Rating from './rating';
import { AnimeReviewInfoType, PageType } from '@/type/api/anime-api';

interface CommentContainerProps {
  list: AnimeReviewInfoType[];
  rating: number;
  id: string;
  type: PageType;
}

const CommentContainer = ({
  list,
  rating,
  id,
  type,
}: CommentContainerProps) => {
  return (
    <div className='flex flex-col'>
      <Rating id={id} type={type} />
      <CommentList list={list} rating={rating} type={type} />
    </div>
  );
};

export default CommentContainer;
