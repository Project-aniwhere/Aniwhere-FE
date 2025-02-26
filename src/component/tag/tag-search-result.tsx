import { useMemo } from 'react';
import AnimeCard from '../common/card/anime-card';
import { TagFilterState } from './tag-filter-reducer';
import { AnimeTagType } from '@/type/api/tag-api';

interface TagSearchResultProps {
  filterState: TagFilterState;
}

const TagSearchResult = ({ filterState }: TagSearchResultProps) => {
  const query = useMemo(() => {
    return Object.keys(filterState)
      .flatMap((key) =>
        filterState[key as keyof TagFilterState]
          .filter(([tagState]) => tagState !== 'neutral')
          .map(([tagState, tag]) => {
            if (key === 'tag') {
              return `tag=${(tag as AnimeTagType).categoryId}`;
            }
            return `${key}=${tagState}`;
          })
      )
      .join('&');
  }, [filterState]);

  return (
    <div className='relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
      {Array(50)
        .fill(0)
        .map((_, idx) => (
          <AnimeCard
            id={idx}
            key={idx}
            title='스파이 패밀리'
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
        ))}
    </div>
  );
};

export default TagSearchResult;
