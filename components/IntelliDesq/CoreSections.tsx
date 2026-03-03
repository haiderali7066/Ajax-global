"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Brain, Target, BarChart3, GitBranch, Network, Eye, Zap, TrendingUp, CheckCircle, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { fadeUp, slideLeft, slideRight, stagger, scaleIn } from "@/lib/motion";

// ─── CORE CAPABILITIES ────────────────────────────────────────────────────────
const caps = [
  { icon: Brain, title: "Task Intelligence", desc: "Understands work patterns and task flow to predict bottlenecks and optimize sequences", color: "#7c3aed" },
  { icon: Target, title: "Decision Support", desc: "Provides recommendations and insights — keeping humans in control while amplifying effectiveness", color: "#4f46e5" },
  { icon: BarChart3, title: "Performance Insights", desc: "Tracks KPIs, productivity metrics, and real-time performance indicators across all teams", color: "#0ea5e9" },
  { icon: GitBranch, title: "Workflow Optimization", desc: "Identifies bottlenecks, inefficiencies, and opportunities for systematic process improvement", color: "#f59e0b" },
  { icon: Network, title: "AI Coordination", desc: "Aligns people, tools, and processes for seamless team execution at every level of delivery", color: "#10b981" },
];

export function CoreCapabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-14 sm:py-20" style={{ background: "#f8f7ff" }} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-10">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            Core <strong>capabilities</strong>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {caps.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div key={i} variants={scaleIn} custom={i} initial="hidden" animate={inView ? "show" : "hidden"}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all duration-300 cursor-default relative overflow-hidden"
                whileHover={{ y: -6 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                  style={{ background: `linear-gradient(135deg,${c.color}06,transparent)` }} />
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                  style={{ background: `${c.color}12`, border: `1.5px solid ${c.color}20` }}>
                  <Icon className="w-5 h-5" style={{ color: c.color }} />
                </div>
                <h3 className="font-semibold text-gray-800 text-xs mb-2 group-hover:text-violet-700 transition-colors">{c.title}</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{c.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
                  style={{ background: `linear-gradient(90deg,${c.color},transparent)` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
const steps = [
  { icon: Eye, num: "01", title: "Observes", desc: "Monitors workflows and data across all operations continuously", color: "#7c3aed" },
  { icon: Brain, num: "02", title: "Analyzes", desc: "Detects patterns, trends, anomalies, and opportunities instantly", color: "#4f46e5" },
  { icon: Zap, num: "03", title: "Provides", desc: "Delivers actionable intelligence and forward-looking insights", color: "#0ea5e9" },
  { icon: TrendingUp, num: "04", title: "Enhances", desc: "Elevates human execution quality and decision-making at every level", color: "#10b981" },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-14 sm:py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-14">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            How <span className="bg-primary text-white px-2">IntelliDesq™</span> works
          </h2>
        </motion.div>
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-100 overflow-hidden">
            <motion.div className="h-full" style={{ background: "linear-gradient(90deg,#7c3aed,#4f46e5,#0ea5e9,#10b981)", transformOrigin: "left" }}
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} variants={fadeUp} custom={i} initial="hidden" animate={inView ? "show" : "hidden"}
                  className="flex flex-col items-center text-center" whileHover={{ y: -6 }}
                >
                  <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 ring-4 ring-white"
                    style={{ background: `${s.color}12`, border: `2px solid ${s.color}25` }}>
                    <Icon className="w-8 h-8" style={{ color: s.color }} />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: s.color }}>{i + 1}</div>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 w-full shadow-sm hover:border-violet-200 hover:shadow-md transition-all duration-300 group">
                    <div className="text-4xl font-black text-gray-100 mb-2 group-hover:text-gray-200 transition-colors">{s.num}</div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm group-hover:text-violet-600 transition-colors">{s.title}</h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── INTELLIDESQ + HOS ────────────────────────────────────────────────────────
const points = [
  { title: "Better decisions", sub: "Real-time insights guide every action your teams take", color: "#a78bfa" },
  { title: "Faster execution", sub: "Workflows continuously optimized for speed and efficiency", color: "#7dd3fc" },
  { title: "Higher performance", sub: "Measurable, KPI-driven improvements in every metric", color: "#6ee7b7" },
];

export function IntelliDesqPlusHOS() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden" style={{ background: "#022c22" }} ref={ref}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
      <motion.div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(16,185,129,0.15) 0%,transparent 65%)", filter: "blur(60px)" }}
        animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={slideLeft} initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-8">
            <div>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-tight" style={{ letterSpacing: "-0.02em" }}>
                IntelliDesq™ +<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Human Outsourcing</span>
              </h2>
              <p className="text-white/40 font-light leading-relaxed mt-4">
                When elite human teams combine with operational intelligence, performance becomes{" "}
                <span className="text-white/80">truly unstoppable</span>.
              </p>
            </div>
            <div className="space-y-3">
              {points.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 + i * 0.09 }}
                  className="flex items-start gap-3 group cursor-default p-4 rounded-xl border border-white/[0.06] hover:border-white/15 transition-all"
                  style={{ background: "rgba(255,255,255,0.03)" }} whileHover={{ x: 6 }}
                >
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: p.color }} />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: p.color }}>{p.title}</p>
                    <p className="text-xs text-white/35 font-light mt-0.5">{p.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link href="/hos">
              <motion.button whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-6 h-11 rounded-full font-semibold text-emerald-800 text-sm bg-white hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                Explore HOS <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden" animate={inView ? "show" : "hidden"}>
            <div className="rounded-2xl border border-white/[0.08] overflow-hidden"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", boxShadow: "0 24px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)" }}>
              <div className="h-px w-full" style={{ background: "linear-gradient(90deg,transparent,rgba(52,211,153,0.6),rgba(45,212,191,0.5),transparent)" }} />
              <div className="p-8 text-center space-y-7">
                <div className="flex items-center justify-center gap-6">
                  <motion.div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/[0.08]"
                    style={{ background: "rgba(16,185,129,0.2)" }} animate={{ rotate: [0, 4, -4, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                    <Brain className="w-7 h-7 text-emerald-400" />
                  </motion.div>
                  <motion.span className="text-3xl font-black text-white/40" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>+</motion.span>
                  <motion.div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/[0.08]"
                    style={{ background: "rgba(20,184,166,0.2)" }} animate={{ rotate: [0, -4, 4, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}>
                    <Users className="w-7 h-7 text-teal-400" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Unstoppable Performance</h3>
                  <p className="text-white/35 text-sm">Intelligence meets execution</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[["10×", "Speed", "#34d399"], ["40%", "Savings", "#2dd4bf"], ["98%", "Quality", "#a3e635"]].map(([v, l, c]) => (
                    <motion.div key={l} className="rounded-xl p-3 text-center border border-white/[0.06] cursor-default"
                      style={{ background: "rgba(255,255,255,0.04)" }} whileHover={{ scale: 1.07, background: "rgba(16,185,129,0.15)" }}>
                      <div className="text-lg font-extrabold text-white">{v}</div>
                      <div className="text-[10px] text-white/30 mt-0.5">{l}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-2 pt-2 border-t border-white/[0.05]">
                  {[["Decision Engine", "94%", "#10b981"], ["Workflow AI", "88%", "#14b8a6"], ["Compliance", "99%", "#84cc16"]].map(([label, pct, color]) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="text-[10px] text-white/30 w-28 truncate">{label}</span>
                      <div className="flex-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                        <motion.div className="h-full rounded-full" style={{ background: color, color }}
                          initial={{ width: 0 }} animate={inView ? { width: pct } : {}} transition={{ delay: 0.8, duration: 1 }} />
                      </div>
                      <span className="text-[10px] text-white/30 w-8 text-right">{pct}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
