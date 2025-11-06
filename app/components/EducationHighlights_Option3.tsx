import Container from './Container';
import Image from 'next/image';

// OPTION 3: Single Line with Dividers (Ultra Compact)
// Very thin bar with logos only, hover shows details

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
    <section className="bg-white border-t border-b border-gray-200 py-6">
      <Container>
        <div className="flex justify-center items-center divide-x divide-gray-300">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="px-6 md:px-8 group cursor-pointer"
              title={`${item.title} - ${item.subtitle}`}
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 opacity-70 group-hover:opacity-100 transition-opacity">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
