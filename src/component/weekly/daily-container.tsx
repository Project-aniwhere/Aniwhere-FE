import { AnimeWeeklyInfoType } from '@/type/api/anime-api';
import DailyItem from './daily-item';
import { DAYS } from '@/constant/common';

interface DailyConatinerProps {
  day: string;
  dailyList: AnimeWeeklyInfoType[];
  active: boolean;
}

const DailyConatiner = ({ day, dailyList, active }: DailyConatinerProps) => {
  return (
    <div
      className={`px-2.5 py-3 flex flex-col gap-3 rounded-md ${active ? 'bg-aniviolet0' : ''}`}
    >
      <p
        className={`text-center font-semibold text-sm md:text-base ${active ? 'text-aniviolet2' : ''}`}
      >
        {DAYS[day]}
      </p>
      <ul className='flex flex-col gap-4'>
        {dailyList.map((item) => (
          <li key={item.animeId} className='cursor-pointer'>
            <DailyItem data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyConatiner;
