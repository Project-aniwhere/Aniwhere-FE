import {
  getAnimeDetail,
  getAnimeEpisodeList,
  getAnimeReviewList,
  getAnimeWeeklyList,
} from '@/action/anime';
import {
  AnimeDetailEpisodeInfoType,
  AnimeReviewInfoType,
} from '@/type/api/anime-api';
import { PageableResponse } from '@/type/common';
import { createInfiniteQuery, createQuery } from '@/util/query-key';

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

const infiniteQuery = createInfiniteQuery(['anime'], {
  reviews: (id: string) => {
    return {
      queryKey: ['reviews', id],
      queryFn: ({ pageParam }) =>
        getAnimeReviewList(id, {
          page: pageParam,
          size: 8,
          direction: 'ASC',
        }),
      enabled: !!id,
      initialPageParam: 0,
      getNextPageParam: (lastPage: PageableResponse<AnimeReviewInfoType>) => {
        if (lastPage.pageNumber >= lastPage.totalPages) return null;
        return lastPage.pageNumber + 1;
      },
    };
  },
  episodes: (id: string) => {
    return {
      queryKey: ['episodes', id],
      queryFn: ({ pageParam }) =>
        getAnimeEpisodeList(id, {
          page: pageParam,
          size: 8,
          direction: 'ASC',
        }),
      enabled: !!id,
      initialPageParam: 0,
      getNextPageParam: (
        lastPage: PageableResponse<AnimeDetailEpisodeInfoType>
      ) => {
        if (lastPage.pageNumber >= lastPage.totalPages) return null;
        return lastPage.pageNumber + 1;
      },
    };
  },
});

const animeQuery = {
  query,
  infiniteQuery,
};

export default animeQuery;
