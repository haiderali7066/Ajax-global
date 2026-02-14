'use client'

export default function ProblemWithAutomation() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-6">
            The Problem with Traditional Automation
          </h2>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <div className="space-y-2">
                <p className="text-lg font-bold text-foreground">Automation executes tasks</p>
                <p className="text-muted-foreground font-normal">But doesn't understand context or adapt</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold text-foreground">Chatbots respond to prompts</p>
                <p className="text-muted-foreground font-normal">But lack operational awareness</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold text-foreground">Businesses need intelligence</p>
                <p className="text-muted-foreground font-normal">Not scripts or reactive responses</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">What you're missing:</h3>
              <ul className="space-y-3">
                {[
                  'Fragmented workflows that don\'t communicate',
                  'Delayed decision-making due to siloed information',
                  'Poor visibility into performance and bottlenecks',
                  'Reactive problem-solving instead of predictive insights',
                  'Teams working without real-time intelligence',
                  'Inability to optimize at scale',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-rose-500 rounded-full" />
                    </div>
                    <span className="text-foreground font-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
