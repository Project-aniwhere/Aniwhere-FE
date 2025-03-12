import ModalRouter from '@/component/common/modal/modal-router';
import LoginContainer from '@/component/login/login-container';

const Page = () => {
  return (
    <ModalRouter>
      <LoginContainer />
    </ModalRouter>
  );
};

export default Page;
