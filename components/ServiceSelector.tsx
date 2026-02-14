'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const services = [
  { id: 'intellidesq', label: 'AI INTELLIGENT (INTELLIDESQ)', href: '/intellidesq', category: 'primary' },
  { id: 'hos', label: 'HUMAN OUTSOURCING SOLUTIONS (HOS)', href: '/hos', category: 'primary' },
  { id: 'msp', label: 'MANAGED SERVICE PROVIDER (MSP)', href: '/services', category: 'primary' },
  { id: 'it', label: 'MANAGED IT SERVICES', href: '/services', category: 'secondary' },
  { id: 'cloud', label: 'CLOUD SOLUTIONS', href: '/services', category: 'secondary' },
  { id: 'cyber', label: 'CYBERSECURITY SERVICES', href: '/services', category: 'secondary' },
  { id: 'backup', label: 'DATA BACKUP & DISASTER RECOVERY', href: '/services', category: 'secondary' },
  { id: 'server', label: 'SERVER & SYSTEM ADMINISTRATION', href: '/services', category: 'secondary' },
  { id: 'consulting', label: 'IT CONSULTING', href: '/services', category: 'primary' },
]

export default function ServiceSelector() {
  const [selected, setSelected] = useState('intellidesq')

  const selectedService = services.find(s => s.id === selected)
  const primaryServices = services.filter(s => s.category === 'primary')
  const secondaryServices = services.filter(s => s.category === 'secondary')

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center text-foreground mb-16">
          Where would you like to start
        </h2>

        {/* Service Buttons */}
        <div className="space-y-4 mb-16">
          {/* Primary Services Row */}
          <div className="flex flex-wrap justify-center gap-3">
            {primaryServices.map(service => (
              <button
                key={service.id}
                onClick={() => setSelected(service.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 border-2 ${
                  selected === service.id
                    ? 'bg-primary text-white border-primary hover:shadow-lg hover:scale-105'
                    : 'bg-white text-foreground border-foreground/30 hover:border-foreground/50 hover:shadow-md'
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>

          {/* Secondary Services Row */}
          <div className="flex flex-wrap justify-center gap-3">
            {secondaryServices.map(service => (
              <button
                key={service.id}
                onClick={() => setSelected(service.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 border-2 ${
                  selected === service.id
                    ? 'bg-primary text-white border-primary hover:shadow-lg hover:scale-105'
                    : 'bg-white text-foreground border-foreground/30 hover:border-foreground/50 hover:shadow-md'
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        {selectedService && (
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
            {/* Left side - Feature highlight card */}
            <div className="rounded-3xl bg-primary text-white p-8 sm:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6">
                <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                  Lead with clear foresight
                </h3>
                <p className="text-lg leading-relaxed opacity-95">
                  Keep strategic goals on track with AI risk flagging and cross-org data to make real-time decisions.
                </p>
                <div className="pt-4">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-primary rounded-full px-8 font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                    asChild
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      TALK TO AN EXPERT
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Placeholder for dashboard mockup */}
              <div className="mt-8 rounded-xl bg-white/10 p-6 backdrop-blur-sm border border-white/20 h-40 flex items-center justify-center">
                <div className="text-center opacity-75">
                  <p className="font-semibold mb-2">Dashboard Preview</p>
                  <p className="text-sm">Strategic Overview & AI Insights</p>
                </div>
              </div>
            </div>

            {/* Right side - Customer testimonial */}
            <div className="space-y-8">
              {/* Customer Logo */}
              <div className="inline-block bg-white border border-gray-200 rounded-lg px-6 py-4">
                <p className="text-sm font-semibold text-gray-800">HOLT • CAT</p>
              </div>

              {/* Testimonial */}
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                $4M saved with optimized processes
              </h3>

              <p className="text-lg text-foreground leading-relaxed">
                "Ajaxglobal.com gives us the visibility to get everyone on the same page and track all the moving parts of our projects."
              </p>

              <Link href="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group">
                Learn more about our solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
