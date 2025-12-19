import { Facebook, Google } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { AuthSocialButtons } from './style';

const LoginCard = () => {
  return (
    <>
      <AuthSocialButtons>
        <Button variant='outlined' startIcon={<Google />}>
          Continue with Google
        </Button>
        <Button variant='outlined' startIcon={<Facebook />}>
          Continue with Facebook
        </Button>
      </AuthSocialButtons>

      <Typography variant='body2' mt={3}>
        or use your email
      </Typography>
    </>
  );
};

export default LoginCard;
