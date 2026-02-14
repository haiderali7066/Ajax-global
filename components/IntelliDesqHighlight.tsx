'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Brain } from 'lucide-react'

export default function IntelliDesqHighlight() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Intelligence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                IntelliDesq™ is not a chatbot
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                IntelliDesq™ goes beyond automation. It's operational intelligence that enhances human decision-making with:
              </p>

              <ul className="space-y-3">
                {[
                  'Real-time operational insights',
                  'Predictive analytics and forecasting',
                  'Decision support and recommendations',
                  'Integration with your existing workflows',
                  'Continuous learning from your data',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-white rounded-full px-8 transition-all duration-300 hover:shadow-lg hover:scale-105 group w-fit"
              asChild
            >
              <Link href="/intellidesq" className="flex items-center gap-2">
                See IntelliDesq in Action
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-8 sm:p-12">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              {/* Dashboard mockup */}
              <div className="relative z-10">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="h-3 bg-primary/20 rounded-full w-32 animate-pulse" />
                    <div className="h-2 bg-muted rounded-full w-48 animate-pulse" />
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Efficiency', value: '94%' },
                      { label: 'Accuracy', value: '99.2%' },
                      { label: 'Cost Savings', value: '47%' },
                      { label: 'Uptime', value: '99.9%' },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="rounded-lg bg-card/50 backdrop-blur border border-border p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="space-y-3 pt-4">
                    <div className="h-32 bg-gradient-to-t from-primary/10 to-transparent rounded-lg flex items-end justify-around px-4">
                      {[40, 60, 45, 75, 65, 85, 72].map((height, i) => (
                        <div
                          key={i}
                          className="w-2 bg-primary rounded-full transition-all duration-700 hover:bg-accent"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    <div className="h-1 bg-gradient-to-r from-primary/20 via-accent/20 to-transparent rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
