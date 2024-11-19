interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <div className={'w-full px-8 flex justify-center ' + className}>
      <main className='relative w-full max-w-[90rem]'>{children}</main>
    </div>
  );
};

export default MainLayout;
