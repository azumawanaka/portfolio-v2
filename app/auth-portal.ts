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
      borderRadius: Number(theme.shape.borderRadius) * 2,
      '&.Mui-selected': {
        backgroundColor: theme.custom.color.secondary,
        color: theme.custom.color.secondaryForeground,
      },
    },
  },
  '& .auth-form': {
    marginTop: theme.spacing(4),
    '& .MuiFormControl-root': {
      marginBottom: theme.spacing(3),
    },
    '& label': {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: theme.custom.color.foreground,
      '&#job-search-focus-autocomplete-label': {
        fontSize: 15,
      },
      '& a': {
        color: theme.custom.color.primary,
        textDecoration: 'none',
      },
      '& span': {
        color: theme.custom.color.mutedForeground,
      },
    },
    '& .auth-checkbox-label': {
      marginBottom: theme.spacing(2),
      '& label': {
        justifyContent: 'flex-start',
        color: theme.custom.color.mutedForeground,
        '& span': {
          fontSize: 11,
        },
      },
    },
    '& .auth-submit-button': {
      marginTop: theme.spacing(1),
      backgroundColor: theme.custom.color.primary,
      color: theme.custom.color.primaryForeground,
      textTransform: 'none',
      fontSize: 13,
      fontWeight: 500,
      padding: '8px  10px',
    },
    '& .auth-sign-up-note': {
      color: theme.custom.color.mutedForeground,
      fontSize: 12,
      '& a': {
        color: theme.custom.color.primary,
        textDecoration: 'none',
      },
    },
  },
  '& .auth-form-title': {
    fontSize: 16,
    fontWeight: 500,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: 'left',
    color: theme.custom.color.foreground,
  },
  '& .auth-form-subtitle': {
    textAlign: 'left',
    fontSize: 12,
    color: theme.custom.color.mutedForeground,
  },
  '& .auth-social-buttons': {
    '& .MuiButton-root': {
      textTransform: 'none',
      justifyContent: 'center',
      border: 'none',
      color: theme.custom.color.secondaryForeground,
      backgroundColor: theme.custom.color.secondary,
      borderRadius: Number(theme.shape.borderRadius),
      fontSize: 13,
      fontWeight: 500,
      padding: '8px 10px',
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
