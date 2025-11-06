'use client';

import { config } from '@/content/config';
import Container from './Container';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

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
                disabled={loading}
                className="bg-lime text-charcoal font-medium px-6 py-2 sm:py-3 text-sm sm:text-base rounded-md hover:bg-opacity-90 transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {submitted && (
              <p className="text-lime mt-2 text-sm">Thanks for subscribing!</p>
            )}
            {error && (
              <p className="text-red-400 mt-2 text-sm">{error}</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
