import Image from 'next/image';
import UnderlineButton from '../common/button/hover-underline-button';
import CameraSvg from '@/asset/svg/camera/camera-svg';
import IconButton from '../common/button/icon-button';

const MypageSidebar = () => {
  return (
    <div className='w-64 h-screen pt-28 border-r border-gray-300 p-6 bg-white flex flex-col items-center'>
      <div className='relative'>
        <div className='w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden border-2 border-aniviolet2'>
          <Image
            src=''
            alt='comment image'
            width={0}
            height={0}
            sizes='100%'
            className='w-full h-full object-cove'
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
      <div className='flex text-gray-800 gap-x-8'>
        <div className='text-center'>
          <span className='font-bold'>0</span>
          <hr />
          <span>별점</span>
        </div>
        <div className='text-center'>
          <span className='font-bold'>0</span>
          <hr />
          <span>팔로잉</span>
        </div>
        <div className='text-center'>
          <span className='font-bold'>0</span>
          <hr />
          <span>포스트</span>
        </div>
      </div>

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
