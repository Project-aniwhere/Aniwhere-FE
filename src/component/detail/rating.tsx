import HoverColorButton from '../common/button/hover-color-button';
import { useRef, useState } from 'react';
import { putAnimeReview } from '@/action/anime';
import { useAtomValue } from 'jotai';
import { sessionAtom } from '@/store/session-atom';
import StarRate from '../common/star-rate/star-rate';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postEpisodeReview } from '@/action/episode';
import { PageType } from '@/type/api/anime-api';
import ModalDialog from '../common/modal/modal-dialog';
import { ModalRef } from '@/type/modal';
import animeQuery from '@/hook/query/anime';
import episodeQuery from '@/hook/query/episode';

interface RatingProps {
  id: string;
  type: PageType;
}

const Rating = ({ id, type }: RatingProps) => {
  const queryClient = useQueryClient();

  const session = useAtomValue(sessionAtom);
  const disabled = !session.isLogin;

  const modalRef = useRef<ModalRef>(null);

  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  const { mutate: handleSubmit, data } = useMutation({
    mutationFn: () =>
      type === 'anime'
        ? putAnimeReview(id, session.userInfo?.userId || 0, {
            rating,
            content,
          })
        : postEpisodeReview(id, session.userInfo?.userId || 0, {
            rating,
            content,
          }),
    onSuccess: (data) => {
      if (data) {
        modalRef.current?.openModal();
        return;
      } else {
        if (type === 'anime') {
          queryClient.invalidateQueries({
            queryKey: animeQuery.query.detail(id).queryKey,
          });
        } else {
          queryClient.invalidateQueries({
            queryKey: episodeQuery.query.detail(id).queryKey,
          });
        }
        setRating(0);
        setContent('');
      }
    },
  });

  return (
    <>
      <ModalDialog ref={modalRef}>
        <div>{data?.message}</div>
      </ModalDialog>
      <div className='flex flex-col gap-4 p-3 md:p-5'>
        <div className='flex flex-col gap-3'>
          <p className='md:text-lg font-bold'>내 평점</p>
          <StarRate
            rate={rating}
            setRate={setRating}
            disabled={disabled}
            size='2.4rem'
          />
        </div>
        <div className='p-4 flex flex-col gap-2 border border-gray-200 rounded-md'>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={`${disabled ? '로그인 후 ' : ''}이 작품에 대한 리뷰를 남겨보세요!`}
            className='p-2 resize-none focus-visible:outline-aniviolet2'
            disabled={disabled}
          />
          <div className='flex justify-end'>
            <HoverColorButton
              text='등록'
              className='px-3 py-1'
              onClick={() => handleSubmit()}
              disabled={disabled}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rating;
