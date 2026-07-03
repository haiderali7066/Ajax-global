"use client";

import { useState } from "react";
import { Reveal, Counter } from "@/components/ui/Reveal";
import { differenceItems } from "@/lib/services-data";

export default function AJAXDifference() {
  const [activeDiff, setActiveDiff] = useState(0);

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden" style={{ background: "#0f0f1a" }}>
      {/* Glow blobs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)", filter: "blur(70px)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.13) 0%, transparent 65%)", filter: "blur(70px)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white text-center mb-10"
            style={{ letterSpacing: "-0.02em" }}
          >
            The AJAX Global{" "}
            <span
              className="font-extrabold text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #a78bfa, #38bdf8)" }}
            >
              difference
            </span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tab list */}
          <Reveal direction="left">
            <div className="space-y-2">
              {differenceItems.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 cursor-pointer transition-all duration-300 border"
                  style={{
                    background: activeDiff === i ? "rgba(124,58,237,0.18)" : "rgba(255,255,255,0.03)",
                    borderColor: activeDiff === i ? "rgba(167,139,250,0.5)" : "rgba(255,255,255,0.07)",
                  }}
                  onClick={() => setActiveDiff(i)}
                >
                  <div className="text-xs text-slate-500 mb-1 font-medium">{item.label}</div>
                  <div
                    className="text-xl font-bold transition-colors duration-300"
                    style={{ color: activeDiff === i ? "#a78bfa" : "#475569" }}
                  >
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Stats card */}
          <Reveal direction="right" delay={0.1}>
            <div
              className="rounded-2xl border border-white/10 p-8 shadow-2xl"
              style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(20px)" }}
            >
              <div className="text-5xl font-black text-white mb-1">
                <Counter end={6970} />
              </div>
              <div className="text-sm text-slate-400 font-light mb-8">hours saved per month</div>
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
                  >
                    JT
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">James Thornton</div>
                    <div className="text-xs text-violet-400">VP of Procurement, NorthEdge</div>
                  </div>
                </div>
                <p className="text-sm text-slate-300 font-light leading-relaxed italic">
                  "It's customizable to your needs. It adapts and wraps around whatever your business requires."
                </p>
                <div className="mt-4 text-lg font-black text-white">NorthEdge</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
