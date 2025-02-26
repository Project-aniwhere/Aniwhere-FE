import { AnimeTagListResponse } from '@/type/api/tag-api';
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
