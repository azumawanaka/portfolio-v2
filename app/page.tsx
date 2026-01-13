'use client';

import { Box, Container } from '@mui/material';

export default function AuthPortal() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth='md' disableGutters>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam
        similique exercitationem excepturi saepe culpa et voluptate corporis
        nemo voluptas soluta, molestias labore laborum recusandae harum ullam
        quisquam, accusantium eum?
      </Container>
    </Box>
  );
}
