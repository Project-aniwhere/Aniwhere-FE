import { getEpisodeDetail } from '@/action/episode';
import { createQuery } from '@/util/query-key';

const query = createQuery(['episode'], {
  detail: (id: string) => {
    return {
      queryKey: ['detail', id],
      queryFn: () => getEpisodeDetail(id),
      enabled: !!id,
    };
  },
});

const episodeQuery = {
  query,
};

export default episodeQuery;
