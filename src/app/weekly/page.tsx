import WeeklyContainer from '@/component/weekly/weekly-container';
import WeeklyTitle from '@/component/weekly/weekly-title';
import { WEEKLY_DUMMY } from '@/constant/dummy';

const WeeklyPage = () => {
  // todo. GET 요일별 애니 목록
  return (
    <div className='w-full pt-[96px] px-8 flex flex-col gap-4'>
      <WeeklyTitle />
      <WeeklyContainer
        weeklyList={WEEKLY_DUMMY.titleListMap}
        currentDayOfWeek={WEEKLY_DUMMY.dayOfWeek}
      />
    </div>
  );
};

export default WeeklyPage;
