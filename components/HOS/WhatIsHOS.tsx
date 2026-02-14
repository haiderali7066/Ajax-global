'use client'

import { Users, Zap, Globe } from 'lucide-react'

const points = [
  {
    icon: Users,
    title: 'People-first approach',
    description: 'We select, train, and nurture talent that truly cares about excellence.',
  },
  {
    icon: Zap,
    title: 'Process-driven execution',
    description: 'Structured workflows ensure consistent quality and measurable outcomes.',
  },
  {
    icon: Globe,
    title: 'Scalable global delivery',
    description: 'Grow your teams anywhere, anytime, without hiring infrastructure overhead.',
  },
]

export default function WhatIsHOS() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-light text-foreground">
                What is HOS?
              </h2>
              <p className="text-lg text-muted-foreground font-normal leading-relaxed">
                Human Outsourcing Solutions (HOS) go beyond traditional outsourcing. We design, train, and manage high-performing teams that integrate directly into your operations. Your success becomes our success.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {points.map((point, i) => {
                const Icon = point.icon
                return (
                  <div key={i} className="space-y-4 animate-stagger-in-1">
                    <div className="inline-flex p-3 rounded-lg bg-secondary">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground font-normal text-sm">
                      {point.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
