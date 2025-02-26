'use client';

import CrossSvg from '@/asset/svg/cross/cross-svg';
import TagItem from './tag-item';
import { AnimeFilterNameObject, AnimeFilterType } from '@/type/anime-tag';
import { Dispatch, useCallback, useRef } from 'react';
import ModalContainer from '../common/modal/modal-container';
import { TagFilterAction, TagState } from './tag-filter-reducer';
import { AnimeTagType } from '@/type/api/tag-api';

interface TagFilterModalSelectorProps {
  filterType: AnimeFilterType;
  tagList: [TagState, AnimeTagType][];
  dispatch: Dispatch<TagFilterAction>;
}

function TagFilterModalSelector({
  filterType,
  tagList,
  dispatch,
}: TagFilterModalSelectorProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const handleModalOpen = useCallback(() => modalRef.current?.showModal(), []);

  const handleTagClick = useCallback(
    (tag: AnimeTagType) => {
      dispatch({
        type: 'TOGGLE',
        payload: {
          filterType,
          target: tag.categoryId,
        },
      });
    },
    [dispatch, filterType]
  );

  const handleTagClose = useCallback(
    (tag: AnimeTagType) => {
      dispatch({
        type: 'CLEAR',
        payload: {
          filterType,
          target: tag.categoryId,
        },
      });
    },
    [dispatch, filterType]
  );

  return (
    <div className='col-span-2 flex flex-col gap-2 flex-grow'>
      <ModalContainer
        modalType='modal'
        ref={modalRef}
        onClose={() => modalRef.current?.close()}
        className='bg-white scrollbar-none size-full sm:size-11/12 lg:size-3/4 p-4'
      >
        <p className='font-bold text-xl'>태그 목록</p>
        <div className='flex flex-row flex-wrap gap-2 border rounded-lg p-2'>
          {tagList.map(([tagState, tag]) => (
            <TagItem
              key={tag.categoryId}
              tagName={tag.categoryName}
              tagState={tagState}
              onClick={() => handleTagClick(tag)}
              onClose={() => handleTagClose(tag)}
            />
          ))}
        </div>
      </ModalContainer>
      <div className='flex items-center justify-between h-7'>
        <p>{AnimeFilterNameObject[filterType]}</p>
        <button
          className='flex items-center bg-aniviolet2 px-2 h-full rounded-lg text-white gap-4 text-sm'
          onClick={handleModalOpen}
        >
          <CrossSvg
            fill='white'
            className='-rotate-45'
            height='1rem'
            width='1rem'
          />
          <p>{AnimeFilterNameObject[filterType]} 추가</p>
        </button>
      </div>
      <div className='bg-white rounded-lg text-[0.75rem] p-4 h-full'>
        <div className='flex flex-wrap gap-2'>
          {filterType === 'season' && (
            <input placeholder='selector' className='w-16'></input>
          )}
          {tagList
            .filter(([tagState]) => tagState !== 'neutral')
            .map(([tagState, tag]) => (
              <TagItem
                key={tag.categoryId}
                tagName={tag.categoryName}
                tagState={tagState}
                onClick={() => handleTagClick(tag)}
                onClose={() => handleTagClose(tag)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default TagFilterModalSelector;
