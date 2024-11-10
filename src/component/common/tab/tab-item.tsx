interface TabItemProps {
  text: string;
  active?: boolean;
  handleClick: () => void;
}

const TabItem = ({ text, active, handleClick }: TabItemProps) => {
  return (
    <button
      onClick={handleClick}
      className={`w-full p-2 text-center font-semibold border-b text-sm md:text-base ${active ? 'border-aniviolet1 text-aniviolet2' : 'border-gray-300'}`}
    >
      {text}
    </button>
  );
};

export default TabItem;
