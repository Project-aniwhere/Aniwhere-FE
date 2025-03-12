'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const pathName = usePathname();
  const currentActiveTab = pathName.split('/').at(-1);
  return (
    <div
      className={`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
    >
      <div className='flex items-center justify-between p-4'>
        <h1 className='text-2xl font-bold'>Anime Admin</h1>
        <button onClick={() => setIsSidebarOpen(false)} className='md:hidden'>
          ✖️
        </button>
      </div>
      <nav className='mt-8'>
        <Link
          href='/admin/users'
          className={`flex items-center px-4 py-2 ${currentActiveTab === 'users' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
        >
          👥 Users
        </Link>
        <Link
          href='/admin/anime'
          className={`flex items-center px-4 py-2 ${currentActiveTab === 'anime' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
        >
          📺 Anime
        </Link>
        <Link
          href='/admin/recommended-lists'
          className={`flex items-center px-4 py-2 ${currentActiveTab === 'recommended-lists' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
        >
          📋 Recommended Lists
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
