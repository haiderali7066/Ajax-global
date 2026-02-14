'use client'

import { BarChart3, Headphones, Briefcase, FileText, ArrowRight } from 'lucide-react'

const industries = [
  {
    icon: BarChart3,
    title: 'Sales Operations',
    pain: 'Struggling with lead management and pipeline visibility?',
    solution: 'Our teams streamline your sales process, manage CRM data, and accelerate deal closure with precision.',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    pain: 'Support tickets piling up and customer satisfaction slipping?',
    solution: 'Deliver 24/7 support with trained agents who understand your product and values.',
  },
  {
    icon: Briefcase,
    title: 'Business Operations',
    pain: 'Administrative tasks consuming resources and slowing growth?',
    solution: 'Optimize workflows, manage projects, and keep operations running smoothly.',
  },
  {
    icon: FileText,
    title: 'Back Office',
    pain: 'Data entry and processing becoming a bottleneck?',
    solution: 'Scale processing power with accuracy and speed—free your team for strategic work.',
  },
]

export default function IndustriesUseCases() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            Industries & Use Cases
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-normal">
            Proven expertise across diverse sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-6 sm:p-8 bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
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
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {industry.title}
                  </h3>

                  {/* Pain Point */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary/70">The Challenge:</p>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 text-sm">
                      {industry.pain}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-2 pt-3 border-t border-gray-200">
                    <p className="text-sm font-semibold text-primary">Our Solution:</p>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 text-sm">
                      {industry.solution}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex items-center gap-2 text-primary font-semibold pt-4 group-hover:gap-3 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
