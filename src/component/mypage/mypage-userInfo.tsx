'use client';

import useSession from '@/hook/session/use-session';

const MypageUserInfo = () => {
  const { userInfo } = useSession();

  return (
    <div className='relative'>
      <div className='flex flex-col text-gray-800 text-center'>
        <div className='text-xl mt-4 font-bold'>
          {userInfo?.nickname ?? '익명'}
        </div>
        <div className='mb-4 text-gray-500'>{userInfo?.email}</div>
      </div>
      <div className='grid grid-cols-3 w-full text-gray-800 gap-x-2'>
        {/* <div className='text-center w-full'>
          <span className='font-bold'>0</span>
          <hr />
          <span>별점</span>
        </div>
        <div className='text-center w-full'>
          <span className='font-bold'>0</span>
          <hr />
          <span>팔로잉</span>
        </div>
        <div className='text-center w-full'>
          <span className='font-bold'>0</span>
          <hr />
          <span>포스트</span>
        </div> */}
      </div>
    </div>
  );
};
export default MypageUserInfo;
