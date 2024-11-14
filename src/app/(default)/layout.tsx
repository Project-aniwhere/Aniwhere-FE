import Footer from '@/component/common/footer/footer';
import Header from '@/component/common/header/header';
import MainLayout from '@/component/common/layout/main-layout';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <MainLayout className='pt-20'>{children}</MainLayout>
    </>
  );
};

export default Layout;
