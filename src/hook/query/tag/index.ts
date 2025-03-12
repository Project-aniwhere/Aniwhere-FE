import { getSearchedAnime } from '@/action/tag';
import { TagFilterState } from '@/component/tag/tag-filter-reducer';
import { AnimeSearchResponse } from '@/type/api/tag-api';
import { createInfiniteQuery } from '@/util/query-key';

const infiniteQuery = createInfiniteQuery(['tag'], {
  search: ({
    searchKeyword,
    tag,
    release,
    season,
    broadcasting,
    size = 10,
  }: Partial<TagFilterState> & {
    size?: number;
  }) => {
    return {
      queryKey: [searchKeyword, tag, release, season, broadcasting, size],
      queryFn: async ({ pageParam = 0 }) => {
        return getSearchedAnime({
          searchKeyword,
          tag,
          release,
          season,
          broadcasting,
          page: pageParam,
          size,
        });
      },
      initialPageParam: 0,
      getNextPageParam: (lastPage: AnimeSearchResponse) => {
        if (lastPage.pageNumber >= lastPage.totalPages) return null;
        return lastPage.pageNumber;
      },
    };
  },
});

const tagQuery = {
  infiniteQuery,
};

export default tagQuery;
