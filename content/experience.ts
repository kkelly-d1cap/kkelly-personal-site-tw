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
    company: 'iCapital',
    title: 'Senior Vice President',
    date: '2024 - Present',
    summary: 'Lead specialized onboarding and implementation operations for an alternative investment fintech platform serving wealth managers, advisors, and asset managers. Own post-sale fund implementation and ongoing product onboarding, reducing time-to-value and driving platform adoption across complex investment structures for SMB and Enterprise segments.',
    description: [
      'Leadership & Organization Building: Built and scaled a client success organization from 8 to 20+ professionals within 8 months, establishing a multi-tiered leadership model with 10+ frontline managers. Created scalable frameworks for hiring, coaching, and career development that elevated team performance and increased manager retention across the organization.',
      'Platform Scalability: Built a legacy team of 8 into a dual-team structure of 20+ professionals within 8 months, establishing a multi-tiered leadership model that elevated performance, increased retention, and created a scalable foundation for enterprise delivery. Includes over 10 frontline managers, driving consistent quality and outcomes across 400+ annual onboardings.',
      'Operational Excellence: Doubled annual implementation volume from an average of 200 to 400 while resources were reduced by 50%, maintaining enterprise-grade delivery across complex regulatory and integration requirements.',
      'Client Management: Rehabilitated 3 of the firm\'s top 5 enterprise clients within 90 days by implementing systematic issue resolution frameworks and enhancing delivery transparency, preserving multimillion-dollar relationships and restoring long-term trust.',
      'Cross-Functional Collaboration: Continuously partner with Product, Sales, and CX to design workflows and feedback loops that strengthened adoption and expansion across accounts.',
      'Metrics & Reporting: Instrument dashboards to monitor activation effectiveness, track team productivity, and forecast key business outcomes. Report regularly on performance metrics to senior leadership.',
    ],
  },
  {
    company: 'iCapital',
    title: 'Senior Vice President',
    date: '2021 - 2023',
    summary: 'Led client success and implementation for enterprise clients, coordinating across Product, Engineering, and Sales to drive seamless onboarding and adoption. Developed scalable processes and performance frameworks that enabled consistent delivery and repeatable customer outcomes.',
    description: [
      'Operational Framework Development: Achieved 35% improvement in departmental efficiency through operational framework implementation, which reduced timelines from 8 to 12 weeks to 10 business days while cutting FTE requirements from 26 to 19 people, and increasing delivery output by 40%.',
      'Enterprise Implementation Leadership: Led successful execution of 50+ implementations, each varying in scope and client complexity. Timeline management ranging from 6 weeks to 12+ months for enterprise-level clients requiring multi-stakeholder coordination and complex system integrations.',
      'Scalable Team Building: Designed a comprehensive training and onboarding strategy that facilitated a 100% increase in department headcount within 12 months while maintaining quality standards. Reduced new employee onboarding duration by 85% from 3 months to 4 weeks through systematic process development.',
      'Strategic Automation & Cost Optimization: Led a strategic automation initiative resulting in $500K annual cost savings by developing technology to reduce manual intervention through cross-departmental coordination with product, data, and engineering teams.',
    ],
  },
  {
    company: 'DebtX',
    title: 'Director',
    date: '2017 - 2021',
    summary: 'Led operations and implementation for the enterprise division of a fintech platform serving Fortune 100 clients, government agencies, and institutional investors in the secondary loan sale and distressed asset markets.',
    description: [
      'Built scalable framework, utilizing tech and partnerships, enabling billions in transactions in 4-6 week cycles nationwide. Exceeded industry standards by 60%.',
      'Enterprise Program Management: Managed end-to-end operations for enterprise asset portfolio transactions ranging from $75MM to $5B, including complex settlements, data analysis, and multi-party coordination, ensuring accurate processing and compliance.',
      'Operations Leadership: Delivered over $1B in client outcomes across 200+ implementation projects, managing 250,000 assets with $45B total portfolio value while maintaining operational excellence across diverse enterprise requirements.',
      'Cross-Functional Execution: Oversaw project execution with budgets ranging from $10K to $100K while generating revenue from $400K to $10MM+ per engagement through systematic coordination across legal, compliance, and technical teams.',
    ],
  },
];
