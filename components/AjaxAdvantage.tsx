'use client'

import { ArrowRight } from 'lucide-react'

export default function AjaxAdvantage() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            Discover the AJAX Global Advantage
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-red-500">
            Empowering your business to thrive globally.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Icon Card */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm bg-violet-100 rounded-3xl p-12 flex items-center justify-center">
              <div className="w-32 h-32 bg-emerald-500 rounded-full flex items-center justify-center">
                <div className="relative w-20 h-20">
                  <div className="absolute top-0 left-4 w-8 h-8 bg-emerald-600 rounded-full" />
                  <div className="absolute top-8 left-0 w-8 h-8 bg-emerald-600 rounded-full" />
                  <div className="absolute top-8 right-0 w-8 h-8 bg-emerald-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content Cards */}
          <div className="space-y-6">
            {/* Top Card - Flexible yet standardized */}
            <div className="bg-pink-400 rounded-3xl p-8 sm:p-10 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Flexible yet standardized
              </h3>
              <p className="text-lg sm:text-xl font-normal">
                Build custom workflows with a no-code interface while maintaining org-wide consistency.
              </p>
            </div>

            {/* Bottom Card - Products teams love to use */}
            <div className="bg-pink-400 rounded-3xl p-8 sm:p-10 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Products teams love to use
              </h3>
              <p className="text-lg sm:text-xl font-normal">
                Help your entire organization adopt tools they enjoy using every day.
              </p>
            </div>

            {/* Right bottom - Blue heart card */}
            <div className="bg-blue-100 rounded-3xl p-8 flex items-center justify-center h-48">
              <div className="w-24 h-24 bg-indigo-500 rounded-full flex items-center justify-center">
                <div className="text-4xl">♥</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
