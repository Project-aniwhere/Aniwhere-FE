const animeData = [
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

export type AdminAnimeList = typeof animeData;

export const getAdminAnimeList = async (page = 1, search = '') => {
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

export const deleteAdminAnime = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return id;
};

export const postAdminAnime = async (newAnime: {
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
