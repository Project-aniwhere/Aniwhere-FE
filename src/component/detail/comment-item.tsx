import { deleteAnimeReview } from '@/action/anime';
import FullStarSvg from '@/asset/svg/star/full-star-svg';
import { sessionAtom } from '@/store/session-atom';
import { AnimeReviewInfoType } from '@/type/api/anime-api';
import { useAtomValue } from 'jotai';

interface CommentItemProps {
  data: AnimeReviewInfoType;
  refetchGetAnimeDetail: () => void;
}

const CommentItem = ({ data, refetchGetAnimeDetail }: CommentItemProps) => {
  const session = useAtomValue(sessionAtom);

  const handleDelete = async () => {
    const result = await deleteAnimeReview(
      data.animeId,
      data.id,
      session.userInfo?.userId || 0
    );

    if (result?.code === 200) refetchGetAnimeDetail();
  };

  return (
    <div className='flex flex-col gap-4 p-4 bg-gray-100 rounded-md'>
      <div className='flex justify-between items-center gap-4'>
        <span className='font-medium'>{data.nickname}</span>
        <div className='flex items-center gap-1.5 text-gray-400 text-xs bg-white py-1 px-2 rounded-lg'>
          <FullStarSvg fill='#9CA3AF' />
          <span>{data.rating}</span>
        </div>
      </div>
      <p className='text-gray-400'>{data.content}</p>
      {session.userInfo?.userId === data.userId && (
        <div className='flex justify-end'>
          <button
            className='text-red-600 text-sm bg-white py-1 px-2 rounded-lg'
            onClick={handleDelete}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
