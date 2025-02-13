'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import adminQuery from '@/hook/query/admin';
import {
  AdminRecommendedAnimeList,
  deleteAdminRecommendedAnime,
  postAdminRecommendedAnime,
  putAdminRecommendedAnime,
} from '@/action/admin/recommended-list';

const RecommendedAnimeListPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentList, setCurrentList] = useState<{
    id: number;
    name: string;
    animes: string[];
  } | null>(null);
  const [newList, setNewList] = useState({ name: '', animes: ['', '', ''] });
  const queryClient = useQueryClient();

  const { data: recommendedLists, isLoading } = useQuery(
    adminQuery.recommend()
  );

  const addMutation = useMutation({
    mutationFn: postAdminRecommendedAnime,
    onSuccess: () => {
      const data = queryClient.getQueryData<AdminRecommendedAnimeList>(
        adminQuery.recommend().queryKey
      );
      if (data) {
        queryClient.setQueryData(adminQuery.recommend().queryKey, [
          ...data,
          newList,
        ]);
      }
      setIsAddModalOpen(false);
      setNewList({ name: '', animes: ['', '', ''] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: putAdminRecommendedAnime,
    onSuccess: () => {
      const data = queryClient.getQueryData<AdminRecommendedAnimeList>(
        adminQuery.recommend().queryKey
      );

      if (data) {
        const updatedData = data.map((list) =>
          list.id === currentList?.id ? currentList : list
        );
        queryClient.setQueryData(adminQuery.recommend().queryKey, updatedData);
      }
      setIsEditModalOpen(false);
      setCurrentList(null);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteAdminRecommendedAnime,
    onSuccess: () => {
      const data = queryClient.getQueryData<AdminRecommendedAnimeList>(
        adminQuery.recommend().queryKey
      );

      if (data) {
        const updatedData = data.filter((list) => list.id !== currentList?.id);
        queryClient.setQueryData(adminQuery.recommend().queryKey, updatedData);
      }
      setIsEditModalOpen(false);
      setCurrentList(null);
    },
  });

  const handleAddList = () => {
    addMutation.mutate(newList);
  };

  const handleUpdateList = () => {
    if (currentList) {
      updateMutation.mutate(currentList);
    }
  };

  const handleDeleteList = (id: number) => {
    if (
      confirm('Are you sure you want to delete this recommended anime list?')
    ) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-bold'>Recommended Anime Lists</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Add New List
        </button>
      </div>

      {isLoading ? (
        <p>Loading recommended anime lists...</p>
      ) : (
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                List Name
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                Animes
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {recommendedLists?.map((list) => (
              <tr key={list.id}>
                <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                  {list.name}
                </td>
                <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                  {list.animes.join(', ')}
                </td>
                <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                  <button
                    onClick={() => {
                      setCurrentList(list);
                      setIsEditModalOpen(true);
                    }}
                    className='text-blue-600 hover:text-blue-900 mr-2'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteList(list.id)}
                    className='text-red-600 hover:text-red-900'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {isAddModalOpen && (
        <div
          className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'
          id='add-modal'
        >
          <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
            <h3 className='text-lg font-medium leading-6 text-gray-900 mb-2'>
              Add New Recommended Anime List
            </h3>
            <input
              type='text'
              placeholder='List Name'
              value={newList.name}
              onChange={(e) => setNewList({ ...newList, name: e.target.value })}
              className='w-full p-2 mb-4 border rounded'
            />
            {newList.animes.map((anime, index) => (
              <input
                key={index}
                type='text'
                placeholder={`Anime ${index + 1}`}
                value={anime}
                onChange={(e) => {
                  const updatedAnimes = [...newList.animes];
                  updatedAnimes[index] = e.target.value;
                  setNewList({ ...newList, animes: updatedAnimes });
                }}
                className='w-full p-2 mb-2 border rounded'
              />
            ))}
            <div className='flex justify-end mt-4'>
              <button
                onClick={handleAddList}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
              >
                Add List
              </button>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && currentList && (
        <div
          className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'
          id='edit-modal'
        >
          <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
            <h3 className='text-lg font-medium leading-6 text-gray-900 mb-2'>
              Edit Recommended Anime List
            </h3>
            <input
              type='text'
              value={currentList.name}
              onChange={(e) =>
                setCurrentList({ ...currentList, name: e.target.value })
              }
              className='w-full p-2 mb-4 border rounded'
            />
            {currentList.animes.map((anime, index) => (
              <input
                key={index}
                type='text'
                value={anime}
                onChange={(e) => {
                  const updatedAnimes = [...currentList.animes];
                  updatedAnimes[index] = e.target.value;
                  setCurrentList({ ...currentList, animes: updatedAnimes });
                }}
                className='w-full p-2 mb-2 border rounded'
              />
            ))}
            <div className='flex justify-end mt-4'>
              <button
                onClick={handleUpdateList}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
              >
                Update List
              </button>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendedAnimeListPage;
