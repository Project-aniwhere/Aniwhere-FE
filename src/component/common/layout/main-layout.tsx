const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='px-8'>
      <main className='relative max-w-[90rem]'>{children}</main>
    </div>
  );
};

export default MainLayout;
