import { useEffect, useState } from 'react';
import DefaultInput from '../common/input/default-input';
import { SignupInputProps } from '@/type/common';

const NicknameInput = ({ onValidation }: SignupInputProps) => {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    validateNickname(nickname);
  }, [nickname]);

  const validateNickname = (value: string) => {
    let isValid = false;
    if (nickname.length > 0) {
      isValid = true;
    } else {
      isValid = false;
    }
    onValidation(isValid);
  };
  return (
    <div className='flex gap-2 flex-col'>
      <DefaultInput
        type='text'
        name='nickname'
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder='닉네임'
        className='flex-1 p-2'
      />
      <span
        className={`col-span-1 w-fit inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full transition-colors ${
          !nickname
            ? 'bg-red-400 text-gray-100 border border-gray-200'
            : 'bg-green-50 text-green-700 border border-green-200'
        }`}
      >
        닉네임 입력
      </span>
    </div>
  );
};

export default NicknameInput;
