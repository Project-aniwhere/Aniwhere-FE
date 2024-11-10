import { usePathname } from 'next/navigation';

interface HeaderProps {
  activeTab: string;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setIsSidebarOpen }: HeaderProps) => {
  const pathname = usePathname();
  return (
    <header className='bg-white shadow'>
      <div className='flex items-center justify-between px-4 py-3'>
        <button onClick={() => setIsSidebarOpen(true)} className='md:hidden'>
          ☰
        </button>
        <h2 className='text-xl font-semibold'>{pathname}</h2>
        <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
      </div>
    </header>
  );
};

export default Header;
