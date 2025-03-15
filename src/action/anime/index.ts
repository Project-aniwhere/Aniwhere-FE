import { AnimeDetailResponse, AnimeWeeklyResponse } from '@/type/api/anime-api';
import { Fetch } from '@/util/fetch';

const prefix = '/api/anime';

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
