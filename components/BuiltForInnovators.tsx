"use client";

import { useState, useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const accordionItems = [
  {
    title: "Shape your process",
    description:
      "Customize your dashboards and workflows to elevate each engineer's experience whether they use Scrum or Kanban.",
  },
  {
    title: "Track your progress",
    description:
      "Gain comprehensive visibility into project metrics, team velocity, and sprint performance with real-time analytics and historical insights.",
  },
  {
    title: "Align your teams",
    description:
      "Foster collaboration across departments with shared goals, transparent communication, and synchronized workflows that keep everyone moving in the same direction.",
  },
];

export default function BuiltForInnovators() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Highly performant interactive background tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Using CSS variables prevents React re-renders on every pixel of mouse movement
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-20 sm:py-32 bg-slate-950 overflow-hidden group rounded-4xl mx-5 "
    >
      {/* --- INTERACTIVE BACKGROUND ELEMENTS --- */}
      {/* 1. Subtle Base Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none "
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* 2. Mouse-following Spotlight */}
      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.08), transparent 40%)",
        }}
      />

      {/* 3. Static glowing orbs for ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Heading */}
          <div className="flex flex-col justify-center sticky top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6 w-fit border border-emerald-500/20">
              <Sparkles className="w-4 h-4" />
              <span>For modern teams</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white leading-[1.1] tracking-tight">
              Built for
              <span className="block font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mt-2">
                innovators
              </span>
            </h2>
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-4">
            {accordionItems.map((item, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className={`
                    group/item rounded-2xl border transition-all duration-500 overflow-hidden backdrop-blur-sm
                    ${
                      isExpanded
                        ? "bg-emerald-400 border-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.3)]"
                        : "bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600"
                    }
                  `}
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-7 flex items-center justify-between text-left transition-all duration-300"
                    aria-expanded={isExpanded}
                  >
                    <h3
                      className={`text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300 ${isExpanded ? "text-slate-900" : "text-slate-200 group-hover/item:text-white"}`}
                    >
                      {item.title}
                    </h3>
                    <div
                      className={`
                      flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500
                      ${isExpanded ? "bg-slate-900/10 text-slate-900 rotate-180" : "bg-slate-700 text-slate-400 group-hover/item:text-white"}
                    `}
                    >
                      <ChevronDown className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                  </button>

                  {/* Smooth Grid-based Collapse Animation */}
                  <div
                    className={`
                      grid transition-all duration-500 ease-in-out
                      ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`px-6 sm:px-8 pb-6 sm:pb-8 text-base sm:text-lg leading-relaxed ${isExpanded ? "text-slate-800" : "text-slate-400"}`}
                      >
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
