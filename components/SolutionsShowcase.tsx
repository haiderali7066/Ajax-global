'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function SolutionsShowcase() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Human Outsourcing Solutions Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4">
                Human Outsourcing
              </h2>
              <h2 className="text-4xl sm:text-5xl font-light text-foreground">
                Solutions (HOS)
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              AJAX Global is the gold standard in remote workforce management — combining precision recruitment, elite training, and operational reliability that businesses can depend on.
            </p>

            <Button
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 py-6 text-base font-semibold transition-all duration-300"
              asChild
            >
              <Link href="/hos">LEARN MORE</Link>
            </Button>
          </div>

          {/* Right - Placeholder for 3D Illustration */}
          <div className="relative h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden flex items-center justify-center group hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-transparent" />
            <div className="relative z-10 text-center text-blue-600 space-y-4">
              <div className="text-6xl">📦</div>
              <p className="font-semibold text-lg">Human Outsourcing Solutions</p>
              <p className="text-sm text-blue-500">Elite workforce management platform</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16" />

        {/* Cyber Security Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Placeholder Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-96">
            {/* Top Left */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden flex items-center justify-center group hover:shadow-lg transition-all duration-300 col-span-1 row-span-2">
              <div className="text-6xl opacity-70 group-hover:opacity-100 transition-opacity">🔐</div>
            </div>

            {/* Top Right - Tall */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl overflow-hidden flex items-center justify-center group hover:shadow-lg transition-all duration-300 col-span-1 row-span-2">
              <div className="text-6xl opacity-70 group-hover:opacity-100 transition-opacity">🌐</div>
            </div>

            {/* Bottom Left */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl overflow-hidden flex items-center justify-center group hover:shadow-lg transition-all duration-300">
              <div className="text-6xl opacity-70 group-hover:opacity-100 transition-opacity">💻</div>
            </div>

            {/* Bottom Right */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl overflow-hidden flex items-center justify-center group hover:shadow-lg transition-all duration-300">
              <div className="text-6xl opacity-70 group-hover:opacity-100 transition-opacity">🔥</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-2">
                Cyber Security -
              </h2>
              <h3 className="text-4xl sm:text-5xl font-light text-foreground">
                Protecting Your Digital World
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using lorem ipsum is that it has a more-or-less normal distribution of letters.
            </p>

            {/* Icon Badges */}
            <div className="flex items-center gap-4 flex-wrap pt-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl">
                🔒
              </div>
              <span className="text-2xl font-light text-gray-400">+</span>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-xl">
                🚨
              </div>
              <span className="text-2xl font-light text-gray-400">+</span>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white text-xl">
                ✓
              </div>
            </div>

            <Button
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 py-6 text-base font-semibold transition-all duration-300"
              asChild
            >
              <Link href="/services">READ MORE</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
