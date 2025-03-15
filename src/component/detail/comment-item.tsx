import FullStarSvg from '@/asset/svg/star/full-star-svg';
import { AnimeReviewInfoType } from '@/type/api/anime-api';

interface CommentItemProps {
  data: AnimeReviewInfoType;
}

const CommentItem = ({ data }: CommentItemProps) => {
  return (
    <div className='flex flex-col gap-4 p-4 bg-gray-100 rounded-md'>
      <div className='flex justify-between items-center gap-4'>
        <span className='font-medium'>{data.nickname}</span>
        <div className='flex gap-2 text-gray-400 text-sm'>
          <FullStarSvg />
          <span>{data.rating}</span>
        </div>
      </div>
      <p className='text-gray-400'>{data.content}</p>
    </div>
  );
};

export default CommentItem;
