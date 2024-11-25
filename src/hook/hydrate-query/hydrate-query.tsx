/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const HydrateQuery = async ({
  children,
  queryKey,
  queryFn,
}: {
  children: React.ReactNode;
  queryKey: any;
  queryFn: any;
}) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default HydrateQuery;
