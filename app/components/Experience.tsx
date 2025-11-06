import { experience } from '@/content/experience';
import Container from './Container';
import Image from 'next/image';

export default function Experience() {
  return (
    <section id="experience" className="bg-light-gray pt-20 lg:pt-32 pb-6 border-b-2 border-orange">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6 lg:mb-0">
            Experience
          </h2>
          <a
            href="/KatieKelly_CV_2025.pdf"
            download
            className="bg-lime text-charcoal font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download CV
          </a>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-medium-gray/30"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 bg-orange rounded-full border-4 border-light-gray"></div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {job.logo && (
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <Image
                            src={job.logo}
                            alt={`${job.company} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-charcoal">
                          {job.title}
                        </h3>
                        <p className="text-lg text-medium-gray">{job.company}</p>
                      </div>
                    </div>
                    <span className="text-sm text-medium-gray bg-light-gray px-4 py-2 rounded-full mt-2 md:mt-0 self-start md:self-auto">
                      {job.date}
                    </span>
                  </div>

                  {job.summary && (
                    <p className="text-medium-gray mb-4 leading-relaxed">
                      {job.summary}
                    </p>
                  )}

                  <ul className="space-y-2">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-medium-gray flex">
                        <span className="text-orange mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Highlights */}
        <div className="flex justify-center items-center gap-12 md:gap-20 mt-12 pt-8 border-t border-medium-gray/20">
          {[
            { logo: '/NESL-150x150.jpg', alt: 'New England School of Law' },
            { logo: '/PC2-150x150.jpg', alt: 'Providence College' },
            { logo: '/bbo-150x150.png', alt: 'Commonwealth of Massachusetts Bar' },
            { logo: '/friar-150x150.png', alt: 'Providence Field Hockey' },
          ].map((item, index) => (
            <div
              key={index}
              className="relative w-9 h-9 md:w-11 md:h-11 bg-light-gray rounded-sm p-1"
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

        {/* CV Download Note */}
        <div className="flex items-center justify-center gap-2 mt-6 pt-4 pb-0 border-t border-medium-gray/20">
          <svg className="w-4 h-4 text-medium-gray" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <p className="text-medium-gray text-sm">
            <a
              href="/KatieKelly_CV_2025.pdf"
              className="text-orange font-medium hover:underline"
              download
            >
              Download complete CV
            </a>
            {' '}for full experience details
          </p>
        </div>
      </Container>
    </section>
  );
}
