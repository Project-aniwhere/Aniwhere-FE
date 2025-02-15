'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

let animeData = [
  { id: 1, title: 'Naruto', genre: 'Action, Adventure', rating: 4.5 },
  { id: 2, title: 'Death Note', genre: 'Mystery, Thriller', rating: 4.7 },
  { id: 3, title: 'One Piece', genre: 'Action, Adventure', rating: 4.8 },
  {
    id: 4,
    title: 'Attack on Titan',
    genre: 'Action, Dark Fantasy',
    rating: 4.9,
  },
  { id: 5, title: 'My Hero Academia', genre: 'Superhero, Action', rating: 4.6 },
  {
    id: 6,
    title: 'Fullmetal Alchemist: Brotherhood',
    genre: 'Adventure, Fantasy',
    rating: 4.9,
  },
  { id: 7, title: 'Demon Slayer', genre: 'Action, Supernatural', rating: 4.8 },
  { id: 8, title: 'Steins;Gate', genre: 'Sci-Fi, Thriller', rating: 4.9 },
  { id: 9, title: 'Hunter x Hunter', genre: 'Adventure, Fantasy', rating: 4.9 },
  { id: 10, title: 'Code Geass', genre: 'Mecha, Thriller', rating: 4.8 },
  {
    id: 11,
    title: 'Dragon Ball Z',
    genre: 'Action, Supernatural',
    rating: 4.7,
  },
  {
    id: 12,
    title: 'Neon Genesis Evangelion',
    genre: 'Mecha, Psychological',
    rating: 4.5,
  },
  {
    id: 13,
    title: 'Cowboy Bebop',
    genre: 'Space Western, Sci-Fi',
    rating: 4.9,
  },
  {
    id: 14,
    title: 'Sword Art Online',
    genre: 'Adventure, Sci-Fi',
    rating: 4.3,
  },
  {
    id: 15,
    title: 'Tokyo Ghoul',
    genre: 'Dark Fantasy, Supernatural',
    rating: 4.4,
  },
];

const fetchAnime = async (page = 1, search = '') => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const filteredAnime = animeData.filter(
    (anime) =>
      anime.title.toLowerCase().includes(search.toLowerCase()) ||
      anime.genre.toLowerCase().includes(search.toLowerCase())
  );
  const itemsPerPage = 10;
  const paginatedAnime = filteredAnime.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  return {
    anime: paginatedAnime,
    totalPages: Math.ceil(filteredAnime.length / itemsPerPage),
  };
};

const deleteAnime = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  animeData = animeData.filter((anime) => anime.id !== id);
  console.log(`Anime ${id} deleted`);
};

const addAnime = async (newAnime: {
  title: string;
  genre: string;
  rating: number;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newId = Math.max(...animeData.map((a) => a.id)) + 1;
  const addedAnime = { id: newId, ...newAnime };
  animeData.push(addedAnime);
  return addedAnime;
};

const AnimePage = () => {
  const [animePage, setAnimePage] = useState(1);
  const [animeSearch, setAnimeSearch] = useState('');
  const [isAddAnimeModalOpen, setIsAddAnimeModalOpen] = useState(false);
  const [newAnime, setNewAnime] = useState({ title: '', genre: '', rating: 0 });
  const queryClient = useQueryClient();

  const { data: animeData, isLoading: isAnimeLoading } = useQuery({
    queryKey: ['anime', animePage, animeSearch],
    queryFn: () => fetchAnime(animePage, animeSearch),
  });

  const deleteAnimeMutation = useMutation({
    mutationFn: deleteAnime,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anime'] });
    },
  });

  const addAnimeMutation = useMutation({
    mutationFn: addAnime,
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
