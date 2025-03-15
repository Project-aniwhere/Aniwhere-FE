import {
  AnimeDetailResponse,
  AnimeEpisodeListResponse,
  AnimeWeeklyResponse,
} from '@/type/api/anime-api';
import { PageableRequest } from '@/type/common';
import { Fetch } from '@/util/fetch';

const prefix = 'api/anime';

export const getAnimeWeeklyList = async ({
  year,
  quarter,
}: {
  year: string;
  quarter: string;
}): Promise<AnimeWeeklyResponse | null> => {
  const response = await Fetch(
    `${prefix}/weekday?year=${year}&quarter=${quarter}`,
    {
      next: { revalidate: 1200 },
    }
  );

  if (response.ok) return response.json();
  return null;
};

export const getAnimeDetail = async (
  id: string | null
): Promise<AnimeDetailResponse | null> => {
  const response = await Fetch(`${prefix}/${id}`, {
    next: { revalidate: 1200 },
  });

  if (response.ok) return response.json();
  return null;
};

export const getAnimeEpisodeList = async (
  id: string | null,
  request: PageableRequest
): Promise<AnimeEpisodeListResponse | null> => {
  const response = await Fetch(`api/anime/${id}/episodes?request=${request}`, {
    next: { revalidate: 1200 },
  });

  if (response.ok) return response.json();
  return null;
};
