import DailyItem from './daily-item';
import Tabs from '../common/tab/tab-list';
import { DAYS } from '@/constant/common';
import { AnimeWeeklyInfoType } from '@/type/api/anime-api';
import Link from 'next/link';

interface DailyConatinerProps {
  dailyList: AnimeWeeklyInfoType[];
  currentDay: string;
  handleSelectDay: (value: string) => void;
}

const MobileDailyConatiner = ({
  dailyList,
  currentDay,
  handleSelectDay,
}: DailyConatinerProps) => {
  return (
    <div className='flex flex-col gap-3'>
      <Tabs
        list={Object.entries(DAYS).map(([id, value]) => ({
          id,
          value,
        }))}
        value={currentDay}
        setValue={handleSelectDay}
      />
      <ul className='grid grid-cols-3 gap-2'>
        {dailyList.map((item) => (
          <li key={item.animeId} className='cursor-pointer'>
            <Link href={`/detail/${item.animeId}`}>
              <DailyItem data={item} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileDailyConatiner;
