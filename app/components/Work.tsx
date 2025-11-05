'use client';

import { projects } from '@/content/projects';
import Container from './Container';
import Card from './Card';
import { useState } from 'react';

export default function Work() {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const startIndex = currentPage * projectsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="work" className="bg-white py-20 lg:py-32">
      <Container>
        <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
          Featured Work
        </h2>

        {/* Mobile: Show all projects stacked */}
        <div className="md:hidden grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} hover className="flex flex-col">
              {project.image && (
                <div className="w-full h-48 bg-light-gray rounded-md mb-4 flex items-center justify-center">
                  {/* Placeholder for project image */}
                  <span className="text-medium-gray">Image</span>
                </div>
              )}
              <h3 className="font-handwritten text-2xl mb-3 text-charcoal">
                {project.title}
              </h3>
              <p className="text-medium-gray mb-4 flex-grow">
                {project.description}
              </p>
              {project.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-light-gray text-medium-gray px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <a
                href={project.link}
                className="text-orange font-medium hover:underline inline-flex items-center"
              >
                Learn more →
              </a>
            </Card>
          ))}
        </div>

        {/* Desktop: Carousel with 3 at a time */}
        <div className="hidden md:block relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <Card key={startIndex + index} hover className="flex flex-col">
                {project.image && (
                  <div className="w-full h-48 bg-light-gray rounded-md mb-4 flex items-center justify-center">
                    {/* Placeholder for project image */}
                    <span className="text-medium-gray">Image</span>
                  </div>
                )}
                <h3 className="font-handwritten text-2xl mb-3 text-charcoal">
                  {project.title}
                </h3>
                <p className="text-medium-gray mb-4 flex-grow">
                  {project.description}
                </p>
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-light-gray text-medium-gray px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={project.link}
                  className="text-orange font-medium hover:underline inline-flex items-center"
                >
                  Learn more →
                </a>
              </Card>
            ))}
          </div>

          {/* Navigation arrows - only show if more than 3 projects */}
          {totalPages > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white border-2 border-charcoal rounded-full p-3 hover:bg-lime transition-all"
                aria-label="Previous projects"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white border-2 border-charcoal rounded-full p-3 hover:bg-lime transition-all"
                aria-label="Next projects"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              {/* Pagination dots */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentPage === index ? 'bg-orange w-8' : 'bg-medium-gray/30'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
