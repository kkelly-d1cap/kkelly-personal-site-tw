import Container from './Container';

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-16 lg:py-24 border-t-2 border-light-gray">
      <Container>
        <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
          Experience
        </h2>
        <div className="space-y-8 max-w-4xl">
          {/* iCapital SVP */}
          <div className="pl-6">
            <div className="mb-4">
              <h3 className="font-heading font-bold text-2xl text-charcoal mb-2">
                Senior Vice President, Customer Success and Operations
              </h3>
              <p className="text-lg text-medium-gray">
                iCapital | 2024-2025
              </p>
            </div>
            <ul className="space-y-2 text-medium-gray">
              <li className="flex">
                <span className="text-orange mr-2">•</span>
                <span>Built multi-layer CS organization (3→25+; 5+ managers) within 12 months</span>
              </li>
              <li className="flex">
                <span className="text-orange mr-2">•</span>
                <span>Doubled annual implementation volume to 500+ with 75% time-to-value improvement</span>
              </li>
              <li className="flex">
                <span className="text-orange mr-2">•</span>
                <span>Prevented $20M+ ARR churn by rehabilitating top enterprise accounts</span>
              </li>
              <li className="flex">
                <span className="text-orange mr-2">•</span>
                <span>Established Sales-to-CS handoff protocols achieving 98% configuration readiness</span>
              </li>
              <li className="flex">
                <span className="text-orange mr-2">•</span>
                <span>Managed bifurcated operations: onboarding/activation + support (25K+ annual tickets)</span>
              </li>
            </ul>
          </div>

          {/* iCapital VP */}
          <div className="pl-6">
            <div className="mb-4">
              <h3 className="font-heading font-bold text-2xl text-charcoal mb-2">
                Vice President, Operations & Implementation
              </h3>
              <p className="text-lg text-medium-gray">
                iCapital | 2021-2023
              </p>
            </div>
            <ul className="space-y-2 text-medium-gray">
              <li className="flex">
                <span className="text-orange mr-2">•</span>
                <span>Led 75+ platform implementations spanning SMB to Enterprise (6 weeks to 12+ months)</span>
              </li>
              <li className="flex">
                <span className="text-orange mr-2">•</span>
                <span>Improved SMB/Mid-Market time-to-value 50% (3 months → 6 weeks)</span>
              </li>
              <li className="flex">
                <span className="text-orange mr-2">•</span>
                <span>Achieved 60% efficiency improvement while increasing output 20%</span>
              </li>
              <li className="flex">
                <span className="text-orange mr-2">•</span>
                <span>Designed comprehensive training strategy reducing new employee onboarding 85% (3 months → 4 weeks)</span>
              </li>
              <li className="flex">
                <span className="text-orange mr-2">•</span>
                <span>Led $500K automation initiative with Product, Data, and Engineering teams</span>
              </li>
            </ul>
          </div>

          {/* DebtX */}
          <div className="pl-6">
            <div className="mb-4">
              <h3 className="font-heading font-bold text-2xl text-charcoal mb-2">
                Director, Operations & Implementation
              </h3>
              <p className="text-lg text-medium-gray">
                DebtX | 2017-2021
              </p>
            </div>
            <ul className="space-y-2 text-medium-gray">
              <li className="flex">
                <span className="text-orange mr-2">•</span>
                <span>Delivered $1B+ in client outcomes across 200+ implementation projects</span>
              </li>
              <li className="flex">
                <span className="text-orange mr-2">•</span>
                <span>Built scalable framework enabling multi-billion-dollar transactions in 4-6 week cycles (60% faster than industry standard)</span>
              </li>
              <li className="flex">
                <span className="text-orange mr-2">•</span>
                <span>Managed enterprise programs ($75MM-$5B) with strict compliance and multi-stakeholder coordination</span>
              </li>
              <li className="flex">
                <span className="text-orange mr-2">•</span>
                <span>Led complex program for largest enterprise transaction in company history (30K assets, $5B, US Dept of HUD)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <a
            href="/KatieKelly_CV_2025.pdf"
            download
            className="inline-flex items-center gap-2 text-orange hover:text-orange/80 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Full CV
          </a>
        </div>
      </Container>
    </section>
  );
}
