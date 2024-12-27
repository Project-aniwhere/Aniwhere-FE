import { PageableResponse } from '../common';

export interface AnimeWeeklyInfoType {
  animeId: number;
  title: string;
  poster: string;
  weekday: string;
}

export type AnimeWeeklyResponse = {
  [key: string]: AnimeWeeklyInfoType[];
};

export interface AnimeCastingInfoType {
  castingId: number;
  characterName: string;
  characterDescription: string;
  voiceActorName: string;
}

export interface AnimeReviewInfoType {
  reviewId: number;
  userId: string;
  rating: number;
  content: string;
  createdAt: string;
}

export interface AnimeDetailInfoType {
  animeId: number;
  title: string;
  director: string;
  characterDesign: string;
  musicDirector: string;
  animationDirector: string;
  script: string;
  producer: string;
  studio: string;
  releaseDate: string;
  endDate: string;
  episodes: number;
  runningTime: string;
  status: string;
  trailer: string;
  description: string;
  poster: string;
  airingQuarter: number;
  isAdult: boolean;
  duration: string;
  weekday: string;
  anilistId: string;
  categories: string[];
  castings: AnimeCastingInfoType[];
  reviews: AnimeReviewInfoType[];
}

export type AnimeDetailResponse = AnimeDetailInfoType;

export interface AnimeEpisodeInfoType {
  episode_id: number;
  animeId: number;
  episodeNumber: number;
  title: string;
  releaseDate: string;
  duration: number;
  episodeStory: string;
  stillImage: string;
}

export type AnimeEpisodeListResponse = PageableResponse<AnimeEpisodeInfoType[]>;
