'use client'

import { Search, BookOpen, Zap, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Talent Sourcing',
    description: 'Carefully vetted professionals matched to your requirements',
  },
  {
    icon: BookOpen,
    number: '02',
    title: 'Training & Onboarding',
    description: 'Process, tools, and KPI alignment with your team',
  },
  {
    icon: Zap,
    number: '03',
    title: 'Deployment',
    description: 'Seamless integration with your existing operations',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Performance Management',
    description: 'Continuous monitoring and continuous improvement',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground font-normal">
            A proven process from sourcing to ongoing optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className="group relative animate-stagger-in-1"
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-3 w-6 h-1 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <div className="rounded-2xl p-8 bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 h-full">
                  <div className="inline-flex p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-all duration-300 mb-4">
                    <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
