import {
  AnimeDetailResponse,
  AnimeEpisodeListResponse,
  AnimeWeeklyResponse,
} from '@/type/api/anime-api';
import { Fetch } from '@/util/fetch';

const prefix = 'api/anime';

export const getAnimeDetail = async (
  id: string | null
): Promise<AnimeDetailResponse | null> => {
  const response = await Fetch(`${prefix}/${id}`, {
    next: { revalidate: 1200 },
  });

  if (response.ok) return response.json();
  return null;
};

export const getAnimeWeeklyList =
  async (): Promise<AnimeWeeklyResponse | null> => {
    const response = await Fetch(`${prefix}/weekday`, {
      next: { revalidate: 1200 },
    });

    if (response.ok) return response.json();
    return null;
  };

export const getAnimeQuarterList = async ({
  year,
  quarter,
}: {
  year: string;
  quarter: string;
}): Promise<AnimeWeeklyResponse | null> => {
  const response = await Fetch(
    `${prefix}/quarter?year=${year}&quarter=${quarter}`,
    {
      next: { revalidate: 1200 },
    }
  );

  if (response.ok) return response.json();
  return null;
};

export const getAnimeEpisodeList = async (
  id: string | null
): Promise<AnimeEpisodeListResponse | null> => {
  // TODO API URL 변경 ( api/animes -> api/anime )
  const response = await Fetch(`api/animes/${id}/episodes`, {
    next: { revalidate: 1200 },
  });

  if (response.ok) return response.json();
  return null;
};
