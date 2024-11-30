'use client';
import UnderlineButton from '@/component/common/button/hover-underline-button';
import ModalDialog from '@/component/common/modal/modal-dialog';
import SignupForm from '@/component/signup/signup-form';
import SocialSignIn from '@/component/signup/social-signin';
import { ModalRef } from '@/type/modal';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

const Page = () => {
  const modalRef = useRef<ModalRef>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const status = searchParams.get('status');
    if (status) {
      console.log('status:', searchParams.get('status'));
      console.log('message:', searchParams.get('message'));
      console.log('modalRef:', modalRef.current);
      setTimeout(() => {
        modalRef.current?.openModal();
      }, 100);
      window.history.replaceState({}, '', '/signup');
    }
  }, [searchParams]);

  return (
    <div className='w-full min-h-screen flex items-center justify-center pt-16'>
      <div className='bg-white w-full max-w-md p-6 relative flex flex-col items-center gap-2'>
        {/* Logo */}
        <h1 className='text-aniviolet3 text-3xl font-bold'>ANIWHERE</h1>

        {/* Title */}
        <h2 className='text-2xl mb-6'>회원가입</h2>

        {/* Form */}
        <SignupForm />

        {/* Links */}
        <div className='mt-4 text-center flex flex-col items-center'>
          <span className='text-gray-600 inline-flex'>
            <p className='whitespace-nowrap'>이미 가입하셨나요?</p>
            <Link href='/login'>
              <UnderlineButton className='ml-1' text='로그인' />
            </Link>
          </span>
        </div>

        {/* Social Sign-up */}
        <div className='mt-6 w-full'>
          <div className='flex flex-row items-center'>
            <div className='flex-grow border-t border-gray-300' />
            <span className='px-2 bg-white text-gray-500'>OR</span>
            <div className='flex-grow border-t border-gray-300' />
          </div>

          <SocialSignIn />
        </div>
      </div>
      <ModalDialog ref={modalRef}>
        <div className='w-full max-w-sm p-4 rounded-lg z-50'>
          <h3 className='text-lg font-semibold mb-2'>
            {searchParams.get('status') === 'success'
              ? '회원가입 완료'
              : '회원가입 실패'}
          </h3>
          <p>{searchParams.get('message')}</p>
        </div>
      </ModalDialog>
    </div>
  );
};

export default Page;
