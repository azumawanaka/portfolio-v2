'use client';

import { usePathname } from 'next/navigation';
import { shouldShowSidebar } from '@/config/site.config';
import Drawer from './components/Drawer';

const Sidebar = () => {
  const pathname = usePathname();

  if (!shouldShowSidebar(pathname)) return null;

  return <Drawer />;
};

export default Sidebar;
