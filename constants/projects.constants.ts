import { Project } from '@/types/project.types';

export const SelectedProjects: Project[] = [
  {
    id: 1,
    title: 'Vantage Analytics',
    description:
      'A comprehensive data visualization platform for e-commerce businesses to track real-time metrics and growth KPIs.',
    linkText: 'Live Demo',
    linkUrl: '#',
    imageUrl:
      'https://res.cloudinary.com/ddbxaguxc/image/upload/v1763687001/medium_proj3_3a57caa056.png',
    imageQuery: 'minimalist beige analytics dashboard UI design',
    imageAlt: 'Analytics Dashboard',
    technologies: ['React', 'D3.js', 'Node.js'],
  },
  {
    id: 2,
    title: 'Flow Task Manager',
    description:
      'Collaborative project management tool focused on remote teams with integrated chat and file sharing capabilities.',
    linkText: 'View Case Study',
    linkUrl: '#',
    imageUrl:
      'https://res.cloudinary.com/ddbxaguxc/image/upload/v1763687001/medium_proj3_3a57caa056.png',
    imageQuery: 'modern dark mode task management mobile app UI',
    imageAlt: 'Task App',
    technologies: ['Vue.js', 'Firebase', 'Tailwind'],
  },
  {
    id: 3,
    title: 'Botanica Shop',
    description:
      'An artisanal e-commerce experience for a boutique plant nursery featuring custom 3D model viewers.',
    linkText: 'Live Demo',
    linkUrl: '#',
    imageUrl:
      'https://res.cloudinary.com/ddbxaguxc/image/upload/v1763687001/medium_proj3_3a57caa056.png',
    imageQuery: 'botanical plant shop ecommerce website UI',
    imageAlt: 'Plant Shop',
    technologies: ['Next.js', 'Three.js', 'Shopify API'],
  },
];
