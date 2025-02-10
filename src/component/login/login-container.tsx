import KakaotalkSvg from '@/asset/svg/kakaotalk/kakaotalk-svg';
import UnderlineButton from '../common/button/hover-underline-button';
import IconButton from '../common/button/icon-button';
import Link from 'next/link';
import LoginForm from './login-form';
import { API_URL } from '@/constant/api-url';

const LoginContainer = () => {
  return (
    <div className='bg-white w-full max-w-md p-6 relative flex flex-col items-center gap-2 rounded-lg'>
      {/* Logo */}
      <h1 className='text-aniviolet3 text-2xl font-bold text-center'>
        ANIWHERE
      </h1>

      {/* Title */}
      <h2 className='text-lg font-medium text-center mb-6'>로그인</h2>

      {/* Form */}
      <LoginForm />

      {/* Links */}
      <div className='mt-4 text-center text-sm flex flex-col items-center'>
        <span className='text-gray-600 inline-flex'>
          <p className='whitespace-nowrap'>비밀번호를 잊어버리셨나요?</p>
          <UnderlineButton className='ml-1' text='찾기' />
        </span>
        <span className='mt-2 text-gray-600 inline-flex'>
          <p>계정이 없으신가요?</p>
          <Link href='/signup'>
            <UnderlineButton className='ml-1' text='회원가입' />
          </Link>
        </span>
      </div>

      {/* Social Login */}
      <div className='mt-6 w-full'>
        <div className='flex flex-row items-center'>
          <div className='flex-grow border-t border-gray-300' />
          <span className='px-2 bg-white text-gray-500'>OR</span>
          <div className='flex-grow border-t border-gray-300' />
        </div>

        <div className='flex justify-center gap-4 mt-6'>
          <Link
            href={`https://kauth.kakao.com/oauth/authorize?client_id=a311edb6f85642a8b3c8dfa59a459a38&redirect_uri=http://${process.env.NODE_ENV === 'production' ? API_URL : 'localhost:3000'}/auth/kakao/callback&response_type=code`}
          >
            <IconButton>
              <KakaotalkSvg height='3rem' width='3rem' />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginContainer;
