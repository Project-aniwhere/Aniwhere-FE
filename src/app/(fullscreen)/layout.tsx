import Header from '@/component/common/header/header';
import { PropsWithChildren } from 'react';

const FullScreenLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='w-full min-h-dvh h-1'>
      <Header />
      {children}
    </div>
  );
};

export default FullScreenLayout;
