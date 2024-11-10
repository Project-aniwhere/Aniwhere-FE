import { SizeProps, StateProps } from '@/type/common';

interface TagProps {
  text: string;
  size?: SizeProps;
  state?: StateProps;
}

const Tag = ({ text, size = 'medium', state = 'default' }: TagProps) => {
  const baseStyles = 'px-2 py-1 rounded-lg border';

  const sizeStyles = {
    small: 'text-sm',
    medium: '',
  };

  const colorStyles = {
    default: 'text-aniviolet2 border-aniviolet2',
    active: 'bg-aniviolet2 text-white border-aniviolet2',
    disabled: 'bg-gray-300 text-white border-gray-300',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${colorStyles[state]}`}
      disabled={state === 'disabled'}
    >
      {text}
    </button>
  );
};

export default Tag;
