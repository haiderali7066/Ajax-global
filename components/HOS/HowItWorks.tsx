"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, BookOpen, Users, TrendingUp } from "lucide-react";
import { fadeUp } from "./shared";

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const steps = [
    { icon: Search, num: "01", title: "Discovery Call", desc: "Define goals, roles, and expectations in a focused consultation.", color: "#7c3aed" },
    { icon: BookOpen, num: "02", title: "Elite Talent Sourcing", desc: "Multi-layer vetting — language, domain expertise, background checks.", color: "#2563eb" },
    { icon: Users, num: "03", title: "Training & Onboarding", desc: "Train-the-trainer model ensures zero knowledge transfer loss.", color: "#059669" },
    { icon: TrendingUp, num: "04", title: "Performance Management", desc: "Daily QA, weekly KPI reports, and monthly retraining cycles.", color: "#d97706" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-16">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            How it <span className="bg-amber-500 text-white px-2 ">works</span>
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-md mx-auto">A repeatable process from sourcing to continuous improvement</p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-100 overflow-hidden">
            <motion.div
              className="h-full"
              style={{ background: "linear-gradient(90deg, #7c3aed, #2563eb, #059669, #d97706)", transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="flex flex-col items-center text-center group"
                  whileHover={{ y: -6 }}
                >
                  <div
                    className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 ring-4 ring-white"
                    style={{ background: `${s.color}12`, border: `2px solid ${s.color}25` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: s.color }} />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: s.color }}>
                      {i + 1}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 w-full shadow-sm group-hover:border-gray-200 group-hover:shadow-md transition-all duration-300">
                    <div className="text-4xl font-black text-gray-100 mb-2 group-hover:text-gray-200 transition-colors">{s.num}</div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm group-hover:text-indigo-600 transition-colors">{s.title}</h3>
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
