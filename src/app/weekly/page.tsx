'use client';

import MainLayout from '@/component/common/layout/main-layout';
import WeeklyContainer from '@/component/weekly/weekly-container';
import WeeklyTitle from '@/component/weekly/weekly-title';
import { WEEKLY_DUMMY } from '@/constant/dummy';
import { useState } from 'react';

const WeeklyPage = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // todo. GET 요일별 애니 목록

  return (
    <MainLayout>
      <div className='w-full max-w-[1200px] mx-auto pt-[100px] pb-10 flex flex-col gap-8 md:gap-10'>
        <WeeklyTitle
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        <WeeklyContainer
          weeklyList={WEEKLY_DUMMY.titleListMap}
          currentDay={WEEKLY_DUMMY.dayOfWeek}
        />
      </div>
    </MainLayout>
  );
};

export default WeeklyPage;
