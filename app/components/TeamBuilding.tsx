import Container from './Container';

export default function TeamBuilding() {
  return (
    <section id="work" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-handwritten text-4xl md:text-5xl mb-4 text-charcoal">
            Building Leaders, Not Just Teams
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Whether in Operations or Customer Success, my foundation is people-first leadership. I don't just scale headcount, I build managers and leader, create performance frameworks, and develop teams that can sustain growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-light-gray rounded-lg p-6">
            <div className="bg-orange/10 p-3 rounded-lg w-fit mb-4">
              <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
              Manager Development
            </h3>
            <p className="text-medium-gray leading-relaxed">
              Developed 5+ first-time managers with structured coaching, 1:1 frameworks, and performance management systems that scale beyond me.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-light-gray rounded-lg p-6">
            <div className="bg-orange/10 p-3 rounded-lg w-fit mb-4">
              <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
              Scalable Hiring Frameworks
            </h3>
            <p className="text-medium-gray leading-relaxed">
              Built role definitions, interview rubrics, and onboarding systems that enabled hiring 25+ people in 12 months without sacrificing quality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-light-gray rounded-lg p-6">
            <div className="bg-orange/10 p-3 rounded-lg w-fit mb-4">
              <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
              Performance Systems
            </h3>
            <p className="text-medium-gray leading-relaxed">
              Created OKR frameworks, skills matrices, and career ladders that align individual growth with organizational needs.
            </p>
          </div>
        </div>

        {/* Metric Callout */}
        <div className="bg-charcoal text-white p-8 rounded-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-lime mb-2">5+</div>
              <div className="text-sm text-gray-300">Managers Developed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-lime mb-2">25+</div>
              <div className="text-sm text-gray-300">Team Members Hired</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-lime mb-2">12</div>
              <div className="text-sm text-gray-300">Months to Scale</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
