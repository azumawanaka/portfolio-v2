import { ReactNode } from 'react';
import { AuthFormSubTitle, AuthFormTitle } from './style';

const AuthCardHeader = (props: { title?: string; subtitle?: ReactNode }) => {
  const { title, subtitle } = props || {};

  return (
    <>
      <AuthFormTitle>{title || 'Welcome back, Fil'}</AuthFormTitle>

      <AuthFormSubTitle>
        {subtitle || (
          <>
            Log in to continue as <strong>Filjumar Jumamoy</strong> or switch
            account below.
          </>
        )}
      </AuthFormSubTitle>
    </>
  );
};

export default AuthCardHeader;
