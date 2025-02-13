'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import adminQuery from '@/hook/query/admin';
import { deleteAdminUser } from '@/action/admin/anime';

const UsersPage = () => {
  const [userPage, setUserPage] = useState(1);
  const [userSearch, setUserSearch] = useState('');
  const queryClient = useQueryClient();

  const { data: userData, isLoading: isUsersLoading } = useQuery(
    adminQuery.userList(userPage, userSearch)
  );

  const deleteUserMutation = useMutation({
    mutationFn: deleteAdminUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const renderPagination = (
    currentPage: number,
    totalPages: number,
    setPage: (page: number) => void
  ) => (
    <div className='flex justify-between items-center mt-4 px-4'>
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-3 py-1 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50'
      >
        Previous
      </button>
      <span className='text-sm text-gray-700'>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='px-3 py-1 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50'
      >
        Next
      </button>
    </div>
  );

  return (
    <div className='flex p-4 flex-col h-full bg-white rounded-lg shadow'>
      <input
        type='text'
        placeholder='Search users...'
        value={userSearch}
        onChange={(e) => setUserSearch(e.target.value)}
        className='w-full p-2 mb-4 border rounded'
      />

      <div className='flex-grow overflow-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='sticky top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50'>
                Username
              </th>
              <th className='sticky top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50'>
                Email
              </th>
              <th className='sticky top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50'>
                Role
              </th>
              <th className='sticky top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {isUsersLoading ? (
              <tr>
                <td colSpan={4} className='px-6 py-4 text-center'>
                  Loading users...
                </td>
              </tr>
            ) : (
              userData?.users.map((user) => (
                <tr key={user.id}>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {user.username}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>{user.email}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{user.role}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <button className='text-blue-600 hover:text-blue-900 mr-2'>
                      ✏️
                    </button>
                    <button
                      className='text-red-600 hover:text-red-900'
                      onClick={() => deleteUserMutation.mutate(user.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {userData && renderPagination(userPage, userData.totalPages, setUserPage)}
    </div>
  );
};

export default UsersPage;
