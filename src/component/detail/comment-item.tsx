import Image from 'next/image';
import sample1 from '@/asset/img/subslider/sample1.jpg';
import { AnimeReviewInfoType } from '@/type/api/anime-api';

interface CommentItemProps {
  data: AnimeReviewInfoType;
}

const CommentItem = ({ data }: CommentItemProps) => {
  return (
    <div className='flex flex-col gap-4 p-4 bg-gray-100 rounded-md'>
      <div className='flex justify-between items-center gap-4'>
        <div className='flex items-center gap-2'>
          <Image
            src={sample1.src}
            alt='프로필'
            width={50}
            height={50}
            className='object-cover rounded-full'
          />
          <span className='font-medium'>이름</span>
        </div>
        <div className='flex gap-2 text-gray-400 text-sm'>
          <span>별</span>
          <span>{data.rating}</span>
        </div>
      </div>
      <p className='text-gray-400'>{data.content}</p>
      <div className='flex justify-end gap-4 text-gray-400 text-sm'>
        <button className='flex gap-2'>
          <span>따봉</span>
          <span>21</span>
        </button>
        <button className='flex gap-2'>
          <span>댓글</span>
          <span>0</span>
        </button>
      </div>
    </div>
  );
};

export default CommentItem;
