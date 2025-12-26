import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const LayoutWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'hasSidebar',
})<{ hasSidebar?: boolean }>(({ theme, hasSidebar }) => ({
  ...(hasSidebar && {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: 24,
    '& main': {
      flex: 1,
      padding: theme.spacing(4, 2),
    },
  }),
}));
