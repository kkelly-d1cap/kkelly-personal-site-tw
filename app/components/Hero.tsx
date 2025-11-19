import { config } from '@/content/config';
import Container from './Container';
import Image from 'next/image';

export default function Hero() {
  return (
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
            <h2 className="text-xl font-heading font-bold">{config.personal.name}</h2>
            <p className="text-gray-400 text-sm">{config.personal.title}</p>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            {config.hero.headline}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl">
            {config.hero.subheadline}
          </p>

          {/* Value Proposition with Orange Handwritten */}
          <p className="text-3xl md:text-4xl lg:text-5xl mb-12 font-handwritten text-orange">
            Providing practical solutions for complex problems
          </p>

          {/* Social Links - Neon Style */}
          <div className="flex gap-4">
            <a
              href={config.contact.social.linkedin}
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
  );
}
