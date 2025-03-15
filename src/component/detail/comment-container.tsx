import CommentList from './comment-list';
import Rating from './rating';
import { AnimeReviewInfoType } from '@/type/api/anime-api';

interface CommentContainerProps {
  list: AnimeReviewInfoType[];
  rating: number;
  id: string;
  refetchGetAnimeDetail: () => void;
}

const CommentContainer = ({
  list,
  rating,
  id,
  refetchGetAnimeDetail,
}: CommentContainerProps) => {
  return (
    <div className='flex flex-col'>
      <Rating id={id} refetchGetAnimeDetail={refetchGetAnimeDetail} />
      <CommentList
        list={list}
        rating={rating}
        refetchGetAnimeDetail={refetchGetAnimeDetail}
      />
    </div>
  );
};

export default CommentContainer;
