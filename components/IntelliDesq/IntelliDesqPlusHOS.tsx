'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function IntelliDesqPlusHOS() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-slide-in-up">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4">
                IntelliDesq™ +
              </h2>
              <p className="text-2xl font-bold text-primary">Human Outsourcing Solutions</p>
            </div>

            <p className="text-lg text-foreground font-normal">
              When elite human teams combine with operational intelligence, performance becomes unstoppable. IntelliDesq™ empowers your HOS teams to make better decisions, execute faster, and deliver exceptional results.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Better decisions</p>
                  <p className="text-muted-foreground text-sm">Real-time insights guide every action</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Faster execution</p>
                  <p className="text-muted-foreground text-sm">Workflows optimized for speed and efficiency</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Higher performance</p>
                  <p className="text-muted-foreground text-sm">Measurable improvements in every metric</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group w-fit"
              asChild
            >
              <Link href="/hos" className="flex items-center gap-2">
                Explore HOS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="relative animate-fade-in">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-gray-200 p-8 sm:p-12 h-96 flex items-center justify-center hover:shadow-lg transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative z-10 text-center space-y-6">
                <div className="text-6xl font-light text-primary">+</div>
                <p className="text-foreground font-bold text-lg">IntelliDesq™ Powers HOS</p>
                <p className="text-muted-foreground text-sm max-w-xs">Intelligence meets execution for unstoppable performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
