'use client';

import useSession from '@/hook/session/use-session';
import HoverColorButton from '../common/button/hover-color-button';
import UnderlineButton from '../common/button/hover-underline-button';
import CheckInput from '../common/input/check-input';
import NicknameInput from '../signup/nickname-input';
import EmailInput from '../signup/email-input';
import PasswordInput from '../signup/password-input';
import { useMemo, useState } from 'react';
import { FetchWithJWT } from '@/util/fetch';

interface ValidationState {
  nickname: boolean;
  email: boolean;
  password: boolean;
}

const MypageAccountInfo = () => {
  const { userInfo } = useSession();
  const [validation, setValidation] = useState<ValidationState>({
    nickname: true,
    email: true,
    password: false,
  });

  const updateValidation = (field: keyof ValidationState, isValid: boolean) => {
    setValidation((prev) => ({
      ...prev,
      [field]: isValid,
    }));
  };

  const buttonDisabled = useMemo(() => {
    return Object.values(validation).some((valid) => !valid);
  }, [validation]);

  return (
    <div className='max-w-[48rem] w-full p-8 space-y-8'>
      <div className=' space-y-6'>
        {/* Profile Info */}

        <form
          className='grid grid-cols-[1fr_8rem] md:grid-cols-[7rem_1fr_7rem] gap-2'
          action={async (e) => {
            const res = await FetchWithJWT(
              `/api/users/me/update?userId=${userInfo?.userId}`,
              {
                method: 'PATCH',
                body: JSON.stringify({
                  email: e.get('email'),
                  nickname: e.get('nickname'),
                  password: e.get('password'),
                  userId: userInfo?.userId,
                }),
              }
            );

            if (res.ok) {
              alert('변경되었습니다.');
            } else {
              alert('변경에 실패했습니다.');
            }
          }}
        >
          <h1 className='col-span-3 flex items-center justify-between mb-8'>
            <span className='text-lg font-bold'>계정 설정</span>
            <HoverColorButton
              className='px-4 py-2'
              text='저장'
              type='submit'
              disabled={buttonDisabled}
            />
          </h1>
          <label className='text-lg hidden md:block'>이메일</label>
          <EmailInput
            onValidation={(isValid) => updateValidation('email', isValid)}
            className='col-span-3 md:col-span-2'
            defaultValue={userInfo?.email}
          />

          <label className='text-lg hidden md:block'>닉네임</label>
          <NicknameInput
            onValidation={(isValid) => updateValidation('nickname', isValid)}
            defaultValue={userInfo?.nickname}
            className='col-span-3 md:col-span-2'
          />

          <label className='text-lg hidden md:block'>비밀번호</label>
          <PasswordInput
            onValidation={(isValid) => updateValidation('password', isValid)}
            className='col-span-2'
          />
        </form>

        {/* Notification Settings */}
        <div className='mt-16'>
          <h2 className='text-lg font-bold mb-4'>알림</h2>
          <div className='space-y-3'>
            <label className='flex items-center gap-2'>
              <CheckInput className='w-4 h-4' />
              <span className='text-sm'>좋아요와 댓글에 대한 알림</span>
            </label>
            <label className='flex items-center gap-2'>
              <CheckInput className='w-4 h-4' />
              <span className='text-sm'>커뮤니티 활동 소식</span>
            </label>
            <label className='flex items-center gap-2'>
              <CheckInput className='w-4 h-4' />
              <span className='text-sm'>이벤트 및 새로운 소식</span>
            </label>
          </div>
        </div>

        <div className='mt-8 flex justify-end gap-6'>
          <UnderlineButton className='p-3' text='회원 탈퇴하기' />
        </div>
      </div>
    </div>
  );
};
export default MypageAccountInfo;
