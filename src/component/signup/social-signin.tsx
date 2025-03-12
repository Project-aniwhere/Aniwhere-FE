import KakaotalkSvg from '@/asset/svg/kakaotalk/kakaotalk-svg';
import IconButton from '../common/button/icon-button';

const SocialSignIn = () => {
  return (
    <div className='flex justify-center gap-4 mt-6'>
      <IconButton>
        <KakaotalkSvg height='3rem' width='3rem' />
      </IconButton>
    </div>
  );
};

export default SocialSignIn;
