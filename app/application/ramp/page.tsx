import Container from '@/app/components/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function RampApplication() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-charcoal text-white py-20 lg:py-32">
        <Container>
          <div className="max-w-4xl">
            {/* Back to main site */}
            <Link
              href="/"
              className="bg-gray-600 text-gray-300 font-medium px-4 py-2 rounded-full inline-flex items-center gap-2 mb-8 transition-all hover:bg-gray-500"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              View Full Site
            </Link>

            <div className="mb-8">
              <p className="text-lime text-sm font-medium mb-2">APPLICATION FOR</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                Head of Customer Success
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300">
                Activation & Onboarding | Ramp
              </p>
            </div>

            <div className="flex items-center gap-4 pt-8 pb-6 border-t border-gray-600">
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
              <div className="flex-1">
                <h2 className="text-xl font-heading font-bold">Katie Kelly</h2>
                <p className="text-gray-400">FinTech Operations Leader</p>
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
              </div>
            </div>

            {/* Transition statement */}
            <p className="text-xl md:text-2xl text-orange font-handwritten leading-relaxed">
              Ready to lead Ramp's ~75-person customer success organization and drive industry-leading performance
            </p>
          </div>
        </Container>
      </section>

      {/* Why We Are the Right Fit */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
            Why We Are the Right Fit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                Built & Scaled High-Performing Teams
              </h3>
              <p className="text-medium-gray">
                Grew a customer success organization from ground up to 25+ professionals with 2 management layers, establishing frameworks for hiring, training, and client delivery that scale.
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                Proven Activation & Onboarding Expertise
              </h3>
              <p className="text-medium-gray">
                Reduced client implementation timelines from 6 weeks to 10 days while doubling output and maintaining headcount. Created 5-part operational framework focused on speed, quality, and repeatability at scale.
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                Multi-Segment Experience
              </h3>
              <p className="text-medium-gray">
                Successfully scaled operations across hundreds of Enterprise, Mid-Market, and SMB clients with tier-specific playbooks, coverage ratios, and SLAs ensuring quality at every level.
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                FinTech Background
              </h3>
              <p className="text-medium-gray">
                Deep experience at iCapital (alternative investment fintech platform) serving wealth managers, advisors, and asset managers - understand the complexities of financial services operations.
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                Cross-Functional Collaboration
              </h3>
              <p className="text-medium-gray">
                Partner effectively with Sales, Product, and Finance. Led initiative that saved enterprise client $500K annually through product automation and cross-team coordination.
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                Metrics-Driven Leader
              </h3>
              <p className="text-medium-gray">
                Achieved 60% efficiency improvement through data-driven decision making. Built reporting infrastructure (Excel → Tableau) that provided real-time visibility into activation, adoption, and team performance.
              </p>
            </div>
          </div>

          {/* Key Achievement Callout */}
          <div className="bg-orange/10 border-l-4 border-orange p-8 rounded-r-lg">
            <p className="text-2xl md:text-3xl font-handwritten text-charcoal mb-4">
              Scaled Operations by 60%: More Output with Fewer Resources
            </p>
            <p className="text-medium-gray text-lg">
              Led SMB and Mid-Market client operations through hypergrowth, achieving +20% output increase while reducing headcount 25% through systematic process improvement, team restructuring, and data-driven resource allocation.
            </p>
          </div>
        </Container>
      </section>

      {/* Application Questions */}
      <section className="bg-light-gray py-16 lg:py-24">
        <Container>
          <h2 className="font-handwriting text-4xl md:text-5xl mb-12 text-charcoal">
            Application Questions
          </h2>

          {/* Question 1 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-heading font-bold text-charcoal mb-4">
              1. Walk us through the structure of the Customer Success or Implementation organization you led most recently.
            </h3>
            <p className="text-medium-gray mb-6 italic">
              What customer segments did your teams support? How many people and management layers did you oversee? What were the key challenges you faced as the organization scaled, and how did you address them?
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-bold text-charcoal mb-3">Organization Structure</h4>
                <p className="text-medium-gray leading-relaxed mb-4">
                  As SVP Client & Platform Operations at iCapital, I built and led a 25+ person organization with two management layers from the ground up, structured around specialized teams. I specifically scaled operations for SMB and Mid-Market clients by 60%: More Output with Fewer Resources.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-charcoal mb-3">Client Segments We Supported</h4>
                <ul className="space-y-2">
                  <li className="text-medium-gray flex">
                    <span className="text-orange mr-2">•</span>
                    <span><strong>Enterprise:</strong> High-complexity clients requiring bespoke implementations and dedicated account management</span>
                  </li>
                  <li className="text-medium-gray flex">
                    <span className="text-orange mr-2">•</span>
                    <span><strong>Mid-Market:</strong> Clients needing customized onboarding with tailored support</span>
                  </li>
                  <li className="text-medium-gray flex">
                    <span className="text-orange mr-2">•</span>
                    <span><strong>SMB:</strong> High-volume segment requiring efficient, standardized processes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-bold text-charcoal mb-3">Team Structure & Management Layers</h4>
                <p className="text-medium-gray leading-relaxed mb-4">
                  I organized the division into three specialized functions to eliminate the inefficiencies of commingled roles:
                </p>
                <ul className="space-y-3">
                  <li className="text-medium-gray">
                    <span className="font-bold text-charcoal">1. Implementation Team</span> (Managers + Associates): Focused exclusively on client rollout, platform configuration, and onboarding - handling 50+ white label implementations annually
                  </li>
                  <li className="text-medium-gray">
                    <span className="font-bold text-charcoal">2. Operations Team</span> (Managers + Associates/Fund Launch Managers): Managed recurring business activities and onboarding (500+ annually), ensuring consistent delivery and client alignment
                  </li>
                  <li className="text-medium-gray">
                    <span className="font-bold text-charcoal">3. Support Team</span> (Front-end/Back-end Managers + Associates): Bifurcated support handling 20,000+ annual tickets, with front-end managing platform issues and back-end handling data integrity
                  </li>
                </ul>
                <p className="text-medium-gray leading-relaxed mt-4">
                  This created 2-3 management layers depending on client tier, with clear coverage ratios.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-charcoal mb-3">Key Scaling Challenges & Solutions</h4>

                <div className="space-y-4">
                  <div className="border-l-4 border-lime pl-4">
                    <p className="font-bold text-charcoal mb-2">Challenge 1: Doing More with Less During Hypergrowth</p>
                    <p className="text-medium-gray mb-2">
                      While I had dotted-line oversight of a Mid-Market/SMB segment earlier in my tenure, that team faced a 25% workforce reduction while output demands increased 20%.
                    </p>
                    <p className="text-medium-gray">
                      <span className="font-bold text-charcoal">Solution:</span> I developed and implemented a 5-Part Operational Framework that improved efficiency by 60% (productivity per employee from 400 to 600 hours annually). This framework became the blueprint for scaling the broader organization.
                    </p>
                  </div>

                  <div className="border-l-4 border-lime pl-4">
                    <p className="font-bold text-charcoal mb-2">Challenge 2: Inconsistent Service Quality Across Tiers</p>
                    <p className="text-medium-gray mb-2">
                      Risk of enterprise clients receiving SMB-level service or vice versa.
                    </p>
                    <p className="text-medium-gray">
                      <span className="font-bold text-charcoal">Solution:</span> Built rigorous client segmentation with tier-specific playbooks, coverage ratios, and SLAs. Created role-task matrices ensuring each deliverable had clear owners and time allocations.
                    </p>
                  </div>

                  <div className="border-l-4 border-lime pl-4">
                    <p className="font-bold text-charcoal mb-2">Challenge 3: Knowledge Silos & Training Inefficiency</p>
                    <p className="text-medium-gray mb-2">
                      Traditional 3-6 month ramp time was unsustainable during rapid growth.
                    </p>
                    <p className="text-medium-gray">
                      <span className="font-bold text-charcoal">Solution:</span> Invested heavily in documentation and training infrastructure (videos, how-to guides, checklists for each deliverable), reducing onboarding to 3-4 weeks while improving quality and eliminating client-facing training costs.
                    </p>
                  </div>

                  <div className="border-l-4 border-lime pl-4">
                    <p className="font-bold text-charcoal mb-2">Challenge 4: Resource Allocation & Pipeline Visibility</p>
                    <p className="text-medium-gray mb-2">
                      Difficulty balancing workloads across 300+ fund launches and implementations.
                    </p>
                    <p className="text-medium-gray">
                      <span className="font-bold text-charcoal">Solution:</span> Established weekly pipeline management with clear staffing models tied to client tiers, maintaining flexibility to reallocate resources based on demand while ensuring broader client assignments remained intact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-heading font-bold text-charcoal mb-4">
              2. Give an example of how you've used data or tooling to improve onboarding efficiency or drive higher product adoption.
            </h3>
            <p className="text-medium-gray mb-6 italic">
              How did you connect these improvements to measurable business outcomes?
            </p>

            <div className="space-y-6">
              <div className="bg-orange/10 border-l-4 border-orange p-6 rounded-r-lg">
                <p className="text-charcoal italic leading-relaxed">
                  <span className="font-bold">My Philosophy: </span>
                  The systems and reporting infrastructure are what drive success - the specific tools are ancillary. At iCapital, I built a data-driven operational framework that fundamentally changed how we measured and improved performance.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-charcoal mb-3">The System I Built</h4>
                <p className="text-medium-gray leading-relaxed mb-4">
                  Rather than implementing flashy software, I created an interconnected measurement system across five operational dimensions:
                </p>
                <ul className="space-y-2">
                  <li className="text-medium-gray flex">
                    <span className="text-orange mr-2">1.</span>
                    <span><strong>Process Mapping Data:</strong> Task-level time tracking, dependency mapping, and deliverable decomposition</span>
                  </li>
                  <li className="text-medium-gray flex">
                    <span className="text-orange mr-2">2.</span>
                    <span><strong>Team Structure Metrics:</strong> Role-task assignment matrices and accountability tracking</span>
                  </li>
                  <li className="text-medium-gray flex">
                    <span className="text-orange mr-2">3.</span>
                    <span><strong>Education Performance:</strong> Training completion rates and time-to-productivity</span>
                  </li>
                  <li className="text-medium-gray flex">
                    <span className="text-orange mr-2">4.</span>
                    <span><strong>Resource Allocation:</strong> Pipeline forecasting and coverage ratio management</span>
                  </li>
                  <li className="text-medium-gray flex">
                    <span className="text-orange mr-2">5.</span>
                    <span><strong>Performance Analytics:</strong> Efficiency ratios, output metrics, and trend analysis</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-bold text-charcoal mb-3">The Evolution - Excel to Tableau</h4>

                <p className="font-bold text-charcoal mb-2">Phase 1 (Excel-based):</p>
                <p className="text-medium-gray mb-4">
                  Built comprehensive tracking spreadsheets that captured task-level hours and dependencies for each deliverable type, individual and team production hours mapped to client tiers, weekly pipeline status (fund launches, implementations, support tickets), and employee utilization and efficiency ratios.
                </p>

                <p className="font-bold text-charcoal mb-2">Phase 2 (Tableau Dashboards):</p>
                <p className="text-medium-gray mb-4">
                  As data volume scaled, I led the migration to Tableau, creating executive dashboards that provided real-time visibility into team efficiency trends, bottleneck identification across the delivery pipeline, client tier performance and resource allocation optimization, and quality metrics.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-charcoal mb-3">Measurable Business Outcomes</h4>
                <p className="text-medium-gray mb-4">
                  The reporting infrastructure enabled data-driven decisions that delivered:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-light-gray p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-orange mb-1">+60%</div>
                    <div className="text-sm text-medium-gray">Productivity per Employee</div>
                    <div className="text-xs text-medium-gray mt-1">(394 → 629 hours)</div>
                  </div>
                  <div className="bg-light-gray p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-orange mb-1">+32%</div>
                    <div className="text-sm text-medium-gray">Fund Launch Throughput</div>
                    <div className="text-xs text-medium-gray mt-1">(248 → 327 annually)</div>
                  </div>
                  <div className="bg-light-gray p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-orange mb-1">-75%</div>
                    <div className="text-sm text-medium-gray">Ramp Time</div>
                    <div className="text-xs text-medium-gray mt-1">(3-6 mo → 3-4 weeks)</div>
                  </div>
                </div>

                <div className="bg-lime/10 border-l-4 border-lime p-6 rounded-r-lg">
                  <p className="text-charcoal italic leading-relaxed">
                    <span className="font-bold">The Key Insight: </span>
                    By making operational data visible and actionable, we could pinpoint exactly where inefficiencies existed - whether in task allocation, training gaps, or resource imbalances - and address them systematically rather than anecdotally. This transformed us from reactive firefighting to proactive optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-heading font-bold text-charcoal mb-4">
              3. Describe a time when you built or redefined collaboration between Customer Success and other GTM teams (e.g., Sales, Product, Finance).
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-bold text-charcoal mb-3">
                  $500K Recurring Overhead Reduction Through Cross-Functional Leadership
                </h4>
                <p className="text-medium-gray leading-relaxed">
                  One of my most impactful cross-functional initiatives involved a strategic enterprise client who was facing $500,000 in annual recurring overhead costs for fund administration - costs that were threatening the client relationship and creating pricing pressure for our Sales team.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-charcoal mb-3">The Challenge</h4>
                <ul className="space-y-2">
                  <li className="text-medium-gray flex">
                    <span className="text-orange mr-2">•</span>
                    <span><strong>Sales</strong> had a retention risk: The client was evaluating competitors due to cost concerns</span>
                  </li>
                  <li className="text-medium-gray flex">
                    <span className="text-orange mr-2">•</span>
                    <span><strong>Product</strong> had built automation capabilities but they weren't being leveraged for this use case</span>
                  </li>
                  <li className="text-medium-gray flex">
                    <span className="text-orange mr-2">•</span>
                    <span><strong>Client Operations</strong> (my team) was managing manual processes that were driving up the client's costs</span>
                  </li>
                  <li className="text-medium-gray flex">
                    <span className="text-orange mr-2">•</span>
                    <span>No one had connected the dots or owned the end-to-end solution</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-bold text-charcoal mb-3">My Role: Client-Facing Leader & Cross-Functional Orchestrator</h4>

                <div className="space-y-4">
                  <div className="border-l-4 border-lime pl-4">
                    <p className="font-bold text-charcoal mb-2">Step 1: Took Ownership & Built the Business Case</p>
                    <ul className="space-y-1">
                      <li className="text-medium-gray flex">
                        <span className="text-orange mr-2">•</span>
                        <span>I told the client directly: "We can solve this" - creating commitment before having all the answers</span>
                      </li>
                      <li className="text-medium-gray flex">
                        <span className="text-orange mr-2">•</span>
                        <span>Worked with Sales to understand the retention risk and competitive dynamics</span>
                      </li>
                      <li className="text-medium-gray flex">
                        <span className="text-orange mr-2">•</span>
                        <span>Quantified the internal operational costs we could eliminate through automation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-lime pl-4">
                    <p className="font-bold text-charcoal mb-2">Step 2: Scoped the Solution with Product</p>
                    <ul className="space-y-1">
                      <li className="text-medium-gray flex">
                        <span className="text-orange mr-2">•</span>
                        <span>Collaborated with Product team to assess automation feasibility for this specific fund structure</span>
                      </li>
                      <li className="text-medium-gray flex">
                        <span className="text-orange mr-2">•</span>
                        <span>Identified gaps between existing capabilities and client requirements</span>
                      </li>
                      <li className="text-medium-gray flex">
                        <span className="text-orange mr-2">•</span>
                        <span>Co-developed implementation roadmap with clear milestones</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-lime pl-4">
                    <p className="font-bold text-charcoal mb-2">Step 3: Coordinated the 4-Month Delivery</p>
                    <ul className="space-y-1">
                      <li className="text-medium-gray flex">
                        <span className="text-orange mr-2">•</span>
                        <span>Assembled cross-functional working team (Sales, Product, Implementation, Operations)</span>
                      </li>
                      <li className="text-medium-gray flex">
                        <span className="text-orange mr-2">•</span>
                        <span>Established weekly check-ins with clear ownership and accountability</span>
                      </li>
                      <li className="text-medium-gray flex">
                        <span className="text-orange mr-2">•</span>
                        <span>Led client communications, managing expectations while maintaining confidence</span>
                      </li>
                      <li className="text-medium-gray flex">
                        <span className="text-orange mr-2">•</span>
                        <span>Oversaw the technical implementation and client training on new automated workflows</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-lime pl-4">
                    <p className="font-bold text-charcoal mb-2">Step 4: Executed & Measured</p>
                    <ul className="space-y-1">
                      <li className="text-medium-gray flex">
                        <span className="text-orange mr-2">•</span>
                        <span>Delivered on time in 4 months</span>
                      </li>
                      <li className="text-medium-gray flex">
                        <span className="text-orange mr-2">•</span>
                        <span>Transitioned fund administration to automated product</span>
                      </li>
                      <li className="text-medium-gray flex">
                        <span className="text-orange mr-2">•</span>
                        <span>Validated $500K in annual savings with Finance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-heading font-bold text-charcoal mb-3">Broader Impact on GTM Collaboration</h4>
                <p className="text-medium-gray mb-4">
                  This success case became a template for how I redefined collaboration:
                </p>

                <div className="space-y-3">
                  <div>
                    <p className="font-bold text-charcoal">With Sales:</p>
                    <p className="text-medium-gray">
                      Established formal handoff process between Sales and Implementation with clear acceptance criteria. Created feedback loop where my team provided product adoption insights to inform Sales strategy. Developed pricing input process where Operations provided cost-to-serve data by client tier.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-charcoal">With Product:</p>
                    <p className="text-medium-gray">
                      Built regular cadence between Operations and Product teams for real-time client insights. My team became Product's "voice of customer" - surfacing feature requests backed by usage data and business impact. Created escalation protocols where critical client needs got fast-tracked to Product roadmap discussions.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-charcoal">With Finance:</p>
                    <p className="text-medium-gray">
                      Collaborated on resource allocation models tied to client profitability. Provided operational metrics that informed pricing strategy. Built business cases for efficiency investments (training, tools, automation) with clear ROI.
                    </p>
                  </div>
                </div>

                <div className="bg-orange/10 border-l-4 border-orange p-6 rounded-r-lg mt-6">
                  <p className="text-charcoal italic leading-relaxed">
                    <span className="font-bold">The Result: </span>
                    This wasn't a one-time win - it established a repeatable model for cross-functional problem-solving that made GTM teams more effective and created competitive differentiation in how we served enterprise clients.
                  </p>
                </div>
              </div>
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
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              Thank you for considering my application. I'm excited about the opportunity to bring my experience scaling customer success organizations to Ramp and help build world-class onboarding and activation for your growing customer base.
            </p>
            {/* Signature */}
            <div className="flex justify-end mt-8">
              <p className="font-handwritten text-4xl text-orange">
                Katie Kelly
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
