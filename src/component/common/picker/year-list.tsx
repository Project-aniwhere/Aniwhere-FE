import { YearPickerProps } from '@/type/year-picker';
import YearItem from './year-item';

interface YearListProps extends YearPickerProps {
  years: string[];
}

const YearList = ({ currentYear, years, handleSelectYear }: YearListProps) => {
  return (
    <ul className='bg-white py-2 w-20 border border-gray-100 rounded'>
      {years.map((year) => (
        <li key={year}>
          <YearItem
            year={year}
            handleSelectYear={handleSelectYear}
            active={year === currentYear}
          />
        </li>
      ))}
    </ul>
  );
};

export default YearList;
