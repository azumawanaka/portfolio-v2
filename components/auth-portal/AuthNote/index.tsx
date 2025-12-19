import { AuthTabInterface } from 'interfaces/action.interfaces';
import { StyledAuthNote } from './style';

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
    <StyledAuthNote>
      {note || "Don't have an account yet?"}
      <a href='#' onClick={toggleTab}>
        {linkLabel || 'Sign up here'}
      </a>
    </StyledAuthNote>
  );
};

export default AuthNote;
