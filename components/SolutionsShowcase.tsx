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
        
      </div>
    </section>
  )
}
