import { getEpisodeDetail, getEpisodeReviewList } from '@/action/episode';
import { AnimeReviewInfoType } from '@/type/api/anime-api';
import { PageableResponse } from '@/type/common';
import { createInfiniteQuery, createQuery } from '@/util/query-key';

const query = createQuery(['episode'], {
  detail: (id: string) => {
    return {
      queryKey: ['detail', id],
      queryFn: () => getEpisodeDetail(id),
      enabled: !!id,
    };
  },
});

const infiniteQuery = createInfiniteQuery(['episode'], {
  reviews: (id: string) => {
    return {
      queryKey: ['reviews', id],
      queryFn: ({ pageParam }) =>
        getEpisodeReviewList(id, {
          page: pageParam,
          size: 1,
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
});

const episodeQuery = {
  query,
  infiniteQuery,
};

export default episodeQuery;
