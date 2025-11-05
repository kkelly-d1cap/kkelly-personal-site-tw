import { projects } from '@/content/projects';
import Container from './Container';
import Card from './Card';

export default function Work() {
  return (
    <section id="work" className="bg-white py-20 lg:py-32">
      <Container>
        <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </Container>
    </section>
  );
}
