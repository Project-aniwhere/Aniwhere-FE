'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const fetchUsers = async (page = 1, search = '') => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const allUsers = [
    {
      id: 1,
      username: 'otaku123',
      email: 'otaku123@example.com',
      role: 'Admin',
    },
    {
      id: 2,
      username: 'animefan',
      email: 'animefan@example.com',
      role: 'User',
    },
    {
      id: 3,
      username: 'mangareader',
      email: 'mangareader@example.com',
      role: 'User',
    },
    {
      id: 4,
      username: 'naruto_lover',
      email: 'naruto@example.com',
      role: 'User',
    },
    {
      id: 5,
      username: 'sailor_moon',
      email: 'sailormoon@example.com',
      role: 'User',
    },
    { id: 6, username: 'goku_fan', email: 'goku@example.com', role: 'User' },
    {
      id: 7,
      username: 'mecha_pilot',
      email: 'mecha@example.com',
      role: 'User',
    },
    {
      id: 8,
      username: 'studio_ghibli',
      email: 'ghibli@example.com',
      role: 'User',
    },
    {
      id: 9,
      username: 'attack_titan',
      email: 'titan@example.com',
      role: 'User',
    },
    {
      id: 10,
      username: 'pokemon_master',
      email: 'pokemon@example.com',
      role: 'User',
    },
    {
      id: 11,
      username: 'onepiece_fan',
      email: 'onepiece@example.com',
      role: 'User',
    },
    {
      id: 12,
      username: 'dragonball_z',
      email: 'dbz@example.com',
      role: 'User',
    },
    {
      id: 13,
      username: 'fullmetal_alchemist',
      email: 'fma@example.com',
      role: 'User',
    },
    {
      id: 14,
      username: 'deathnote_lover',
      email: 'deathnote@example.com',
      role: 'User',
    },
    {
      id: 15,
      username: 'bleach_soul',
      email: 'bleach@example.com',
      role: 'User',
    },
  ];
  const filteredUsers = allUsers.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );
  const itemsPerPage = 10;
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  return {
    users: paginatedUsers,
    totalPages: Math.ceil(filteredUsers.length / itemsPerPage),
  };
};

const deleteUser = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`User ${id} deleted`);
};

const UsersPage = () => {
  const [userPage, setUserPage] = useState(1);
  const [userSearch, setUserSearch] = useState('');
  const queryClient = useQueryClient();

  const { data: userData, isLoading: isUsersLoading } = useQuery({
    queryKey: ['users', userPage, userSearch],
    queryFn: () => fetchUsers(userPage, userSearch),
  });

  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
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
