import GoogleSvg from '@/asset/svg/google/google-svg';
import KakaotalkSvg from '@/asset/svg/kakaotalk/kakaotalk-svg';

const LoginContainer = () => {
  return (
    <div className='inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white w-full max-w-md p-6 relative'>
        {/* Logo */}
        <h1 className='text-aniviolet3 text-2xl font-bold text-center mb-8'>
          ANIWHERE
        </h1>

        {/* Title */}
        <h2 className='text-lg font-medium text-center mb-6'>로그인</h2>

        {/* Form */}
        <form className='space-y-4'>
          <input
            type='email'
            placeholder='이메일'
            className='w-full p-3 border border-gray-300 rounded-lg bg-gray-50'
          />

          <input
            type='password'
            placeholder='비밀번호'
            className='w-full p-3 border border-gray-300 rounded-lg bg-gray-50'
          />

          <button
            type='submit'
            className='w-full py-3 bg-aniviolet3 text-white rounded-lg hover:bg-purple-700 transition-colors'
          >
            로그인
          </button>
        </form>

        {/* Links */}
        <div className='mt-4 text-center text-sm'>
          <p className='text-gray-600'>
            비밀번호를 잊어버리셨나요?{' '}
            <button className='text-aniviolet3 hover:underline'>찾기</button>
          </p>
          <p className='mt-2 text-gray-600'>
            계정이 없으신가요?{' '}
            <button className='text-aniviolet3 hover:underline'>
              회원가입
            </button>
          </p>
        </div>

        {/* Social Login */}
        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 bg-white text-gray-500'>OR</span>
            </div>
          </div>

          <div className='mt-6 flex justify-center gap-4'>
            <button className='flex items-center justify-center rounded-full hover:opacity-80 transition-opacity'>
              <div className='w-12 h-12'>
                <KakaotalkSvg height='50' width='50'></KakaotalkSvg>
              </div>
            </button>
            <button className='flex items-center justify-center rounded-full hover:opacity-80 transition-opacity'>
              <GoogleSvg height='50' width='50'></GoogleSvg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
