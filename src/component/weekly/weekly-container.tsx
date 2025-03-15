import { AnimeWeeklyResponse } from '@/type/api/anime-api';
import DailyConatiner from './daily-container';

interface WeeklyContainerProps {
  weeklyList: AnimeWeeklyResponse;
  currentDay: string;
}

const WeeklyContainer = ({ weeklyList, currentDay }: WeeklyContainerProps) => {
  return (
    <ul className='grid grid-cols-7'>
      {Object.entries(weeklyList).map(([day, dailyList]) => (
        <li key={day}>
          <DailyConatiner
            day={day}
            dailyList={dailyList.animes}
            active={day === currentDay}
          />
        </li>
      ))}
    </ul>
  );
};

export default WeeklyContainer;
