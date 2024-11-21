import { SizeProps, StateProps } from '@/type/common';

interface TagProps {
  text: string;
  size?: SizeProps;
  state?: StateProps;
  handleClick?: () => void;
}

const Tag = ({
  text,
  size = 'medium',
  state = 'default',
  handleClick,
}: TagProps) => {
  const baseStyles = 'px-2 py-1 rounded-lg border';

  const sizeStyles = {
    small: 'text-xs md:text-sm',
    medium: 'text-sm md:text-base',
  };

  const colorStyles = {
    default: 'text-aniviolet2 border-aniviolet2',
    active: 'bg-aniviolet2 text-white border-aniviolet2',
    disabled: 'bg-gray-300 text-white border-gray-300',
  };

  return (
    <button
      disabled={state === 'disabled'}
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[state]}`}
    >
      {text}
    </button>
  );
};

export default Tag;
