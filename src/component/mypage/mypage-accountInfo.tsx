import HoverColorButton from '../common/button/hover-color-button';
import UnderlineButton from '../common/button/hover-underline-button';
import CheckInput from '../common/input/check-input';

const MypageAccountInfo = () => {
  return (
    <div className='max-w-[48rem] w-full p-8'>
      <h1 className='text-2xl font-bold mb-8'>계정 설정</h1>
      <div className=' space-y-6'>
        {/* Profile Info */}
        <div className='grid grid-cols-[1fr_8rem] md:grid-cols-[6rem_1fr_8rem] gap-2'>
          <label className='text-lg hidden md:block'>이메일</label>
          <span className='p-3 border border-gray-300 rounded-lg bg-gray-50'>
            이메일
          </span>
          <HoverColorButton className='p-3' text='이메일 인증' />

          <label className='text-lg hidden md:block'>비밀번호</label>
          <span className='p-3 border border-gray-300 rounded-lg bg-gray-50'>
            ****
          </span>
          <HoverColorButton className='p-3' text='비밀번호 변경' />

          <label className='text-lg hidden md:block'>닉네임</label>
          <span className='p-3 border border-gray-300 rounded-lg bg-gray-50'>
            박종권
          </span>
          <HoverColorButton className='p-3' text='닉네임 변경' />
        </div>

        {/* Notification Settings */}
        <div className='mt-16'>
          <h2 className='text-lg font-bold mb-4'>알림</h2>
          <div className='space-y-3'>
            <label className='flex items-center gap-2'>
              <CheckInput className='w-4 h-4' />
              <span className='text-sm'>좋아요와 댓글에 대한 알림</span>
            </label>
            <label className='flex items-center gap-2'>
              <CheckInput className='w-4 h-4' />
              <span className='text-sm'>커뮤니티 활동 소식</span>
            </label>
            <label className='flex items-center gap-2'>
              <CheckInput className='w-4 h-4' />
              <span className='text-sm'>이벤트 및 새로운 소식</span>
            </label>
          </div>
        </div>

        <div className='mt-8 flex justify-end gap-6'>
          <UnderlineButton className='p-3' text='회원 탈퇴하기' />
        </div>
      </div>
    </div>
  );
};
export default MypageAccountInfo;
