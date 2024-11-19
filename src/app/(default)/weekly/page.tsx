'use client';

import MainLayout from '@/component/common/layout/main-layout';
import MobileDailyConatiner from '@/component/weekly/daily-container-mobile';
import WeeklyContainer from '@/component/weekly/weekly-container';
import WeeklyTitle from '@/component/weekly/weekly-title';
import { WEEKLY_DUMMY } from '@/constant/dummy';
import useIsMobile from '@/hook/device-detect/use-is-mobile';
import { getDay, getQuarter, getYear } from '@/util/date';
import { useState } from 'react';

const WeeklyPage = () => {
  const isMobile = useIsMobile();

  const [selectedYear, setSelectedYear] = useState(getYear());
  const [selectedQuarter, setSelectedQuarter] = useState(getQuarter());
  const [selectedDay, setSelectedDay] = useState(getDay());

  // todo. GET 요일별 애니 목록

  return (
    <MainLayout>
      <div className='pt-5 pb-10 flex flex-col gap-6 md:gap-10'>
        <WeeklyTitle
          selectedYear={selectedYear}
          selectedQuarter={selectedQuarter}
          setSelectedYear={setSelectedYear}
          setSelectedQuarter={setSelectedQuarter}
        />
        {isMobile ? (
          <MobileDailyConatiner
            dailyList={WEEKLY_DUMMY[selectedDay]}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        ) : (
          <WeeklyContainer weeklyList={WEEKLY_DUMMY} currentDay={selectedDay} />
        )}
      </div>
    </MainLayout>
  );
};

export default WeeklyPage;
