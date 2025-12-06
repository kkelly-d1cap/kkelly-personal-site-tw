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
    title: 'Senior Vice President, Head of US Platform and Client Operations',
    date: '2024 - Present',
    summary: 'Promoted to architect and scale customer success operations for alternative investment fintech platform. Define strategic vision and organizational structure for post-sale activation and implementation. Own end-to-end customer journey across SMB, Mid-Market, and Enterprise segments, designing systems and processes that reduce time-to-value while enabling 2x growth in annual throughput.',
    logo: '/icapital_logo.jpg',
    description: [
      'CS Organization Building: Built a multi-layer customer success organization (3→25+; 5+ managers) within 12 months. Created scalable frameworks for hiring, coaching managers and ICs, and career development that elevated team performance and increased retention.',
      'Activation & Onboarding: Owned onboarding across SMB, Mid-Market, and Enterprise; delivered 500+ annual implementations with consistent time-to-value and quality. Cut time-to-value 75% (8w→2w) by standardizing playbooks, SOPs, role-task matrices, and coverage ratios; scaled onboarding with better systems.',
      'Operational Scale: Doubled annual product onboardings from 250 to 500+ while maintaining enterprise-grade delivery across complex regulatory and integration requirements.',
      'Support Operations & Client Experience: Oversee bifurcated support operations managing 25,000+ annual tickets across front-end platform issues and back-end data integrity. Built specialized teams with technical troubleshooting expertise and strong client communication protocols, maintaining SLAs while preserving client relationships during high-complexity incidents.',
      'GTM Partnership & Alignment: Standardized Presales to CS handoffs and day-0 checklists, driving 98% configuration readiness and reducing SLA by 40%. Partner with Sales and Account Management on pipeline insights, expansion signals, and customer feedback that inform company GTM strategy. Collaborate with Product to translate customer needs into roadmap priorities.',
      'Metrics & Performance Management: Built dashboards tracking implementation volume, time-to-value, team productivity, configuration readiness, and SLA performance. Use data to identify bottlenecks, optimize onboarding processes, and forecast capacity needs. Report operational performance and segment trends to senior leadership.',
      'Strategic Planning & Organizational Design: Define long-term roadmap for CS operations, including organizational structure, segment coverage models, and technology investments. Collaborate with executive leadership to align CS strategy with company growth objectives. Design bifurcated team structure (implementation vs. support) that enabled specialization and scale while maintaining quality standards.',
    ],
  },
  {
    company: 'iCapital',
    title: 'Vice President, Platform Operations & Implementation',
    date: '2021 - 2023',
    summary: 'Redesigned operations for 50+ person global implementation organization experiencing scaling challenges. Assessed organizational gaps, designed comprehensive operating model with clear segment ownership, and implemented efficiency framework across SMB, Mid-Market, and Enterprise segments. Took direct management responsibility for Mid-Market and SMB operations, partnering across Product, Engineering, and Sales to drive strategic improvements.',
    logo: '/icapital_logo.jpg',
    description: [
      'Operating Model Implementation: Stepped into 50+ person global implementation team and implemented comprehensive operating model with direct management of Mid-Market and SMB segment operations. Achieved 60% efficiency improvement (394→629 annual production hours per employee) while increasing output 20% despite 25% workforce reduction in managed segment.',
      'Client Implementation: Led 75+ platform implementations spanning 6 weeks to 12+ months; improved SMB and Mid-Market time-to-value 50% (3mo→6w) through scalable onboarding playbooks.',
      'Manager Development & Team Building: Designed comprehensive training and onboarding strategy that facilitated a 100% increase in department headcount within 12 months while maintaining quality standards. Reduced new employee onboarding duration by 85%, from 3 months to 4 weeks, through systematic process development. Coached managers on performance management and enablement.',
      'Strategic Automation: Led a strategic automation initiative resulting in $500K annual cost savings by developing technology to reduce manual intervention through cross-departmental coordination with Product, Data, and Engineering teams.',
    ],
  },
  {
    company: 'DebtX',
    title: 'Director, Operations & Implementation',
    date: '2017 - 2021',
    summary: 'Led operations and implementation for the enterprise division of a fintech platform serving Fortune 100 clients, government agencies, and institutional investors in the secondary loan sale and distressed asset markets.',
    logo: '/debtx_logo.jpg',
    description: [
      'Scalable Framework Development: Built a scalable execution framework enabling multi-billion-dollar transactions in 4–6-week cycles; outperformed industry standards by 60%.',
      'Enterprise Program Management: Ran end-to-end enterprise programs ($75MM–$5B) with strict compliance, coordinating legal, technical, and operational workstreams to ensure on-time onboarding.',
      'Operations Leadership: Delivered $1B+ client outcomes across 200+ implementations; managed 250,000 assets and $45B in portfolio value with measurable productivity and quality controls.',
      'Cross-Functional Execution: Governed budgets ($10K–$100K) and revenue ($400K–$10MM+), forecasting capacity and outcomes to inform GTM planning across legal, compliance, and technical teams.',
    ],
  },
];
