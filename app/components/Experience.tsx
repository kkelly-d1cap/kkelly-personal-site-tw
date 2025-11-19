import Container from './Container';
import Image from 'next/image';

export default function Experience() {
  return (
    <section id="experience" className="bg-light-gray py-16 lg:py-24 border-b-2 border-orange">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <h2 className="font-handwritten text-4xl md:text-5xl text-charcoal mb-6 lg:mb-0">
            Experience
          </h2>
          <a
            href="/KatieKelly_CV_2025.pdf"
            download
            className="bg-lime text-charcoal font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download CV
          </a>
        </div>

        {/* Key Achievements */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="font-heading text-2xl font-bold text-charcoal mb-6">Key Achievements</h3>

          <div className="space-y-6">
            {/* Organizational Leadership & Scale */}
            <div>
              <h4 className="font-heading text-lg font-bold text-orange mb-3">Organizational Leadership & Scale</h4>
              <ul className="space-y-2">
                <li className="text-medium-gray flex">
                  <span className="text-orange mr-2">•</span>
                  <span>Built and led customer success organization from 3 to 25+ professionals (5+ managers) in 12 months following promotion, establishing multiple layers of management and clear performance frameworks.</span>
                </li>
                <li className="text-medium-gray flex">
                  <span className="text-orange mr-2">•</span>
                  <span>Redesigned operating model and organizational structure for 50+ person global implementation organization, introducing segment-based coverage model and systematic efficiency framework. Direct management of Mid-Market and SMB segments achieved 60% productivity improvement while increasing output 20% despite 25% workforce reduction, proving the model's scalability.</span>
                </li>
                <li className="text-medium-gray flex">
                  <span className="text-orange mr-2">•</span>
                  <span>Built scalable delivery model that doubled annual onboarding and implementation throughput from 250 to 500+, enabling company growth while maintaining enterprise-grade quality standards and client satisfaction across segments.</span>
                </li>
              </ul>
            </div>

            {/* Customer Success & GTM Impact */}
            <div>
              <h4 className="font-heading text-lg font-bold text-orange mb-3">Customer Success & GTM Impact</h4>
              <ul className="space-y-2">
                <li className="text-medium-gray flex">
                  <span className="text-orange mr-2">•</span>
                  <span>Led 75+ SaaS and platform implementations in regulated financial environments, managing complex compliance requirements, integration challenges, and multi-party stakeholder coordination to achieve 95%+ on-time delivery.</span>
                </li>
                <li className="text-medium-gray flex">
                  <span className="text-orange mr-2">•</span>
                  <span>Improved time-to-value by 50%, reducing implementation timelines from 3 months to 6 weeks for SMB and Mid-Market clients, accelerating revenue recognition and enabling faster expansion into high-volume segments.</span>
                </li>
                <li className="text-medium-gray flex">
                  <span className="text-orange mr-2">•</span>
                  <span>Led cross-functional automation initiative with Product, Sales, and Finance to eliminate manual fund administration processes, delivering $500K+ in annual cost savings while improving client retention and competitive positioning.</span>
                </li>
              </ul>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="bg-light-gray p-4 rounded-lg text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange mb-1">3→25+</div>
                <div className="text-xs md:text-sm text-medium-gray">Team Growth in 12 Months</div>
              </div>
              <div className="bg-light-gray p-4 rounded-lg text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange mb-1">+60%</div>
                <div className="text-xs md:text-sm text-medium-gray">Efficiency Improvement</div>
              </div>
              <div className="bg-light-gray p-4 rounded-lg text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange mb-1">2x</div>
                <div className="text-xs md:text-sm text-medium-gray">Throughput Growth</div>
              </div>
              <div className="bg-light-gray p-4 rounded-lg text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange mb-1">$500K+</div>
                <div className="text-xs md:text-sm text-medium-gray">Annual Cost Savings</div>
              </div>
            </div>
          </div>
        </div>

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

        {/* Education Highlights */}
        <div className="flex justify-center items-center gap-12 md:gap-20 mt-12 pt-8">
          {[
            { logo: '/NESL-150x150.jpg', alt: 'New England School of Law' },
            { logo: '/PC2-150x150.jpg', alt: 'Providence College' },
            { logo: '/bbo-150x150.png', alt: 'Commonwealth of Massachusetts Bar' },
            { logo: '/friar-150x150.png', alt: 'Providence Field Hockey' },
          ].map((item, index) => (
            <div
              key={index}
              className="relative w-9 h-9 md:w-11 md:h-11 bg-white rounded-sm p-1"
              style={{ opacity: 0.4 }}
            >
              <Image
                src={item.logo}
                alt={item.alt}
                width={44}
                height={44}
                className="object-contain grayscale mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
