import { AnimeDetailResponse, AnimeWeeklyResponse } from '@/type/api/anime-api';
import { Fetch } from '@/util/fetch';

const prefix = 'api/anime';

export const getAnimeDetail = async (
  id: number
): Promise<AnimeDetailResponse> => {
  const response = await Fetch(`${prefix}/${id}`, {
    next: { revalidate: 1200 },
  });

  if (response.ok) return response.json();
  return null;
};

export const getAnimeWeeklyList = async (): Promise<AnimeWeeklyResponse> => {
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
  year: number;
  quarter: number;
}): Promise<AnimeWeeklyResponse> => {
  const response = await Fetch(
    `${prefix}/quarter?year=${year}&quarter=${quarter}`,
    {
      next: { revalidate: 1200 },
    }
  );

  if (response.ok) return response.json();
  return null;
};
