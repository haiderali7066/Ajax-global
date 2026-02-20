"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { vFadeUp } from "./shared";

type T = "PLAN" | "EXECUTE" | "RELEASE" | "MONITOR" | "MANAGE";

export default function ProductLifecycle() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });
  const [tab, setTab] = useState<T>("MANAGE");

  const tabs: Record<T, { features: string[]; description: string; heading: string }> = {
    PLAN: { heading: "Enhance engineering performance", features: ["Burndown charts", "Sprint retrospectives", "Velocity charts", "AI sprint summaries"], description: "Access Agile insights to identify bottlenecks, improve planning, collaboration, and productivity." },
    EXECUTE: { heading: "Execute with precision", features: ["Task management", "Team collaboration", "Progress tracking", "Resource allocation"], description: "Execute plans with real-time collaboration tools and intelligent task distribution." },
    RELEASE: { heading: "Release with confidence", features: ["Release planning", "Deployment tracking", "Version control", "Release automation"], description: "Streamline releases with automated deployment pipelines and documentation." },
    MONITOR: { heading: "Monitor continuously", features: ["Performance metrics", "System health", "Real-time alerts", "Analytics dashboards"], description: "Monitor systems in real-time with comprehensive dashboards and proactive alerting." },
    MANAGE: { heading: "Manage efficiently", features: ["Team management", "Resource planning", "Budget tracking", "Performance reviews"], description: "Manage teams effectively with centralised dashboards and intelligent resource allocation." },
  };
  const a = tabs[tab];

  return (
    <section className="py-20 sm:py-32 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={vFadeUp} initial="hidden" animate={iv ? "show" : "hidden"} className="text-center text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 mb-14">
          Your product lifecycle
          <span className="block font-extrabold text-indigo-600">streamlined on one platform</span>
        </motion.h2>
        <motion.div variants={vFadeUp} initial="hidden" animate={iv ? "show" : "hidden"} className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-3xl p-8 sm:p-12 overflow-hidden">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {(Object.keys(tabs) as T[]).map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 text-sm sm:text-base font-bold transition-all duration-300 pb-2 border-b-2 ${tab === t ? "text-white border-white" : "text-emerald-200 border-transparent hover:text-white"}`}>
                {t}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={tab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.32 }} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-5">
                <h3 className="text-3xl sm:text-4xl font-light text-white">{a.heading}</h3>
                <div className="space-y-3">
                  {a.features.map((f, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }} className="flex items-center gap-3 group">
                      <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-white text-lg">{f}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-emerald-100 leading-relaxed">{a.description}</p>
                <Button className="bg-white text-emerald-900 hover:bg-emerald-50 rounded-full px-7 h-12 font-bold hover:shadow-lg transition-all duration-300">GET STARTED</Button>
              </div>
              <div className="relative h-80 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-emerald-700/30 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-xs uppercase tracking-widest">Sprint Dashboard</span>
                    <span className="text-slate-400 text-xs">Live</span>
                  </div>
                  <div className="h-44 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 flex items-end justify-around px-4 py-4 gap-1">
                    {[60, 75, 55, 70, 45, 80, 65, 90, 72].map((h, i) => (
                      <motion.div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t opacity-70 hover:opacity-100 cursor-pointer" style={{ height: `${h}%` }} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.6, delay: 0.18 + i * 0.05 }} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
