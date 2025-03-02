'use client';

import ModalDialog from '@/component/common/modal/modal-dialog';
import { ModalRef } from '@/type/modal';
import { useRouter, useSearchParams } from 'next/navigation';
import { use, useEffect, useRef } from 'react';

const OauthCallbackPage = ({
  params,
}: {
  params: Promise<{
    oauth: string;
  }>;
}) => {
  const query = useSearchParams();
  const router = useRouter();
  const code = query.get('code');

  const modalRef = useRef<ModalRef>(null);

  const { oauth } = use(params);

  const onCloseModal = () => {
    router.push('/login');
  };

  useEffect(() => {
    if (!code) return;

    // need to fix...
    fetch(`/api/auth/${oauth}/callback?code=${code}`, {
      method: 'POST',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          modalRef.current?.openModal();
        }
      })
      .then(() => {
        // set user info to store
      })
      .catch(() => {
        modalRef.current?.openModal();
      });
  }, [code, oauth, router]);

  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center z-[100]'>
        <ModalDialog ref={modalRef} onClose={onCloseModal}>
          <div>
            <div className='font-semibold text-xl mt-8'>
              로그인에 실패했습니다.
            </div>
            <div className='text-sm'>다시 시도해 주세요</div>
            <button
              className='w-full mt-4 py-2 px-4 bg-aniviolet2 text-white rounded'
              onClick={onCloseModal}
            >
              확인
            </button>
          </div>
        </ModalDialog>
      </div>
      <div className='min-h-dvh flex flex-col items-center justify-center gap-2'>
        <div className='inset-0 flex items-center justify-center'>
          <div className='size-16 border-8 border-gray-300 border-t-8 border-t-black rounded-full animate-spin'></div>
        </div>
        <div className='font-semibold text-xl'>Oauth 로그인 중...</div>
      </div>
    </>
  );
};

export default OauthCallbackPage;
