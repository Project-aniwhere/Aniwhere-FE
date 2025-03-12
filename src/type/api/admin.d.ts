import { UserInfo } from '../auth';

export interface UserListResponse {
  content: UserInfo[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  sort: Sort;
}
