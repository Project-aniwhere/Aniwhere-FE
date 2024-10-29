'use client';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { ModalRef } from '@/type/modal';
import ModalDialog from '../modal/modal-dialog';
import { createPortal } from 'react-dom';
import GoogleSvg from '@/asset/svg/google/google-svg';
import KakaotalkSvg from '@/asset/svg/kakaotalk/kakaotalk-svg';

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<ModalRef>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginClick = () => {
    modalRef.current?.openModal();
  };

  return (
    <>
      <header
        className={
          isAtTop
            ? 'font-semibold duration-300 py-5 px-8 text-white w-full fixed z-50 flex flex-row items-center justify-between bg-gradient-to-b from-black/40 to-transparent'
            : 'font-semibold duration-300 py-5 px-8 text-black bg-white w-full fixed z-50 flex flex-row items-center justify-between'
        }
      >
        <div className='flex flex-row items-center gap-8'>
          <p className='text-lg font-black'>ANIWHERE</p>
          <div className='flex flex-row gap-2'>
            <Link href='/tag'>태그검색</Link>
            <Link href='/popular'>인기작품</Link>
            <Link href='/new'>신작</Link>
          </div>
        </div>
        <div className='flex flex-row items-center gap-8'>
          <search>검색</search>
          <button onClick={handleLoginClick}>로그인/회원가입</button>
        </div>
      </header>
      <ModalDialog ref={modalRef}>
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
          <div className='bg-white rounded-lg w-full max-w-md p-6 relative'>
            {/* Logo */}
            <h1 className='text-aniviolet3 text-2xl font-bold text-center mb-8'>
              ANIWHERE
            </h1>

            {/* Title */}
            <h2 className='text-lg font-medium text-center mb-6'>로그인</h2>

            {/* Form */}
            <form className='space-y-4'>
              <input
                type='email'
                placeholder='이메일'
                className='w-full p-3 border border-gray-300 rounded-lg bg-gray-50'
              />

              <input
                type='password'
                placeholder='비밀번호'
                className='w-full p-3 border border-gray-300 rounded-lg bg-gray-50'
              />

              <button
                type='submit'
                className='w-full py-3 bg-aniviolet3 text-white rounded-lg hover:bg-purple-700 transition-colors'
              >
                로그인
              </button>
            </form>

            {/* Links */}
            <div className='mt-4 text-center text-sm'>
              <p className='text-gray-600'>
                비밀번호를 잊어버리셨나요?{' '}
                <button className='text-aniviolet3 hover:underline'>
                  찾기
                </button>
              </p>
              <p className='mt-2 text-gray-600'>
                계정이 없으신가요?{' '}
                <button className='text-aniviolet3 hover:underline'>
                  회원가입
                </button>
              </p>
            </div>

            {/* Social Login */}
            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300'></div>
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 bg-white text-gray-500'>OR</span>
                </div>
              </div>

              <div className='mt-6 flex justify-center gap-4'>
                <button className='flex items-center justify-center rounded-full hover:opacity-80 transition-opacity'>
                  <div className='w-12 h-12'>
                    <KakaotalkSvg height='50' width='50'></KakaotalkSvg>
                  </div>
                </button>
                <button className='flex items-center justify-center rounded-full hover:opacity-80 transition-opacity'>
                  <div className='w-12 h-12'>
                    <GoogleSvg height='50' width='50'></GoogleSvg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalDialog>
    </>
  );
};

export default Header;
