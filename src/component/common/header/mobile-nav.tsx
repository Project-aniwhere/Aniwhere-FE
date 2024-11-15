import { useState } from 'react';
import Link from 'next/link';
import CrossSvg from '@/asset/svg/cross/cross-svg';
import MenuLineSvg from '@/asset/svg/menuline/menu-line-svg';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuAniItems = [
    { href: '/tag', text: '태그 검색' },
    { href: '/popular', text: '인기 작품' },
    { href: '/weekly', text: '요일별 작품' },
  ];

  const menuUserItems = [{ href: '/userinfo', text: '마이페이지' }];

  return (
    <div className='relative'>
      <button onClick={toggleMenu}>
        {!isOpen && (
          <MenuLineSvg
            width='2rem'
            height='2rem'
            className='w-8 h-8 text-white'
          />
        )}
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-30
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleMenu}
      />
      {/* 드로워 메뉴 */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-3/5 
          bg-aniviolet3 z-40
          transform transition-all ease-in-out duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    `}
      >
        {/* 닫기 버튼 */}
        <div className='flex justify-end'>
          <button onClick={toggleMenu} className='m-5'>
            <CrossSvg width='1.5rem' height='1.5rem' fill='white' />
          </button>
        </div>
        <div className='flex flex-col items-center mb-8'>
          <div className='w-16 h-16 bg-white rounded-full mb-3' />
          <div className='text-white text-2xl'>박종권</div>
        </div>
        <div className='flex-grow border-t border-gray-300 m-5' />
        <div>
          {/* 메뉴 아이템들 */}
          {menuAniItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              className='block px-6 py-3 text-white text-xl'
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className='flex-grow border-t border-gray-300 m-5' />
        <div>
          {/* 메뉴 아이템들 */}
          {menuUserItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              className='block px-6 py-3 text-white text-xl'
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className='absolute bottom-5 right-5'>
          <Link href='/logout' className='text-white text-xl'>
            로그아웃
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
