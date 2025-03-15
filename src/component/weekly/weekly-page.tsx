'use client';

import { getAnimeWeeklyList } from '@/action/anime';
import MobileDailyConatiner from '@/component/weekly/daily-container-mobile';
import WeeklyContainer from '@/component/weekly/weekly-container';
import WeeklyTitle from '@/component/weekly/weekly-title';
import useIsMobile from '@/hook/device-detect/use-is-mobile';
import { getDay, getQuarter, getYear } from '@/util/date';
import { useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';

const WeeklyPage = () => {
  const isMobile = useIsMobile();

  const router = useRouter();
  const searchParams = useSearchParams();
  const year = searchParams.get('year') || getYear();
  const quarter = searchParams.get('quarter') || getQuarter();
  const day = searchParams.get('day') || getDay();

  const { data } = useQuery({
    queryKey: ['animeQuarterList', year, quarter],
    queryFn: () =>
      getAnimeWeeklyList({
        year,
        quarter,
      }),
  });

  const handleSelectYear = (year: string) => {
    router.push(`/weekly?year=${year}&quarter=${quarter}&day=${day}`);
  };
  const handleSelectQuarter = (quarter: string) => {
    router.push(`/weekly?year=${year}&quarter=${quarter}&day=${day}`);
  };
  const handleSelectDay = (day: string) => {
    router.push(`/weekly?year=${year}&quarter=${quarter}&day=${day}`);
  };

  return (
    <div className='flex flex-col gap-6 md:gap-10'>
      <WeeklyTitle
        currentYear={year}
        currentQuarter={quarter}
        handleSelectYear={handleSelectYear}
        handleSelectQuarter={handleSelectQuarter}
      />
      {data?.length ? (
        isMobile ? (
          <MobileDailyConatiner
            dailyList={
              data.filter((item) => String(item.weekdayCode) === day)[0].animes
            }
            currentDay={day}
            handleSelectDay={handleSelectDay}
          />
        ) : (
          <WeeklyContainer weeklyList={data} currentDay={day} />
        )
      ) : (
        <div>데이터가 없습니다.</div>
      )}
    </div>
  );
};

export default WeeklyPage;
