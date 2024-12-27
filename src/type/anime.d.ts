export interface DailyAniProps {
  titleId: number;
  titleName: string;
  author: string;
  thumbnailUrl: string;
}

export interface AnimeCastingProps {
  castingId: number;
  characterName: string;
  characterDescription: string;
  voiceActorName: string;
}

export interface AnimeReviewProps {
  reviewId: number;
  userId: string;
  rating: number;
  content: string;
  createdAt: string;
}
