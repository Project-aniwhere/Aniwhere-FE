'use client';

import SearchIconSvg from '@/asset/svg/search/search-icon-svg';
import DefaultInput from '../common/input/default-input';
import ControlIconSvg from '@/asset/svg/control/control-icon-svg';
import { TagFilterAction, TagFilterState } from './tag-filter-reducer';
import { ChangeEvent, Dispatch, useMemo } from 'react';
import { debounce } from '@/util/throttle';

interface TagSearchBarProps {
  filterState: TagFilterState;
  dispatch: Dispatch<TagFilterAction>;
  setToggle: () => void;
}

export default function TagSearchBar({
  setToggle,
  dispatch,
}: TagSearchBarProps) {
  const handleKeywordChange = useMemo(
    () =>
      debounce(
        (e: ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: 'SEARCH', payload: e.target.value }),
        500
      ),
    [dispatch]
  );

  return (
    <>
      <div className='z-40 w-[calc(100%+1rem)] -translate-x-2 p-2 bg-white flex items-stretch gap-4 h-12'>
        <p className='flex items-center min-w-fit font-bold text-2xl'>
          태그 검색
        </p>
        <div className='relative flex-grow'>
          <SearchIconSvg className='absolute top-1/2 -translate-y-1/2 left-4' />
          <DefaultInput
            className='w-full h-full pl-12 pr-4 outline-none border-aniviolet3'
            placeholder='검색어를 입력하세요.'
            onChange={handleKeywordChange}
          />
        </div>
        <button
          className='bg-aniviolet2 aspect-square rounded-lg flex items-center justify-center p-2'
          onClick={setToggle}
        >
          <ControlIconSvg />
        </button>
      </div>
    </>
  );
}
