'use client';

import TagFilter from '@/component/tag/tag-filter';
import {
  TagFilterInitState,
  TagFilterReducer,
} from '@/component/tag/tag-filter-reducer';
import TagSearchBar from '@/component/tag/tag-search-bar';
import TagSearchResult from '@/component/tag/tag-search-result';
import useToggle from '@/hook/usetoggle';
import { useReducer } from 'react';

const TagPage = () => {
  const [toggle, setToggle] = useToggle(true);
  const [filterState, dispatch] = useReducer(
    TagFilterReducer,
    TagFilterInitState
  );

  return (
    <div className='flex flex-col gap-4'>
      <TagSearchBar
        filterState={filterState}
        dispatch={dispatch}
        setToggle={setToggle}
      />
      {toggle && <TagFilter filterState={filterState} dispatch={dispatch} />}
      <TagSearchResult />
    </div>
  );
};

export default TagPage;
