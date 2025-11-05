export interface Experience {
  company: string;
  title: string;
  date: string;
  summary?: string;
  description: string[];
  logo?: string;
}

export const experience: Experience[] = [
  {
    company: 'FinTech Innovations Inc.',
    title: 'VP of Operations',
    date: '2020 - Present',
    summary: 'Leading operations strategy and execution for a high-growth FinTech platform serving enterprise clients. Responsible for all aspects of client delivery, platform operations, and team development.',
    description: [
      'Lead a team of 25+ operations professionals across client delivery, implementation, and support',
      'Scaled platform operations to support 300% growth in transaction volume',
      'Implemented automated workflows that reduced processing time by 60%',
      'Established key operational metrics and reporting frameworks',
    ],
    logo: '/logos/fintech-innovations.svg',
  },
  {
    company: 'PaymentTech Solutions',
    title: 'Director of Client Operations',
    date: '2017 - 2020',
    summary: 'Built and led the client operations function for a B2B payment platform. Focused on creating scalable processes and delivering exceptional client experiences during a period of rapid expansion.',
    description: [
      'Built and managed client operations team from ground up',
      'Designed onboarding and implementation processes for enterprise clients',
      'Achieved 98% client satisfaction rating',
      'Reduced client onboarding time from 90 days to 30 days',
    ],
    logo: '/logos/paymenttech.svg',
  },
  {
    company: 'Digital Banking Corp',
    title: 'Senior Operations Manager',
    date: '2014 - 2017',
    summary: 'Managed operations for a digital banking platform serving retail customers. Drove process improvements and coordinated cross-functional initiatives to enhance platform stability and customer experience.',
    description: [
      'Managed day-to-day operations for digital banking platform',
      'Led process improvement initiatives across multiple departments',
      'Coordinated cross-functional teams for product launches',
      'Developed operational playbooks and training materials',
    ],
    logo: '/logos/digital-banking.svg',
  },
  {
    company: 'StartupFinance',
    title: 'Operations Specialist',
    date: '2012 - 2014',
    summary: 'Early team member supporting all aspects of operations for an early-stage fintech startup. Wore multiple hats across client support, process development, and cross-functional collaboration.',
    description: [
      'Supported operations during rapid growth phase',
      'Managed client communications and issue resolution',
      'Created documentation and process workflows',
      'Collaborated with product and engineering teams',
    ],
    logo: '/logos/startup-finance.svg',
  },
];
