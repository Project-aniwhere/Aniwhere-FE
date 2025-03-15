import { memo, useMemo } from 'react';
import AnimeCard from '../common/card/anime-card';
import { TagFilterState } from './tag-filter-reducer';
import { useInfiniteQuery } from '@tanstack/react-query';
import tagQuery from '@/hook/query/tag';
import InfiniteScroll from '../common/infinite-scroll/infinite-scroll';

interface TagSearchResultProps {
  filterState: TagFilterState;
}

const TagSearchResult = ({ filterState }: TagSearchResultProps) => {
  const query = useMemo(() => {
    return {
      searchKeyword: filterState.searchKeyword,
      tag: filterState.tag.filter((tag) => tag[0] === 'included'),
      release: filterState.release.filter(
        (release) => release[0] === 'included'
      ),
      season: filterState.season.filter((season) => season[0] === 'included'),
      broadcasting: filterState.broadcasting.filter(() => false),
    };
  }, [filterState]);

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    tagQuery.infiniteQuery.search(query)
  );

  return (
    <div className='relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
      {data?.pages.flatMap((page) =>
        page.content.map((anime) => (
          <AnimeCard
            id={anime.animeId}
            key={anime.animeId}
            title={anime.title}
            tag={[
              { categoryId: 1, categoryName: '코미디' },
              { categoryId: 2, categoryName: '액션' },
              { categoryId: 3, categoryName: '스릴러' },
            ]}
            season={1}
            releaseType='tva'
            isBroadcasting='broadcasting'
            rating={4.5}
          />
        ))
      )}
      <InfiniteScroll hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} />
    </div>
  );
};

const MemoTagSearchResult = memo(TagSearchResult);

export default MemoTagSearchResult;
