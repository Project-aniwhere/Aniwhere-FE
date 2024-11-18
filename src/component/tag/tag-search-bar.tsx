import SearchIconSvg from '@/asset/svg/search/search-icon-svg';
import DefaultInput from '../common/input/default-input';
import ControlIconSvg from '@/asset/svg/control/control-icon-svg';
import TagFilter from './tag-filter';

export default function TagSearchBar() {
  return (
    <>
      <div className='flex items-stretch gap-4 h-10'>
        <p className='flex items-center min-w-fit font-bold text-2xl'>
          태그 검색
        </p>
        <div className='relative flex-grow'>
          <SearchIconSvg className='absolute top-1/2 -translate-y-1/2 left-4' />
          <DefaultInput
            className='w-full h-full pl-12 pr-4 outline-none border-aniviolet3'
            placeholder='검색어를 입력하세요.'
          />
        </div>
        <button className='bg-aniviolet2 aspect-square rounded-lg flex items-center justify-center p-2'>
          <ControlIconSvg />
        </button>
      </div>
      <TagFilter />
    </>
  );
}
