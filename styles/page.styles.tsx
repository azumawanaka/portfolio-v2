import { styled, Box, Button, IconButton, Tab, keyframes } from '@mui/material';

export const OuterContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
  overflow: 'hidden',
}));

export const MainStage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  perspective: '2000px',
  padding: theme.spacing(2),

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1),
    height: 'auto',
    minHeight: '100vh',
    display: 'block',
    overflowY: 'auto',
  },
}));

export const BookSpread = styled(Box)(({ theme }) => ({
  width: 'var(--book-width, 1200px)',
  height: 'var(--book-height, 700px)',
  background: 'var(--card)',
  borderRadius: 'var(--radius-sm)',
  boxShadow:
    '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.02)',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',

  [theme.breakpoints.down('lg')]: {
    width: '95vw',
    height: 'auto',
    minHeight: '600px',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    flexDirection: 'column',
    minHeight: 'auto',
    height: 'auto',
    borderRadius: 'var(--radius-lg)',
    marginTop: theme.spacing(0),
  },

  [theme.breakpoints.down('sm')]: {
    borderRadius: 'var(--radius-md)',
  },
}));

export const PageLeft = styled(Box)(({ theme }) => ({
  width: '40%',
  background: 'var(--sidebar)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '64px 48px',
  borderRight: '1px solid var(--border)',
  position: 'relative',
  zIndex: 1,

  [theme.breakpoints.down('lg')]: {
    padding: '48px 32px',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '40px 24px',
    borderRight: 'none',
    borderBottom: '1px solid var(--border)',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '32px 16px',
    minHeight: '98dvh',
  },
}));

export const PageRight = styled(Box)(({ theme }) => ({
  width: '60%',
  background: 'var(--card)',
  display: 'flex',
  flexDirection: 'column',
  padding: '32px 34px',
  position: 'relative',
  zIndex: 1,

  [theme.breakpoints.down('lg')]: {
    padding: '48px 32px',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '40px 24px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: 0,
    minHeight: '98dvh',
  },

  '& .content-container': {
    minHeight: '540px',
  },
}));

export const SpineCenter = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '40%',
  top: 0,
  bottom: 0,
  width: '60px',
  transform: 'translateX(-50%)',
  background:
    'linear-gradient(to right, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 45%, rgba(0, 0, 0, 0.02) 50%, rgba(0, 0, 0, 0.05) 55%, rgba(0, 0, 0, 0) 100%)',
  pointerEvents: 'none',
  zIndex: 10,

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const ProfileCard = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
}));

export const AvatarLarge = styled(Box)(({ theme }) => ({
  width: '160px',
  height: '160px',
  borderRadius: '50%',
  margin: '0 auto 32px',
  border: '4px solid var(--card)',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',

  [theme.breakpoints.down('lg')]: {
    width: '140px',
    height: '140px',
    marginBottom: '24px',
  },

  [theme.breakpoints.down('sm')]: {
    width: '120px',
    height: '120px',
    marginBottom: '20px',
  },
}));

export const DevName = styled('h1')(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 800,
  color: 'var(--foreground)',
  marginBottom: '8px',
  letterSpacing: '-0.5px',

  [theme.breakpoints.down('lg')]: {
    fontSize: '24px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
}));

export const DevRole = styled('div')(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  color: 'var(--primary)',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '32px',

  [theme.breakpoints.down('lg')]: {
    fontSize: '13px',
    marginBottom: '24px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    marginBottom: '20px',
  },
}));

export const ContactMini = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBottom: '40px',
  width: '100%',

  [theme.breakpoints.down('lg')]: {
    gap: '12px',
    marginBottom: '32px',
  },

  [theme.breakpoints.down('sm')]: {
    gap: '10px',
    marginBottom: '24px',
  },
}));

export const ContactRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  color: 'var(--muted-foreground)',
  fontSize: '14px',

  [theme.breakpoints.down('lg')]: {
    fontSize: '13px',
    gap: '10px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    gap: '8px',
    flexWrap: 'wrap',
  },

  '& .contact-icon': {
    width: '16px',
    height: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      fontSize: '16px',
    },
  },
}));

