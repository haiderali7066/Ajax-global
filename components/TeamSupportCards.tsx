'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const teamCards = [
  {
    title: 'Security & Control',
    subtitle: 'Security and control built into daily operations',
    description: 'People, systems, and data stay protected as your business scales—without slowing teams down.',
    bgColor: 'from-purple-100 to-purple-50',
    textColor: 'text-purple-900'
  },
  {
    title: 'Operations & Back Office',
    subtitle: 'Operations that run quietly in the background',
    description: 'The work gets done, systems stay organized, and nothing falls through the cracks.',
    bgColor: 'from-amber-100 to-amber-50',
    textColor: 'text-amber-900'
  },
  {
    title: 'Leadership Visibility',
    subtitle: 'Leadership visibility across the entire business',
    description: 'Clear insight into what\'s working, what\'s not, and where to act without digging through noise.',
    bgColor: 'from-orange-100 to-orange-50',
    textColor: 'text-orange-900'
  },
  {
    title: 'Customer Support',
    subtitle: 'Customer support that doesn\'t collapse as you grow',
    description: 'Always-on teams, intelligent automation, and clear processes—so customers get answers, not excuses.',
    bgColor: 'from-blue-100 to-blue-50',
    textColor: 'text-blue-900'
  },
  {
    title: 'Sales Execution',
    subtitle: 'Sales execution without missing opportunities',
    description: 'From first touch to follow-up, every step handled, tracked, and moved forward systematically.',
    bgColor: 'from-pink-100 to-pink-50',
    textColor: 'text-pink-900'
  }
]

export default function TeamSupportCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground text-center mb-16">
          Built to support every team
        </h2>

        {/* Scrollable Cards Container */}
        <div className="relative">
          {/* Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory hide-scrollbar"
          >
            {teamCards.map((card, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full sm:w-96 bg-gradient-to-br ${card.bgColor} rounded-2xl p-8 snap-start transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-grab active:cursor-grabbing animate-fade-in`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`${card.textColor} space-y-4`}>
                  {/* Small Title */}
                  <h3 className="text-sm font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                    {card.title}
                  </h3>

                  {/* Main Title */}
                  <h4 className="text-2xl sm:text-3xl font-bold leading-tight group-hover:text-opacity-80 transition-colors">
                    {card.subtitle}
                  </h4>

                  {/* Description */}
                  <p className="text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Controls */}
          <div className="flex gap-2 justify-center mt-8">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-primary hover:bg-accent text-white transition-all duration-300 hover:shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-primary hover:bg-accent text-white transition-all duration-300 hover:shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
