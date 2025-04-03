import {
  getAnimeDetail,
  getAnimeEpisodeList,
  getAnimeReviewList,
  getAnimeWeeklyList,
} from '@/action/anime';
import { PageableRequest } from '@/type/common';
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
  reviews: (id: string, pageableRequest: PageableRequest) => {
    return {
      queryKey: ['reviews', id],
      queryFn: () => getAnimeReviewList(id, pageableRequest),
      enabled: !!id,
    };
  },
  episodes: (id: string, pageableRequest: PageableRequest) => {
    return {
      queryKey: ['episodes', id],
      queryFn: () => getAnimeEpisodeList(id, pageableRequest),
      enabled: !!id,
    };
  },
});

const animeQuery = {
  query,
};

export default animeQuery;
