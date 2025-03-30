'use client';

import { Dispatch } from 'react';
import TagFilterModalSelector from './tag-filter-modal-selector';
import { TagFilterAction, TagFilterState } from './tag-filter-reducer';
import TagFilterSelector from './tag-filter-selector';

interface TagFilterProps {
  filterState: TagFilterState;
  dispatch: Dispatch<TagFilterAction>;
}

const TagFilter = ({ filterState, dispatch }: TagFilterProps) => {
  return (
    <div className='z-40 rounded-lg bg-[#f0f0f0] font-semibold p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <TagFilterModalSelector
        filterType='tag'
        tagList={filterState.tag}
        dispatch={dispatch}
      />
      <div className='col-span-full lg:col-span-1'>
        <TagFilterSelector
          filterType='season'
          dispatch={dispatch}
          itemList={filterState.season}
        />
        <TagFilterSelector
          filterType='release'
          dispatch={dispatch}
          itemList={filterState.release}
        />
        <TagFilterSelector
          filterType='broadcasting'
          dispatch={dispatch}
          itemList={filterState.broadcasting}
        />
      </div>
    </div>
  );
};

export default TagFilter;
