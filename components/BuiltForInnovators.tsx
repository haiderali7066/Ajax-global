'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const accordionItems = [
  {
    title: 'Shape your process',
    description: 'Customize your dashboards and workflows to elevate each engineer\'s experience whether they use Scrum or Kanban.',
    isDefault: true
  },
  {
    title: 'Track your progress',
    description: 'Gain comprehensive visibility into project metrics, team velocity, and sprint performance with real-time analytics and historical insights.',
    isDefault: false
  },
  {
    title: 'Align your teams',
    description: 'Foster collaboration across departments with shared goals, transparent communication, and synchronized workflows that keep everyone moving in the same direction.',
    isDefault: false
  }
]

export default function BuiltForInnovators() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Heading */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white leading-tight">
              Built for
              <span className="block">innovators</span>
            </h2>
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  expandedIndex === index
                    ? 'bg-emerald-400 text-slate-900 ring-2 ring-emerald-300'
                    : 'bg-slate-700/50 text-white hover:bg-slate-700'
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                  className="w-full px-6 sm:px-8 py-4 sm:py-6 flex items-center justify-between text-left transition-all duration-300"
                >
                  <h3 className={`text-xl sm:text-2xl font-semibold ${expandedIndex === index ? 'text-slate-900' : 'text-white'}`}>
                    {item.title}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                      expandedIndex === index ? 'rotate-180 text-slate-900' : 'text-white'
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {expandedIndex === index && (
                  <div className="px-6 sm:px-8 pb-4 sm:pb-6 animate-slide-in-down">
                    <p className="text-base sm:text-lg leading-relaxed text-slate-900">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
