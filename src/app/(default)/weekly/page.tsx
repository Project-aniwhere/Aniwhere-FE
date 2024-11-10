'use client';

import MainLayout from '@/component/common/layout/main-layout';
import WeeklyContainer from '@/component/weekly/weekly-container';
import WeeklyTitle from '@/component/weekly/weekly-title';
import { WEEKLY_DUMMY } from '@/constant/dummy';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const WeeklyPage = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const { data } = useQuery({
    queryKey: ['weekly', selectedYear],
    queryFn: async () => {
      return WEEKLY_DUMMY;
    },
  });

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
