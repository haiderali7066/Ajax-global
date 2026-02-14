'use client'

import { Zap, TrendingUp, Globe, Target } from 'lucide-react'

const values = [
  {
    icon: Zap,
    title: 'Engineered Human Performance',
    description: 'Rigorous training and continuous optimization ensure your teams deliver excellence every single day.',
  },
  {
    icon: Target,
    title: 'Intelligence-Led Operations',
    description: 'Data-driven insights and AI-powered intelligence guide every decision for maximum impact.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Teams',
    description: 'Grow from startup to enterprise. Our flexible model scales with your ambitions.',
  },
  {
    icon: Globe,
    title: 'Global Delivery Model',
    description: 'Access elite talent worldwide with 24/7 support and seamless time zone coverage.',
  },
]

export default function WhyAjaxGlobal() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            Why AJAX Global
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-normal">
            Engineered for excellence, built for scale
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-6 sm:p-8 bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>

                {/* Decorative dot */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-all duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
