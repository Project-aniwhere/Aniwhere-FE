import MypageAccountInfo from '@/component/mypage/mypage-accountInfo';
import MypageMobile from '@/component/mypage/mypage-mobile';
import MypageSidebar from '@/component/mypage/mypage-sidebar';
import { isMobile } from '@/util/detect-device';

const Page = async () => {
  return (
    <>
      {(await isMobile()) ? (
        <div className='flex mt-20'>
          <MypageMobile />
        </div>
      ) : (
        <div className='flex justify-center items-center h-screen mx-auto'>
          {/* Left Sidebar */}
          <MypageSidebar />
          {/* Main Content */}
          <MypageAccountInfo />
        </div>
      )}
    </>
  );
};

export default Page;
