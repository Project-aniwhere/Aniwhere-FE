import HoverColorButton from '../common/button/hover-color-button';
import PasswordInput from './password-input';
import NicknameInput from './nickname-input';
import EmailInput from './email-input';
import BirthInput from './birth-input';
import { handleSignupForm } from '@/action/signup';
import { useEffect, useState } from 'react';

interface SignupFormProps {
  setModalContent: (content: { status: string; message: string }) => void;
}

interface ValidationState {
  nickname: boolean;
  email: boolean;
  password: boolean;
  birth: boolean;
}

const SignupForm = ({ setModalContent }: SignupFormProps) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [validation, setValidation] = useState<ValidationState>({
    nickname: false,
    email: false,
    password: false,
    birth: false,
  });

  const updateValidation = (field: keyof ValidationState, isValid: boolean) => {
    setValidation((prev) => ({
      ...prev,
      [field]: isValid,
    }));
  };

  useEffect(() => {
    // 모든 필드가 유효한지 확인
    const allFieldsValid = Object.values(validation).every((valid) => valid);
    setIsFormValid(allFieldsValid);
  }, [validation]);

  const onSubmit = async (formData: FormData) => {
    const result = await handleSignupForm(formData);

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
      <NicknameInput
        onValidation={(isValid) => updateValidation('nickname', isValid)}
      />
      {/* From-Email */}
      <EmailInput
        onValidation={(isValid) => updateValidation('email', isValid)}
      />
      {/* From-Password */}
      <PasswordInput
        onValidation={(isValid) => updateValidation('password', isValid)}
      />
      {/* From-Birthday, gender */}
      <BirthInput
        onValidation={(isValid) => updateValidation('birth', isValid)}
      />
      <HoverColorButton
        className='w-full py-3'
        text='회원가입'
        disabled={!isFormValid}
      />
    </form>
  );
};
export default SignupForm;
