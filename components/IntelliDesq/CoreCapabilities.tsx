'use client'

import { Brain, TrendingUp, Zap, GitBranch, Users } from 'lucide-react'

const capabilities = [
  {
    icon: Brain,
    title: 'Task Intelligence',
    description: 'Understands work patterns and task flow to predict bottlenecks and optimize sequences',
  },
  {
    icon: TrendingUp,
    title: 'Decision Support',
    description: 'Provides recommendations and insights, not commands—keeping humans in control',
  },
  {
    icon: Zap,
    title: 'Performance Insights',
    description: 'Tracks KPIs, productivity metrics, and real-time performance indicators',
  },
  {
    icon: GitBranch,
    title: 'Workflow Optimization',
    description: 'Identifies bottlenecks, inefficiencies, and opportunities for process improvement',
  },
  {
    icon: Users,
    title: 'AI-Assisted Coordination',
    description: 'Aligns people, tools, and processes for seamless team execution',
  },
]

export default function CoreCapabilities() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            Core Capabilities
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-normal">
            Five dimensions of intelligent operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <div
                key={i}
                className="group rounded-2xl p-6 sm:p-8 bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 animate-stagger-in-1"
              >
                <div className="inline-flex p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-all duration-300 mb-4">
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 font-normal text-sm">
                  {cap.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
