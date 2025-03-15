import { PageableResponse } from '../common';

export interface AnimeWeeklyInfoType {
  animeId: number;
  title: string;
  poster: string;
  weekday: string;
}

export type AnimeWeeklyResponse = {
  weekdayCode: number;
  animes: AnimeWeeklyInfoType[];
}[];

export interface AnimeRatingInfoType {
  userId: number;
  animeId: number;
  rating: number;
}

export interface AnimeCastingInfoType {
  castingId: number;
  characterName: string;
  characterDescription: string;
  voiceActorName: string;
}

export interface AnimeReviewInfoType {
  animeId: number;
  rating: number;
  content: string;
  nickname: string;
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
  episodeNum: number;
  runningTime: string;
  status: string;
  trailer: string;
  description: string;
  poster: string;
  airingQuarter: number;
  isAdult: boolean;
  duration: string;
  weekday: string;
  ratings: AnimeRatingInfoType[];
  backgroundImage: string;
  categories: string[];
  castings: AnimeCastingInfoType[];
  episodes: AnimeEpisodeInfoType[];
  averageRating: number;
  reviews: AnimeReviewInfoType[];
}

export type AnimeDetailResponse = AnimeDetailInfoType;

export interface AnimeEpisodeInfoType {
  episodeId: number;
  episodeNumber: number;
  title: string;
  releaseDate: string;
  duration: number;
  episodeStory: string;
  stillImage: string;
}

export type AnimeEpisodeListResponse = PageableResponse<AnimeEpisodeInfoType[]>;
