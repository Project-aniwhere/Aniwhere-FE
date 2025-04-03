import {
  AnimeDetailEpisodeInfoType,
  AnimeDetailResponse,
  AnimeReviewInfoType,
  AnimeWeeklyResponse,
} from '@/type/api/anime-api';
import { APIResult, PageableRequest, PageableResponse } from '@/type/common';
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
  const pageableQuery = new URLSearchParams();
  Object.entries(pageableRequest).forEach(([key, value]) => {
    pageableQuery.append(key, String(value));
  });

  const response = await Fetch(`${prefix}/${id}/reviews?${pageableQuery}`);

  if (response.ok) return response.json();
  return {
    content: [],
    totalCount: 0,
    pageNumber: 0,
    pageSize: 0,
    totalPages: 0,
    sort: {
      empty: true,
      sorted: true,
      unsorted: true,
    },
  };
};

// 애니메이션 에피소드 조회
export const getAnimeEpisodeList = async (
  id: string,
  pageableRequest: PageableRequest
): Promise<PageableResponse<AnimeDetailEpisodeInfoType>> => {
  const pageableQuery = new URLSearchParams();
  Object.entries(pageableRequest).forEach(([key, value]) => {
    pageableQuery.append(key, String(value));
  });

  const response = await Fetch(`${prefix}/${id}/episodes?${pageableQuery}`);

  if (response.ok) return response.json();
  return {
    content: [],
    totalCount: 0,
    pageNumber: 0,
    pageSize: 0,
    totalPages: 0,
    sort: {
      empty: true,
      sorted: true,
      unsorted: true,
    },
  };
};
