'use client';

import MainLayout from '@/component/common/layout/main-layout';
import Tabs from '@/component/common/tab/tab-list';
import MobileDailyConatiner from '@/component/weekly/daily-container-mobile';
import WeeklyContainer from '@/component/weekly/weekly-container';
import WeeklyTitle from '@/component/weekly/weekly-title';
import { DAYS } from '@/constant/common';
import { WEEKLY_DUMMY } from '@/constant/dummy';
import { useState } from 'react';

const WeeklyPage = () => {
  const [selectedYear, setSelectedYear] = useState(
    String(new Date().getFullYear())
  );
  const [selectedQuarter, setSelectedQuarter] = useState('1');
  const [selectedDay, setSelectedDay] = useState(String(new Date().getDay()));

  // todo. GET 요일별 애니 목록

  return (
    <MainLayout>
      <div className='w-full max-w-[1200px] mx-auto pt-[100px] pb-10 flex flex-col gap-6 md:gap-10'>
        <WeeklyTitle
          selectedYear={selectedYear}
          selectedQuarter={selectedQuarter}
          setSelectedYear={setSelectedYear}
          setSelectedQuarter={setSelectedQuarter}
        />
        <div className='flex flex-col gap-3 md:hidden'>
          <Tabs
            list={Object.entries(DAYS).map(([id, value]) => ({
              id,
              value,
            }))}
            value={selectedDay}
            setValue={setSelectedDay}
          />
          <MobileDailyConatiner dailyList={WEEKLY_DUMMY[selectedDay]} />
        </div>
        <div className='hidden md:block'>
          <WeeklyContainer weeklyList={WEEKLY_DUMMY} currentDay={selectedDay} />
        </div>
      </div>
    </MainLayout>
  );
};

export default WeeklyPage;
