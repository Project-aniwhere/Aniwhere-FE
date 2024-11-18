import TagFilterSelector from './tag-filter-selector';

const TagFilter = () => {
  return (
    <div className='rounded-lg bg-[#f0f0f0] font-semibold p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <TagFilterSelector filterType='genre' />
      <TagFilterSelector filterType='tag' />
      <div className='col-span-full lg:col-span-1'>
        <TagFilterSelector isModal={false} filterType='season' />
        <TagFilterSelector isModal={false} filterType='release' />
        <TagFilterSelector isModal={false} filterType='broadcasting' />
      </div>
    </div>
  );
};

export default TagFilter;
