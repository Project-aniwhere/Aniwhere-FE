import { getDifferenceTime } from '@/util/time';
import StarRate from '../star-rate/star-rate';
import Image from 'next/image';
import HeartSvg from '@/asset/svg/heart/heart-svg';
import MenuDotSvg from '@/asset/svg/menudot/menu-dot-svg';

/* eslint-disable @next/next/no-img-element */
interface CommentProps {
  userIcon?: string;
  nickName: string;
  uploadedTime: string;
  animeTitle: string;
  rate: number;
  image?: string;
  comment: string;
  likeCount: number;
  isLikeClicked?: boolean;
}

const Comment = ({
  userIcon,
  nickName,
  uploadedTime,
  animeTitle,
  rate,
  image = '',
  comment,
  likeCount,
  isLikeClicked,
}: CommentProps) => {
  return (
    <div className='flex flex-col border rounded-lg p-2 gap-2 h-full'>
      <div className='flex flex-row gap-1 items-center h-12'>
        <img
          src={userIcon}
          alt='유저 아이콘'
          className='h-full aspect-square rounded-full border object-cover'
        ></img>
        <div className='flex-grow flex flex-row items-center justify-between'>
          <div className='flex flex-col'>
            <p className='font-semibold'>{nickName}</p>
            <p className='text-[0.75rem] text-gray-500'>
              {getDifferenceTime(new Date(uploadedTime))}
            </p>
          </div>
          <div className='flex flex-col items-end'>
            <p className='text-[0.75rem]'>{animeTitle}</p>
            <StarRate rate={rate} />
          </div>
        </div>
      </div>
      {image ? (
        <Image
          src={image}
          alt='comment image'
          width={0}
          height={0}
          sizes='100%'
          className='w-full aspect-video object-cover rounded-lg border'
        />
      ) : (
        <div className='flex-grow'></div>
      )}
      <p className='text-sm line-clamp-4'>{comment}</p>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-2'>
          <HeartSvg fill={isLikeClicked ? '#B9B9B9' : '#FB3D3D'} />
          <p className='text-[0.875rem] font-medium'>{`좋아요 ${likeCount}개`}</p>
        </div>
        <button>
          <MenuDotSvg />
        </button>
      </div>
    </div>
  );
};

export default Comment;
