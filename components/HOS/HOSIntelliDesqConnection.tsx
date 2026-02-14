'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HOSIntelliDesqConnection() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-slide-in-up">
            <h2 className="text-4xl sm:text-5xl font-light text-foreground">
              HOS + IntelliDesq™
            </h2>
            <div className="space-y-4">
              <p className="text-xl text-foreground font-normal">
                Human teams enhanced with AI intelligence.
              </p>
              <p className="text-lg text-muted-foreground font-normal">
                Our HOS teams are powered by IntelliDesq™, our operational intelligence platform. This combination gives your teams real-time insights, predictive analytics, and data-driven decision-making capabilities that traditional outsourcing simply can't match.
              </p>
              <p className="text-lg text-muted-foreground font-normal">
                Better decisions. Faster execution. Higher ROI.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 group w-fit"
              asChild
            >
              <Link href="/intellidesq" className="flex items-center gap-2">
                Explore IntelliDesq™
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-12 h-96 flex items-center justify-center animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white border-4 border-primary/20 mb-4">
                <div className="text-4xl">🧠</div>
              </div>
              <p className="text-foreground font-semibold">AI-Powered Intelligence</p>
              <p className="text-sm text-muted-foreground mt-2">Real-time insights & analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
