import YearItem from './year-item';

interface YearListProps {
  selectedYear: number;
  years: number[];
  handleChangeYear: (year: number) => void;
}

const YearList = ({ selectedYear, years, handleChangeYear }: YearListProps) => {
  return (
    <ul className='absolute bg-white py-2 mt-1 w-20 border border-gray-100 rounded z-10'>
      {years.map((year) => (
        <li key={year}>
          <YearItem
            year={year}
            handleChangeYear={handleChangeYear}
            active={year === selectedYear}
          />
        </li>
      ))}
    </ul>
  );
};

export default YearList;
