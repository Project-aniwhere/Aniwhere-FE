import { WEEKLY_TAGS } from '@/constant/common';
import Tag from '../common/tag/tag';
import YearPicker from '../common/picker/year-picker';
import { YearPickerProps } from '@/type/year-picker';

const WeeklyTitle = ({ selectedYear, setSelectedYear }: YearPickerProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex gap-3 items-center'>
        <h2 className='font-bold text-2xl'>{selectedYear}년 요일별 작품</h2>
        <YearPicker
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </div>
      <ul className='flex gap-3'>
        {WEEKLY_TAGS.map((v) => (
          <li key={v.id}>
            <Tag
              text={v.value}
              size='small'
              // 확인용
              state={
                v.id === '1' ? 'active' : v.id === '4' ? 'disabled' : 'default'
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyTitle;
