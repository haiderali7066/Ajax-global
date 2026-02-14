'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

type TabType = 'PLAN' | 'EXECUTE' | 'RELEASE' | 'MONITOR' | 'MANAGE'

const tabContent: Record<TabType, { features: string[]; description: string }> = {
  PLAN: {
    features: ['Burndown charts', 'Sprint retrospectives', 'Velocity charts', 'AI sprints summaries'],
    description: 'Access Agile insights and engineering metrics to identify bottlenecks, and improve planning, collaboration, and productivity.'
  },
  EXECUTE: {
    features: ['Task management', 'Team collaboration', 'Progress tracking', 'Resource allocation'],
    description: 'Execute your plans efficiently with real-time collaboration tools and intelligent task distribution across teams.'
  },
  RELEASE: {
    features: ['Release planning', 'Deployment tracking', 'Version control', 'Release notes automation'],
    description: 'Streamline your release process with automated deployment pipelines and comprehensive release documentation.'
  },
  MONITOR: {
    features: ['Performance metrics', 'System health checks', 'Real-time alerts', 'Analytics dashboards'],
    description: 'Monitor your systems in real-time with comprehensive dashboards and proactive alerting systems.'
  },
  MANAGE: {
    features: ['Team management', 'Resource planning', 'Budget tracking', 'Performance reviews'],
    description: 'Manage your teams effectively with centralized dashboards and intelligent resource allocation tools.'
  }
}

export default function ProductLifecycle() {
  const [activeTab, setActiveTab] = useState<TabType>('MANAGE')

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-16">
          Your product lifecycle
          <span className="block">streamlined on one platform</span>
        </h2>

        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-3xl p-8 sm:p-12 overflow-hidden">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {(Object.keys(tabContent) as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm sm:text-base font-semibold transition-all duration-300 pb-2 border-b-2 ${
                  activeTab === tab
                    ? 'text-white border-b-white'
                    : 'text-emerald-200 border-b-transparent hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Features */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-3xl sm:text-4xl font-light text-white">
                {activeTab === 'PLAN' && 'Enhance engineering performance'}
                {activeTab === 'EXECUTE' && 'Execute with precision'}
                {activeTab === 'RELEASE' && 'Release with confidence'}
                {activeTab === 'MONITOR' && 'Monitor continuously'}
                {activeTab === 'MANAGE' && 'Manage efficiently'}
              </h3>

              {/* Features List */}
              <div className="space-y-3">
                {tabContent[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-white text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-emerald-100 leading-relaxed">
                {tabContent[activeTab].description}
              </p>

              {/* CTA Button */}
              <Button className="mt-6 bg-white text-emerald-900 hover:bg-emerald-50 rounded-full px-6 py-6 text-base font-semibold transition-all duration-300 hover:shadow-lg">
                GET STARTED
              </Button>
            </div>

            {/* Right Side - Dashboard Mockup */}
            <div className="relative h-96 sm:h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-emerald-700/30 shadow-2xl animate-slide-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl" />
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-semibold">Burndown - Sprint 127</h4>
                  <div className="text-xs text-gray-400">Filter</div>
                </div>

                {/* Mock Chart Area */}
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 flex items-end justify-around px-4 py-6">
                  {/* Mock bars */}
                  {[60, 75, 55, 70, 45, 40, 30].map((height, i) => (
                    <div key={i} className="flex-1 max-w-2 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t opacity-70 hover:opacity-100 transition-opacity" style={{ height: `${height}%` }} />
                  ))}
                </div>

                {/* Mock Data Points */}
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                  <div>16 May</div>
                  <div className="text-right">Show Breakdown</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
