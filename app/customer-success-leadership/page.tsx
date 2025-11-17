import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Katie Kelly - Customer Success Leadership',
  description: 'Scaling Customer Success operations for fintech and SaaS platforms. Expert in onboarding, activation, retention, and expansion.',
};

export default function CustomerSuccessLeadership() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-charcoal text-white py-20 lg:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Scaling Customer Success Operations That Drive Retention & Expansion
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-4">
                  Customer Success & Implementation Leader | Growth-Stage Fintech & SaaS
                </p>
                <p className="text-lg md:text-xl text-lime font-handwritten leading-relaxed mb-8">
                  I build Customer Success organizations that accelerate activation, drive adoption, and turn expansion into a repeatable operational system—not just a Sales hope.
                </p>
                <a
                  href="/KatieKelly_CV_2025.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-orange hover:bg-orange/90 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download CS-Focused Resume
                </a>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <Image
                    src="/website_photo.png"
                    alt="Katie Kelly"
                    width={320}
                    height={320}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* How I Build CS Organizations Section */}
        <section id="about" className="bg-white py-16 lg:py-24">
          <Container>
            <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
              How I Build CS Organizations
            </h2>
            <div className="max-w-4xl space-y-6 text-lg text-medium-gray leading-relaxed">
              <p>
                I build Customer Success organizations that drive retention, expansion, and client outcomes for growth-stage fintech and SaaS platforms.
              </p>
              <p>
                Over the past decade, I've specialized in scaling the post-sale client journey—from activation through expansion—in complex, regulated environments where operational excellence isn't optional. My approach combines systematic process design with people-first leadership to build teams that deliver enterprise-grade quality at scale.
              </p>
              <div className="bg-orange/10 border-l-4 border-orange p-6 rounded-r-lg">
                <h3 className="font-heading font-bold text-xl text-charcoal mb-4">Recent CS impact:</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="text-orange mr-2">•</span>
                    <span>Built CS organization from 3 to 25+ professionals (5+ managers) in 12 months</span>
                  </li>
                  <li className="flex">
                    <span className="text-orange mr-2">•</span>
                    <span>Saved $30M+ in at-risk ARR by rehabilitating enterprise clients</span>
                  </li>
                  <li className="flex">
                    <span className="text-orange mr-2">•</span>
                    <span>Doubled implementation throughput to 500+ annually while reducing time-to-value 75%</span>
                  </li>
                  <li className="flex">
                    <span className="text-orange mr-2">•</span>
                    <span>Led cross-functional automation delivering $500K+ in annual cost savings</span>
                  </li>
                </ul>
              </div>
              <div className="bg-light-gray p-6 rounded-lg mt-8">
                <h3 className="font-heading font-bold text-xl text-charcoal mb-4">Where I make the biggest impact:</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-lime mr-3 mt-1">•</span>
                    <span><strong className="text-charcoal">CS org building:</strong> Creating multi-layer teams with scalable hiring, manager development, and performance frameworks</span>
                  </li>
                  <li className="flex">
                    <span className="text-lime mr-3 mt-1">•</span>
                    <span><strong className="text-charcoal">Activation & onboarding:</strong> Building systems that accelerate time-to-value while maintaining quality</span>
                  </li>
                  <li className="flex">
                    <span className="text-lime mr-3 mt-1">•</span>
                    <span><strong className="text-charcoal">Retention operations:</strong> Diagnosing systemic issues and implementing frameworks that prevent churn</span>
                  </li>
                  <li className="flex">
                    <span className="text-lime mr-3 mt-1">•</span>
                    <span><strong className="text-charcoal">GTM alignment:</strong> Establishing Sales-to-CS handoffs and Product partnerships that drive strategic outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Customer Success Impact Section */}
        <section id="work" className="bg-light-gray py-16 lg:py-24">
          <Container>
            <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
              Customer Success Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-orange/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-charcoal mb-2">
                      Built CS Org from 3 to 25+ in 12 Months
                    </h3>
                    <p className="text-orange font-bold text-sm mb-3">
                      5+ managers developed | 100% increase in team capability
                    </p>
                    <p className="text-medium-gray">
                      Established multi-layer CS team with scalable frameworks for hiring, manager coaching, and performance management that elevated retention and outcomes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-lime/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-lime" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-charcoal mb-2">
                      Reduced Time-to-Value 75%
                    </h3>
                    <p className="text-lime font-bold text-sm mb-3">
                      8 weeks → 2 weeks for SMB/Mid-Market | 500+ annual implementations
                    </p>
                    <p className="text-medium-gray">
                      Built standardized playbooks, intake forms, and execution frameworks that accelerated client expansion cycles and revenue recognition.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-orange/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-charcoal mb-2">
                      Saved $30M+ in At-Risk ARR
                    </h3>
                    <p className="text-orange font-bold text-sm mb-3">
                      3 top-5 enterprise clients rehabilitated in 90 days
                    </p>
                    <p className="text-medium-gray">
                      Implemented systematic quality frameworks, escalation protocols, and strategic account alignment that prevented churn and accelerated expansion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-lime/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-lime" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-charcoal mb-2">
                      Built High-Velocity Expansion Model
                    </h3>
                    <p className="text-lime font-bold text-sm mb-3">
                      Doubled throughput from 250 to 500+ annual onboardings
                    </p>
                    <p className="text-medium-gray">
                      Created scalable onboarding engine processing existing client expansions with measurable adoption maturity curves (cleaner intake, faster execution with each fund added).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CS Experience Highlights Section */}
        <section id="experience" className="bg-white py-16 lg:py-24">
          <Container>
            <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
              Customer Success Experience
            </h2>
            <div className="space-y-8 max-w-4xl">
              {/* iCapital SVP */}
              <div className="border-l-4 border-orange pl-6">
                <div className="mb-4">
                  <h3 className="font-heading font-bold text-2xl text-charcoal mb-2">
                    Senior Vice President, Customer Success Operations
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
                    <span>Prevented $30M+ ARR churn by rehabilitating top enterprise accounts</span>
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
              <div className="border-l-4 border-lime pl-6">
                <div className="mb-4">
                  <h3 className="font-heading font-bold text-2xl text-charcoal mb-2">
                    Vice President, Platform Operations & Implementation
                  </h3>
                  <p className="text-lg text-medium-gray">
                    iCapital | 2021-2023
                  </p>
                </div>
                <ul className="space-y-2 text-medium-gray">
                  <li className="flex">
                    <span className="text-lime mr-2">•</span>
                    <span>Led 75+ platform implementations spanning SMB to Enterprise (6 weeks to 12+ months)</span>
                  </li>
                  <li className="flex">
                    <span className="text-lime mr-2">•</span>
                    <span>Improved SMB/Mid-Market time-to-value 50% (3 months → 6 weeks)</span>
                  </li>
                  <li className="flex">
                    <span className="text-lime mr-2">•</span>
                    <span>Achieved 60% efficiency improvement while increasing output 20%</span>
                  </li>
                  <li className="flex">
                    <span className="text-lime mr-2">•</span>
                    <span>Designed comprehensive training strategy reducing new employee onboarding 85% (3 months → 4 weeks)</span>
                  </li>
                  <li className="flex">
                    <span className="text-lime mr-2">•</span>
                    <span>Led $500K automation initiative with Product, Data, and Engineering teams</span>
                  </li>
                </ul>
              </div>

              {/* DebtX */}
              <div className="border-l-4 border-orange pl-6">
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

        {/* What I'm Looking For Section */}
        <section id="contact" className="bg-light-gray py-16 lg:py-24">
          <Container>
            <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
              What I'm Looking For in My Next Role
            </h2>
            <div className="max-w-4xl space-y-6">
              <p className="text-lg text-medium-gray leading-relaxed">
                I'm currently exploring <strong className="text-charcoal">Head of Customer Success, VP Customer Success, or VP Customer Operations</strong> roles at growth-stage B2B SaaS companies (50-200 employees) where CS is viewed as a strategic growth engine, not a cost center.
              </p>

              <div className="bg-lime/10 border-l-4 border-lime p-6 rounded-r-lg">
                <h3 className="font-heading font-bold text-xl text-charcoal mb-4">Ideal fit:</h3>
                <ul className="space-y-3 text-medium-gray">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-lime mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Companies experiencing onboarding bottlenecks that slow expansion revenue</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-lime mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Organizations building or scaling CS from reactive to proactive</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-lime mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Teams that value GTM alignment and cross-functional partnership</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-lime mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Leadership that properly resources CS and treats it as strategic</span>
                  </li>
                </ul>
              </div>

              <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="font-heading font-bold text-xl text-charcoal mb-4">Where I add most value:</h3>
                <ul className="space-y-2 text-medium-gray">
                  <li className="flex">
                    <span className="text-orange mr-2">•</span>
                    <span>Scaling onboarding operations that need to 2-3x without proportional headcount increases</span>
                  </li>
                  <li className="flex">
                    <span className="text-orange mr-2">•</span>
                    <span>Building CS organizational infrastructure (team structure, manager development, performance systems)</span>
                  </li>
                  <li className="flex">
                    <span className="text-orange mr-2">•</span>
                    <span>Preventing churn through systematic quality improvements and client health frameworks</span>
                  </li>
                  <li className="flex">
                    <span className="text-orange mr-2">•</span>
                    <span>Establishing GTM alignment between Sales, Product, and CS</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange/10 border-l-4 border-orange p-6 rounded-r-lg">
                <p className="text-medium-gray italic">
                  <strong className="text-charcoal not-italic">Particularly interested in:</strong> Fintech, vertical SaaS, or B2B platforms serving regulated industries.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="mailto:katiemkelly6@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange/90 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/katherinemkelly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-charcoal/90 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
