'use client';

import WeeklyContainer from '@/component/weekly/weekly-container';
import WeeklyTitle from '@/component/weekly/weekly-title';
import { WEEKLY_DUMMY } from '@/constant/dummy';
import { useState } from 'react';

const WeeklyPage = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  return (
    <>
      <WeeklyTitle
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <WeeklyContainer
        weeklyList={WEEKLY_DUMMY.titleListMap}
        currentDay={WEEKLY_DUMMY.dayOfWeek}
      />
    </>
  );
};

export default WeeklyPage;
