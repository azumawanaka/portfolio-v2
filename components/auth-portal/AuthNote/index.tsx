import { Box } from '@mui/material';
import { AuthTabInterface } from 'interfaces/action.interfaces';

interface AuthNoteProps {
  note?: string;
  linkLabel?: string;
  setAuthTabValue: AuthTabInterface['setAuthTabValue'];
}

const AuthNote = (props: AuthNoteProps) => {
  const { note, linkLabel, setAuthTabValue } = props || {};

  const toggleTab = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setAuthTabValue((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      mt={2}
      className='auth-sign-up-note'
    >
      {note || "Don't have an account yet?"}
      <a href='#' onClick={toggleTab}>
        {linkLabel || 'Sign up here'}
      </a>
    </Box>
  );
};

export default AuthNote;
