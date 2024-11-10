'use client';

import AnimeContent from '@/component/admin/anime-content';
import DashboardContent from '@/component/admin/dashboard-content';
import Header from '@/component/admin/header';
import Sidebar from '@/component/admin/sidebar';
import UsersContent from '@/component/admin/user-content';
import { useState } from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header activeTab={activeTab} setIsSidebarOpen={setIsSidebarOpen} />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4'>
          <div className='h-full'>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
