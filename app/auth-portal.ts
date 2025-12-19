import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AuthShell = styled(Paper)(({ theme }) => ({
  display: 'flex',
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.custom.color.primaryForeground,
  overflow: 'hidden',
  boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08)',
  [theme.breakpoints.up('md')]: {
    height: '100%',
  },
  '& h5': {
    color: theme.custom.color.foreground,
    fontWeight: 600,
    fontSize: 22,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  '& .auth-subtitle': {
    color: theme.custom.color.mutedForeground,
    fontSize: 13,
    marginBottom: theme.spacing(3),
  },
  '& .auth-footer-note': {
    marginTop: theme.spacing(4),
    textAlign: 'left',
    '& > a': {
      color: theme.custom.color.primary,
    },
  },
  '& .auth-tabs': {
    marginBottom: theme.spacing(2),
    '& .MuiTabs-flexContainer': {
      justifyContent: 'space-between',
    },
    '& .MuiTabs-indicator': {
      display: 'none',
    },
    '& .MuiButtonBase-root': {
      flex: 1,
      fontSize: 13,
      fontWeight: 500,
      padding: '8px 0',
      minHeight: 'auto',
      textTransform: 'none',
      maxWidth: 'none',
      minWidth: 'none',
      borderRadius: theme.shape.borderRadius,
      '&.Mui-selected': {
        backgroundColor: theme.custom.color.secondary,
        color: theme.custom.color.secondaryForeground,
      },
    },
  },
}));

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 'none',
  boxShadow: 'none',
  height: '100%',
  '& .auth-hero-section': {
    height: 'calc(100% - 50px)',
  },
}));
