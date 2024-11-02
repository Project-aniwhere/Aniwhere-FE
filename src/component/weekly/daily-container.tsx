import DailyItem from './daily-item';

interface DailyConatinerProps {
  dailyList: DailyAniProps[];
}

const DailyConatiner = ({ dailyList }: DailyConatinerProps) => {
  return (
    <ul className='flex flex-col gap-3'>
      {dailyList.map((item) => (
        <DailyItem key={item.titleId} data={item} />
      ))}
    </ul>
  );
};

export default DailyConatiner;
