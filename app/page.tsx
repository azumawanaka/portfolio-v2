'use client';

import { Box, Container } from '@mui/material';

import {
  MainStage,
  BookSpread,
  PageLeft,
  PageRight,
  SpineCenter,
  OuterContainer,
} from '@/styles/page.styles';
import AboutMe from '@/components/pages/AboutMe';
import TabNavigation from '@/components/layouts/TabNavigations';
import FooterPageIndicator from '@/components/layouts/FooterPageIndicator';
import ProfileSideBar from '@/components/layouts/ProfileSideBar';
import TechnicalProficiency from '@/components/pages/Skills';
import { useState } from 'react';
import TabPanel from '@/components/TabPanel';

export default function Welcome() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <OuterContainer>
      <Container maxWidth='lg' disableGutters>
        <MainStage>
          <BookSpread>
            <PageLeft>
              <ProfileSideBar />
            </PageLeft>

            {/* Middle Spine */}
            <SpineCenter />

            {/* Right Page: Content */}
            <PageRight>
              <Box className='content-container'>
                <TabNavigation handleChange={handleChange} value={value} />
                <TabPanel value={value} index={0}>
                  <AboutMe />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <TechnicalProficiency />
                </TabPanel>
              </Box>

              <FooterPageIndicator value={value} setValue={setValue} />
            </PageRight>
          </BookSpread>
        </MainStage>
      </Container>
    </OuterContainer>
  );
}
