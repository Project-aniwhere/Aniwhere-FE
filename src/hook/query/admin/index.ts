import { getAdminAnimeList } from '@/action/admin/anime';
import { getAdminRecommendedAnimeList } from '@/action/admin/recommended-list';
import { getAdminUsers, UserSearchOptionType } from '@/action/admin/user';
import { isFetchError } from '@/util/fetch';
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
  userList: (
    page: number,
    direction: 'ASC' | 'DESC',
    option: UserSearchOptionType
  ) => ({
    queryKey: ['users', page, option],
    queryFn: async () => {
      const res = await getAdminUsers(page, 10, direction, option);
      if (isFetchError(res)) throw new Error(res.message);
      return res;
    },
    throwOnError: true,
  }),
});

const infiniteQuery = createInfiniteQuery(['admin'], {});

const adminQuery = {
  query,
  infiniteQuery,
};

export default adminQuery;
