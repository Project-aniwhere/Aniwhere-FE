// VoiceActor 인터페이스
interface VoiceActor {
  voiceActorId: number;
  name: string;
}

// Casting 인터페이스
interface Casting {
  castingId: number;
  anime: string;
  voiceActor: VoiceActor;
  characterName: string;
  characterDescription: string;
}

// User 인터페이스
interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  nickname: string;
  email: string;
  password: string;
  role: 'ROLE_ADMIN' | 'ROLE_USER'; // 예시: 역할은 'ROLE_ADMIN' 또는 'ROLE_USER'일 수 있음
  birthyear: string;
  birthday: string;
  sex: 'male' | 'female' | 'other'; // 예시: 성별은 'male', 'female', 'other' 중 하나일 수 있음
  provider: string;
  providerId: string;
}

// Review 인터페이스
interface Review {
  reviewId: number;
  anime: string;
  user: User;
  rating: number;
  content: string;
  createdAt: string;
}

// Category 인터페이스
interface Category {
  categoryId: number;
  categoryName: string;
}

// Anime 인터페이스
interface Anime {
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
  createdAt: string;
  updatedAt: string;
  castings: Casting[];
  reviews: Review[];
  categories: Category[];
}

// MainObject 인터페이스
export interface AnimeRecommendInfoType {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  animes: Anime[];
}

// 최종 데이터 배열 인터페이스
export type AnimeRecommendResponse = Array<AnimeRecommendInfoType>;
