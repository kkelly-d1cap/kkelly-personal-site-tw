import { config } from '@/content/config';
import Container from './Container';

export default function About() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-handwritten text-4xl md:text-5xl mb-8 text-charcoal">
            {config.about.heading}
          </h2>
          <p className="text-xl md:text-2xl text-medium-gray leading-relaxed">
            {config.about.content}
          </p>
        </div>
      </Container>
    </section>
  );
}
