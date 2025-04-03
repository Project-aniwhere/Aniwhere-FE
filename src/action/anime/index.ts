import { DEFAULT_PAGEABLE_RESPONSE } from '@/constant/common';
import {
  AnimeDetailEpisodeInfoType,
  AnimeDetailResponse,
  AnimeReviewInfoType,
  AnimeWeeklyResponse,
} from '@/type/api/anime-api';
import { APIResult, PageableRequest, PageableResponse } from '@/type/common';
import { objectToSearchParams } from '@/util/common';
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
    `${prefix}/weekday?year=${year}&quarter=${quarter}`
  );

  if (response.ok) return response.json();
  return null;
};

// 애니메이션 상세 조회
export const getAnimeDetail = async (
  id: string | null
): Promise<AnimeDetailResponse | null> => {
  const response = await Fetch(`${prefix}/${id}`);

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
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) return response.json();
  return null;
};

// 애니메이션 리뷰 수정
export const patchAnimeReview = async (
  animeId: string | null,
  animeReviewId: number,
  userId: number,
  data: { rating: number; content: string }
): Promise<APIResult<null>> => {
  const response = await Fetch(
    `${prefix}/${animeId}/reviews/${animeReviewId}?userId=${userId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) return response.json();
  return null;
};

// 애니메이션 리뷰 삭제
export const deleteAnimeReview = async (
  animeId: string | null,
  animeReviewId: number,
  userId: number
): Promise<APIResult<null>> => {
  const response = await Fetch(
    `${prefix}/${animeId}/reviews/${animeReviewId}?userId=${userId}`,
    {
      method: 'DELETE',
    }
  );

  if (!response.ok) return response.json();
  return null;
};

// 애니메이션 리뷰 조회
export const getAnimeReviewList = async (
  id: string,
  pageableRequest: PageableRequest
): Promise<PageableResponse<AnimeReviewInfoType>> => {
  const params = objectToSearchParams(pageableRequest);

  const response = await Fetch(`${prefix}/${id}/reviews?${params}`);

  if (response.ok) return response.json();
  return DEFAULT_PAGEABLE_RESPONSE;
};

// 애니메이션 에피소드 조회
export const getAnimeEpisodeList = async (
  id: string,
  pageableRequest: PageableRequest
): Promise<PageableResponse<AnimeDetailEpisodeInfoType>> => {
  const params = objectToSearchParams(pageableRequest);

  const response = await Fetch(`${prefix}/${id}/episodes?${params}`);

  if (response.ok) return response.json();
  return DEFAULT_PAGEABLE_RESPONSE;
};
