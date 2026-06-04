"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/services-data";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const active = testimonials[activeTestimonial];

  return (
    <section className="py-14 sm:py-20" style={{ background: "#f8f7ff" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-8"
            style={{ letterSpacing: "-0.02em" }}
          >
            Trusted by top companies{" "}
            <span className="font-extrabold text-primary">worldwide</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative rounded-3xl overflow-hidden min-h-80 grid md:grid-cols-2 border border-gray-800"
            style={{ background: "#0f0f1a" }}
          >
            {/* Visual side */}
            <div className="relative overflow-hidden min-h-64 md:min-h-0">
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${active.gradFrom}45, ${active.gradTo}20)` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-black text-white opacity-[0.1]">{active.metric}</div>
                  <div className="text-white/35 text-sm font-light mt-2">{active.metricLabel}</div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-black text-white">{active.metric}</div>
                  <div className="text-slate-400 text-sm font-light">{active.metricLabel}</div>
                </div>
                <p className="text-slate-200 text-base leading-relaxed mb-6 font-light italic">
                  "{active.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm"
                    style={{ background: `linear-gradient(135deg, ${active.gradFrom}, ${active.gradTo})` }}
                  >
                    {active.initials}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{active.name}</div>
                    <div className="text-slate-400 text-xs font-light">{active.title}</div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={() => setActiveTestimonial((a) => (a - 1 + testimonials.length) % testimonials.length)}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTestimonial((a) => (a + 1) % testimonials.length)}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="flex gap-2 ml-2">
                  {testimonials.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className="rounded-full transition-all duration-300"
                      aria-label={`Go to testimonial ${i + 1}`}
                      style={{
                        width: i === activeTestimonial ? 20 : 8,
                        height: 8,
                        background: i === activeTestimonial ? t.accentColor : "rgba(255,255,255,0.2)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
