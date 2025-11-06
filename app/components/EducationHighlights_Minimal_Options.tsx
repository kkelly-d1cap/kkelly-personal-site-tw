import Container from './Container';
import Image from 'next/image';

// OPTION 1: Logo-Only Banner (Grayscale)
// Most minimal - just logos in a row, no text, grayscale filter
export function MinimalEducationOption1() {
  const highlights = [
    { logo: '/NESL-150x150.jpg', alt: 'New England School of Law' },
    { logo: '/PC2-150x150.jpg', alt: 'Providence College' },
    { logo: '/bbo-150x150.png', alt: 'Mass Bar' },
    { logo: '/friar-150x150.png', alt: 'Providence Field Hockey' },
  ];

  return (
    <section className="bg-light-gray py-6 border-y border-medium-gray/10">
      <Container>
        <div className="flex justify-center items-center gap-8 md:gap-16 opacity-60">
          {highlights.map((item, index) => (
            <div key={index} className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src={item.logo}
                alt={item.alt}
                width={48}
                height={48}
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// OPTION 2: Ultra Minimal with Dividers
// Logos only with vertical dividers, very subtle
export function MinimalEducationOption2() {
  const highlights = [
    { logo: '/NESL-150x150.jpg', alt: 'New England School of Law' },
    { logo: '/PC2-150x150.jpg', alt: 'Providence College' },
    { logo: '/bbo-150x150.png', alt: 'Mass Bar' },
    { logo: '/friar-150x150.png', alt: 'Providence Field Hockey' },
  ];

  return (
    <section className="bg-white py-6">
      <Container>
        <div className="flex justify-center items-center divide-x divide-medium-gray/20">
          {highlights.map((item, index) => (
            <div key={index} className="px-6 md:px-10">
              <div className="relative w-10 h-10 md:w-12 md:h-12 opacity-40 hover:opacity-100 transition-opacity">
                <Image
                  src={item.logo}
                  alt={item.alt}
                  width={48}
                  height={48}
                  className="object-contain grayscale"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// OPTION 3: Compact Row with Small Labels
// Logos with tiny text below, very compact
export function MinimalEducationOption3() {
  const highlights = [
    { logo: '/NESL-150x150.jpg', label: 'J.D.' },
    { logo: '/PC2-150x150.jpg', label: 'B.A.' },
    { logo: '/bbo-150x150.png', label: 'Licensed' },
    { logo: '/friar-150x150.png', label: 'Captain' },
  ];

  return (
    <section className="bg-light-gray py-8 border-y border-medium-gray/10">
      <Container>
        <div className="flex justify-center items-center gap-6 md:gap-12">
          {highlights.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 opacity-50">
                <Image
                  src={item.logo}
                  alt={item.label}
                  width={48}
                  height={48}
                  className="object-contain grayscale"
                />
              </div>
              <p className="text-medium-gray text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// OPTION 4: Subtle Grey Bar (Most Client-Banner Like)
// Very subtle, logos fade into background, professional
export function MinimalEducationOption4() {
  const highlights = [
    { logo: '/NESL-150x150.jpg', alt: 'New England School of Law' },
    { logo: '/PC2-150x150.jpg', alt: 'Providence College' },
    { logo: '/bbo-150x150.png', alt: 'Mass Bar' },
    { logo: '/friar-150x150.png', alt: 'Providence Field Hockey' },
  ];

  return (
    <section style={{ backgroundColor: '#F8F8F8' }} className="py-5">
      <Container>
        <div className="flex justify-center items-center gap-12 md:gap-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative w-9 h-9 md:w-11 md:h-11"
              style={{ opacity: 0.35 }}
            >
              <Image
                src={item.logo}
                alt={item.alt}
                width={44}
                height={44}
                className="object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// OPTION 5: Hide on Mobile, Show on Desktop (Most Minimal)
// Only shows on larger screens, very subtle
export function MinimalEducationOption5() {
  const highlights = [
    { logo: '/NESL-150x150.jpg', alt: 'New England School of Law' },
    { logo: '/PC2-150x150.jpg', alt: 'Providence College' },
    { logo: '/bbo-150x150.png', alt: 'Mass Bar' },
    { logo: '/friar-150x150.png', alt: 'Providence Field Hockey' },
  ];

  return (
    <section className="bg-white py-4 border-t border-medium-gray/10 hidden md:block">
      <Container>
        <div className="flex justify-center items-center gap-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative w-10 h-10 opacity-30"
            >
              <Image
                src={item.logo}
                alt={item.alt}
                width={40}
                height={40}
                className="object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
