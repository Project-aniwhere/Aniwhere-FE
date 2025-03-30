import { useEffect, useState } from 'react';
import DefaultInput from '../common/input/default-input';
import { SignupInputProps } from '@/type/common';
import HoverColorButton from '../common/button/hover-color-button';
import { Fetch } from '@/util/fetch';

interface NicknameInputProps extends SignupInputProps {
  initialValidated?: boolean;
}

const NicknameInput = ({
  onValidation,
  defaultValue,
  className,
}: NicknameInputProps) => {
  const [nickname, setNickname] = useState('');
  const [isDuplicateChcked, setIsDuplicateChcked] = useState(false);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDuplicateChcked(defaultValue === e.target.value);
    onValidation(defaultValue === e.target.value && isDuplicateChcked);
    setNickname(e.target.value);
  };

  useEffect(() => {
    setNickname(defaultValue || '');
    setIsDuplicateChcked(!!defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    onValidation(isDuplicateChcked && !!nickname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nickname, isDuplicateChcked]);

  return (
    <div className={'flex gap-2 flex-col ' + className}>
      <div className='flex flex-row gap-2'>
        <DefaultInput
          type='text'
          name='nickname'
          value={nickname}
          onChange={handleNicknameChange}
          placeholder='닉네임'
          className='flex-1 p-2'
        />
        <HoverColorButton
          className='p-3 h-fit'
          text='닉네임 확인'
          type='button'
          onClick={async () => {
            if (!nickname) return;
            if (defaultValue === nickname) {
              setIsDuplicateChcked(true);
              return;
            }
            const res = await Fetch(`/api/check/${nickname}`);
            const isDuplicate = await res.json();
            setIsDuplicateChcked(isDuplicate);
            onValidation(isDuplicate);
          }}
        />
      </div>
      <div className='flex gap-2'>
        <span
          className={`col-span-1 w-fit inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full transition-colors ${
            !nickname
              ? 'bg-red-400 text-gray-100 border border-gray-200'
              : 'bg-green-50 text-green-700 border border-green-200'
          }`}
        >
          닉네임 입력
        </span>

        <span
          className={`col-span-1 w-fit inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full transition-colors ${
            !isDuplicateChcked
              ? 'bg-red-400 text-gray-100 border border-gray-200'
              : 'bg-green-50 text-green-700 border border-green-200'
          }`}
        >
          중복 닉네임 확인
        </span>
      </div>
    </div>
  );
};

export default NicknameInput;
