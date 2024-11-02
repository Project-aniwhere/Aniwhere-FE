import DailyItem from './daily-item';

interface DailyConatinerProps {
  title: string;
  dailyList: DailyAniProps[];
  active: boolean;
}

const DailyConatiner = ({ title, dailyList, active }: DailyConatinerProps) => {
  return (
    <div
      className={`px-2.5 py-3 flex flex-col gap-3 rounded-md ${active ? 'bg-aniviolet0' : ''}`}
    >
      <p
        className={`text-center font-semibold ${active ? 'text-aniviolet2' : ''}`}
      >
        {title}
      </p>
      <ul className={'flex flex-col gap-3'}>
        {dailyList.map((item) => (
          <li key={item.titleId} className='cursor-pointer'>
            <DailyItem data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyConatiner;
