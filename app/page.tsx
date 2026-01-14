'use client';

import { useState } from 'react';
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
import TabPanel from '@/components/TabPanel';
import { AnimatePresence } from 'framer-motion';
import AnimatedTab from '@/components/AnimatedTab';
import UnderConstruction from '@/components/UnderConstruction';
import Projects from '@/components/pages/Projects';
import dynamic from 'next/dynamic';

const OptimizedParticlesBackground = dynamic(
  () => import('@/components/ParticlesBackground'),
  {
    loading: () => null,
  }
);

export default function Welcome() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <OuterContainer>
      <OptimizedParticlesBackground />
      <Container maxWidth='lg' disableGutters>
        <MainStage>
          <BookSpread>
            <PageLeft>
              <ProfileSideBar />
            </PageLeft>

            <SpineCenter />

            <PageRight>
              <Box className='content-container'>
                <TabNavigation handleChange={handleChange} value={value} />

                <AnimatePresence mode='wait'>
                  {value === 0 && (
                    <TabPanel value={value} index={value} key={`tab-${value}`}>
                      <AnimatedTab>
                        <AboutMe />
                      </AnimatedTab>
                    </TabPanel>
                  )}

                  {value === 1 && (
                    <TabPanel value={value} index={value} key={`tab-${value}`}>
                      <AnimatedTab>
                        <TechnicalProficiency />
                      </AnimatedTab>
                    </TabPanel>
                  )}

                  {value === 2 && (
                    <TabPanel value={value} index={value} key={`tab-${value}`}>
                      <AnimatedTab>
                        <Projects />
                      </AnimatedTab>
                    </TabPanel>
                  )}

                  {value === 3 && (
                    <TabPanel value={value} index={value} key={`tab-${value}`}>
                      <AnimatedTab>
                        <UnderConstruction />
                      </AnimatedTab>
                    </TabPanel>
                  )}
                </AnimatePresence>
              </Box>

              <FooterPageIndicator value={value} setValue={setValue} />
            </PageRight>
          </BookSpread>
        </MainStage>
      </Container>
    </OuterContainer>
  );
}
