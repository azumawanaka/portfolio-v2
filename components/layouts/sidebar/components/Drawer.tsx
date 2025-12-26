'use client';

import { Box, List, ListItem, ListItemButton, Typography } from '@mui/material';
import { useState } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MAIN_NAVIGATION } from '@/config/site.config';
import Link from 'next/link';
import { SyledAside } from './style';
import SideBarLogo from './SideBarLogo';

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <SyledAside role='presentation' onClick={toggleDrawer(false)}>
      <SideBarLogo />
      <List className='sidebar-nav-list'>
        {MAIN_NAVIGATION.map((item) => (
          <ListItem key={item.href} disablePadding className='sidebar-nav-item'>
            <ListItemButton component={Link} href={item.href || '/'}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SyledAside>
  );
};

export default Drawer;
