import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import { NavTab, TopNav } from '@/styles/page.styles';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

interface TabNavigationsProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const TabNavigations = (props: TabNavigationsProps) => {
  const { value, handleChange } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TopNav>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='basic tabs'
        variant={isMobile ? 'scrollable' : 'standard'}
        scrollButtons={isMobile ? 'auto' : false}
        allowScrollButtonsMobile
        sx={{
          minHeight: 48,
          '& .MuiTab-root': {
            minWidth: 'auto', // Allow tabs to shrink
            padding: isMobile ? '6px 12px' : '12px 16px',
            fontSize: isMobile ? '0.70rem' : '1rem',
          },
        }}
      >
        <NavTab label='About' aria-controls={`simple-tabpanel-0`} />
        <NavTab label='Skills' aria-controls={`simple-tabpanel-1`} />
        <NavTab label='Projects' aria-controls={`simple-tabpanel-2`} />
        <NavTab label='Contact' aria-controls={`simple-tabpanel-3`} />
      </Tabs>
    </TopNav>
  );
};

export default TabNavigations;
