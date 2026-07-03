"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Cpu, Brain, Shield, Clock, Layers, CheckCircle, ArrowRight } from "lucide-react";
import { slideLeft, slideRight } from "./shared";

export default function HOSIntelliDesqSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const features = [
    { icon: Cpu, label: "Real-time analytics dashboard" },
    { icon: Brain, label: "Predictive workflow intelligence" },
    { icon: Shield, label: "Built-in compliance monitoring" },
    { icon: Clock, label: "Automated KPI reporting & alerts" },
    { icon: Layers, label: "Seamless CRM & tool integration" },
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: "#1a1a2e" }} ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)", backgroundSize: "48px 48px" }}
      />
      <motion.div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(109,40,217,0.2) 0%,transparent 65%)", filter: "blur(60px)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={slideLeft} initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-8">
            <div>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-tight" style={{ letterSpacing: "-0.02em" }}>
                HOS +{" "}
                <span className="font-extrabold bg-primary" style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  IntelliDesq™
                </span>
              </h2>
              <p className="text-white/50 font-light leading-relaxed mt-4">
                Our HOS teams are supercharged by IntelliDesq™ — giving your teams{" "}
                <span className="text-white/80">real-time insights</span>, predictive analytics, and data-driven decision-making that traditional outsourcing can't match.
              </p>
            </div>
            <div className="space-y-3">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.09 }}
                    className="flex items-center gap-3 group cursor-default"
                    whileHover={{ x: 6 }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center shrink-0 group-hover:border-indigo-400/40 group-hover:bg-indigo-500/10 transition-all"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <Icon className="w-4 h-4 text-indigo-400" />
                    </div>
                    <span className="text-white/50 text-sm group-hover:text-white/90 transition-colors">{f.label}</span>
                    <CheckCircle className="w-4 h-4 text-emerald-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                );
              })}
            </div>
            <Link href="/intellidesq">
              <motion.button whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-2 px-6 h-11 rounded-full font-semibold text-indigo-700 text-sm bg-white hover:bg-gray-100 transition-colors">
                Explore IntelliDesq™ <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden" animate={inView ? "show" : "hidden"}>
            <div
              className="rounded-2xl border border-white/10 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(20px)", boxShadow: "0 24px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)" }}
            >
              <div className="h-px w-full" style={{ background: "linear-gradient(90deg,transparent,rgba(167,139,250,0.6),rgba(96,165,250,0.6),transparent)" }} />
              <div className="p-8">
                <div className="text-center mb-8">
                  <motion.div
                    className="inline-flex w-20 h-20 rounded-2xl items-center justify-center text-4xl mb-4 border border-white/10"
                    style={{ background: "rgba(109,40,217,0.2)" }}
                    animate={{ rotate: [0, 4, -4, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    🧠
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">AI-Powered Intelligence</h3>
                  <p className="text-white/35 text-sm mt-1">Real-time insights & intelligent automation</p>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[["10×","Faster Decisions"],["40%","Cost Reduction"],["98%","Accuracy Rate"]].map(([v,l]) => (
                    <motion.div
                      key={l}
                      className="rounded-xl p-3 text-center border border-white/[0.08] cursor-default"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                      whileHover={{ scale: 1.06, background: "rgba(109,40,217,0.2)" }}
                    >
                      <div className="text-lg font-bold text-white">{v}</div>
                      <div className="text-[10px] text-white/30 mt-0.5">{l}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-2.5">
                  {[["Decision Engine","92%"],["Workflow AI","87%"],["Compliance Monitor","99%"]].map(([label,pct], i) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="text-xs text-white/40 w-36 truncate">{label}</span>
                      <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: "linear-gradient(90deg,#7c3aed,#2563eb)" }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: pct } : {}}
                          transition={{ delay: 0.8 + i * 0.1, duration: 1 }}
                        />
                      </div>
                      <span className="text-xs text-white/40 w-8 text-right">{pct}</span>
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
