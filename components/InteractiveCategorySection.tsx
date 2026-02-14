'use client'

import { useState } from 'react'
import { Zap, Database, Cloud, Users, BarChart3, Lock, Cpu, Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type MainCategory = 'Operations' | 'Intelligence' | 'Technology'

interface SubcategoryItem {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  benefits: string[]
  link: string
}

interface CategoryData {
  [key: string]: SubcategoryItem[]
}

const categoryData: CategoryData = {
  Operations: [
    {
      id: 'hos',
      title: 'Human Outsourcing',
      icon: <Users className="w-8 h-8" />,
      description: 'Elite dedicated teams trained to your standards',
      benefits: ['Expert talent pool', 'Rapid scaling', 'Performance driven', '99.2% uptime'],
      link: '/hos',
    },
    {
      id: 'staffing',
      title: 'Staffing Solutions',
      icon: <Users className="w-8 h-8" />,
      description: 'Flexible workforce management and recruitment',
      benefits: ['Quick deployment', 'Cost efficient', 'Quality assurance', 'Compliance ready'],
      link: '/services',
    },
    {
      id: 'management',
      title: 'Operations Management',
      icon: <Zap className="w-8 h-8" />,
      description: 'Streamlined operational excellence',
      benefits: ['Process optimization', 'Workflow efficiency', 'Resource allocation', 'KPI tracking'],
      link: '/services',
    },
    {
      id: 'recruitment',
      title: 'Talent Acquisition',
      icon: <Users className="w-8 h-8" />,
      description: 'Strategic hiring and team building',
      benefits: ['Top talent matching', 'Culture fit focus', 'Fast onboarding', 'Retention support'],
      link: '/services',
    },
  ],
  Intelligence: [
    {
      id: 'intellidesq',
      title: 'IntelliDesq Platform',
      icon: <BarChart3 className="w-8 h-8" />,
      description: 'AI-powered operational intelligence',
      benefits: ['Predictive analytics', 'Real-time insights', 'Automated decisions', 'Data-driven'],
      link: '/intellidesq',
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      description: 'Deep insights from your operational data',
      benefits: ['Performance metrics', 'Trend analysis', 'Forecasting', 'Custom reports'],
      link: '/intellidesq',
    },
    {
      id: 'automation',
      title: 'Intelligent Automation',
      icon: <Zap className="w-8 h-8" />,
      description: 'Smart automation that learns and adapts',
      benefits: ['Process automation', 'Error reduction', 'Time saving', 'Cost reduction'],
      link: '/intellidesq',
    },
    {
      id: 'reporting',
      title: 'Smart Reporting',
      icon: <BarChart3 className="w-8 h-8" />,
      description: 'Automated insights and comprehensive dashboards',
      benefits: ['Real-time updates', 'Custom dashboards', 'Scheduled reports', 'Executive summaries'],
      link: '/intellidesq',
    },
  ],
  Technology: [
    {
      id: 'cloud',
      title: 'Cloud Infrastructure',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Secure and scalable cloud solutions',
      benefits: ['High availability', 'Global coverage', 'Auto-scaling', 'Disaster recovery'],
      link: '/services',
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: <Cpu className="w-8 h-8" />,
      description: 'Comprehensive technical support and management',
      benefits: ['24/7 support', 'System maintenance', 'Updates & patches', 'Technical consulting'],
      link: '/services',
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Solutions',
      icon: <Database className="w-8 h-8" />,
      description: 'Enterprise-grade infrastructure management',
      benefits: ['Network optimization', 'Database management', 'Load balancing', 'Performance tuning'],
      link: '/services',
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      description: 'Advanced security and compliance measures',
      benefits: ['Data protection', 'Threat detection', 'Compliance', 'Access control'],
      link: '/services',
    },
  ],
}

interface FlipCardProps {
  item: SubcategoryItem
  index: number
}

function FlipCard({ item, index }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="group h-64 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flip-card-container w-full h-full">
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
          {/* Front Side */}
          <div className="flip-card-front bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 group-hover:border-primary/40">
            <div className="mb-4 text-primary group-hover:animate-loop-bounce transition-all duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>

          {/* Back Side */}
          <div className="flip-card-back bg-gradient-to-br from-primary to-accent rounded-2xl p-6 flex flex-col justify-between text-white hover:shadow-lg transition-all duration-300">
            <div>
              <h4 className="font-bold mb-3 text-sm">Key Benefits:</h4>
              <ul className="space-y-2">
                {item.benefits.map((benefit, i) => (
                  <li key={i} className="text-xs flex items-start gap-2">
                    <span className="text-accent mt-1">▸</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={item.link}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors mt-4"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function InteractiveCategorySection() {
  const [selectedCategory, setSelectedCategory] = useState<MainCategory>('Operations')

  const categories: MainCategory[] = ['Operations', 'Intelligence', 'Technology']
  const currentSubcategories = categoryData[selectedCategory]

  return (
    <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-loop-bounce" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-loop-slide" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-scroll-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6">
            Discover the AJAX Global Advantage
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our comprehensive suite of solutions across Operations, Intelligence, and Technology domains. Hover over cards to reveal key benefits and learn how we can transform your business.
          </p>
        </div>

        {/* Main Category Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap animate-scroll-fade-in" style={{ animationDelay: '0.1s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 text-base sm:text-lg font-semibold transition-all duration-300 rounded-full border-2 ${
                selectedCategory === category
                  ? 'bg-primary text-white border-primary shadow-lg scale-105'
                  : 'bg-white text-foreground border-gray-200 hover:border-primary/40 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Subcategories Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-scroll-scale"
          key={selectedCategory}
        >
          {currentSubcategories.map((item, index) => (
            <FlipCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-scroll-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-6">
            Ready to Experience the AJAX Global Difference?
          </h3>
          <Button
            size="lg"
            className="bg-primary hover:bg-accent text-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:shadow-xl hover:scale-110 group animate-loop-glow"
            asChild
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
