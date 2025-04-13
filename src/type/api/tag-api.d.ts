export interface AnimeTagType {
  categoryId: number;
  categoryName: string;
}

export interface AnimeSearchRequest {
  categories: string[];
  quarters: number[];
  title: string;
  statuses: string[];
  year: number | null;
  page: number;
  size: number;
}

export interface AnimeSearchResponse {
  content: {
    animeId: number;
    title: string;
    status: string;
    poster: string;
  }[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
}
export type AnimeTagListResponse = AnimeTagType[];
