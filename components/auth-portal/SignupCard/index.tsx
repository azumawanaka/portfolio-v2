import SocialLoginButtons from '../SocialLoginButtons';
import AuthCardHeader from '../AuthCardHeader';
import SignupForm from '../SignupForm';
import { AuthTabInterface } from 'interfaces/action.interfaces';

const SignupCard = ({ setAuthTabValue }: AuthTabInterface) => {
  return (
    <>
      <AuthCardHeader
        title='Sign up to JobFlow'
        subtitle='Create an account in seconds. No credit card required.'
      />
      <SocialLoginButtons />
      <SignupForm setAuthTabValue={setAuthTabValue} />
    </>
  );
};

export default SignupCard;
