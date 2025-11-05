import { experience } from '@/content/experience';
import Container from './Container';

export default function Experience() {
  return (
    <section id="experience" className="bg-light-gray py-20 lg:py-32">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6 lg:mb-0">
            Experience
          </h2>
          <a
            href="/resume.pdf"
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
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-charcoal">
                        {job.title}
                      </h3>
                      <p className="text-lg text-medium-gray">{job.company}</p>
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
      </Container>
    </section>
  );
}
