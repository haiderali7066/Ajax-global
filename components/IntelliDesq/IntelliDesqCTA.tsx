'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function IntelliDesqCTA() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground">
          Intelligence That Makes Teams
          <span className="block text-primary">Unstoppable.</span>
        </h2>

        <p className="text-lg text-muted-foreground font-normal max-w-2xl mx-auto">
          See how IntelliDesq™ transforms operations. Request a demo and talk to our team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            asChild
          >
            <Link href="#demo" className="flex items-center gap-2">
              Request a Demo
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
