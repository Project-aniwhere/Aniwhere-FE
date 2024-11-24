import { DailyAniProps } from '@/type/weekly';
import DailyItem from './daily-item';
import Tabs from '../common/tab/tab-list';
import { DAYS } from '@/constant/common';

interface DailyConatinerProps {
  dailyList: DailyAniProps[];
  selectedDay: string;
  setSelectedDay: (value: string) => void;
}

const MobileDailyConatiner = ({
  dailyList,
  selectedDay,
  setSelectedDay,
}: DailyConatinerProps) => {
  return (
    <div className='flex flex-col gap-3'>
      <Tabs
        list={Object.entries(DAYS).map(([id, value]) => ({
          id,
          value,
        }))}
        value={selectedDay}
        setValue={setSelectedDay}
      />
      <ul className='grid grid-cols-3 gap-2'>
        {dailyList.map((item) => (
          <li key={item.titleId} className='cursor-pointer'>
            <DailyItem data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileDailyConatiner;
