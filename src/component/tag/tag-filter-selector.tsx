'use client';

import { Dispatch, useCallback } from 'react';
import TagItem from './tag-item';
import {
  AnimeFilterNameObject,
  AnimeFilterObject,
  AnimeFilterType,
} from '@/type/anime-tag';
import { TagFilterAction, TagState } from './tag-filter-reducer';

interface TagFilterSelectorProps {
  filterType: AnimeFilterType;
  itemList: [TagState, string | number][];
  dispatch: Dispatch<TagFilterAction>;
}

const TagFilterSelector = ({
  filterType,
  dispatch,
  itemList,
}: TagFilterSelectorProps) => {
  const date = new Date();
  const year = date.getFullYear();
  const category =
    AnimeFilterObject[filterType as Exclude<AnimeFilterType, 'tag'>];
  const handleTagClick = useCallback(
    (target: string | number) => {
      dispatch({
        type: 'TOGGLE',
        payload: {
          filterType,
          target,
        },
      });
    },
    [dispatch, filterType]
  );

  const handleTagClose = useCallback(
    (target: string | number) => {
      dispatch({
        type: 'UNSELECT',
        payload: {
          filterType,
          target,
        },
      });
    },
    [dispatch, filterType]
  );

  return (
    <div className='flex flex-col gap-2 flex-grow'>
      <div className='flex items-center justify-between h-7'>
        <p>{AnimeFilterNameObject[filterType]}</p>
      </div>
      <div className='bg-white rounded-lg text-[0.75rem] p-4 h-full'>
        <div className='flex flex-wrap gap-2'>
          {filterType === 'season' && (
            <select
              className='w-16'
              onChange={(e) =>
                dispatch({
                  type: 'SELECT_YEAR',
                  payload: Number(e.target.value),
                })
              }
            >
              <option value=''>전체</option>
              {Array.from({ length: 20 }, (_, i) => year - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          )}
          {itemList.map(([state, value]) => (
            <TagItem
              key={value}
              onClick={() => handleTagClick(value)}
              onClose={() => handleTagClose(value)}
              tagName={category[value as keyof typeof category]}
              tagState={state}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagFilterSelector;
