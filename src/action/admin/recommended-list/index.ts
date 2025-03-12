// Mock data for recommended anime lists
let recommendedAnimeLists = [
  {
    id: 1,
    name: 'Top Shonen Anime',
    animes: ['Naruto', 'One Piece', 'Dragon Ball Z'],
  },
  {
    id: 2,
    name: 'Best Psychological Thrillers',
    animes: ['Death Note', 'Steins;Gate', 'Psycho-Pass'],
  },
  {
    id: 3,
    name: 'Must-Watch Classics',
    animes: [
      'Cowboy Bebop',
      'Neon Genesis Evangelion',
      'Fullmetal Alchemist: Brotherhood',
    ],
  },
];

export type AdminRecommendedAnimeList = typeof recommendedAnimeLists;

export const getAdminRecommendedAnimeList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return recommendedAnimeLists;
};

export const postAdminRecommendedAnime = async (newList: {
  name: string;
  animes: string[];
}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newId = Math.max(...recommendedAnimeLists.map((list) => list.id)) + 1;
  const addedList = { id: newId, ...newList };
  recommendedAnimeLists.push(addedList);
  return addedList;
};

export const putAdminRecommendedAnime = async (updatedList: {
  id: number;
  name: string;
  animes: string[];
}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const index = recommendedAnimeLists.findIndex(
    (list) => list.id === updatedList.id
  );
  if (index !== -1) {
    recommendedAnimeLists[index] = updatedList;
  }
  return updatedList;
};

export const deleteAdminRecommendedAnime = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  recommendedAnimeLists = recommendedAnimeLists.filter(
    (list) => list.id !== id
  );
};
