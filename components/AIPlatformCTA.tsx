'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function AIPlatformCTA() {
  return (
    <section className="py-20 sm:py-32 bg-black relative overflow-hidden">
      {/* Neon gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 rounded-3xl m-4 sm:m-8 pointer-events-none opacity-80" />
      
      <div className="absolute inset-0 bg-black rounded-3xl m-4 sm:m-8" />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-12">
        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white">
          The AI work platform your team will love to use
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-black rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 font-semibold"
            asChild
          >
            <Link href="/contact" className="flex items-center gap-2">
              GET STARTED
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-black rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 font-semibold"
            asChild
          >
            <Link href="/contact">CONTACT SALES</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
