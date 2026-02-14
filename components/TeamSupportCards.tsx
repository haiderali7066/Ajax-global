"use client";

import { Shield, Settings, BarChart3, Headphones, Rocket } from "lucide-react";

const teamCards = [
  {
    title: "Security & Control",
    subtitle: "Security and control built into daily operations",
    description:
      "People, systems, and data stay protected as your business scales—without slowing teams down.",
    bgColor: "from-purple-100/80 to-purple-50",
    textColor: "text-purple-900",
    iconColor: "text-purple-600",
    icon: Shield,
  },
  {
    title: "Operations & Back Office",
    subtitle: "Operations that run quietly in the background",
    description:
      "The work gets done, systems stay organized, and nothing falls through the cracks.",
    bgColor: "from-amber-100/80 to-amber-50",
    textColor: "text-amber-900",
    iconColor: "text-amber-600",
    icon: Settings,
  },
  {
    title: "Leadership Visibility",
    subtitle: "Leadership visibility across the entire business",
    description:
      "Clear insight into what's working, what's not, and where to act without digging through noise.",
    bgColor: "from-orange-100/80 to-orange-50",
    textColor: "text-orange-900",
    iconColor: "text-orange-600",
    icon: BarChart3,
  },
  {
    title: "Customer Support",
    subtitle: "Customer support that doesn't collapse as you grow",
    description:
      "Always-on teams, intelligent automation, and clear processes—so customers get answers, not excuses.",
    bgColor: "from-blue-100/80 to-blue-50",
    textColor: "text-blue-900",
    iconColor: "text-blue-600",
    icon: Headphones,
  },
  {
    title: "Sales Execution",
    subtitle: "Sales execution without missing opportunities",
    description:
      "From first touch to follow-up, every step handled, tracked, and moved forward systematically.",
    bgColor: "from-pink-100/80 to-pink-50",
    textColor: "text-pink-900",
    iconColor: "text-pink-600",
    icon: Rocket,
  },
];

export default function TeamSupportCards() {
  // We duplicate the array to create a seamless infinite loop
  const duplicatedCards = [...teamCards, ...teamCards];

  return (
    <section className="py-20 sm:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground text-center">
          Built to support every team
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full max-w-[100vw]">
        {/* Edge fade gradients for better UX */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex w-max animate-continuous-train">
          <div className="flex gap-6 px-3">
            {duplicatedCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className={`
                    flex-shrink-0 w-[300px] sm:w-[400px] 
                    bg-gradient-to-br ${card.bgColor} 
                    border border-white/40
                    rounded-3xl p-8 
                    transition-all duration-300 
                    hover:shadow-xl hover:-translate-y-2 
                    group cursor-pointer
                  `}
                >
                  <div className={`${card.textColor} h-full flex flex-col`}>
                    {/* Header: Icon + Small Title */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`p-3 rounded-xl bg-white/60 shadow-sm ${card.iconColor}`}
                      >
                        <Icon strokeWidth={2.5} className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold tracking-wide uppercase opacity-80">
                        {card.title}
                      </h3>
                    </div>

                    {/* Main Title */}
                    <h4 className="text-2xl sm:text-3xl font-bold leading-tight mb-4 group-hover:opacity-80 transition-opacity">
                      {card.subtitle}
                    </h4>

                    {/* Description */}
                    <p className="text-base leading-relaxed opacity-80 mt-auto">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes continuous-train {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Translates exactly half of the container width to loop seamlessly */
            transform: translateX(-50%);
          }
        }
        
        .animate-continuous-train {
          /* Adjust the 40s duration to make the train faster or slower */
          animation: continuous-train 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
