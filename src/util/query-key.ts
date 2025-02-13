/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  UseQueryOptions,
  UseInfiniteQueryOptions,
  QueryKey,
} from '@tanstack/react-query';

export const createQuery = <
  TQueries extends Record<string, (...value: any) => UseQueryOptions>,
>(
  queryKey: QueryKey,
  queries: TQueries
): {
  [K in keyof TQueries]: TQueries[K];
} => {
  const res = Object.keys(queries).reduce(
    (acc, key) => {
      const prevKeys = queries[key as keyof TQueries]().queryKey;
      acc[key as keyof TQueries] = ((...value: any) => ({
        ...queries[key as keyof TQueries](...value),
        queryKey: [...queryKey, key, ...prevKeys] as QueryKey,
      })) as TQueries[keyof TQueries];
      return acc;
    },
    {} as {
      [K in keyof TQueries]: TQueries[K];
    }
  );
  return { ...res, baseKey: queryKey };
};

export const createInfiniteQuery = <
  TQueries extends Record<string, (value?: any) => UseInfiniteQueryOptions>,
>(
  queryKey: QueryKey,
  queries: TQueries
) => {
  const res = Object.keys(queries).reduce(
    (acc, key) => {
      const prevKeys = queries[key as keyof TQueries]().queryKey;
      acc[key as keyof TQueries] = ((value?: any) => ({
        ...queries[key as keyof TQueries](value),
        queryKey: ['infinite', ...queryKey, key, ...prevKeys] as QueryKey,
      })) as TQueries[keyof TQueries];
      return acc;
    },
    {} as {
      [K in keyof TQueries]: TQueries[K];
    }
  );
  return { ...res };
};
