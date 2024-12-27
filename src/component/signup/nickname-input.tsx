import DefaultInput from '../common/input/default-input';

const NicknameInput = () => {
  return (
    <div className='flex gap-2'>
      <DefaultInput
        type='text'
        name='nickname'
        placeholder='닉네임'
        className='flex-1 p-2'
      />
    </div>
  );
};

export default NicknameInput;
