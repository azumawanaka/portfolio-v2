'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@/lib/mui/theme';
import Sidebar from '@/components/layouts/sidebar';
import { LayoutWrapper } from './style';
import { usePathname } from 'next/navigation';
import { shouldShowSidebar } from '@/config/site.config';
import Header from '@/components/layouts/header';

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showSidebar = shouldShowSidebar(pathname);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutWrapper hasSidebar={showSidebar}>
          <Sidebar />
          <main>
            <Header />
            {children}
          </main>
        </LayoutWrapper>
      </ThemeProvider>
    </Provider>
  );
}
