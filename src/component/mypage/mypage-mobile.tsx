import Image from 'next/image';
import IconButton from '../common/button/icon-button';
import CameraSvg from '@/asset/svg/camera/camera-svg';
import HoverColorButton from '../common/button/hover-color-button';
import CheckInput from '../common/input/check-input';
import UnderlineButton from '../common/button/hover-underline-button';

const MypageMobile = () => {
  return (
    <div className='bg-white w-full max-w-md relative flex flex-col items-center gap-2 rounded-lg'>
      <div className='relative'>
        <div className='size-24 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden border-2 border-aniviolet2'>
          <Image
            src=''
            alt='comment image'
            width={0}
            height={0}
            sizes='100%'
            className='w-full h-full object-cover'
          />
        </div>
        {/* Small Circle Decoration */}
        <IconButton className='absolute bottom-0.5 right-0.5 w-8 h-8 bg-gray-200 rounded-full border-2 border-aniviolet1 grid place-items-center'>
          <CameraSvg width='1rem' height='1rem' />
        </IconButton>
      </div>
      <div className='flex flex-col text-gray-800 text-center'>
        <div className='text-xl mt-4 font-bold'>박종권</div>
        <div className='mb-4 text-gray-500'>testEmail@test.com</div>
      </div>
      <div className='space-y-2 border-t-2 border-gray-300 pt-10 m-2'>
        <div className='flex items-center gap-4'>
          <label className='w-16 text-lg'>이메일</label>
          <span className='w-44 p-3 border border-gray-300 rounded-lg bg-gray-50'>
            testEmail@test.com
          </span>
          <HoverColorButton className='p-3 w-28' text='이메일 변경' />
        </div>

        <div className='flex items-center gap-4'>
          <label className='w-16 text-lg'>비밀번호</label>
          <span className='w-44 p-3 border border-gray-300 rounded-lg bg-gray-50'>
            ****
          </span>
          <HoverColorButton className='p-3 w-28' text='비밀번호 변경' />
        </div>

        <div className='flex items-center gap-4'>
          <label className='w-16 text-lg'>닉네임</label>
          <span className='w-44 p-3 border border-gray-300 rounded-lg bg-gray-50'>
            박종권
          </span>
          <HoverColorButton className='p-3 w-28' text='닉네임 변경' />
        </div>
      </div>
      <div className='flex flex-row w-full m-2 border-t-2 border-gray-300'>
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
      <div className='flex justify-end w-full mt-4 border-t-2 border-gray-300'>
        <UnderlineButton className='p-3' text='회원 탈퇴하기' />
      </div>
    </div>
  );
};
export default MypageMobile;
