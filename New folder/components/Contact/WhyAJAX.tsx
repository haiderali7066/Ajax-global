"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock, DollarSign, RefreshCw, Shield, Users, Zap } from "lucide-react";
import { fadeUp, slideLeft, stagger, scaleIn, WHY_POINTS } from "./contact.variants";

// Map accent colours → icons (same order as WHY_POINTS)
const WHY_ICONS = [DollarSign, RefreshCw, Zap, Shield, Users, Clock] as const;

export default function WhyAJAX() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Copy */}
          <motion.div variants={slideLeft} initial="hidden" animate={inView ? "show" : "hidden"}>
            <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary block mb-4">
              Why Us
            </span>
            <h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-5"
              style={{ letterSpacing: "-0.02em" }}
            >
              Why contact{" "}
              <span className="font-extrabold text-gray-900">AJAX</span>{" "}
              <span className="font-extrabold text-primary">Global?</span>
            </h2>
            <p className="text-gray-500 font-light leading-relaxed text-base mb-8">
              We're not just a vendor — we're a growth partner. Here's what you can expect when
              you work with us.
            </p>
            <a href="#contact-form">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 h-11 rounded-full font-semibold text-white text-sm bg-primary shadow-lg shadow-primary/30"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </motion.button>
            </a>
          </motion.div>

          {/* Point grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid sm:grid-cols-2 gap-3"
          >
            {WHY_POINTS.map(({ text, accent }, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <motion.div
                  key={text}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{ y: -4, x: 4 }}
                  className="flex items-start gap-3.5 p-4 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 group cursor-default bg-white"
                >
                  <div
                    className="inline-flex p-2.5 rounded-xl shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${accent}12` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: accent }} />
                  </div>
                  <p className="text-sm font-semibold text-gray-700 leading-snug pt-1">{text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
