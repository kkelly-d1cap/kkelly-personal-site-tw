import { config } from '@/content/config';
import Container from './Container';

export default function About() {
  const paragraphs = config.about.content.split('\n\n');

  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-handwritten text-4xl md:text-5xl mb-8 text-charcoal">
            {config.about.heading}
          </h2>
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-xl md:text-2xl text-medium-gray leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
