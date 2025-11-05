import { config } from '@/content/config';
import Container from './Container';

export default function About() {
  return (
    <section id="about" className="bg-light-gray py-20 lg:py-32">
      <Container>
        <h2 className="font-handwritten text-4xl md:text-5xl mb-8 text-charcoal">
          {config.about.heading}
        </h2>
        <div className="max-w-3xl space-y-6">
          {config.about.content.map((paragraph, index) => (
            <p key={index} className="text-lg text-medium-gray leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
