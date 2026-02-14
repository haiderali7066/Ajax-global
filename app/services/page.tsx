import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Services | AJAX Global - Human Outsourcing & AI Intelligence',
  description: 'Explore our comprehensive services: Human Outsourcing Solutions (HOS), IntelliDesq™ platform, business operations, and intelligent automation.',
  keywords: ['services', 'human outsourcing', 'business operations', 'AI platform', 'BPO', 'customer support'],
  openGraph: {
    title: 'AJAX Global Services | Transform Your Operations',
    description: 'Human Outsourcing, Business Operations Management, and AI-Powered Intelligence Platform.',
    type: 'website',
  },
}

const services = [
  {
    title: 'Human Outsourcing Solutions (HOS)',
    description: 'Dedicated teams tailored to your specific operational needs',
    features: [
      'Talent sourcing & recruitment',
      'Onboarding & training',
      'Performance management',
      'Continuous optimization',
      '24/7 coverage available',
      'Transparent reporting',
    ],
    cta: 'Explore HOS',
    href: '/hos',
  },
  {
    title: 'IntelliDesq™ Platform',
    description: 'AI-powered operational intelligence that drives smarter decisions',
    features: [
      'Real-time operational insights',
      'Predictive analytics',
      'Decision support system',
      'Custom dashboards',
      'API integration',
      'ML-powered recommendations',
    ],
    cta: 'Learn About IntelliDesq',
    href: '/intellidesq',
  },
  {
    title: 'Sales Operations',
    description: 'Streamline your sales process from lead to close',
    features: [
      'CRM management',
      'Lead qualification',
      'Pipeline management',
      'Sales analytics',
      'Territory management',
      'Deal support',
    ],
    cta: 'Get Started',
    href: '/contact',
  },
]

const processes = [
  {
    step: '1',
    title: 'Discovery & Assessment',
    description: 'We analyze your operations, identify opportunities, and design a tailored solution.',
  },
  {
    step: '2',
    title: 'Team Building & Setup',
    description: 'Select and onboard your dedicated team with comprehensive training.',
  },
  {
    step: '3',
    title: 'Launch & Optimization',
    description: 'Go live with continuous monitoring and real-time optimization.',
  },
  {
    step: '4',
    title: 'Scale & Enhance',
    description: 'Grow your team or add AI intelligence as your needs evolve.',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <PageHeader
        title="Our Services"
        description="Comprehensive solutions to scale your operations with human excellence and AI intelligence"
      />

      {/* Services Grid */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 sm:p-10 bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full animate-scroll-scale"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

                {/* Content */}
                <div className="relative z-10 space-y-6 flex-1">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 group/feature">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/feature:animate-loop-bounce" />
                        <span className="text-foreground text-sm group-hover/feature:text-primary/80 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 text-primary font-semibold group/cta hover:gap-3 transition-all duration-300"
                >
                  {service.cta}
                  <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
              Our Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-normal">
              From initial consultation to ongoing optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((process, index) => (
              <div
                key={index}
                className="relative group animate-scroll-fade-in"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {/* Connection line */}
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-6 w-12 h-1 bg-gradient-to-r from-primary/50 to-transparent group-hover:from-primary group-hover:via-accent group-hover:to-primary transition-all duration-500" />
                )}

                <div className="rounded-2xl p-6 sm:p-8 bg-white border border-gray-200 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 h-full group-hover:animate-loop-glow">
                  {/* Step number */}
                  <div className="text-5xl font-bold text-primary/20 group-hover:text-primary/60 transition-colors duration-300 mb-4 group-hover:animate-text-shimmer">
                    {process.step}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed font-normal text-sm">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 animate-scroll-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
                Why Choose AJAX Global?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Proven Track Record',
                    description: 'Over 500+ enterprise clients trusting us with their critical operations',
                  },
                  {
                    title: 'AI-Powered Intelligence',
                    description: 'Our proprietary IntelliDesq™ platform enhances every decision',
                  },
                  {
                    title: 'Flexible Scaling',
                    description: 'Grow from startup to enterprise with our scalable model',
                  },
                  {
                    title: 'Transparent Partnership',
                    description: 'Real-time dashboards and regular reporting keep you informed',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/40 group-hover:animate-loop-bounce transition-all duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300" />
                    </div>
                    <div className="group-hover:translate-x-2 transition-transform duration-300">
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                      <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 p-12 h-96 flex items-center justify-center animate-scroll-scale hover:shadow-xl transition-all duration-500 group">
              <div className="absolute inset-0 animate-shimmer" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative z-10 text-center space-y-4 group-hover:animate-loop-bounce">
                <div className="text-5xl font-bold text-primary group-hover:animate-text-shimmer">500+</div>
                <div className="text-xl text-foreground">Enterprise Partners</div>
                <div className="text-muted-foreground">Transforming operations globally</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-loop-slide" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-loop-bounce" />
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground animate-scroll-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground animate-scroll-fade-in" style={{ animationDelay: '0.1s' }}>
            Schedule a consultation with our team to explore the perfect solution for your business
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-accent text-white rounded-full transition-all duration-300 hover:shadow-xl hover:scale-110 font-semibold animate-loop-glow group"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
