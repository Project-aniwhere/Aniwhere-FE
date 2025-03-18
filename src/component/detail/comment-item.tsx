import { deleteAnimeReview } from '@/action/anime';
import { deleteEpisodeReview } from '@/action/episode';
import FullStarSvg from '@/asset/svg/star/full-star-svg';
import { sessionAtom } from '@/store/session-atom';
import { AnimeReviewInfoType, PageType } from '@/type/api/anime-api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';

interface CommentItemProps {
  data: AnimeReviewInfoType;
  type: PageType;
}

const CommentItem = ({ data, type }: CommentItemProps) => {
  const queryClient = useQueryClient();
  const session = useAtomValue(sessionAtom);

  const { mutate: handleDelete } = useMutation({
    mutationFn: () =>
      type === 'anime'
        ? deleteAnimeReview(
            data.animeId,
            data.id,
            session.userInfo?.userId || 0
          )
        : deleteEpisodeReview(data.episodeId, session.userInfo?.userId || 0),
    onSuccess: () => {
      if (type === 'anime')
        queryClient.invalidateQueries({
          queryKey: ['animeDetail', String(data.animeId)],
        });
      else
        queryClient.invalidateQueries({
          queryKey: ['episodeDetail', String(data.episodeId)],
        });
    },
  });

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
            onClick={() => handleDelete()}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
