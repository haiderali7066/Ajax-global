'use client'

import { TrendingUp, Phone, Briefcase, ShoppingCart } from 'lucide-react'

const useCases = [
  {
    icon: TrendingUp,
    title: 'Sales Operations',
    pain: 'Scaling sales teams without hiring overhead',
    solution: 'Dedicated SDRs, AEs, and support staff trained to your process',
  },
  {
    icon: Phone,
    title: 'Customer Support Operations',
    pain: 'Managing customer volume spikes and retention',
    solution: 'Round-the-clock support teams integrated with your systems',
  },
  {
    icon: Briefcase,
    title: 'Business & Back-Office Operations',
    pain: 'Administrative burden slowing down growth',
    solution: 'Expert operators handling processes, compliance, and data',
  },
  {
    icon: ShoppingCart,
    title: 'Property & E-commerce Operations',
    pain: 'Complex multi-channel fulfillment and support',
    solution: 'Specialized teams for order management, customer care, and optimization',
  },
]

export default function UseCases() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground">
            Use Cases & Industries
          </h2>
          <p className="text-lg text-muted-foreground font-normal">
            From pain to solution—see how HOS works in your industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, i) => {
            const Icon = useCase.icon
            return (
              <div
                key={i}
                className="group rounded-2xl p-8 bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 animate-stagger-in-1"
              >
                <div className="inline-flex p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-all duration-300 mb-4">
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                  {useCase.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-primary/70 mb-2">The Pain:</p>
                    <p className="text-sm text-muted-foreground font-normal">{useCase.pain}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-primary mb-2">Our Solution:</p>
                    <p className="text-sm text-muted-foreground font-normal">{useCase.solution}</p>
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
