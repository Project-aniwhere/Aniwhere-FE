'use client';

import TagItem from './tag-item';
import {
  AnimeFilterNameObject,
  AnimeFilterObject,
  AnimeFilterType,
} from '@/type/anime-tag';

interface TagFilterSelectorProps {
  filterType: AnimeFilterType;
}

const TagFilterSelector = ({ filterType }: TagFilterSelectorProps) => {
  return (
    <div className='flex flex-col gap-2 flex-grow'>
      <div className='flex items-center justify-between h-7'>
        <p>{AnimeFilterNameObject[filterType]}</p>
      </div>
      <div className='bg-white rounded-lg text-[0.75rem] p-4 h-full'>
        <div className='flex flex-wrap gap-2'>
          {filterType === 'season' && (
            <input placeholder='selector' className='w-16'></input>
          )}
          {Object.values(AnimeFilterObject[filterType]).map((value) => (
            <TagItem key={value} onClick={() => {}} tagName={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagFilterSelector;
