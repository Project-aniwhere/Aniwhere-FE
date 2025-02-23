'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import adminQuery from '@/hook/query/admin';
import { deleteAdminUser, UserSearchOptionType } from '@/action/admin/user';
import ArrowSvg from '@/asset/svg/arrow/arrow';
import ArrowButton from '@/component/common/carousel/arrow-button';

const UsersPage = () => {
  const [userPage, setUserPage] = useState(1);
  const [userSearch, setUserSearch] = useState<UserSearchOptionType>({
    nickname: '',
    email: '',
    sex: '',
  });

  const [searchTarget, setSearchTarget] =
    useState<keyof UserSearchOptionType>('nickname');
  const [searchTargetModalOpen, setSearchTargetModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: userData, isLoading: isUsersLoading } = useQuery(
    adminQuery.query.userList(userPage, 'ASC', userSearch)
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
    <div className='flex p-4 flex-col gap-4 h-full bg-white rounded-lg shadow'>
      <div className='relative'>
        <input
          type='text'
          placeholder='Search users...'
          value={userSearch[searchTarget]}
          onChange={(e) =>
            setUserSearch({ ...userSearch, [searchTarget]: e.target.value })
          }
          className='w-full p-2 border rounded'
        />
        <div
          className='absolute z-50 flex items-center gap-2 right-2 top-[50%] -translate-y-[50%] bg-white px-2 py-1 border rounded cursor-pointer'
          onClick={() => setSearchTargetModalOpen(!searchTargetModalOpen)}
        >
          <ArrowSvg
            width='0.5rem'
            height='0.875rem'
            direction={searchTargetModalOpen ? 'up' : 'down'}
          />
          <span className='text-sm font-semibold'>{searchTarget}</span>
          {searchTargetModalOpen && (
            <div className='absolute  top-8 right-0 w-40 bg-white border rounded shadow-lg'>
              {['nickname', 'email', 'sex'].map((target) => (
                <button
                  key={target}
                  onClick={() => {
                    setSearchTarget(target as keyof UserSearchOptionType);
                    setSearchTargetModalOpen(false);
                  }}
                  className='w-full p-2 text-left hover:bg-gray-100'
                >
                  {target}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

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
              userData?.content.map((user) => (
                <tr key={user.userId}>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {user.nickname}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>{user.email}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>{user.role}</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <button className='text-blue-600 hover:text-blue-900 mr-2'>
                      ✏️
                    </button>
                    <button
                      className='text-red-600 hover:text-red-900'
                      onClick={() => deleteUserMutation.mutate(user.userId)}
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
