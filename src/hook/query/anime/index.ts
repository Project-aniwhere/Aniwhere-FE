import { getAnimeDetail, getAnimeWeeklyList } from '@/action/anime';
import { createQuery } from '@/util/query-key';

const query = createQuery(['anime'], {
  weekly: (year: string, quarter: string) => {
    return {
      queryKey: ['weekly', year, quarter],
      queryFn: () =>
        getAnimeWeeklyList({
          year,
          quarter,
        }),
    };
  },
  detail: (id: string) => {
    return {
      queryKey: ['detail', id],
      queryFn: () => getAnimeDetail(id),
      enabled: !!id,
    };
  },
});

const animeQuery = {
  query,
};

export default animeQuery;
