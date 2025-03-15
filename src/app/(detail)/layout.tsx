import Footer from '@/component/common/footer/footer';
import Header from '@/component/common/header/header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
