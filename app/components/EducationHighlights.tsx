import Container from './Container';
import Image from 'next/image';

export default function EducationHighlights() {
  const highlights = [
    {
      logo: '/NESL-150x150.jpg',
      title: 'New England School of Law',
      subtitle: 'J.D.',
    },
    {
      logo: '/PC2-150x150.jpg',
      title: 'Providence College',
      subtitle: 'B.A.',
    },
    {
      logo: '/bbo-150x150.png',
      title: 'Commonwealth of Massachusetts Bar',
      subtitle: 'Law License',
    },
    {
      logo: '/friar-150x150.png',
      title: 'Providence Field Hockey',
      subtitle: 'Div. 1 Captain',
    },
  ];

  return (
    <section style={{ backgroundColor: '#FF9F40' }} className="py-8">
      <Container>
        <div className="flex flex-wrap justify-start md:justify-center items-center gap-4 md:gap-12">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-md p-1 shadow-sm">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <div>
                <p className="text-charcoal text-sm font-medium">{item.title}</p>
                <p className="text-white text-xs">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
