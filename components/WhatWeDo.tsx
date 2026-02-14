'use client'

import Link from 'next/link'
import { Users, Lightbulb, ArrowRight } from 'lucide-react'

const solutions = [
  {
    id: 'hos',
    title: 'Human Outsourcing Solutions',
    description: 'Reliable, trained teams dedicated to your success. Performance-driven delivery with transparent processes and continuous optimization.',
    icon: Users,
    href: '/hos',
    color: 'from-primary/20 to-accent/10',
    iconColor: 'text-primary',
  },
  {
    id: 'intellidesq',
    title: 'IntelliDesq™',
    description: 'AI-powered operational intelligence that enhances decision-making. Not a chatbot, not automation—pure intelligence at your fingertips.',
    icon: Lightbulb,
    href: '/intellidesq',
    color: 'from-accent/20 to-primary/10',
    iconColor: 'text-accent',
  },
]

export default function WhatWeDo() {
  return (
    <section id="solutions" className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            What We Do
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Two powerful solutions working together to transform your operations
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution) => {
            const Icon = solution.icon
            return (
              <Link
                key={solution.id}
                href={solution.href}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-secondary/30 p-8 sm:p-10 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors duration-300">
                    <Icon className={`w-8 h-8 ${solution.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 text-lg leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-primary font-semibold pt-4 group-hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
