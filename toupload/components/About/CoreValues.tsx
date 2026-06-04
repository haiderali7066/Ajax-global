"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Lock, Shield, Star, TrendingUp, Zap } from "lucide-react";
import { fadeUp } from "./about.variants";

const VALUES = [
  { Icon: Shield,     title: "Reliability",         desc: "We deliver on time, every time — no excuses, no surprises." },
  { Icon: Star,       title: "Integrity",            desc: "Transparency and honesty in every engagement we take on." },
  { Icon: Zap,        title: "Innovation",           desc: "Continuous improvement through smarter processes and advanced technologies." },
  { Icon: Heart,      title: "Customer-Centricity",  desc: "Your growth defines our success. We measure ourselves by your results." },
  { Icon: TrendingUp, title: "Accountability",       desc: "We take ownership of outcomes, not just tasks." },
  { Icon: Lock,       title: "Confidentiality",      desc: "Your data and operations remain secure and protected at all times." },
];

export default function CoreValues() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 sm:py-32" style={{ background: "#f8f7ff" }} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary block mb-4">Core Values</span>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            Principles that <strong>drive everything</strong> we do
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-sm mx-auto text-sm">
            Six pillars behind every decision we make.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              custom={i % 3}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="group bg-white rounded-2xl p-7 border border-gray-200/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-default relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Hover top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
