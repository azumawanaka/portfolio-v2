import styled from '@emotion/styled';

export const StyledAuthForm = styled.form(({ theme }) => ({
  marginTop: theme.spacing(4),
  height: 'calc(100% - 342px)',
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
}));
