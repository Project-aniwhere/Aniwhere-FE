'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { throttle } from '@/util/throttle';
import MobileNav from './mobile-nav';
import DesktopNav from './desktop-nav';

interface HeaderProps {
  fixedStyle?: boolean;
}

const Header = ({ fixedStyle = false }: HeaderProps) => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 0) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={
          isAtTop && !fixedStyle
            ? 'font-semibold duration-300 py-5 px-8 text-white w-full fixed z-50 flex flex-row items-center justify-between bg-gradient-to-b from-black/40 to-transparent'
            : 'font-semibold duration-300 py-5 px-8 text-black bg-white w-full fixed z-50 flex flex-row items-center justify-between'
        }
      >
        <Link href='/'>
          <p className='text-lg font-black mr-8'>ANIWHERE</p>
        </Link>
        <div className='block md:hidden'>
          <MobileNav />
        </div>
        <div className='hidden md:block w-full'>
          <DesktopNav />
        </div>
      </header>
    </>
  );
};

export default Header;
