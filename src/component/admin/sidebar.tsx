import Link from 'next/link';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const Sidebar = ({
  activeTab,
  setActiveTab,
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) => {
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
          href='/admin/dashboard'
          className={`flex items-center px-4 py-2 ${activeTab === 'dashboard' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
        >
          📊 Dashboard
        </Link>
        <Link
          href='/admin/users'
          className={`flex items-center px-4 py-2 ${activeTab === 'users' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
        >
          👥 Users
        </Link>
        <Link
          href='/admin/anime'
          className={`flex items-center px-4 py-2 ${activeTab === 'anime' ? 'bg-gray-900' : 'hover:bg-gray-700'}`}
        >
          📺 Anime
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
