'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Talent Sourcing',
    description: 'We identify and recruit elite professionals matched to your specific needs and culture.',
    icon: Users,
  },
  {
    number: '02',
    title: 'Training & Onboarding',
    description: 'Comprehensive training ensures your team understands your processes, systems, and goals.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Performance Optimization',
    description: 'Continuous monitoring, feedback, and optimization to deliver exceptional results consistently.',
    icon: Users,
  },
]

export default function HOSHighlight() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Human Outsourcing Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            People + Process = Performance
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Building dedicated teams that become an extension of your organization
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connection line - hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 -right-6 w-12 h-1 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="rounded-xl p-8 bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden h-full">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Number */}
                  <div className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 pt-8 border-t border-border">
          <p className="text-lg text-muted-foreground">
            Ready to build your high-performing team?
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-white rounded-full px-8 transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            asChild
          >
            <Link href="/hos" className="flex items-center gap-2">
              Build Your Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
