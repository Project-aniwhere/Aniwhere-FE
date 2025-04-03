import CommentList from './comment-list';
import Rating from './rating';
import { PageType } from '@/type/api/anime-api';

interface CommentContainerProps {
  rating: number;
  id: string;
  type: PageType;
}

const CommentContainer = ({ rating, id, type }: CommentContainerProps) => {
  return (
    <div className='flex flex-col'>
      <Rating id={id} type={type} />
      <CommentList rating={rating} id={id} type={type} />
    </div>
  );
};

export default CommentContainer;
