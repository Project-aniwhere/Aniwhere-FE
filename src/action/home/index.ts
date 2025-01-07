import { AnimeRecommendResponse } from '@/type/api/anime-recommend-api';
import { Fetch } from '@/util/fetch';

export const getAnimeRecommendList =
  async (): Promise<AnimeRecommendResponse> => {
    const response = await Fetch('/recommend', {
      next: { revalidate: 1200 },
    });

    if (response.ok) return response.json();
    return [];
  };
