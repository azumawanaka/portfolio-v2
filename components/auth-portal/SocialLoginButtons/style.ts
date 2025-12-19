import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const AuthSocialButtons = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
  '& .MuiButton-root': {
    textTransform: 'none',
    justifyContent: 'center',
    border: 'none',
    color: theme.custom.color.secondaryForeground,
    backgroundColor: theme.custom.color.secondary,
    borderRadius: theme.shape.borderRadius,
    fontSize: 13,
    fontWeight: 500,
    padding: '8px 10px',
    '&:hover': {
      border: 'none',
      boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)',
    },
  },
}));

export const AuthFormSubTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  fontSize: 12,
  color: theme.custom.color.mutedForeground,
}));
