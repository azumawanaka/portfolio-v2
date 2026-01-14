'use client';

import { ChapterContent, ProjectsContainer } from '@/styles/page.styles';
import HeaderTitle from '../shared/HeaderTitle';
import UnderConstruction from '../UnderConstruction';
import { Project } from '@/types/project.types';
import ProjectCard from '../ProjectCard';
import { SelectedProjects } from '@/constants/projects.constants';

interface SelectedWorksProps {
  projects?: Project[];
}

const Projects: React.FC<SelectedWorksProps> = () => {
  return (
    <ChapterContent>
      <HeaderTitle title='Selected Works' page='03' />

      <ProjectsContainer>
        {SelectedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsContainer>
    </ChapterContent>
  );
};

export default Projects;
