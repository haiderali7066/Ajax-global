"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { businessNeeds } from "@/lib/services-data";

export default function BusinessNeeds() {
  const [hoveredNeed, setHoveredNeed] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[.22em] text-primary block mb-3 text-center">
            Solutions
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 text-center mb-14"
            style={{ letterSpacing: "-0.02em" }}
          >
            Every business need,{" "}
            <span className="font-extrabold text-primary">covered</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {businessNeeds.map((need, i) => (
            <Reveal key={i} delay={i * 0.09}>
              <div
                className="rounded-2xl p-6 sm:p-8 h-52 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
                style={{ background: need.bg }}
                onMouseEnter={() => setHoveredNeed(i)}
                onMouseLeave={() => setHoveredNeed(null)}
              >
                <h3 className="text-xl font-extrabold text-white leading-tight">{need.title}</h3>
                <div className="text-xs text-white/70 font-semibold">{need.product}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-white rounded-full text-sm font-bold transition-all hover:scale-105 hover:shadow-xl group"
              style={{ background: "var(--primary)", boxShadow: "0 6px 24px rgba(124,58,237,0.25)" }}
            >
              Contact sales <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
