'use client';

import { Box } from '@mui/material';
import {
  SectionTitle,
  CategoryTitle,
  SkillsList,
  SkillCard,
  ChapterContent,
} from '@/styles/page.styles';

import ScienceIcon from '@mui/icons-material/Science';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TerminalIcon from '@mui/icons-material/Terminal';
import LayersIcon from '@mui/icons-material/Layers';
import GitHubIcon from '@mui/icons-material/GitHub';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import { ReactNode } from 'react';

interface StyledIconProps {
  children: ReactNode;
}

const StyledIcon = ({ children }: StyledIconProps) => (
  <Box
    sx={{
      fontSize: '16px',
      color: 'var(--muted-foreground)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24px',
      height: '24px',
    }}
  >
    {children}
  </Box>
);

const TechnicalProficiency = () => {
  const skillsData = [
    {
      category: 'Frontend Ecosystem',
      skills: [
        {
          icon: <ScienceIcon sx={{ fontSize: 16 }} />,
          name: 'React.js / Next.js',
        },
        { icon: <CodeIcon sx={{ fontSize: 16 }} />, name: 'TypeScript' },
        { icon: <PaletteIcon sx={{ fontSize: 16 }} />, name: 'Tailwind CSS' },
        { icon: <DashboardIcon sx={{ fontSize: 16 }} />, name: 'HTML5 / SCSS' },
      ],
    },
    {
      category: 'Backend & Database',
      skills: [
        {
          icon: <StorageIcon sx={{ fontSize: 16 }} />,
          name: 'Node.js / Express',
        },
        { icon: <DataObjectIcon sx={{ fontSize: 16 }} />, name: 'PostgreSQL' },
        { icon: <TerminalIcon sx={{ fontSize: 16 }} />, name: 'PHP / Laravel' },
        { icon: <LayersIcon sx={{ fontSize: 16 }} />, name: 'Redis' },
      ],
    },
    {
      category: 'Tools & Deployment',
      skills: [
        { icon: <GitHubIcon sx={{ fontSize: 16 }} />, name: 'Git / GitHub' },
        { icon: <DesktopWindowsIcon sx={{ fontSize: 16 }} />, name: 'Docker' },
      ],
    },
  ];

  return (
    <ChapterContent>
      <SectionTitle>
        <span style={{ color: 'var(--primary)' }}>02.</span> Technical
        Proficiency
      </SectionTitle>

      {skillsData.map((category, categoryIndex) => (
        <Box key={categoryIndex} mb={{ xs: 2, sm: 3 }}>
          <CategoryTitle>{category.category}</CategoryTitle>
          <SkillsList>
            {category.skills.map((skill, skillIndex) => (
              <SkillCard key={skillIndex}>
                <StyledIcon>{skill.icon}</StyledIcon>
                {skill.name}
              </SkillCard>
            ))}
          </SkillsList>
        </Box>
      ))}
    </ChapterContent>
  );
};

export default TechnicalProficiency;
