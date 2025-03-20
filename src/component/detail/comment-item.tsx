import { deleteAnimeReview } from '@/action/anime';
import { deleteEpisodeReview } from '@/action/episode';
import FullStarSvg from '@/asset/svg/star/full-star-svg';
import { sessionAtom } from '@/store/session-atom';
import { AnimeReviewInfoType, PageType } from '@/type/api/anime-api';
import { ModalRef } from '@/type/modal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { useRef } from 'react';
import ModalDialog from '../common/modal/modal-dialog';

interface CommentItemProps {
  item: AnimeReviewInfoType;
  id: string;
  type: PageType;
}

const CommentItem = ({ item, id, type }: CommentItemProps) => {
  const queryClient = useQueryClient();
  const session = useAtomValue(sessionAtom);
  const modalRef = useRef<ModalRef>(null);

  const { mutate: handleDelete, data } = useMutation({
    mutationFn: () =>
      type === 'anime'
        ? deleteAnimeReview(id, item.id, session.userInfo?.userId || 0)
        : deleteEpisodeReview(id, session.userInfo?.userId || 0),
    onSuccess: (data) => {
      if (data?.code === 200) {
        queryClient.invalidateQueries({
          queryKey: [type, 'detail', id],
        });
      } else {
        modalRef.current?.openModal();
      }
    },
  });

  return (
    <>
      <ModalDialog ref={modalRef}>
        <div>{data?.message}</div>
      </ModalDialog>
      <div className='flex flex-col gap-4 p-4 bg-gray-100 rounded-md'>
        <div className='flex justify-between items-center gap-4'>
          <span className='font-medium'>{item.nickname}</span>
          <div className='flex items-center gap-1.5 text-gray-400 text-xs bg-white py-1 px-2 rounded-lg'>
            <FullStarSvg fill='#9CA3AF' />
            <span>{item.rating}</span>
          </div>
        </div>
        <p className='text-gray-400'>{item.content}</p>
        {session.userInfo?.userId === item.userId && (
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
    </>
  );
};

export default CommentItem;
