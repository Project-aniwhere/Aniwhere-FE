interface TagProps {
  text: string;
  size?: SizeProps;
  state?: StateProps;
}

const Tag = ({ text, size = 'medium', state = 'default' }: TagProps) => {
  const defaultStyle = 'px-1.5 py-0.5 rounded-lg ';

  const sizeStyle = () => {
    if (size === 'small') {
      return 'text-sm ';
    } else if (size === 'medium') {
    }
    return '';
  };

  const colorStyle = () => {
    if (state === 'default') {
      return 'text-aniviolet2 border border-aniviolet2 ';
    } else if (state === 'active') {
      return 'bg-aniviolet2 text-white border border-aniviolet2 ';
    } else if (state === 'disabled') {
      return 'bg-gray-400 text-white border border-gray-400 ';
    }
    return '';
  };

  const cursorStyle = () => {
    if (state === 'disabled') {
      return 'cursor-auto ';
    }
    return '';
  };

  return (
    <button
      className={defaultStyle + sizeStyle() + colorStyle() + cursorStyle()}
    >
      {text}
    </button>
  );
};

export default Tag;
