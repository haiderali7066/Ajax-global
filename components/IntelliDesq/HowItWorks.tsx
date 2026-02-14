'use client'

export default function HowItWorks() {
  const steps = [
    {
      step: '1',
      title: 'Observes',
      description: 'Workflows & data across your operations',
    },
    {
      step: '2',
      title: 'Analyzes',
      description: 'Performance patterns and trends',
    },
    {
      step: '3',
      title: 'Provides',
      description: 'Actionable intelligence & insights',
    },
    {
      step: '4',
      title: 'Enhances',
      description: 'Human execution and decision-making',
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            How IntelliDesq™ Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-normal">
            Simple, non-technical, always beneficial
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="relative group animate-stagger-in-1">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 -right-6 w-12 h-1 bg-gradient-to-r from-primary/50 to-transparent group-hover:from-primary transition-colors duration-300" />
              )}

              <div className="rounded-2xl p-6 sm:p-8 bg-background border border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 h-full">
                <div className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300 mb-4">
                  {item.step}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed font-normal text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
