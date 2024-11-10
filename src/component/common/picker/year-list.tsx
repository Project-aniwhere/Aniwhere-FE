import YearItem from './year-item';

interface YearListProps {
  selectedYear: string;
  years: string[];
  handleChangeYear: (year: string) => void;
}

const YearList = ({ selectedYear, years, handleChangeYear }: YearListProps) => {
  return (
    <ul className='bg-white py-2 w-20 border border-gray-100 rounded'>
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
