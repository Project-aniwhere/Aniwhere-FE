import TagFilterSelector from './tag-filter-selector';
import TagSearchBar from './tag-search-bar';

const TagFilter = () => {
  return (
    <div className='flex flex-col gap-4'>
      <TagSearchBar />
      <div className='rounded-lg bg-[#f0f0f0] font-semibold p-4 flex gap-4'>
        <TagFilterSelector />
        <TagFilterSelector />
        <div className='flex-grow flex flex-col gap-4'>
          <TagFilterSelector isModal={false} />
          <TagFilterSelector isModal={false} />
          <TagFilterSelector isModal={false} />
        </div>
      </div>
    </div>
  );
};

export default TagFilter;
