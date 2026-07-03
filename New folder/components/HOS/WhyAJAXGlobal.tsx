"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Brain, UserCheck, Zap, Globe, Award } from "lucide-react";
import { fadeUp } from "./shared";

export default function WhyAJAXGlobal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const items = [
    { icon: BarChart3, title: "KPI-Driven Performance", desc: "Every team aligned to measurable outcomes — daily QA and monthly re-training cycles.", color: "#7c3aed" },
    { icon: Brain, title: "AI-Assisted Workflows", desc: "Supercharged by IntelliDesq™ for real-time insights and data-driven decision-making.", color: "#2563eb" },
    { icon: UserCheck, title: "Dedicated Account Manager", desc: "Single point of contact who knows your business, available in your local timezone.", color: "#059669" },
    { icon: Zap, title: "Scalable On Demand", desc: "Start with one agent or scale to fifty — same operational discipline at any size.", color: "#d97706" },
    { icon: Globe, title: "24/7 Global Delivery", desc: "99.9% attendance — backup resources trained and ready for uninterrupted operations.", color: "#0ea5e9" },
    { icon: Award, title: "99.2% Uptime Guarantee", desc: "Enterprise-grade SLAs with redundancy systems and 72-hour replacement guarantee.", color: "#ec4899" },
  ];

  return (
    <section className="py-16 sm:py-20" style={{ background: "#f8f7ff" }} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-12">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            Why <strong>AJAX Global</strong>
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-sm mx-auto text-sm">Six pillars that separate us from every other outsourcing provider</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i % 3}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="group bg-white rounded-2xl p-7 border border-gray-200/60 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 cursor-default relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: `linear-gradient(135deg,${a.color}04,transparent)` }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300"
                  style={{ background: `${a.color}10`, border: `1.5px solid ${a.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: a.color }} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm">{a.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{a.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
