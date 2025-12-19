'use client';

import { useCallback, useState } from 'react';

import { Box, Container, Tab, Tabs } from '@mui/material';
import Grid from '@mui/material/Grid';

import { AuthShell, Item } from './auth-portal';
import {
  AuthHeader,
  AuthHighLights,
  AuthMetrics,
  AuthHeroText,
  AuthFooterNote,
  LoginCard,
  SignupCard,
} from '@/components/auth-portal';

export default function AuthPortal() {
  const [authTabValue, setAuthTabValue] = useState(0);

  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setAuthTabValue(newValue);
    },
    []
  );

  const toggleTab = useCallback(() => {
    setAuthTabValue((prev) => (prev === 0 ? 1 : 0));
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        p: 2,
      }}
    >
      <Container maxWidth='md' disableGutters>
        <AuthShell>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Item>
                <Box className='auth-hero-section'>
                  <AuthHeader />
                  <AuthHeroText />
                  <AuthHighLights />
                  <AuthMetrics />
                </Box>
                <AuthFooterNote />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Item>
                <Tabs
                  value={authTabValue}
                  onChange={handleChange}
                  className='auth-tabs'
                >
                  <Tab label='Log in' />
                  <Tab label='Sign up' />
                </Tabs>

                {authTabValue === 0 && (
                  <LoginCard setAuthTabValue={toggleTab} />
                )}
                {authTabValue === 1 && (
                  <SignupCard setAuthTabValue={toggleTab} />
                )}
              </Item>
            </Grid>
          </Grid>
        </AuthShell>
      </Container>
    </Box>
  );
}
