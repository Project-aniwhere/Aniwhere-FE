import TagSearchBar from '@/component/tag/tag-search-bar';
import TagSearchResult from '@/component/tag/tag-search-result';

const TagPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <TagSearchBar />

      <TagSearchResult />
    </div>
  );
};

export default TagPage;
