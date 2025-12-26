import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const LayoutWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'hasSidebar',
})<{ hasSidebar?: boolean }>(({ theme, hasSidebar }) => ({
  ...(hasSidebar && {
    display: 'flex',
    gap: 24,
    justifyContent: 'flex-start',
    padding: theme.spacing(2, 1),
  }),
}));
