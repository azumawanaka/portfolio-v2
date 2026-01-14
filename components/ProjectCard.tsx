import {
  ProjectDescription,
  ProjectDetails,
  ProjectEntry,
  ProjectHeader,
  ProjectLink,
  ProjectThumb,
  ProjectTitle,
  StyledArrowIcon,
  TechStack,
  TechTag,
} from '@/styles/page.styles';
import { Project } from '@/types/project.types';
import Image from 'next/image';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <ProjectEntry>
      <ProjectThumb>
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          fill
          style={{
            objectFit: 'cover',
            filter: 'sepia(20%)',
          }}
          sizes='120px'
          loading='eager'
          draggable={false}
          unoptimized
        />
      </ProjectThumb>
      <ProjectDetails>
        <ProjectHeader>
          <ProjectTitle variant='h3'>{project.title}</ProjectTitle>
          <ProjectLink href={project.linkUrl} data-media-type='banani-button'>
            {project.linkText}
            <StyledArrowIcon />
          </ProjectLink>
        </ProjectHeader>
        <ProjectDescription>{project.description}</ProjectDescription>
        <TechStack>
          {project.technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechStack>
      </ProjectDetails>
    </ProjectEntry>
  );
};

export default ProjectCard;
