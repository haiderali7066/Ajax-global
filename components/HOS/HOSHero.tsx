'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HOSHero() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-foreground leading-tight">
            Human Outsourcing,
            <span className="block">Engineered for Performance.</span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl text-foreground font-normal">
            AJAX Global provides reliable, trained, and scalable human teams backed by structured processes and AI-assisted workflows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-2">
                Build Your Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-foreground/20 hover:border-primary/50 hover:bg-secondary transition-all duration-300 hover:shadow-sm bg-white text-foreground"
              asChild
            >
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
