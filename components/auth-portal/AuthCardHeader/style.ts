import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const AuthFormTitle = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  textAlign: 'left',
  color: theme.custom.color.foreground,
}));

export const AuthFormSubTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  fontSize: 12,
  color: theme.custom.color.mutedForeground,
}));
