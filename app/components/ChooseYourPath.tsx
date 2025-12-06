import Container from './Container';
import Link from 'next/link';

export default function ChooseYourPath() {
  return (
    <section className="bg-light-gray py-16 lg:py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-handwritten text-4xl md:text-5xl mb-4 text-charcoal">
            Two Ways I Create Impact
          </h2>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">
            Customer-facing operations requires both strategic infrastructure and high-performing teams. I build both.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Organizational Design Card */}
          <Link href="/organizational-design" className="group">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange/10 p-4 rounded-lg group-hover:bg-orange/20 transition-colors">
                  <svg className="w-8 h-8 text-orange" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-charcoal">
                  Organizational Design
                </h3>
              </div>

              <p className="text-medium-gray mb-6 leading-relaxed">
                Designing structures and systems that scale. I build the operational infrastructure that turns organizational chaos into competitive advantage, enabling 2-3x growth without breaking.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="text-orange mr-2 mt-1">✓</span>
                  <span className="text-medium-gray">Organizational design & operating models</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange mr-2 mt-1">✓</span>
                  <span className="text-medium-gray">Process architecture & systems thinking</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange mr-2 mt-1">✓</span>
                  <span className="text-medium-gray">Cross-functional GTM alignment</span>
                </div>
              </div>

              <div className="bg-orange/5 p-4 rounded-lg mb-6">
                <p className="text-sm font-bold text-orange mb-1">Recent Impact</p>
                <p className="text-sm text-medium-gray">60% efficiency improvement | Doubled throughput with 25% fewer resources</p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-charcoal text-charcoal font-medium group-hover:bg-charcoal group-hover:text-white transition-all">
                <span>Explore Organizational Design</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Team Building Card */}
          <Link href="/team-building" className="group">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-lime h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-lime/10 p-4 rounded-lg group-hover:bg-lime/20 transition-colors">
                  <svg className="w-8 h-8 text-lime" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-charcoal">
                  Team Building
                </h3>
              </div>

              <p className="text-medium-gray mb-6 leading-relaxed">
                Developing leaders and high-performing teams. I build and scale customer success and post-sales organizations that own customer outcomes across support, implementation, growth, and retention.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="text-lime mr-2 mt-1">✓</span>
                  <span className="text-medium-gray">Leadership development & coaching</span>
                </div>
                <div className="flex items-start">
                  <span className="text-lime mr-2 mt-1">✓</span>
                  <span className="text-medium-gray">Hiring frameworks & team scaling</span>
                </div>
                <div className="flex items-start">
                  <span className="text-lime mr-2 mt-1">✓</span>
                  <span className="text-medium-gray">Performance management & culture</span>
                </div>
              </div>

              <div className="bg-lime/5 p-4 rounded-lg mb-6">
                <p className="text-sm font-bold text-lime mb-1">Recent Impact</p>
                <p className="text-sm text-medium-gray">Built 25+ person team in 12 months | 5+ managers developed</p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-charcoal text-charcoal font-medium group-hover:bg-charcoal group-hover:text-white transition-all">
                <span>Explore Team Building</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
