import styled from '@emotion/styled';
import { List } from '@mui/material';

export const AuthHighLightsStyle = styled(List)(({ theme }) => ({
  '& li': {
    alignItems: 'start',
    paddingLeft: 0,
    paddingRight: 0,
    color: theme.custom.color.secondaryForeground,
    '& span': {
      fontWeight: 500,
      color: theme.custom.color.foreground,
    },
    '& .MuiListItemIcon-root': {
      paddingTop: theme.spacing(1),
      minWidth: 35,
      '& > svg': {
        fill: theme.custom.color.primary,
      },
    },
  },
}));
