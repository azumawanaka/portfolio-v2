import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledAuthNote = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: theme.spacing(2),
  color: theme.custom.color.mutedForeground,
  fontSize: 12,
  '& > a': {
    color: theme.custom.color.primary,
    textDecoration: 'none',
  },
}));
