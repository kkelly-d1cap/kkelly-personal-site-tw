'use client';

import { config } from '@/content/config';
import Container from './Container';
import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service (Mailchimp, ConvertKit, etc.)
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-charcoal text-white py-20 lg:py-32">
      <Container>
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-12">
          <div className="relative h-16 w-16 rounded-full bg-medium-gray overflow-hidden">
            {/* Placeholder for profile photo */}
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
              KK
            </div>
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
            <h3 className="text-base md:text-lg font-medium mb-4">Stay updated with my latest insights</h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email address"
                className="flex-1 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-md bg-transparent border-2 border-lime text-white placeholder:text-lime focus:outline-none focus:ring-2 focus:ring-lime"
                required
              />
              <button
                type="submit"
                className="bg-lime text-charcoal font-medium px-6 py-2 sm:py-3 text-sm sm:text-base rounded-md hover:bg-opacity-90 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            {submitted && (
              <p className="text-lime mt-2 text-sm">Thanks for subscribing!</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
