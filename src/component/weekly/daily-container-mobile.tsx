import { DailyAniProps } from '@/type/weekly';
import DailyItem from './daily-item';

interface DailyConatinerProps {
  dailyList: DailyAniProps[];
}

const MobileDailyConatiner = ({ dailyList }: DailyConatinerProps) => {
  return (
    <ul className='grid grid-cols-3 gap-2'>
      {dailyList.map((item) => (
        <li key={item.titleId} className='cursor-pointer'>
          <DailyItem data={item} />
        </li>
      ))}
    </ul>
  );
};

export default MobileDailyConatiner;
