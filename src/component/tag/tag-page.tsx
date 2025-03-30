'use client';

import useToggle from '@/hook/usetoggle';
import { TagFilterReducer, TagFilterState } from './tag-filter-reducer';
import { useReducer } from 'react';
import TagSearchBar from './tag-search-bar';
import TagFilter from './tag-filter';
import TagSearchResult from './tag-search-result';

interface TagPageProps {
  initialState: TagFilterState;
}

const TagClientPage = ({ initialState }: TagPageProps) => {
  const [toggle, setToggle] = useToggle(true);
  const [filterState, dispatch] = useReducer(TagFilterReducer, initialState);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4 bg-white sticky top-[calc(5rem-1px)] z-40'>
        <TagSearchBar
          filterState={filterState}
          dispatch={dispatch}
          setToggle={setToggle}
        />
        {toggle && <TagFilter filterState={filterState} dispatch={dispatch} />}
      </div>

      <TagSearchResult filterState={filterState} />
    </div>
  );
};

export default TagClientPage;
