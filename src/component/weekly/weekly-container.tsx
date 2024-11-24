import { DailyAniProps } from '@/type/weekly';
import DailyConatiner from './daily-container';

interface WeeklyContainerProps {
  weeklyList: Record<string, DailyAniProps[]>;
  currentDay: string;
}

const WeeklyContainer = ({ weeklyList, currentDay }: WeeklyContainerProps) => {
  return (
    <ul className='grid grid-cols-7'>
      {Object.entries(weeklyList).map(([day, dailyList]) => (
        <li key={day}>
          <DailyConatiner
            day={day}
            dailyList={dailyList}
            active={day === currentDay}
          />
        </li>
      ))}
    </ul>
  );
};

export default WeeklyContainer;
