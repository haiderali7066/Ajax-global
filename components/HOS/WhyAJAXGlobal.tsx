'use client'

import { BarChart3, Brain, UserCheck, Zap, Globe, Award } from 'lucide-react'

const advantages = [
  {
    icon: BarChart3,
    title: 'KPI-driven performance',
    description: 'Every team aligned to measurable outcomes',
  },
  {
    icon: Brain,
    title: 'AI-assisted workflows',
    description: 'Enhanced with IntelliDesq™ for better decisions',
  },
  {
    icon: UserCheck,
    title: 'Dedicated account management',
    description: 'Personal support every step of the way',
  },
  {
    icon: Zap,
    title: 'Scalable teams on demand',
    description: 'Grow or adjust your team size instantly',
  },
  {
    icon: Globe,
    title: 'Reliable global delivery',
    description: '24/7 operations across multiple time zones',
  },
  {
    icon: Award,
    title: '99.2% uptime guarantee',
    description: 'Enterprise-grade reliability and accountability',
  },
]

export default function WhyAJAXGlobal() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground">
            Why AJAX Global HOS
          </h2>
          <p className="text-lg text-muted-foreground font-normal">
            What sets us apart from traditional outsourcing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, i) => {
            const Icon = advantage.icon
            return (
              <div key={i} className="group space-y-4 animate-stagger-in-1">
                <div className="inline-flex p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground font-normal text-sm">
                  {advantage.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
