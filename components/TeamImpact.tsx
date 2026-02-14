'use client'

import { BarChart3, TrendingUp, Zap, CheckCircle2, Code2 } from 'lucide-react'

export default function TeamImpact() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Predict Risk Early',
      color: 'text-yellow-400',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Boost Sales Velocity',
      color: 'text-blue-400',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Scale Marketing Output',
      color: 'text-cyan-400',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Resolve Tickets Faster',
      color: 'text-purple-400',
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Drive Quality Sprints',
      color: 'text-green-400',
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-black relative overflow-hidden">
      {/* Colorful accent icon */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-500 rounded-full blur-md opacity-70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
            <span className="block">Your teams' impact.</span>
            <span className="block">Multiplied by AI.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Learn more about AJAX Global AI offering
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:translate-x-2"
              >
                <div className={`${feature.color} mt-1 flex-shrink-0`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-white group-hover:text-gray-200 transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-6 sm:p-8 border border-gray-800 overflow-hidden">
              {/* Dashboard Content */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-sm uppercase tracking-widest">AJAX WORK MANAGEMENT</h3>
                  <div className="text-xs text-gray-500">2025 Q4 portfolio</div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Risk Analyzer */}
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-blue-400 text-xs font-medium">Risk analyzer</span>
                    </div>
                    <div className="h-12 bg-gray-700 rounded opacity-50" />
                  </div>

                  {/* Project Risks */}
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-red-500 transition-colors duration-300">
                    <div className="text-xs text-gray-400 mb-2">Spot project risks</div>
                    <div className="space-y-1">
                      <div className="h-2 bg-red-500 rounded-full w-3/4 opacity-70" />
                      <div className="h-2 bg-orange-500 rounded-full w-2/3 opacity-70" />
                    </div>
                  </div>

                  {/* AI Risk Insights */}
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-purple-500 transition-colors duration-300 col-span-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span className="text-purple-400 text-xs font-medium">AI risk insights</span>
                    </div>
                    <div className="text-xs text-gray-400">AI risks suggestions</div>
                  </div>

                  {/* AI Migration */}
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-pink-500 transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full" />
                      <span className="text-pink-400 text-xs font-medium">AI risk migration</span>
                    </div>
                    <div className="text-xs text-gray-500">Notify project owner</div>
                  </div>
                </div>
              </div>

              {/* Subtle gradient overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
