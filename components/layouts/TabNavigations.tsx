import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import { NavTab, TopNav } from '@/styles/page.styles';
import { useTheme, useMediaQuery } from '@mui/material';
import { NavigationTabs } from '@/constants/navigation-tabs.constants';

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
        variant={'standard'}
        scrollButtons={isMobile ? 'auto' : false}
      >
        {NavigationTabs.map((tab, index) => (
          <NavTab
            key={index}
            label={tab.label}
            id={`tab-${index}`}
            aria-controls={`tabpanel-${index}`}
            aria-selected={value === index}
            role='tab'
            tabIndex={value === index ? 0 : -1}
          />
        ))}
      </Tabs>
    </TopNav>
  );
};

export default TabNavigations;
