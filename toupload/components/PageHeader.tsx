'use client'

import { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  badge?: string
  children?: ReactNode
}

export default function PageHeader({
  title,
  subtitle,
  description,
  badge,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-20 sm:pt-32 pb-16 sm:pb-24">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 animate-fade-in">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-300 hover:border-primary/50 transition-colors duration-300">
              <span className="text-sm font-medium text-foreground">{badge}</span>
            </div>
          )}

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-tight">
            {title}
            {subtitle && <span className="block text-primary font-normal">{subtitle}</span>}
          </h1>

          {/* Description */}
          {description && (
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground font-normal">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
