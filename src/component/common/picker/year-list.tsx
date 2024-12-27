import { YearPickerProps } from '@/type/year-picker';
import YearItem from './year-item';

interface YearListProps extends YearPickerProps {
  years: string[];
}

const YearList = ({ year, years, handleSelectYear }: YearListProps) => {
  return (
    <ul className='bg-white py-2 w-20 border border-gray-100 rounded'>
      {years.map((v) => (
        <li key={v}>
          <YearItem
            year={v}
            handleSelectYear={handleSelectYear}
            active={v === year}
          />
        </li>
      ))}
    </ul>
  );
};

export default YearList;
