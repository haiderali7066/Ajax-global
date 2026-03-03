"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "./about.variants";

const STEPS = [
  { step: "01", title: "Discovery &\nConsultation",   desc: "We learn your business, goals, pain points, and operational gaps." },
  { step: "02", title: "Strategy &\nSystem Design",   desc: "Custom hybrid solution — people, processes, and AI tools tailored for you." },
  { step: "03", title: "Deployment &\nSetup",         desc: "Your team or AI system goes live — fully onboarded and ready to perform." },
  { step: "04", title: "Optimization &\nReporting",   desc: "Continuous improvement backed by performance data and regular reporting." },
];

export default function HowWeWork() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 sm:py-32" style={{ background: "#f8f7ff" }} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-20">
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary block mb-4">Process</span>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            A proven process that <strong>delivers results</strong>
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-md mx-auto">
            From first call to live operations — a clear path to success.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated horizontal connector */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-100 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="flex flex-col items-center text-center group"
                whileHover={{ y: -6 }}
              >
                {/* Circle badge */}
                <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 ring-4 ring-white bg-primary/10 border-2 border-primary/25">
                  <span className="text-lg font-black text-primary">{s.step}</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white bg-primary">
                    {i + 1}
                  </div>
                </div>
                {/* Card */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6 w-full shadow-sm group-hover:border-gray-200 group-hover:shadow-md transition-all duration-300">
                  <div className="text-4xl font-black text-gray-100 mb-2 group-hover:text-gray-200 transition-colors">{s.step}</div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm group-hover:text-primary transition-colors whitespace-pre-line leading-snug">{s.title}</h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
