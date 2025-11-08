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
    title: 'Senior Vice President, Operations and Client Delivery',
    date: '2024 - Present',
    summary: 'Promoted to build and lead specialized customer success and implementation organization for alternative investment fintech platform. Own post-sale activation, onboarding, and platform adoption across Scaled, Commercial, and Enterprise segments, reducing time-to-value and driving spend ramp for wealth managers, advisors, and asset managers.',
    logo: '/icapital_logo.jpg',
    description: [
      'CS Organization Building: Built customer success organization from 3 to 25+ professionals within 12 months, establishing multi-layered leadership model with 5+ frontline and second-line managers. Created scalable frameworks for hiring, coaching managers and ICs, and career development that elevated team performance and increased retention.',
      'Activation & Platform Adoption: Own post-sale activation journey driving product adoption and time-to-value. Drive 500+ annual product onboardings across Scaled, Commercial, and Enterprise segments. Improved time-to-value by 75%, reducing product implementation timelines from 8 weeks to 2 weeks through systematic rollout redesign.',
      'Playbooks & Scalable Processes: Developed standardized onboarding playbooks, templates, and SOPs across customer segments. Created role-task matrices, coverage ratios, and documentation infrastructure that enabled consistent delivery quality while scaling capacity. Reduced employee ramp time by 75% (3 months to 4 weeks) through systematic training frameworks.',
      'GTM Partnership & Alignment: Partner closely with Sales on implementation handoffs and with Account Management on expansion signals throughout the GTM funnel. Collaborate with Product and CX to design workflows and feedback loops that drive adoption, retention, and expansion.',
      'Metrics & Performance Management: Instrument dashboards tracking activation effectiveness, spend ramp velocity, product adoption by feature, time-to-value, and team productivity. Use data to identify bottlenecks, optimize onboarding playbooks, and forecast key business outcomes. Report segment performance to senior leadership.',
      'Operational Excellence: Doubled annual implementation volume from 250 to 500+ while maintaining enterprise-grade delivery across complex regulatory and integration requirements. Drive consistent quality and outcomes across customer tiers.',
      'Culture & Team Excellence: Established high-performing culture and morale through transparent communication, regular enablement sessions, and clear performance frameworks. Drive continuous improvement mindset across 5+ managers and 25+ team members, resulting in industry-leading retention and employee satisfaction.',
    ],
  },
  {
    company: 'iCapital',
    title: 'Vice President, Platform Operations & Implementation',
    date: '2021 - 2023',
    summary: 'Led customer success and implementation operations across Commercial, Mid-Market, and Enterprise segments for 50+ person global delivery organization. Implemented comprehensive operating model with direct management responsibility for Mid-Market and SMB segment teams. Coordinated across Product, Engineering, and Sales to drive seamless onboarding and adoption.',
    logo: '/icapital_logo.jpg',
    description: [
      'Operating Model Implementation: Stepped into 50+ person global delivery team and implemented comprehensive operating model with direct management of Mid-Market and SMB segment operations. Achieved 60% efficiency improvement (394→629 annual production hours per employee) while increasing output 20% despite 25% workforce reduction in managed segment.',
      'Client Implementation Leadership: Led execution of 75+ white-label client implementations, each varying in scope and complexity. Timeline management ranging from 6 weeks to 12+ months for enterprise-level clients requiring multi-stakeholder coordination and complex system integrations. Achieved 50% time-to-value improvement for SMB/Mid-Market segment (3 months → 6 weeks).',
      'Manager Development & Team Building: Designed comprehensive training and onboarding strategy that facilitated a 100% increase in department headcount within 12 months while maintaining quality standards. Reduced new employee onboarding duration by 85%, from 3 months to 4 weeks, through systematic process development. Coached managers on performance management and enablement.',
      'Strategic Automation & Cost Optimization: Led a strategic automation initiative resulting in $500K annual cost savings by developing technology to reduce manual intervention through cross-departmental coordination with Product, Data, and Engineering teams.',
    ],
  },
  {
    company: 'DebtX',
    title: 'Director, Operations & Implementation',
    date: '2017 - 2021',
    summary: 'Led operations and implementation for the enterprise division of a fintech platform serving Fortune 100 clients, government agencies, and institutional investors in the secondary loan sale and distressed asset markets.',
    logo: '/debtx_logo.jpg',
    description: [
      'Scalable Framework Development: Built scalable framework, utilizing technology and partnerships, enabling billions in transactions in 4-6 week cycles nationwide. Exceeded industry standards by 60%.',
      'Enterprise Program Management: Managed end-to-end operations for enterprise asset portfolio transactions ranging from $75MM to $5B, including complex settlements, data analysis, and multi-party coordination, ensuring accurate processing and compliance.',
      'Operations Leadership: Delivered over $1B in client outcomes across 200+ implementation projects, managing 250,000 assets with $45B total portfolio value while maintaining operational excellence across diverse enterprise requirements.',
      'Cross-Functional Execution: Oversaw project execution with budgets ranging from $10K to $100K while generating revenue from $400K to $10MM+ per engagement through systematic coordination across legal, compliance, and technical teams.',
    ],
  },
];