export const DownloadButton = styled(Button)(({ theme }) => ({
  background: 'var(--foreground)',
  color: 'var(--primary)',
  border: 'none',
  padding: '14px 28px',
  borderRadius: '50px',
  fontWeight: 600,
  fontSize: '14px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'transform 0.2s',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    background: 'var(--foreground)',
  },

  [theme.breakpoints.down('lg')]: {
    padding: '12px 24px',
    fontSize: '13px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '10px 20px',
    fontSize: '12px',
    width: '100%',
    justifyContent: 'center',
  },

  '& .download-icon': {
    width: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& svg': {
      fontSize: '18px',
    },
  },
}));

export const TopNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  borderBottom: '1px solid var(--border)',
  paddingBottom: '1px',

  [theme.breakpoints.down('lg')]: {
    marginBottom: '32px',
  },

  [theme.breakpoints.down('md')]: {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    paddingBottom: '4px',
    marginBottom: '24px',
    WebkitOverflowScrolling: 'touch',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  [theme.breakpoints.down('sm')]: {
    gap: '4px',
    marginBottom: '20px',
    overflowX: 'auto',
  },
}));

export const NavTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  padding: '12px 20px',
  fontSize: '13px',
  fontWeight: 600,
  color: active ? 'var(--foreground)' : 'var(--muted-foreground)',
  cursor: 'pointer',
  borderBottom: `2px solid ${active ? 'var(--primary)' : 'transparent'}`,
  transition: 'all 0.2s',
  marginBottom: '-2px',
  '&:hover': {
    color: 'var(--foreground)',
  },

  [theme.breakpoints.down('lg')]: {
    padding: '10px 16px',
    fontSize: '12px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '8px 12px',
    fontSize: '11px',
    flexShrink: 0,
  },
}));

export const ChapterContent = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}));

export const SectionTitle = styled('h2')(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: '24px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',

  [theme.breakpoints.down('lg')]: {
    fontSize: '20px',
    marginBottom: '20px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
    marginBottom: '16px',
    gap: '8px',
  },
}));

export const TextBlock = styled(Box)(({ theme }) => ({
  fontSize: '15px',
  lineHeight: 1.7,
  color: 'var(--secondary-foreground)',
  marginBottom: '32px',

  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
    marginBottom: '24px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '13px',
    marginBottom: '20px',
    lineHeight: 1.6,
  },
}));

export const SkillsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '12px',
  marginTop: 'auto',

  [theme.breakpoints.down('lg')]: {
    gap: '10px',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: '8px',
  },
}));

export const SkillItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-sm)',
  fontSize: '12px',
  color: 'var(--secondary-foreground)',

  [theme.breakpoints.down('lg')]: {
    padding: '6px',
    fontSize: '11px',
    gap: '6px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '8px 10px',
  },
}));

export const PageIndicator = styled('footer')(({ theme }) => ({
  marginTop: '40px',
  paddingTop: '24px',
  borderTop: '1px solid var(--border)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.breakpoints.down('lg')]: {
    marginTop: '32px',
    paddingTop: '20px',
  },

  [theme.breakpoints.down('md')]: {
    marginTop: '24px',
    paddingTop: '16px',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'stretch',
  },
}));

export const PageNum = styled('span')(({ theme }) => ({
  fontFamily: 'monospace',
  color: 'var(--muted-foreground)',
  fontSize: '12px',

  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    fontSize: '11px',
  },
}));

export const NavArrows = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '16px',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));

export const ArrowButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'disabled',
})<{ active?: boolean }>(({ theme, active, disabled }) => ({
  color: 'var(--foreground)',
  opacity: disabled ? 0.3 : active ? 1 : 0.5,
  transition: 'opacity 0.2s',
  '&:hover': {
    opacity: disabled ? 0.3 : 1,
    backgroundColor: 'transparent',
  },

  [theme.breakpoints.down('sm')]: {
    width: '36px',
    height: '36px',
  },
}));

export const CategoryTitle = styled('div')(({ theme }) => ({
  fontSize: '14px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: 'var(--primary)',
  fontWeight: 700,
  marginBottom: '16px',
  borderBottom: '1px solid var(--muted)',
  paddingBottom: '8px',
}));

export const SkillsList = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '12px',
}));

export const SkillCard = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px 12px',
  background: 'var(--sidebar)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-sm)',
  fontSize: '13px',
  color: 'var(--secondary-foreground)',
  fontWeight: 500,
}));
