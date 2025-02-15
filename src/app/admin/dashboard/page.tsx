'use client';

import { useQuery } from '@tanstack/react-query';

const fetchDashboardData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    totalUsers: 5000,
    totalAnime: 1000,
    activeUsers: 3500,
  };
};

const DashboardPage = () => {
  const { data: dashboardData, isLoading: isDashboardLoading } = useQuery({
    queryKey: ['dashboardData'],
    queryFn: fetchDashboardData,
  });

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {isDashboardLoading ? (
        <p>Loading dashboard data...</p>
      ) : (
        <>
          <div className='bg-white p-4 rounded-lg shadow'>
            <h3 className='text-lg font-semibold mb-2'>Total Users</h3>
            <p className='text-3xl font-bold'>{dashboardData?.totalUsers}</p>
          </div>
          <div className='bg-white p-4 rounded-lg shadow'>
            <h3 className='text-lg font-semibold mb-2'>Total Anime</h3>
            <p className='text-3xl font-bold'>{dashboardData?.totalAnime}</p>
          </div>
          <div className='bg-white p-4 rounded-lg shadow'>
            <h3 className='text-lg font-semibold mb-2'>Active Users</h3>
            <p className='text-3xl font-bold'>{dashboardData?.activeUsers}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
