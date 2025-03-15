import UnderlineButton from '@/component/common/button/hover-underline-button';
import MypageAccountInfo from '@/component/mypage/mypage-accountInfo';
import MypageProfile from '@/component/mypage/mypage-profile';
import MypageUserInfo from '@/component/mypage/mypage-userInfo';

const Page = async () => {
  return (
    <div className='relative w-full h-full flex flex-col md:flex-row items-center md:items-start justify-center gap-2 rounded-lg bg-white pt-24'>
      <div className='h-full flex flex-col items-center gap-2 md:border-r-2 p-8 md:border-gray-300'>
        <MypageProfile />
        <MypageUserInfo />
        <div className='grid grid-flow-col md:grid-flow-row w-full justify-center gap-5 pt-3 border-t-2 border-gray-300'>
          <UnderlineButton text='계정 설정' />
          <UnderlineButton text='위시리스트' />
          <UnderlineButton text='내가 쓴 글' />
        </div>
      </div>

      <MypageAccountInfo />
    </div>
  );
};

export default Page;
