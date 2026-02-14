'use client'

const reasons = [
  {
    title: 'Built for Real Operations',
    description: 'Not generic AI. Designed specifically for enterprise workflows and business complexity.',
  },
  {
    title: 'Designed to Scale with Teams',
    description: 'Works seamlessly whether you have 5 people or 500. Grows with your business.',
  },
  {
    title: 'Not Generic Automation',
    description: 'Provides contextual intelligence, not just task automation or chatbot responses.',
  },
  {
    title: 'Integrated with Human Expertise',
    description: 'Combined with our HOS teams for unmatched operational excellence.',
  },
]

export default function WhyIntelliDesqByAJAX() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            Why IntelliDesq™ by AJAX Global
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-normal">
            Intelligence built on real-world expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group rounded-2xl p-8 bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 animate-stagger-in-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-6 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 font-normal text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
