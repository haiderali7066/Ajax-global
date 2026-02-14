'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function IntelliDesqHero() {
  return (
    <section className="relative pt-20 sm:pt-32 pb-24 sm:pb-40 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-300 hover:border-primary/50 transition-colors duration-300">
            <span className="text-sm font-medium text-foreground">AI-Powered Intelligence</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-foreground leading-tight">
            IntelliDesq™
            <span className="block">Is Not a Chatbot.</span>
            <span className="block text-primary">It's Operational Intelligence.</span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl text-foreground font-normal">
            IntelliDesq™ is an AI-powered intelligence layer that works alongside human teams to improve decisions, workflows, and performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
              asChild
            >
              <Link href="#demo" className="flex items-center gap-2">
                See IntelliDesq™ in Action
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
