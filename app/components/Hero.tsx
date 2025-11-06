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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            {config.hero.headline}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl">
            {config.hero.subheadline}
          </p>

          {/* Value Proposition with Orange Handwritten */}
          <p className="text-3xl md:text-4xl lg:text-5xl mb-12 font-handwritten text-orange">
            Providing practical solutions for complex problems
          </p>

          {/* Email Subscription Form */}
          <div className="mt-12">
            <h3 className="text-base md:text-lg font-medium mb-4">Stay updated on monthly scaling, ops, and team-building insights</h3>
            <div className="ml-embedded" data-form="0MASCC"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
