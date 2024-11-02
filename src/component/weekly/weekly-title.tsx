import { WEEKLY_TAGS } from '@/constant/common';

const WeeklyTitle = () => {
  return (
    <div className='px-6 py-4 flex flex-col gap-4'>
      <h2 className='font-bold text-2xl'>2024년 요일별 신작</h2>
      <ul className='flex gap-2'>
        {/* todo. Tag 공통 컴포넌트 생성 */}
        {WEEKLY_TAGS.map((v) => (
          <li key={v.id}>{v.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyTitle;
