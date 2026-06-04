"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "./about.variants";

const ITEMS = [
  { num: "01", title: "Human + AI Hybrid Model",         desc: "Emotional intelligence of real people combined with the precision of automation — results no pure-AI or pure-human team can match." },
  { num: "02", title: "Industry-Specialized Teams",      desc: "Our professionals are trained for specific verticals: property management, SaaS, e-commerce, logistics, and home services." },
  { num: "03", title: "End-to-End Solutions",            desc: "Customer support, admin services, AI chat agents and workflow automation — everything under one roof." },
  { num: "04", title: "Global 24/7 Coverage",            desc: "Serving clients across USA, Canada, Australia, and UAE with scalable 24/7 support models that never sleep." },
  { num: "05", title: "Scalable Growth Structure",       desc: "Start with one role or one AI system — expand as your business grows. No lock-in, no bloat." },
  { num: "06", title: "Performance & Quality Assurance", desc: "Every service monitored using performance benchmarks and SLAs — you always know exactly how we're performing." },
];

export default function WhatMakesUsDifferent() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary block mb-4">Our Difference</span>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            Why businesses choose <strong className="text-primary">AJAX Global</strong>
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-md mx-auto text-sm">
            We don't just outsource tasks — we build intelligent operational systems that grow with your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.num}
              variants={fadeUp}
              custom={i % 2}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex gap-5 p-7 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all bg-gray-50/60 group cursor-default"
              whileHover={{ x: 6 }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-black flex-shrink-0 bg-primary/10 text-primary transition-transform group-hover:scale-110">
                {item.num}
              </div>
              <div>
                <h3 className="text-base font-extrabold mb-1.5 text-primary">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
