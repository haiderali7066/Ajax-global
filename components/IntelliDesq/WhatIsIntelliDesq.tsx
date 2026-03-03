"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Brain, Activity } from "lucide-react";
import { slideLeft, slideRight } from "@/lib/motion";

const traits = [
  { icon: Eye, title: "Works with humans, not instead of them", sub: "Amplifies team capabilities through intelligent insights", color: "#7c3aed" },
  { icon: Brain, title: "Learns from your operations", sub: "Continuously improves by understanding your workflows", color: "#4f46e5" },
  { icon: Activity, title: "Improves continuously", sub: "Gets smarter and more valuable with every interaction", color: "#0ea5e9" },
];

const rings = [110, 78, 50];

export default function WhatIsIntelliDesq() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-14 sm:py-20 mx-6 sm:mx-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div variants={slideLeft} initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-8">
            <div>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-tight" style={{ letterSpacing: "-0.02em" }}>
                What IntelliDesq™{" "}
                <span className="font-extrabold text-transparent bg-clip-text bg-primary">actually is</span>
              </h2>
              <p className="text-lg text-slate-300 font-light leading-relaxed mt-5">
                An AI-driven operational intelligence platform designed to{" "}
                <strong className="text-white font-semibold">observe, assist, and optimize</strong>{" "}
                how teams work — in real time, at every layer of your organisation.
              </p>
            </div>
            <div className="space-y-5 mt-8">
              {traits.map((t, i) => {
                const Icon = t.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-5 group cursor-default" whileHover={{ x: 6 }}
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                      style={{ background: `${t.color}15`, border: `1px solid ${t.color}30`, boxShadow: `0 0 15px ${t.color}10` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: t.color }} />
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-slate-200 text-base group-hover:text-white transition-colors">{t.title}</p>
                      <p className="text-sm text-slate-400 font-light mt-1 leading-relaxed">{t.sub}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Brain animation */}
          <motion.div variants={slideRight} initial="hidden" animate={inView ? "show" : "hidden"} className="flex items-center justify-center mt-10 lg:mt-0">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <motion.div
                className="bg-primary absolute inset-0 m-auto w-20 h-20 rounded-full flex items-center justify-center z-20"
                style={{ boxShadow: "0 0 40px rgba(124, 58, 237, 0.4)" }}
                animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Brain className="w-8 h-8 text-white drop-shadow-md" />
              </motion.div>
              {[1, 2].map((i) => (
                <motion.div key={`pulse-${i}`} className="absolute inset-0 m-auto w-20 h-20 rounded-full border border-violet-400 z-10"
                  animate={{ scale: [1, 3.5], opacity: [0.5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 1.5, ease: "easeOut" }} />
              ))}
              {rings.map((size, i) => (
                <motion.div key={`ring-${i}`} className="absolute top-1/2 left-1/2 rounded-full border z-0"
                  style={{ width: size * 2, height: size * 2, marginTop: -size, marginLeft: -size, borderColor: `rgba(124, 58, 237, ${0.25 - i * 0.05})`, borderStyle: i === 1 ? "dashed" : "solid" }}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }} transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                    style={{ background: i === 0 ? "#8b5cf6" : i === 1 ? "#38bdf8" : "#34d399" }} />
                </motion.div>
              ))}
              {[
                { label: "Observes", pos: "absolute -right-4 top-1/4" },
                { label: "Analyzes", pos: "absolute -left-4 top-1/2" },
                { label: "Optimizes", pos: "absolute bottom-4 left-1/2 -translate-x-1/2" },
              ].map((item) => (
                <div key={item.label} className={`${item.pos} text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/80 backdrop-blur-md rounded-xl px-4 py-2 border border-slate-600 shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-30`}>
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
