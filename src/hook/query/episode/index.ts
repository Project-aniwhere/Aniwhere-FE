import { getEpisodeDetail, getEpisodeReviewList } from '@/action/episode';
import { PageableRequest } from '@/type/common';
import { createQuery } from '@/util/query-key';

const query = createQuery(['episode'], {
  detail: (id: string) => {
    return {
      queryKey: ['detail', id],
      queryFn: () => getEpisodeDetail(id),
      enabled: !!id,
    };
  },
  reviews: (id: string, pageableRequest: PageableRequest) => {
    return {
      queryKey: ['reviews', id],
      queryFn: () => getEpisodeReviewList(id, pageableRequest),
      enabled: !!id,
    };
  },
});

const episodeQuery = {
  query,
};

export default episodeQuery;
