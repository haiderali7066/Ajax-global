"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TrendingUp, Users, Settings2, BarChart3, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const cases = [
  {
    tab: "Sales Ops", color: "#7c3aed", icon: TrendingUp, title: "Sales Operations",
    problem: "Inconsistent pipeline management and missed forecasting signals",
    solution: "IntelliDesq™ provides real-time deal intelligence, predicts close probability, and optimizes team allocation across every stage of the funnel.",
    metric: "3.2×", metricLabel: "Average pipeline increase",
  },
  {
    tab: "Customer Support", color: "#4f46e5", icon: Users, title: "Customer Support",
    problem: "Reactive support with delayed response and inconsistent service quality",
    solution: "IntelliDesq™ prioritizes tickets by urgency and impact, predicts customer churn risk, and ensures consistent service quality at every touchpoint.",
    metric: "98%", metricLabel: "Average CSAT score",
  },
  {
    tab: "Operations", color: "#0ea5e9", icon: Settings2, title: "Business Operations",
    problem: "Fragmented processes and poor cross-team coordination and visibility",
    solution: "IntelliDesq™ unifies workflows, identifies process gaps and bottlenecks, and optimizes resource allocation for maximum operational efficiency.",
    metric: "40%", metricLabel: "Cost reduction",
  },
  {
    tab: "Management", color: "#f59e0b", icon: BarChart3, title: "Management & Reporting",
    problem: "Delayed insights leading to reactive and costly strategic decisions",
    solution: "IntelliDesq™ delivers real-time dashboards and predictive analytics, enabling proactive leadership and strategic agility across your business.",
    metric: "14 days", metricLabel: "Avg prediction horizon",
  },
];

export default function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section className="py-14 sm:py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-10">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            Use cases & <span className="font-extrabold text-transparent bg-clip-text bg-primary">industries</span>
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="flex gap-2 justify-center mb-10 flex-wrap">
          {cases.map((cas, i) => {
            const Icon = cas.icon;
            return (
              <button key={i} onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 h-10 rounded-full text-sm font-semibold transition-all duration-200 border ${active === i ? "text-white border-transparent shadow-md" : "text-gray-500 border-gray-200 bg-white hover:border-gray-300"}`}
                style={active === i ? { background: cas.color, boxShadow: `0 4px 16px ${cas.color}35` } : {}}
              >
                <Icon className="w-3.5 h-3.5" />{cas.tab}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-400 font-light">{c.problem}</p>
              </div>
              <div className="p-5 rounded-2xl border" style={{ background: `${c.color}06`, borderColor: `${c.color}20` }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: c.color }}>IntelliDesq™ Solution</p>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{c.solution}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black" style={{ color: c.color }}>{c.metric}</div>
                <div className="text-sm text-gray-400 font-light">{c.metricLabel}</div>
              </div>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 px-6 h-10 rounded-full font-semibold text-white text-sm" style={{ background: c.color }}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>

            <div className="rounded-2xl border bg-white overflow-hidden" style={{ borderColor: `${c.color}20`, boxShadow: `0 20px 60px ${c.color}10` }}>
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg,${c.color},${c.color}60)` }} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${c.color}10` }}>
                      {(() => { const Icon = c.icon; return <Icon className="w-4 h-4" style={{ color: c.color }} />; })()}
                    </div>
                    <span className="font-semibold text-gray-800 text-sm">{c.tab} Intelligence</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium text-emerald-700 bg-emerald-50">Live</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[["Predictions Today", "1,847", "↑ 23%"], ["Accuracy Rate", "94%", "Stable"], ["Decisions Aided", "312", "↑ 18%"], ["Alerts Fired", "7", "↓ -40%"]].map(([l, v, n], i) => (
                    <div key={i} className="p-3 rounded-xl border border-gray-100" style={{ background: "#fafafa" }}>
                      <p className="text-[10px] text-gray-400 mb-0.5">{l}</p>
                      <p className="text-base font-bold text-gray-800">{v}</p>
                      <p className="text-[10px] text-emerald-600 font-medium">{n}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
