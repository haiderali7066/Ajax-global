"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Counter } from "@/components/ui/Primitives";
import { stagger, scaleIn } from "@/lib/motion";

const stats = [
  { to: 10, suf: "×", label: "Faster Decisions", color: "#7c3aed" },
  { to: 40, suf: "%", label: "Cost Reduction", color: "#4f46e5" },
  { to: 98, suf: "%", label: "Accuracy Rate", color: "#0ea5e9" },
  { to: 99, suf: ".2%", label: "Uptime SLA", color: "#10b981" },
];

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="py-12 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div key={i} variants={scaleIn} custom={i}
              className="rounded-2xl p-6 text-center border border-gray-100 bg-white hover:border-violet-200 hover:shadow-lg transition-all duration-300 cursor-default"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-extrabold mb-1" style={{ color: s.color }}>
                <Counter to={s.to} suf={s.suf} />
              </div>
              <div className="text-xs text-gray-400 font-light">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
