export type SizeProps = 'small' | 'medium';
export type StateProps = 'default' | 'active' | 'disabled';

export interface CommonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export interface IconButtonProps extends CommonButtonProps {
  children: React.ReactNode;
}

export interface CommonDatepickerProps {
  onChange: (date: Value) => void;
  value: Value;
  placeholder?: string;
  className?: string;
  type?: string;
}

export type APIResult<T> =
  | T
  | {
      code: number;
      message: string;
    };

export type PageableResponse<T> = {
  totalElements: number;
  totalPages: number;
  size: number;
  content: T;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
};

export type PageableRequest = { page: number; size: number; sort: string[] };
