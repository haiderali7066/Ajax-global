'use client'

const useCases = [
  {
    title: 'Sales Operations',
    problem: 'Inconsistent pipeline management and missed forecasting signals',
    solution: 'IntelliDesq™ provides real-time deal intelligence, predicts close probability, and optimizes team allocation',
  },
  {
    title: 'Customer Support',
    problem: 'Reactive support with delayed response and inconsistent quality',
    solution: 'IntelliDesq™ prioritizes tickets, predicts customer churn, and ensures consistent service quality',
  },
  {
    title: 'Business Operations',
    problem: 'Fragmented processes and poor cross-team coordination',
    solution: 'IntelliDesq™ unifies workflows, identifies process gaps, and optimizes resource allocation',
  },
  {
    title: 'Management & Reporting',
    problem: 'Delayed insights and reactive decision-making',
    solution: 'IntelliDesq™ delivers real-time dashboards and predictive analytics for proactive leadership',
  },
]

export default function IntelliDesqUseCases() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            Use Cases
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-normal">
            Real problems. Intelligent solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, i) => (
            <div
              key={i}
              className="group rounded-2xl p-8 sm:p-10 bg-background border border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 animate-stagger-in-1"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                {useCase.title}
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-rose-600 mb-2">The Problem:</p>
                  <p className="text-foreground font-normal">{useCase.problem}</p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm font-semibold text-primary mb-2">Intelligent Solution:</p>
                  <p className="text-foreground font-normal">{useCase.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
