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
    <ul className='px-6 py-4 flex'>
      {Object.entries(weeklyList).map(([key, value]) => (
        <DailyConatiner
          key={key}
          dayOfWeek={key}
          dailyList={value}
          currentDayOfWeek={currentDayOfWeek}
        />
      ))}
    </ul>
  );
};

export default WeeklyContainer;
