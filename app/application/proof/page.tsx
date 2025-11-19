import Container from '@/app/components/Container';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { isApplicationPageActive } from '@/content/applicationPages';

export default function ProofApplication() {
  // Check if this application page is still active
  if (!isApplicationPageActive('proof')) {
    redirect('/');
  }
  return (
    <>
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl">
            <div className="mb-8">
              <p className="text-lime text-sm font-medium mb-2">APPLICATION FOR</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                Senior Director CS & Professional Services
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300">
                Proof
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-8 pb-6 border-t border-gray-600">
              <div className="flex items-center gap-4 flex-1">
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
                  <p className="text-gray-400">Growth-Stage FinTech Leader</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/katherinemkelly/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-lime rounded-full transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a
                  href="/KatieKelly_CV_2025.pdf"
                  download
                  className="p-2 bg-white/10 hover:bg-lime rounded-full transition-colors"
                  aria-label="Download CV"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="p-2 bg-white/10 hover:bg-lime rounded-full transition-colors"
                  aria-label="Visit Full Personal Site"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Transition statement */}
            <p className="text-xl md:text-2xl text-orange font-handwritten leading-relaxed">
              Ready to build and scale Proof's customer success and professional services organizations with proven frameworks for driving retention, expansion, and customer value
            </p>
          </div>
        </Container>
      </section>

      {/* Why I'm the Right Fit */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
            Key Qualifications
          </h2>

          {/* Empathy Hook */}
          <div className="bg-lime/10 border-l-4 border-lime p-6 rounded-r-lg mb-12">
            <p className="text-lg text-charcoal leading-relaxed italic">
              For the past 15+ years, I've built and scaled post-sales organizations that blend Customer Success with implementation operations, essentially running embedded professional services at scale. At iCapital, I led 500+ complex platform implementations annually while building a 25-person CS organization, applying PS methodologies to drive efficiency, profitability, and customer outcomes. I see Proof as an opportunity to bring this exact playbook to a role designed for someone who understands both the art of customer success and the science of professional services delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                15+ Years Progressive CS & Professional Services Leadership
              </h3>
              <p className="text-medium-gray">
                Built and scaled customer success and implementation organizations in SaaS environments. At iCapital, built a 25+ person CS organization from scratch in 12 months and redesigned operations for a 50+ person global implementation team, delivering measurable efficiency gains while maintaining quality.
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                Proven Track Record Building High-Performing Teams
              </h3>
              <p className="text-medium-gray">
                Developed 5+ first-time managers with structured coaching frameworks. Hired and onboarded 25+ team members in 12 months using scalable hiring frameworks. Reduced new hire ramp time by 75% (from 3-6 months to 3-4 weeks) through documentation and training systems.
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                Customer Lifecycle Management Expertise
              </h3>
              <p className="text-medium-gray">
                Managed full customer journey from onboarding through adoption and renewal. Prevented $20M+ in ARR churn through proactive account management and value realization. Reduced implementation timelines 50% while doubling throughput across SMB, Mid-Market, and Enterprise segments.
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                Professional Services Delivery & Profitability
              </h3>
              <p className="text-medium-gray">
                Led successful delivery of 100+ white-label implementations and 500+ onboardings annually. Optimized resource allocation across client tiers with tier-specific coverage ratios. Achieved 60% efficiency improvement through process optimization and strategic resource management.
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                Cross-Functional Collaboration & Expansion
              </h3>
              <p className="text-medium-gray">
                Successfully partnered with Sales, Product, and Finance to drive strategic initiatives. Led cross-functional project that saved enterprise client $500K annually, preventing churn and creating expansion opportunity. Built feedback loops between CS and Product for roadmap influence.
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                Metrics-Driven & Data-Informed Decision Making
              </h3>
              <p className="text-medium-gray">
                Built comprehensive reporting infrastructure (Excel → Tableau) tracking efficiency, utilization, quality, and customer outcomes. Defined and tracked KPIs including NPS, CSAT, time-to-value, renewal rates, and team productivity metrics. Used data to drive strategic resource allocation and process improvements.
              </p>
            </div>
          </div>

          {/* Key Achievement Callout */}
          <div className="bg-orange/10 border-l-4 border-orange p-8 rounded-r-lg">
            <p className="text-2xl md:text-3xl font-handwritten text-charcoal mb-4">
              Scaled Operations 60% While Reducing Headcount 25%
            </p>
            <p className="text-medium-gray text-lg">
              Led SMB and Mid-Market client operations through hypergrowth, achieving +20% output increase while reducing headcount 25% through systematic process improvement, team restructuring, knowledge systems, smart resource allocation, and performance analytics.
            </p>
          </div>
        </Container>
      </section>

      {/* Key Strengths Deep Dive */}
      <section className="bg-light-gray py-16 lg:py-24">
        <Container>
          <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
            Proven Methodologies
          </h2>

          <div className="space-y-12">
            {/* Strategic Leadership */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl text-charcoal mb-4">
                Strategic Leadership: Building Frameworks That Scale
              </h3>
              <p className="text-medium-gray mb-6">
                At iCapital, I developed a comprehensive 5-part operational framework that became the organizational blueprint:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-light-gray p-4 rounded-lg">
                  <div className="text-orange font-bold mb-2">1. Process Mapping</div>
                  <p className="text-sm text-medium-gray">Applied 80/20 principle to focus on highest-impact deliverables</p>
                </div>
                <div className="bg-light-gray p-4 rounded-lg">
                  <div className="text-orange font-bold mb-2">2. Team Structure</div>
                  <p className="text-sm text-medium-gray">Created specialized roles with clear responsibilities</p>
                </div>
                <div className="bg-light-gray p-4 rounded-lg">
                  <div className="text-orange font-bold mb-2">3. Knowledge Systems</div>
                  <p className="text-sm text-medium-gray">Standardized training with videos, guides, checklists</p>
                </div>
                <div className="bg-light-gray p-4 rounded-lg">
                  <div className="text-orange font-bold mb-2">4. Resource Allocation</div>
                  <p className="text-sm text-medium-gray">Tiered clients by complexity for strategic matching</p>
                </div>
                <div className="bg-light-gray p-4 rounded-lg">
                  <div className="text-orange font-bold mb-2">5. Analytics</div>
                  <p className="text-sm text-medium-gray">Data-driven tracking for continuous improvement</p>
                </div>
              </div>
            </div>

            {/* Team Leadership */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl text-charcoal mb-4">
                Team Leadership & Development: Building Leaders, Not Just Teams
              </h3>
              <p className="text-medium-gray mb-6">
                I foster accountability and continuous improvement through structured development:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange mr-3 mt-1">✓</span>
                  <span className="text-medium-gray"><strong>Manager Development:</strong> Developed 5+ first-time managers with 1:1 frameworks and performance management systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-3 mt-1">✓</span>
                  <span className="text-medium-gray"><strong>Hiring Frameworks:</strong> Built role definitions and interview rubrics enabling 25+ hires in 12 months</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-3 mt-1">✓</span>
                  <span className="text-medium-gray"><strong>Performance Systems:</strong> Created OKRs, skills matrices, and career ladders aligning growth with needs</span>
                </li>
              </ul>
            </div>

            {/* Professional Services */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="font-heading font-bold text-2xl text-charcoal mb-4">
                Professional Services Excellence: Delivery, Profitability & Quality
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">100+</div>
                  <div className="text-sm text-medium-gray">White-label implementations annually</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">500+</div>
                  <div className="text-sm text-medium-gray">Client onboardings per year</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">60%</div>
                  <div className="text-sm text-medium-gray">Efficiency improvement</div>
                </div>
              </div>
              <p className="text-medium-gray">
                Managed resource allocation across Enterprise, Mid-Market, and SMB tiers with segment-specific delivery models ensuring both profitability and customer satisfaction. Built project management methodologies with clear success criteria and timeline expectations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Resources & Contact */}
      <section className="bg-white py-16 lg:py-24 border-t-2 border-orange">
        <Container>
          <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
            Resources & Contact
          </h2>

          <div className="bg-light-gray p-8 rounded-lg max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a
                href="/KatieKelly_CV_2025.pdf"
                download
                className="flex flex-col items-center gap-2 text-orange hover:text-orange/80 font-medium transition-colors text-center"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span className="text-sm">Download Full CV</span>
              </a>
              <a
                href="https://www.linkedin.com/in/katherinemkelly/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-orange hover:text-orange/80 font-medium transition-colors text-center"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                <span className="text-sm">LinkedIn Profile</span>
              </a>
              <a
                href="/"
                className="flex flex-col items-center gap-2 text-orange hover:text-orange/80 font-medium transition-colors text-center"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="text-sm">Full Personal Site</span>
              </a>
            </div>
          </div>

          {/* Thank You Note */}
          <div className="bg-charcoal text-white p-8 rounded-lg mt-12">
            <p className="text-xl md:text-2xl leading-relaxed">
              Thank you for considering my application. I'm excited about the opportunity to bring my experience building and scaling customer success and professional services organizations to Proof, helping drive retention, expansion, and exceptional customer outcomes.
            </p>
          </div>

          {/* Signature */}
          <div className="text-center text-charcoal font-handwritten mt-12">
            <p className="text-2xl">Thank you,</p>
            <p className="text-4xl md:text-5xl font-bold">Katie Kelly</p>
          </div>
        </Container>
      </section>
    </>
  );
}
