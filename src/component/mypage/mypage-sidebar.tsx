import UnderlineButton from '../common/button/hover-underline-button';
import MypageProfile from './mypage-profile';
import MypageUserInfo from './mypage-userInfo';

const MypageSidebar = () => {
  return (
    <div className='w-64 h-screen pt-28 border-r border-gray-300 p-6 bg-white flex flex-col items-center'>
      <MypageProfile />
      <MypageUserInfo />

      <div className='w-full mt-8 space-y-2 border-t-2 border-aniviolet3 pt-8'>
        <UnderlineButton
          className='w-full text-left py-2 text-lg'
          text='계정 설정'
        />
        <UnderlineButton
          className='w-full text-left py-2 text-lg'
          text='위시리스트'
        />
        <UnderlineButton
          className='w-full text-left py-2 text-lg'
          text='내가 쓴 글'
        />
      </div>
    </div>
  );
};
export default MypageSidebar;
