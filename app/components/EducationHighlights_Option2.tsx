import Container from './Container';
import Image from 'next/image';

// OPTION 2: Logo Grid with Text Below (Icon Style)
// Minimal, icon-focused design with centered text

export default function EducationHighlights() {
  const highlights = [
    {
      logo: '/nesl-logo.jpg',
      title: 'New England School of Law',
      subtitle: 'J.D.',
    },
    {
      logo: '/providence-college-logo.jpg',
      title: 'Providence College',
      subtitle: 'B.A.',
    },
    {
      logo: '/mass-bar-logo.png',
      title: 'Commonwealth of Massachusetts Bar',
      subtitle: 'Law License',
    },
    {
      logo: '/providence-hockey-logo.png',
      title: 'Providence Field Hockey',
      subtitle: 'Div. 1 Captain',
    },
  ];

  return (
    <section className="bg-light-gray py-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-16 h-16 mb-3">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <p className="text-charcoal text-sm font-medium leading-tight">
                {item.title}
              </p>
              <p className="text-orange text-xs mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
