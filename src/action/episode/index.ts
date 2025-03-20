import { APIResult } from '@/type/common';
import { Fetch } from '@/util/fetch';

const prefix = '/api/episodes';

// 에피소드 리뷰 작성
export const putAnimeReview = async (
  episodeId: string | null,
  userId: number,
  data: { rating: number; content: string }
): Promise<APIResult<null>> => {
  const response = await Fetch(
    `${prefix}/${episodeId}/reviews?userId=${userId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (response.ok) return response.json();
  return null;
};

// 에피소드 리뷰 수정
export const patchAnimeReview = async (
  episodeId: string | null,
  userId: number,
  data: { rating: number; content: string }
): Promise<APIResult<null>> => {
  const response = await Fetch(
    `${prefix}/${episodeId}/reviews?userId=${userId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (response.ok) return response.json();
  return null;
};

// 에피소드 리뷰 삭제
export const deleteAnimeReview = async (
  episodeId: string | null,
  userId: number
): Promise<APIResult<null>> => {
  const response = await Fetch(
    `${prefix}/${episodeId}/reviews?userId=${userId}`,
    {
      method: 'DELETE',
    }
  );

  if (response.ok) return response.json();
  return null;
};
