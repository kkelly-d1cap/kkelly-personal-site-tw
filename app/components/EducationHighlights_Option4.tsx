import Container from './Container';
import Image from 'next/image';

// OPTION 4: Card Style with Background (Premium Look)
// Small cards with subtle shadows, more prominent

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
    <section className="bg-light-gray py-10">
      <Container>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 min-w-[200px]"
            >
              <div className="relative w-12 h-12 flex-shrink-0 bg-light-gray rounded-full p-2">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-charcoal text-sm font-semibold leading-tight">
                  {item.title}
                </p>
                <p className="text-orange text-xs mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
