import { AnimeRecommendResponse } from '@/type/api/anime-recommend-api';
import { Fetch } from '@/util/fetch';

export const getAnimeSelectedByAdminList =
  async (): Promise<AnimeRecommendResponse> => {
    const response = await Fetch('/api/selected', {
      next: { revalidate: 1200 },
    });

    if (response.ok) return response.json();
    return [];
  };
