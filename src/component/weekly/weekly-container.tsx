import DailyConatiner from './daily-container';

interface WeeklyContainerProps {
  weeklyList: { [key: string]: DailyAniProps[] };
  currentDayOfWeek: string;
}

const WeeklyContainer = ({
  weeklyList,
  currentDayOfWeek,
}: WeeklyContainerProps) => {
  return (
    <ul className='flex'>
      {Object.entries(weeklyList).map(([key, value]) => (
        <li key={key}>
          <DailyConatiner
            title={key}
            dailyList={value}
            active={key === currentDayOfWeek}
          />
        </li>
      ))}
    </ul>
  );
};

export default WeeklyContainer;
