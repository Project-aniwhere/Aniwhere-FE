import { QUARTERS } from '@/constant/common';
import Tag from '../common/tag/tag';
import YearPicker from '../common/picker/year-picker';
import { YearPickerProps } from '@/type/year-picker';

interface WeeklyTitleProps extends YearPickerProps {
  selectedQuarter: string;
  setSelectedQuarter: (quarter: string) => void;
}

const WeeklyTitle = ({
  selectedYear,
  selectedQuarter,
  setSelectedYear,
  setSelectedQuarter,
}: WeeklyTitleProps) => {
  return (
    <div className='flex flex-col gap-3 md:gap-5'>
      <div className='flex gap-2 md:gap-3 items-center'>
        <h2 className='font-bold text-lg md:text-2xl'>
          {selectedYear}년 요일별 작품
        </h2>
        <YearPicker
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </div>
      <ul className='flex flex-wrap gap-2 md:gap-3'>
        {Object.entries(QUARTERS)
          .map(([id, value]) => ({
            id,
            value,
          }))
          .map((v) => (
            <li key={v.id}>
              <Tag
                text={v.value}
                size='small'
                state={v.id === selectedQuarter ? 'active' : undefined}
                handleClick={() => setSelectedQuarter(v.id)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WeeklyTitle;
