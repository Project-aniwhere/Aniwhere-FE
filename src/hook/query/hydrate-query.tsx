import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryFunction,
  QueryKey,
} from '@tanstack/react-query';

const HydrateQuery = async ({
  children,
  queryKey,
  queryFn,
}: {
  children: React.ReactNode;
  queryKey: QueryKey;
  queryFn: QueryFunction;
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
