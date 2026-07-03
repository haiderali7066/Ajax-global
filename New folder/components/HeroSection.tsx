'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 sm:pt-32 pb-24 sm:pb-40">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-300 hover:border-primary/50 transition-colors duration-300">
            <span className="text-sm font-medium text-foreground">AI Solutions</span>
          </div>

          {/* Main Headline - Serif style with proper line breaks */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-foreground leading-tight">
            Your All-in-One
            <span className="block">Google for</span>
            <span className="block">Outsourcing & AI Growth.</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-3xl text-xl text-foreground font-normal">
            Everything your business needs to think, execute, and scale — in one place.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Supporting features */}
          <div className="pt-6 text-sm text-foreground font-medium space-y-2">
            <p>24/7 coverage • Dedicated teams • Security-first operations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
