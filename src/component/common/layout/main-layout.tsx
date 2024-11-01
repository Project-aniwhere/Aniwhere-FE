const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full px-8 flex justify-center'>
      <main className='relative w-full max-w-[90rem]'>{children}</main>
    </div>
  );
};

export default MainLayout;
