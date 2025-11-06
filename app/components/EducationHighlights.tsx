import Container from './Container';
import Image from 'next/image';

export default function EducationHighlights() {
  const highlights = [
    { logo: '/NESL-150x150.jpg', alt: 'New England School of Law' },
    { logo: '/PC2-150x150.jpg', alt: 'Providence College' },
    { logo: '/bbo-150x150.png', alt: 'Commonwealth of Massachusetts Bar' },
    { logo: '/friar-150x150.png', alt: 'Providence Field Hockey' },
  ];

  return (
    <section className="bg-white py-5 border-b-2 border-orange">
      <Container>
        <div className="flex justify-center items-center gap-12 md:gap-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative w-9 h-9 md:w-11 md:h-11 bg-white rounded-sm p-1"
              style={{ opacity: 0.4 }}
            >
              <Image
                src={item.logo}
                alt={item.alt}
                width={44}
                height={44}
                className="object-contain grayscale mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
