import HoverColorButton from '../common/button/hover-color-button';
import CheckInput from '../common/input/check-input';
import UnderlineButton from '../common/button/hover-underline-button';
import MypageProfile from './mypage-profile';
import MypageUserInfo from './mypage-userInfo';

const MypageMobile = () => {
  return (
    <div className='bg-white w-full max-w-md relative flex flex-col items-center gap-2 rounded-lg'>
      <MypageProfile />
      <MypageUserInfo />

      <div className='grid grid-flow-col justify-center gap-5 pt-3 border-t-2 border-gray-300'>
        <UnderlineButton text='계정 설정' />
        <UnderlineButton text='위시리스트' />
        <UnderlineButton text='내가 쓴 글' />
      </div>

      <div className='space-y-2 border-t-2 border-gray-300 pt-10 m-2'>
        <div className='flex items-center gap-4'>
          <label className='w-16 text-lg'>이메일</label>
          <span className='w-44 p-2 border border-gray-300 rounded-lg bg-gray-50'>
            testEmail@test.com
          </span>
        </div>

        <div className='flex items-center gap-4'>
          <label className='w-16 text-lg'>닉네임</label>
          <span className='w-44 p-2 border border-gray-300 rounded-lg bg-gray-50'>
            박종권
          </span>
        </div>

        <div className='flex items-center gap-4'>
          <label className='w-16 text-lg'>비밀번호</label>
          <span className='w-44 p-2 border border-gray-300 rounded-lg bg-gray-50'>
            ****
          </span>
        </div>
      </div>
      <div className='flex flex-row m-2 border-t-2 border-gray-300'>
        <div className='flex items-center w-16 mt-5 border-r-4 border-gray-300'>
          <h2 className='text-lg'>알림</h2>
        </div>
        <div className='space-y-3 mt-6 ml-5'>
          <div className='flex items-center gap-2'>
            <CheckInput className='w-4 h-4' />
            <span className='text-sm'>좋아요와 댓글에 대한 알림</span>
          </div>
          <div className='flex items-center gap-2'>
            <CheckInput className='w-4 h-4' />
            <span className='text-sm'>커뮤니티 활동 소식</span>
          </div>
          <div className='flex items-center gap-2'>
            <CheckInput className='w-4 h-4' />
            <span className='text-sm'>이벤트 및 새로운 소식</span>
          </div>
        </div>
      </div>
      <div className='grid grid-flow-col justify-center gap-1 pt-3 border-t-2 border-gray-300'>
        <UnderlineButton className='w-24' text='이메일 변경' />
        <UnderlineButton className='w-24' text='닉네임 변경' />
        <UnderlineButton className='w-24' text='비밀번호 변경' />
      </div>
      <div className='flex justify-end w-full border-t-2 border-gray-300'>
        <UnderlineButton className='p-3' text='회원 탈퇴하기' />
      </div>
    </div>
  );
};
export default MypageMobile;
