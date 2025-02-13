import { getAdminAnimeList, getAdminUsers } from '@/action/admin/anime';
import { getAdminRecommendedAnimeList } from '@/action/admin/recommended-list';
import { createInfiniteQuery, createQuery } from '@/util/query-key';

const query = createQuery(['admin'], {
  recommend: () => ({
    queryKey: ['recommendedAnimeLists'],
    queryFn: getAdminRecommendedAnimeList,
  }),
  animeList: (animePage?: number, animeSearch?: string) => ({
    queryKey: ['anime', animePage, animeSearch],
    queryFn: () => getAdminAnimeList(animePage, animeSearch),
  }),
  userList: (userPage?: number, userSearch?: string) => ({
    queryKey: ['users', userPage, userSearch],
    queryFn: () => getAdminUsers(userPage, userSearch),
  }),
});
const infiniteQuery = createInfiniteQuery(['admin'], {});

const adminQuery = {
  ...query,
  ...infiniteQuery,
};

export default adminQuery;
