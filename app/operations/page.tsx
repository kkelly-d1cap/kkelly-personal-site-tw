import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import FindMe from '../components/FindMe';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Katie Kelly - Operations & Organizational Leadership',
  description: 'Building scalable operations for growth-stage B2B companies. Expert in organizational design, team building, and operational transformation.',
};

export default function OperationsLeadership() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-charcoal text-white py-20 lg:py-32">
          <Container>
            {/* Profile Section */}
            <div className="flex items-center gap-4 mb-12">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src="/website_photo.png"
                  alt="Katie Kelly"
                  width={64}
                  height={64}
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold">Katie Kelly</h2>
                <p className="text-gray-400 text-sm">Growth-Stage FinTech Leader</p>
              </div>
            </div>

            {/* Main Headline */}
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Building Operational Infrastructure for Growth-Stage B2B Companies
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl">
                Operations & Organizational Leader | Scaling Teams & Systems for Sustainable Growth
              </p>

              {/* Value Proposition with Orange Handwritten */}
              <p className="text-3xl md:text-4xl lg:text-5xl mb-12 font-handwritten text-orange">
                I build and scale operations that turn organizational chaos into competitive advantage
              </p>

              {/* Social Links - Neon Style */}
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/katherinemkelly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 md:p-3.5 bg-lime rounded-full hover:bg-lime/80 transition-all text-charcoal"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="/KatieKelly_CV_2025.pdf"
                  download
                  className="p-2.5 md:p-3.5 bg-lime rounded-full hover:bg-lime/80 transition-all text-charcoal"
                  aria-label="Download CV"
                >
                  <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* What I Build Section */}
        <section id="about" className="bg-white py-16 lg:py-24">
          <Container>
            <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
              What I Build
            </h2>
            <div className="max-w-4xl space-y-6 text-lg text-medium-gray leading-relaxed">
              <p>
                I specialize in the messy, high-stakes work of scaling client-facing operations in complex, regulated environments. My focus is organizational building and operational scale: taking teams from 3 to 25+, doubling throughput without proportional headcount increases, and creating the frameworks that make growth sustainable.
              </p>
              <p>
                Over the past decade in fintech and enterprise SaaS, I've built multi-layer operational organizations, redesigned operating models for 50+ person teams, and prevented $20M+ in business risk through systematic quality improvements and cross-functional alignment.
              </p>
              <div className="bg-light-gray p-6 rounded-lg mt-8">
                <h3 className="font-heading font-bold text-xl text-charcoal mb-4">Where I excel:</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-orange mr-3 mt-1">•</span>
                    <span><strong className="text-charcoal">Organizational design:</strong> Building multi-layer teams, developing managers, creating performance systems that scale</span>
                  </li>
                  <li className="flex">
                    <span className="text-orange mr-3 mt-1">•</span>
                    <span><strong className="text-charcoal">Operational transformation:</strong> Taking inherited dysfunction and implementing frameworks that deliver measurable results (60% efficiency gains, 75% time-to-value reduction)</span>
                  </li>
                  <li className="flex">
                    <span className="text-orange mr-3 mt-1">•</span>
                    <span><strong className="text-charcoal">Cross-functional leadership:</strong> Partnering across Sales, Product, Engineering, and Finance to build alignment and drive strategic outcomes</span>
                  </li>
                  <li className="flex">
                    <span className="text-orange mr-3 mt-1">•</span>
                    <span><strong className="text-charcoal">Change management:</strong> Navigating organizational politics and shifting dysfunctional narratives through data-driven problem-solving</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Operational Impact Section */}
        <section id="work" className="bg-light-gray py-16 lg:py-24">
          <Container>
            <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
              Operational Impact
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
                      Built Multi-Layer Operations Team
                    </h3>
                    <p className="text-orange font-bold text-sm mb-3">
                      3→25+ professionals in 12 months | 5+ managers developed
                    </p>
                    <p className="text-medium-gray">
                      Designed scalable hiring frameworks, manager development programs, and performance systems that enabled sustainable growth and retention.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-orange/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-charcoal mb-2">
                      Transformed 50+ Person Global Operations
                    </h3>
                    <p className="text-orange font-bold text-sm mb-3">
                      60% efficiency improvement | 20% output increase | 25% workforce reduction
                    </p>
                    <p className="text-medium-gray">
                      Implemented comprehensive operating model with segment-based coverage, role clarity, and systematic execution frameworks.
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
                      Prevented $20M+ in ARR Churn
                    </h3>
                    <p className="text-orange font-bold text-sm mb-3">
                      3 top-5 enterprise clients rehabilitated in 90 days
                    </p>
                    <p className="text-medium-gray">
                      Built systematic quality frameworks, cross-functional escalation protocols, and strategic account alignment that restored client trust and expansion velocity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-orange/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-charcoal mb-2">
                      Established Sales-to-Operations Protocols
                    </h3>
                    <p className="text-orange font-bold text-sm mb-3">
                      98% configuration readiness | 40% SLA reduction
                    </p>
                    <p className="text-medium-gray">
                      Created formal handoff processes requiring capacity validation and roadmap alignment before client commitments, eliminating operational chaos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <FindMe />
      </main>
      <Footer />
    </>
  );
}
