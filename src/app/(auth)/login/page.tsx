import LoginContainer from '@/component/login/login-container';
import PageProtector from '@/component/login/login-page-protector';

const Page = () => {
  return (
    <div className='w-full h-dvh flex items-center justify-center'>
      <PageProtector needLogin={false} redirectUrl='/' />
      <LoginContainer />
    </div>
  );
};

export default Page;
