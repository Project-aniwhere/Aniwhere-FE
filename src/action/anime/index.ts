import { AnimeDetailResponse, AnimeWeeklyResponse } from '@/type/api/anime-api';
import { APIResult } from '@/type/common';
import { Fetch } from '@/util/fetch';

const prefix = '/api/anime';

// 요일별 애니메이션 조회
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

// 애니메이션 상세 조회
export const getAnimeDetail = async (
  id: string | null
): Promise<AnimeDetailResponse | null> => {
  const response = await Fetch(`${prefix}/${id}`, {
    next: { revalidate: 1200 },
  });

  if (response.ok) return response.json();
  return null;
};

// 애니메이션 리뷰 작성
export const putAnimeReview = async (
  animeId: string | null,
  userId: number,
  data: { rating: number; content: string }
): Promise<APIResult<null>> => {
  const response = await Fetch(
    `${prefix}/${animeId}/reviews?userId=${userId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 1200 },
      body: JSON.stringify(data),
    }
  );

  if (response.ok) return response.json();
  return null;
};
