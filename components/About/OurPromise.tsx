"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { slideLeft, slideRight } from "./about.variants";

const PROMISES = [
  "Clear communication at every stage",
  "Transparent pricing — no hidden fees",
  "Scalable resources on demand",
  "Quality over quantity — always",
  `A "never drop the ball" mindset`,
];

export default function OurPromise() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <motion.div variants={slideLeft} initial="hidden" animate={inView ? "show" : "hidden"}>
            <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary block mb-4">Our Promise</span>
            <h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              More than outsourcing —{" "}
              <span className="font-extrabold text-primary">a true partnership</span>
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed text-base">
              When businesses partner with AJAX Global, they gain a reliable extension of their team —
              powered by real professionals, backed by intelligent automation, and driven by measurable results.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-2 px-6 h-11 rounded-full font-semibold text-white text-sm bg-primary shadow-lg shadow-primary/30"
              >
                Start the Conversation <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Promise list */}
          <motion.div variants={slideRight} initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-3">
            {PROMISES.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.09 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50/60 hover:border-primary/20 hover:shadow-sm transition-all group cursor-default"
                whileHover={{ x: 6 }}
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm flex-1">{p}</span>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
