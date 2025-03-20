'use client';

import CrossSvg from '@/asset/svg/cross/cross-svg';
import { TagState } from './tag-filter-reducer';

interface TagItemProps {
  tagName: string;
  tagState?: TagState;
  className?: string;
  onClick?: () => void;
  onClose?: () => void;
}

const TagItem = ({
  tagName,
  tagState = 'neutral',
  className,
  onClick,
  onClose,
}: TagItemProps) => {
  return (
    <div
      className={`relative flex flex-row items-center rounded-full text-white px-4 py-1 font-semibold text-nowrap ${tagState === 'excluded' ? 'bg-red-500' : tagState === 'included' ? 'bg-aniviolet1' : 'bg-aniviolet2'} ${className}`}
    >
      <button onClick={onClick}>{tagName}</button>
      {tagState !== 'neutral' && (
        <button className='relative left-2' onClick={onClose}>
          <CrossSvg fill='white' className='size-4' />
        </button>
      )}
    </div>
  );
};
export default TagItem;
