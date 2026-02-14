'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function PrimaryCTA() {
  return (
    <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-12">
        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground">
          <span className="text-balance">Build Smarter Operations</span>
          <span className="block text-primary font-normal">Today</span>
        </h2>

        {/* Subheading */}
        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground font-normal">
          Join leading organizations that are scaling with intelligence. Your transformation starts with a single conversation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            asChild
          >
            <Link href="/contact" className="flex items-center gap-2">
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-lg border-foreground/20 hover:border-primary/50 hover:bg-secondary transition-all duration-300 hover:shadow-sm bg-white text-foreground"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Trust indicator */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-muted-foreground font-medium">
            Trusted by enterprise teams worldwide
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 flex-wrap opacity-60">
            {['Enterprise Co.', 'Global Ltd.', 'Scale Inc.', 'Future Corp.'].map((company, i) => (
              <div key={i} className="text-sm font-semibold text-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
