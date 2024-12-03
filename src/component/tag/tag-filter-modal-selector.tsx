'use client';

import CrossSvg from '@/asset/svg/cross/cross-svg';
import TagItem from './tag-item';
import {
  AnimeFilterNameObject,
  AnimeFilterObject,
  AnimeFilterType,
} from '@/type/anime-tag';
import { useCallback, useRef } from 'react';
import ModalContainer from '../common/modal/modal-container';
import { TagState } from './tag-filter-reducer';

interface TagFilterModalSelectorProps<T> {
  filterType: AnimeFilterType;
  tagList: [TagState, T][];
}

function TagFilterModalSelector<T extends string>({
  filterType,
  tagList,
}: TagFilterModalSelectorProps<T>) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const handleModalOpen = useCallback(() => modalRef.current?.showModal(), []);
  return (
    <div className=' flex flex-col gap-2 flex-grow'>
      <ModalContainer
        modalType='modal'
        ref={modalRef}
        onClose={() => modalRef.current?.close()}
        className='bg-white scrollbar-none size-full sm:size-11/12 lg:size-3/4 p-4'
      >
        <div className='flex flex-row'>
          <p>{AnimeFilterNameObject[filterType]}</p>
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
                key={tag}
                onClick={() => {}}
                tagName={
                  AnimeFilterObject[filterType][
                    tag as keyof (typeof AnimeFilterObject)[typeof filterType]
                  ]
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default TagFilterModalSelector;
