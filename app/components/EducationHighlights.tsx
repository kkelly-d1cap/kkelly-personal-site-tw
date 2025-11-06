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
    <section className="bg-medium-gray py-5">
      <Container>
        <div className="flex justify-center items-center gap-12 md:gap-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative w-9 h-9 md:w-11 md:h-11"
              style={{ opacity: 0.5 }}
            >
              <Image
                src={item.logo}
                alt={item.alt}
                width={44}
                height={44}
                className="object-contain grayscale brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
