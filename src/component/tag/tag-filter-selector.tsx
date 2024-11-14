import CrossSvg from '@/asset/svg/cross/cross-svg';
import TagItem from './tag-item';

interface TagFilterSelectorProps {
  isModal?: boolean;
}

const TagFilterSelector = ({ isModal = true }: TagFilterSelectorProps) => {
  return (
    <div className='flex flex-col gap-2 flex-grow'>
      <div className='flex items-center justify-between h-7'>
        <p>장르</p>
        {isModal && (
          <button className='flex items-center bg-aniviolet2 px-2 h-full rounded-lg text-white gap-4 text-sm'>
            <CrossSvg
              fill='white'
              className='-rotate-45'
              height='1rem'
              width='1rem'
            />
            <p>장르 추가</p>
          </button>
        )}
      </div>
      <div className='bg-white rounded-lg text-[0.75rem] p-4 h-full'>
        <TagItem />
      </div>
    </div>
  );
};

export default TagFilterSelector;
