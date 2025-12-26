'use client';

import { Box, Typography } from '@mui/material';
import { StyledHeader } from './style';
import { usePathname } from 'next/navigation';
import { shouldShowHeader } from '@/config/site.config';
import {
  Search as SearchIcon,
  Brightness4 as MoonIcon,
  Brightness5 as SunIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material/';
import Image from 'next/image';
import SearchBar from './components/SearchBar';

const Header = () => {
  const pathname = usePathname();

  if (!shouldShowHeader(pathname)) return null;

  return (
    <StyledHeader>
      <Box className='header-center'>
        <Box className='header-search'>
          <SearchBar />
        </Box>
      </Box>
      <Box className='header-icon-btn'>
        <SunIcon />
      </Box>
      <Box className='header-icon-btn'>
        <NotificationsIcon />
      </Box>
      <Box className='header-avatar'>
        <Image
          src='https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg'
          alt='Avatar'
          fill
          sizes='100px'
        />
      </Box>
    </StyledHeader>
  );
};

export default Header;
