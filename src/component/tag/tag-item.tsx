interface TagItemProps {
  tagName: string;
  className?: string;
  onClick?: () => void;
}

const TagItem = ({ tagName, className, onClick }: TagItemProps) => {
  return (
    <button
      className={
        'rounded-full bg-aniviolet2 text-white px-4 py-1 font-semibold text-nowrap ' +
        className
      }
      onClick={onClick}
    >
      {tagName}
    </button>
  );
};
export default TagItem;
