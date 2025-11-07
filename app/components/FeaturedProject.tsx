import Container from './Container';

interface Metric {
  label: string;
  before: string;
  after: string;
  change: string;
}

interface FeaturedProjectProps {
  headline: string;
  situation: string;
  challenges: string[];
  approachTitle: string;
  approachSteps: {
    title: string;
    description: string;
  }[];
  coreInsight: string;
  heroMetrics: {
    efficiency: string;
    output: string;
    teamSize: string;
  };
  detailedMetrics: {
    title: string;
    metrics: Metric[];
  }[];
  timeframe: string;
  impact: string;
}

export default function FeaturedProject({
  headline,
  situation,
  challenges,
  approachTitle,
  approachSteps,
  coreInsight,
  heroMetrics,
  detailedMetrics,
  timeframe,
  impact,
}: FeaturedProjectProps) {
  return (
    <section id="work" className="bg-white py-20 lg:py-32">
      <Container>
        <h2 className="font-handwritten text-4xl md:text-5xl mb-12 text-charcoal">
          Impact
        </h2>

        {/* Project Showcase */}
        <div className="space-y-16">
          {/* Headline & Hero Metrics */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal leading-tight">
              {headline}
            </h3>

            {/* Big Hero Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-light-gray p-6 rounded-lg text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange mb-2">
                  {heroMetrics.efficiency}
                </div>
                <div className="text-sm md:text-base text-medium-gray font-medium">
                  Net Efficiency
                </div>
              </div>
              <div className="bg-light-gray p-6 rounded-lg text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange mb-2">
                  {heroMetrics.output}
                </div>
                <div className="text-sm md:text-base text-medium-gray font-medium">
                  Output
                </div>
              </div>
              <div className="bg-light-gray p-6 rounded-lg text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange mb-2">
                  {heroMetrics.teamSize}
                </div>
                <div className="text-sm md:text-base text-medium-gray font-medium">
                  Headcount
                </div>
              </div>
            </div>
          </div>

          {/* The Challenge */}
          <div className="space-y-4">
            <h4 className="text-2xl font-heading font-bold text-charcoal">
              The Challenge
            </h4>
            <p className="text-lg text-medium-gray leading-relaxed">
              {situation}
            </p>
            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <li key={index} className="text-medium-gray flex">
                  <span className="text-orange mr-3 mt-1">•</span>
                  <span className="leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Approach */}
          <div className="space-y-6">
            <h4 className="text-2xl font-heading font-bold text-charcoal">
              {approachTitle}
            </h4>
            <div className="space-y-4">
              {approachSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-heading font-bold text-charcoal mb-1">
                      {step.title}
                    </h5>
                    <p className="text-medium-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Insight */}
            <div className="bg-lime/10 border-l-4 border-lime p-6 rounded-r-lg">
              <p className="text-charcoal italic leading-relaxed">
                <span className="font-bold">Core Insight: </span>
                {coreInsight}
              </p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="space-y-8">
            <h4 className="text-2xl font-heading font-bold text-charcoal">
              Key Metrics
            </h4>

            <div className="space-y-8">
              {detailedMetrics.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-4">
                  <h5 className="text-lg font-heading font-bold text-charcoal">
                    {section.title}
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="bg-white border-2 border-light-gray p-4 rounded-lg hover:border-orange transition-colors"
                      >
                        <div className="text-sm text-medium-gray mb-2">
                          {metric.label}
                        </div>
                        {metric.before && metric.after ? (
                          <>
                            <div className="flex items-baseline gap-2 mb-1">
                              <span className="text-xl text-charcoal font-bold">
                                {metric.before}
                              </span>
                              <span className="text-orange font-bold">→</span>
                              <span className="text-xl text-charcoal font-bold">
                                {metric.after}
                              </span>
                            </div>
                            <div className="text-sm font-bold text-orange">
                              {metric.change}
                            </div>
                          </>
                        ) : (
                          <div className="text-3xl font-bold text-orange">
                            {metric.change}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeframe */}
            <div className="bg-light-gray p-4 rounded-lg inline-block">
              <span className="text-sm text-medium-gray font-medium">
                Timeframe:
              </span>
              <span className="text-charcoal font-bold ml-2">
                {timeframe}
              </span>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="bg-charcoal text-white p-8 rounded-lg">
            <p className="text-lg md:text-xl leading-relaxed">
              {impact}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
