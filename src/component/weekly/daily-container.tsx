import DailyItem from './daily-item';

interface DailyConatinerProps {
  dayOfWeek: string;
  dailyList: DailyAniProps[];
  currentDayOfWeek: string;
}

const DailyConatiner = ({
  dayOfWeek,
  dailyList,
  currentDayOfWeek,
}: DailyConatinerProps) => {
  const active = dayOfWeek === currentDayOfWeek;

  return (
    <li
      className={`p-3 flex flex-col gap-5 rounded-md ${active ? 'bg-aniviolet0' : ''}`}
    >
      <p
        className={`text-center font-semibold ${active ? 'text-aniviolet2' : ''}`}
      >
        {dayOfWeek}
      </p>
      <ul className={'flex flex-col gap-3'}>
        {dailyList.map((item) => (
          <DailyItem key={item.titleId} data={item} />
        ))}
      </ul>
    </li>
  );
};

export default DailyConatiner;
