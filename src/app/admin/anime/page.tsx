'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAdminAnime, postAdminAnime } from '@/action/admin/anime';
import adminQuery from '@/hook/query/admin';

const AnimePage = () => {
  const [animePage, setAnimePage] = useState(1);
  const [animeSearch, setAnimeSearch] = useState('');
  const [isAddAnimeModalOpen, setIsAddAnimeModalOpen] = useState(false);
  const [newAnime, setNewAnime] = useState({ title: '', genre: '', rating: 0 });
  const queryClient = useQueryClient();

  const { data: animeData, isLoading: isAnimeLoading } = useQuery(
    adminQuery.animeList(animePage, animeSearch)
  );

  const deleteAnimeMutation = useMutation({
    mutationFn: deleteAdminAnime,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: adminQuery.animeList().queryKey,
      });
    },
  });

  const addAnimeMutation = useMutation({
    mutationFn: postAdminAnime,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anime'] });
      setIsAddAnimeModalOpen(false);
      setNewAnime({ title: '', genre: '', rating: 0 });
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
    <div className='flex flex-col w-full h-full p-4 bg-white rounded-lg shadow'>
      <div className='flex justify-between items-center mb-4'>
        <input
          type='text'
          placeholder='Search anime...'
          value={animeSearch}
          onChange={(e) => setAnimeSearch(e.target.value)}
          className='w-full p-2 border rounded mr-2'
        />
        <button
          onClick={() => setIsAddAnimeModalOpen(true)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-4 h-full'
        >
          +
        </button>
      </div>
      <div className='flex-grow overflow-auto'>
        <table className='w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='sticky top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50'>
                Title
              </th>
              <th className='sticky top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50'>
                Genre
              </th>
              <th className='sticky top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50'>
                Rating
              </th>
              <th className='sticky top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {isAnimeLoading ? (
              <tr>
                <td colSpan={4} className='px-6 py-4 text-center'>
                  Loading anime...
                </td>
              </tr>
            ) : (
              animeData?.anime.map((animeItem) => (
                <tr key={animeItem.id}>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {animeItem.title}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {animeItem.genre}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {animeItem.rating}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <button className='text-blue-600 hover:text-blue-900 mr-2'>
                      ✏️
                    </button>
                    <button
                      className='text-red-600 hover:text-red-900'
                      onClick={() => deleteAnimeMutation.mutate(animeItem.id)}
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
      {animeData &&
        renderPagination(animePage, animeData.totalPages, setAnimePage)}

      {/* Add Anime Modal */}
      {isAddAnimeModalOpen && (
        <div
          className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'
          id='my-modal'
        >
          <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
            <div className='mt-3 text-center'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Add New Anime
              </h3>
              <div className='mt-2 px-7 py-3'>
                <input
                  type='text'
                  placeholder='Title'
                  value={newAnime.title}
                  onChange={(e) =>
                    setNewAnime({ ...newAnime, title: e.target.value })
                  }
                  className='w-full px-3 py-2 border rounded-md'
                />
                <input
                  type='text'
                  placeholder='Genre'
                  value={newAnime.genre}
                  onChange={(e) =>
                    setNewAnime({ ...newAnime, genre: e.target.value })
                  }
                  className='w-full px-3 py-2 border rounded-md mt-2'
                />
                <input
                  type='number'
                  placeholder='Rating'
                  value={newAnime.rating}
                  onChange={(e) =>
                    setNewAnime({
                      ...newAnime,
                      rating: parseFloat(e.target.value),
                    })
                  }
                  className='w-full px-3 py-2 border rounded-md mt-2'
                  min='0'
                  max='5'
                  step='0.1'
                />
              </div>
              <div className='items-center px-4 py-3'>
                <button
                  id='ok-btn'
                  className='px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300'
                  onClick={() => addAnimeMutation.mutate(newAnime)}
                >
                  Add Anime
                </button>
              </div>
              <div className='items-center px-4 py-3'>
                <button
                  id='cancel-btn'
                  className='px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300'
                  onClick={() => setIsAddAnimeModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimePage;
