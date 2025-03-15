import WeeklyPage from '@/component/weekly/weekly-page';
import { Suspense } from 'react';

const Page = () => {
  return (
    <Suspense>
      <WeeklyPage />
    </Suspense>
  );
};

export default Page;
