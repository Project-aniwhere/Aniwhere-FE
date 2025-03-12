import { TagFilterState } from '@/component/tag/tag-filter-reducer';
import {
  AnimeSearchRequest,
  AnimeSearchResponse,
  AnimeTagListResponse,
} from '@/type/api/tag-api';
import { Fetch, isFetchError } from '@/util/fetch';

export const getAnimeTagList = async (): Promise<AnimeTagListResponse> => {
  const res = await Fetch('/api/anime/tag', {
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!res.ok || isFetchError(res)) {
    return [] as AnimeTagListResponse;
  }
  return res.json();
};

export const getSearchedAnime = async (
  searchProps: Partial<TagFilterState> & {
    page: number;
    size: number;
  }
): Promise<AnimeSearchResponse> => {
  const searchBody: AnimeSearchRequest = {
    categories: searchProps.tag?.map((tag) => tag[1].categoryName) || [],
    quarters: searchProps.season ? searchProps.season.map((s) => s[1]) : [],
    title: searchProps.searchKeyword || '',
    statuses: searchProps.broadcasting
      ? searchProps.broadcasting.map((broadCast) => broadCast[1])
      : [],
    year: searchProps.year || 2024,
    page: searchProps.page,
    size: searchProps.size,
  };
  const res = await Fetch('/api/anime/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 * 60 * 24 },
    body: JSON.stringify(searchBody),
  });

  if (!res.ok || isFetchError(res)) {
    return {
      content: [],
      totalCount: 0,
      pageNumber: 0,
      pageSize: 0,
      totalPages: 0,
      sort: { empty: false, sorted: false, unsorted: false },
    };
  }
  return res.json();
};
