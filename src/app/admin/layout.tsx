'use client';

import Header from '@/component/admin/header';
import Sidebar from '@/component/admin/sidebar';
import { useState } from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4'>
          <div className='h-full'>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
