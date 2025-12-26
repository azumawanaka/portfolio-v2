import { borderRadius } from '@mui/system';
import styled from '@emotion/styled';

export const SyledAside = styled.aside(({ theme }) => ({
  width: 220,
  padding: theme.spacing(1, 2),
  '& .sidebar-logo': {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 1),
    gap: 8,
    '& .sidebar-logo-mark': {
      width: 24,
      height: 24,
      borderRadius: 8,
      background: theme.custom.color.primary,
      color: theme.custom.color.primaryForeground,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 600,
    },
    '& .sidebar-logo-text': {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      '& .sidebar-logo-title': {
        fontSize: 14,
        fontWeight: 600,
      },
      '& .sidebar-logo-subtitle': {
        fontSize: 11,
        color: theme.custom.color.mutedForeground,
      },
    },
  },
  '& .sidebar-nav-list': {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    marginTop: 20,
    padding: '0 4px 4px 4px',
    '& .sidebar-nav-item > a': {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 !important',
      fontSize: 13,
      '& .MuiListItemIcon-root': {
        minWidth: 'unset',
      },
      '& .MuiListItemText-root': {
        fontSize: 13,
        color: theme.custom.color.sidebarForeground,
      },
    },
  },
}));
