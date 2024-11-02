import DailyItem from './daily-item';

interface DailyConatinerProps {
  title: string;
  dailyList: DailyAniProps[];
  active: boolean;
}

const DailyConatiner = ({ title, dailyList, active }: DailyConatinerProps) => {
  return (
    <li
      className={`px-2.5 py-3 flex flex-col gap-3 rounded-md ${active ? 'bg-aniviolet0' : ''}`}
    >
      <p
        className={`text-center font-semibold ${active ? 'text-aniviolet2' : ''}`}
      >
        {title}
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
