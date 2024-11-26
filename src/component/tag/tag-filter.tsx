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
    <div className='rounded-lg bg-[#f0f0f0] font-semibold p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <TagFilterModalSelector filterType='genre' />
      <TagFilterModalSelector filterType='tag' />
      <div className='col-span-full lg:col-span-1'>
        <TagFilterSelector filterType='season' />
        <TagFilterSelector filterType='release' />
        <TagFilterSelector filterType='broadcasting' />
      </div>
    </div>
  );
};

export default TagFilter;
