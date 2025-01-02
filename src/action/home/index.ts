import { AnimeRecommendResponse } from '@/type/api/anime-recommend-api';
import { serverFetch } from '@/util/fetch';

export const getAnimeRecommendList =
  async (): Promise<AnimeRecommendResponse> => {
    const response = await serverFetch('/recommend', {
      next: { revalidate: 1200 },
    });

    if (response.ok) return response.json();
    return [];
  };
