export interface Experience {
  company: string;
  title: string;
  date: string;
  description: string[];
  logo?: string;
}

export const experience: Experience[] = [
  {
    company: 'FinTech Innovations Inc.',
    title: 'VP of Operations',
    date: '2020 - Present',
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
    description: [
      'Supported operations during rapid growth phase',
      'Managed client communications and issue resolution',
      'Created documentation and process workflows',
      'Collaborated with product and engineering teams',
    ],
    logo: '/logos/startup-finance.svg',
  },
];
