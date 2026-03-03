"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { heroFeatures, clients } from "@/lib/services-data";

export default function ServicesHero() {
  return (
    <section className="relative pt-14 pb-0 overflow-hidden bg-white">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(124,58,237,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 10%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <Reveal delay={0.08}>
          <h1
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-light text-gray-900 leading-[1.07] tracking-tight mb-6"
            style={{ letterSpacing: "-0.025em" }}
          >
            Make strategic decisions
            <br />
            <span className="font-extrabold text-primary">with confidence</span>
          </h1>
        </Reveal>

        {/* Subheadline */}
        <Reveal delay={0.16}>
          <p className="text-lg text-gray-500 font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Explore the enterprise solution that leaders trust and teams love.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.24}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:scale-105 group"
              style={{ background: "var(--primary)", boxShadow: "0 8px 28px rgba(124,58,237,0.28)" }}
            >
              Contact sales <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-gray-200 text-gray-700 rounded-full font-semibold text-sm hover:border-violet-300 hover:shadow-md transition-all duration-200"
            >
              Request a Quote
            </Link>
          </div>
        </Reveal>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {heroFeatures.map((f, i) => (
            <Reveal key={i} delay={0.14 + i * 0.1} direction="up">
              <div
                className="rounded-2xl p-6 text-left cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
                style={{ background: f.bg, color: f.textColor }}
              >
                <h3 className="text-base font-bold mb-4 leading-snug">{f.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {f.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-2.5 py-1 rounded-full font-semibold"
                      style={{ background: f.tagBg, color: f.textColor }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all"
                  style={{ color: f.accentColor }}
                >
                  ↓ Explore
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Client logos strip */}
      <div className="mt-10 border-t border-gray-100 py-5" style={{ background: "#fafafa" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-50">
              {clients.map((c, i) => (
                <span
                  key={i}
                  className="text-gray-700 font-extrabold text-sm tracking-wider uppercase hover:opacity-100 hover:text-primary transition-all cursor-default"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
