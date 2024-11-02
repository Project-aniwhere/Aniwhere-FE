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
        <DailyConatiner
          key={key}
          title={key}
          dailyList={value}
          active={key === currentDayOfWeek}
        />
      ))}
    </ul>
  );
};

export default WeeklyContainer;
