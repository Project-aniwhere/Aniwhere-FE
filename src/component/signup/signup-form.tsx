import HoverColorButton from '../common/button/hover-color-button';
import PasswordInput from './password-input';
import NicknameInput from './nickname-input';
import EmailInput from './email-input';
import BirthInput from './birth-input';
import { handleForm } from './form-action';

const SignupForm = () => {
  return (
    <form className='space-y-4' action={handleForm}>
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
