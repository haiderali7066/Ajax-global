'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HOSCTA() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground">
          Build a High-Performance Team
          <span className="block">Without the Hiring Headache.</span>
        </h2>

        <p className="text-xl text-muted-foreground font-normal">
          Start your HOS journey with a personalized consultation. Let's design your ideal team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            asChild
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
      </div>
    </section>
  )
}
