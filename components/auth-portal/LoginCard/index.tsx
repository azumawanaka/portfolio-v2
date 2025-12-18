import SocialLoginButtons from '../SocialLoginButtons';
import AuthCardHeader from '../AuthCardHeader';
import AuthForm from '../AuthForm';
import { AuthTabInterface } from 'interfaces/action.interfaces';

const LoginCard = ({ setAuthTabValue }: AuthTabInterface) => {
  return (
    <>
      <AuthCardHeader />
      <SocialLoginButtons />
      <AuthForm setAuthTabValue={setAuthTabValue} />
    </>
  );
};

export default LoginCard;
