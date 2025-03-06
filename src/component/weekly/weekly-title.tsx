import { QUARTERS } from '@/constant/common';
import Tag from '../common/tag/tag';
import YearPicker from '../common/picker/year-picker';
import { YearPickerProps } from '@/type/year-picker';

interface WeeklyTitleProps extends YearPickerProps {
  currentQuarter: string;
  handleSelectQuarter: (quarter: string) => void;
}

const WeeklyTitle = ({
  currentYear,
  currentQuarter,
  handleSelectYear,
  handleSelectQuarter,
}: WeeklyTitleProps) => {
  return (
    <div className='flex flex-col gap-3 md:gap-5'>
      <div className='flex gap-2 md:gap-3 items-center'>
        <h2 className='font-bold text-lg md:text-2xl'>
          {currentYear}년 요일별 작품
        </h2>
        <YearPicker
          currentYear={currentYear}
          handleSelectYear={handleSelectYear}
        />
      </div>
      <ul className='flex flex-wrap gap-2 md:gap-3'>
        {Object.entries(QUARTERS).map(([id, value]) => (
          <li key={id}>
            <Tag
              text={value}
              size='small'
              state={id === currentQuarter ? 'active' : undefined}
              handleClick={() => handleSelectQuarter(id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyTitle;
