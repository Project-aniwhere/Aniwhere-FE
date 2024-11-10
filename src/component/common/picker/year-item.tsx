interface YearItemProps {
  year: number;
  handleChangeYear: (year: number) => void;
  active: boolean;
}

const YearItem = ({ year, handleChangeYear, active }: YearItemProps) => {
  return (
    <button
      onClick={() => handleChangeYear(year)}
      className={`w-full px-2 py-1.5 text-start hover:text-aniviolet2 hover:font-medium hover:bg-aniviolet0 text-sm md:text-base ${active ? 'text-aniviolet2 font-medium' : ''}`}
    >
      {year}
    </button>
  );
};

export default YearItem;
