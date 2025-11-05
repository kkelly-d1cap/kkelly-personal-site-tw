export interface Project {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    title: 'Platform Scaling Initiative',
    description: 'Led a comprehensive scaling project that increased platform capacity by 400% while maintaining 99.9% uptime. Implemented new infrastructure and operational processes to support rapid growth.',
    link: '#',
    tags: ['Operations', 'Scaling', 'Infrastructure'],
    image: '/projects/scaling.jpg',
  },
  {
    title: 'Client Onboarding Transformation',
    description: 'Redesigned the entire client onboarding experience, reducing time-to-value from 12 weeks to 3 weeks. Built automated workflows and self-service tools.',
    link: '#',
    tags: ['Process Improvement', 'Automation', 'Client Success'],
    image: '/projects/onboarding.jpg',
  },
  {
    title: 'Operations Dashboard System',
    description: 'Created a comprehensive operations dashboard that provides real-time visibility into key metrics, enabling data-driven decision making across the organization.',
    link: '#',
    tags: ['Analytics', 'Reporting', 'Data Visualization'],
    image: '/projects/dashboard.jpg',
  },
  {
    title: 'Team Building Framework',
    description: 'Developed a structured approach to building and scaling high-performing operations teams, including hiring processes, training programs, and career development paths.',
    link: '#',
    tags: ['Team Building', 'Leadership', 'Training'],
    image: '/projects/team.jpg',
  },
];
