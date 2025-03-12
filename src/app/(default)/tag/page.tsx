import { TagFilterInitState } from '@/component/tag/tag-filter-reducer';
import TagClientPage from '@/component/tag/tag-page';

const TagPage = async () => {
  const initialState = await TagFilterInitState();
  return <TagClientPage initialState={initialState} />;
};

export default TagPage;
