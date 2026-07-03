"use client";

import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { securityItems } from "@/lib/services-data";

export default function SecuritySection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 text-center mb-10"
            style={{ letterSpacing: "-0.02em" }}
          >
            Enterprise-grade{" "}
            <span className="font-extrabold text-primary">security & control</span>
          </h2>
        </Reveal>

        {/* Security cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {securityItems.map((item, i) => (
            <Reveal key={i} delay={i * 0.1} direction={i === 0 ? "left" : "right"}>
              <div
                className="rounded-2xl border p-8 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                style={{ borderColor: `${item.accentColor}25` }}
              >
                {/* Hover bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: `${item.color}60` }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: item.color }}
                    >
                      <Shield className="w-5 h-5" style={{ color: item.accentColor }} />
                    </div>
                    <h3 className="text-lg font-extrabold" style={{ color: item.accentColor }}>
                      {item.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {item.features.map((f, j) => (
                      <div key={j}>
                        <h4 className="font-extrabold text-gray-900 mb-1 text-sm">{f.title}</h4>
                        <p className="text-sm font-light leading-relaxed" style={{ color: item.accentColor }}>
                          {f.desc}
                        </p>
                        {j < item.features.length - 1 && <div className="mt-4 border-b border-gray-100" />}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 mt-6 text-sm font-bold hover:gap-2 transition-all"
                    style={{ color: item.accentColor }}
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Integrations card */}
        <Reveal>
          <div
            className="rounded-2xl border border-violet-100 p-8 sm:p-10 grid md:grid-cols-2 gap-8 items-center hover:shadow-lg transition-all duration-300"
            style={{ background: "#f8f7ff" }}
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                Integrations & apps
              </h3>
              <p className="text-gray-500 font-light mb-6 leading-relaxed">
                Connect your stack or build your own with our open API
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline group/link"
              >
                Explore integrations{" "}
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="rounded-xl border border-violet-100 bg-white p-4">
              <div className="text-xs font-black text-gray-700 mb-3 uppercase tracking-widest">Leads</div>
              <div className="space-y-2">
                {["James Smith — 500", "Philip Rogers — 50", "Paola Santos — 1500", "Donna Sege — 600"].map(
                  (lead, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs text-gray-600 py-2 border-b border-gray-50"
                    >
                      <span className="font-medium">{lead.split("—")[0]}</span>
                      <span className="font-black text-primary">{lead.split("—")[1]}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
