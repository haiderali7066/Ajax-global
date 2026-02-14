'use client'

export default function WhatIsIntelliDesq() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-slide-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
              What IntelliDesq™ Is
            </h2>

            <div className="space-y-6 text-lg">
              <p className="text-foreground font-normal">
                IntelliDesq™ is an AI-driven operational intelligence platform designed to observe, assist, and optimize how teams work — in real time.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Works with humans, not instead of them</h3>
                    <p className="text-muted-foreground text-sm">Amplifies team capabilities through intelligent insights</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Learns from operations</h3>
                    <p className="text-muted-foreground text-sm">Continuously improves by understanding your workflows</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Improves continuously</h3>
                    <p className="text-muted-foreground text-sm">Gets smarter and more valuable over time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-gray-200 p-8 sm:p-12 h-96 flex items-center justify-center hover:shadow-lg transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative z-10 text-center space-y-4">
                <div className="text-5xl font-light text-primary">∞</div>
                <p className="text-foreground font-bold text-lg">Continuous Intelligence</p>
                <p className="text-muted-foreground text-sm max-w-xs">Always learning, always optimizing, always improving your operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
