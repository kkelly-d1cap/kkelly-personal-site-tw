import Container from './Container';

export default function About() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-handwritten text-4xl md:text-5xl mb-8 text-charcoal">
            Who I Am
          </h2>
          <p className="text-xl md:text-2xl text-medium-gray leading-relaxed">
            I'm a growth-stage SaaS and platform operations leader who builds and scales high-performing teams. Over the past decade, I've specialized in turning operational chaos into streamlined systems that support rapid growth: building 25+ person teams from the ground up, doubling throughput, and creating frameworks that make hypergrowth sustainable.
          </p>
        </div>
      </Container>
    </section>
  );
}
