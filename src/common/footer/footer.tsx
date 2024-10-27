const Footer = () => {
  return (
    <footer className='w-full relative flex flex-col items-center py-4 bg-aniviolet3 text-white'>
      <h2 className='font-bold text-2xl mb-4'>ANIWHERE</h2>
      <div className='flex space-x-14 mb-4'>
        <div className='w-6 h-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='white'
            className='w-6 h-6'
          >
            <rect x='2' y='4' width='20' height='16' rx='2' strokeWidth='2' />
            <path d='M22 4l-10 8L2 4' strokeWidth='2' />
          </svg>
        </div>
        <div className='w-6 h-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='white'
            className='w-6 h-6'
          >
            <rect x='2' y='2' width='20' height='20' rx='5' strokeWidth='2' />
            <circle cx='12' cy='12' r='4' strokeWidth='2' />
            <circle cx='17' cy='7' r='1' fill='white' />
          </svg>
        </div>
        <div className='w-6 h-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='white'
            className='w-6 h-6'
          >
            <path
              d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'
              strokeWidth='2'
            />
          </svg>
        </div>
        <div className='w-6 h-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='white'
            className='w-6 h-6'
          >
            <path
              d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'
              strokeWidth='2'
            />
          </svg>
        </div>
      </div>
      <div className='flex space-x-8'>
        <a>팀원 정보</a>
        <a>팀 깃허브</a>
        <a>정보수집</a>
        <a>신고하기</a>
        <a>공지사항</a>
        <a>개인정보 처리방침</a>
      </div>
    </footer>
  );
};

export default Footer;
