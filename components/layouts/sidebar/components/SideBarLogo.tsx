'use client';

import { Box, Typography } from '@mui/material';

const SideBarLogo = () => {
  return (
    <Box className='sidebar-logo'>
      <Typography className='sidebar-logo-mark'>J</Typography>
      <Box className='sidebar-logo-text'>
        <Typography className='sidebar-logo-title'>JobFlow</Typography>
        <Typography className='sidebar-logo-subtitle'>
          End-to-end search
        </Typography>
      </Box>
    </Box>
  );
};

export default SideBarLogo;
