import CommentList from './comment-list';
import Rating from './rating';

const CommentContainer = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Rating />
      <CommentList />
    </div>
  );
};

export default CommentContainer;
