import Container from '@/app/components/Container';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { isApplicationPageActive } from '@/content/applicationPages';

export default function ApplicationTemplate() {
  // TODO: Replace 'template-slug' with your actual slug from applicationPages.ts
  const pageSlug = 'template-slug';

  // Check if this application page is still active
  if (!isApplicationPageActive(pageSlug)) {
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
                [Role Title]
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300">
                [Department/Team] | [Company Name]
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
                  <p className="text-gray-400">FinTech Operations Leader</p>
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
              [Your value proposition for this specific role - what excites you about the opportunity]
            </p>
          </div>
        </Container>
      </section>

      {/* Why I'm the Right Fit */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
            Why I'm the Right Fit
          </h2>

          {/* Empathy Hook */}
          <div className="bg-lime/10 border-l-4 border-lime p-6 rounded-r-lg mb-12">
            <p className="text-lg text-charcoal leading-relaxed italic">
              [Show you understand their challenges - reference specific pain points they're likely facing at this stage]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                [Strength #1]
              </h3>
              <p className="text-medium-gray">
                [Specific example with metrics and outcomes]
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                [Strength #2]
              </h3>
              <p className="text-medium-gray">
                [Specific example with metrics and outcomes]
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                [Strength #3]
              </h3>
              <p className="text-medium-gray">
                [Specific example with metrics and outcomes]
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                [Strength #4]
              </h3>
              <p className="text-medium-gray">
                [Specific example with metrics and outcomes]
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                [Strength #5]
              </h3>
              <p className="text-medium-gray">
                [Specific example with metrics and outcomes]
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-lg">
              <h3 className="font-heading font-bold text-xl text-charcoal mb-3">
                [Strength #6]
              </h3>
              <p className="text-medium-gray">
                [Specific example with metrics and outcomes]
              </p>
            </div>
          </div>

          {/* Key Achievement Callout */}
          <div className="bg-orange/10 border-l-4 border-orange p-8 rounded-r-lg">
            <p className="text-2xl md:text-3xl font-handwritten text-charcoal mb-4">
              [Highlight Your Most Impressive Achievement]
            </p>
            <p className="text-medium-gray text-lg">
              [Detailed explanation with specific metrics and business impact]
            </p>
          </div>
        </Container>
      </section>

      {/* Pattern Recognition Callout */}
      <section className="bg-charcoal text-white py-12 lg:py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-handwritten leading-relaxed mb-4">
              [Connect their challenges to your experience - show pattern recognition]
            </p>
            <p className="text-xl md:text-2xl text-lime font-heading font-bold">
              These are patterns I've solved repeatedly.
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

          {/* Question 1 - Customize based on the actual application */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-heading font-bold text-charcoal mb-4">
              1. [Application Question]
            </h3>
            <p className="text-medium-gray mb-6 italic">
              [Any sub-questions or clarifications]
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-bold text-charcoal mb-3">[Subsection]</h4>
                <p className="text-medium-gray leading-relaxed">
                  [Your detailed answer with specific examples]
                </p>
              </div>
            </div>
          </div>

          {/* Add more questions as needed */}
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
              [Personalized thank you message expressing genuine interest in the role and company]
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
