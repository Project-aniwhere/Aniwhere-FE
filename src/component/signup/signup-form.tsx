import HoverColorButton from '../common/button/hover-color-button';
import PasswordInput from './password-input';
import NicknameInput from './nickname-input';
import EmailInput from './email-input';
import BirthInput from './birth-input';
import { handleForm } from '@/action/signup';

interface SignupFormProps {
  setModalContent: (content: { status: string; message: string }) => void;
}

const SignupForm = ({ setModalContent }: SignupFormProps) => {
  const onSubmit = async (formData: FormData) => {
    const result = await handleForm(formData);

    if (result.code < 400) {
      setModalContent({
        status: 'success',
        message: '회원가입이 완료되었습니다.',
      });
    } else {
      setModalContent({
        status: 'error',
        message: result.message || '회원가입에 실패했습니다.',
      });
    }
  };

  return (
    <form className='space-y-4' action={onSubmit}>
      {/* From-NickName */}
      <NicknameInput />
      {/* From-Email */}
      <EmailInput />
      {/* From-Password */}
      <PasswordInput />
      {/* From-Birthday, gender */}
      <BirthInput />
      <HoverColorButton className='w-full py-3' text='회원가입' />
    </form>
  );
};
export default SignupForm;
