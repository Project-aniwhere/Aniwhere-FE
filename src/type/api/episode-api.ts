export interface EpisodeReviewInfoType {
  episodeReviewId: number;
  episodeId: number;
  userId: number;
  rating: number;
  content: string;
  nickname: string;
}

export interface EpisodeDetailInfoType {
  episodeId: number;
  episodeNumber: number;
  title: string;
  releaseDate: string;
  duration: number;
  episodeStory: string;
  stillImage: string;
  averageRating: number;
  reviews: EpisodeReviewInfoType[];
}

export type EpisodeDetailResponse = EpisodeDetailInfoType[];
