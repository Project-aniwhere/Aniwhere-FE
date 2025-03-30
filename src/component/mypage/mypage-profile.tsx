import Image from 'next/image';
import IconButton from '../common/button/icon-button';
import CameraSvg from '@/asset/svg/camera/camera-svg';

const MypageProfile = () => {
  return (
    <div className='relative'>
      <div className='size-24 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden border-2 border-aniviolet2'>
        <Image
          src={'/'}
          alt='프로필 이미지'
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
  );
};
export default MypageProfile;
