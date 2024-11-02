import DailyConatiner from './daily-container';

interface WeeklyContainerProps {
  weeklyList: { [key: string]: DailyAniProps[] };
}

const WeeklyContainer = ({ weeklyList }: WeeklyContainerProps) => {
  return (
    <ul className='px-6 py-4 flex gap-4'>
      {Object.entries(weeklyList).map(([key, value]) => (
        <li key={key} className='flex flex-col gap-5'>
          <p className='text-center font-semibold'>{key}</p>
          <DailyConatiner dailyList={value} />
        </li>
      ))}
    </ul>
  );
};

export default WeeklyContainer;
