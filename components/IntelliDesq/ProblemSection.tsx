"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { fadeUp, slideLeft, slideRight } from "@/lib/motion";

const old = [
  { label: "Automation", desc: "Executes tasks but lacks context or the ability to adapt" },
  { label: "Chatbots", desc: "Responds to prompts but lacks operational awareness" },
  { label: "Dashboards", desc: "Shows you data but can't tell you what to do about it" },
];

const pains = [
  "Fragmented workflows that don't communicate with each other",
  "Delayed decision-making due to siloed, disconnected data",
  "Poor visibility into real-time performance and bottlenecks",
  "Reactive problem-solving instead of predictive intelligence",
  "Teams operating without actionable, real-time insights",
  "Inability to optimise operations at scale efficiently",
];

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-14 sm:py-20"
      style={{ background: "#f8f7ff" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <h2
            className="text-[clamp(1.9rem,4.2vw,3rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Traditional automation{" "}
            <span className="font-extrabold text-rose-500">
              isn't enough.
            </span>
          </h2>

          <p className="text-gray-500 font-light mt-4 max-w-xl mx-auto text-base">
            Businesses invest heavily in tools — yet still struggle with slow
            decisions, disconnected processes, and blind spots. The missing
            piece? An intelligence layer.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          
          {/* LEFT SIDE */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:col-span-2 space-y-5"
          >
            <p className="text-base font-semibold text-gray-600 mb-4">
              What you have now:
            </p>

            {old.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl border shadow-2xl border-red-100 bg-white hover:shadow-md transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-red-50">
                  <X className="w-4 h-4 text-rose-500" />
                </div>

                <div>
                  <p className="font-semibold text-gray-800 text-base">
                    {o.label}
                  </p>
                  <p className="text-sm text-gray-500 font-light mt-1 leading-relaxed">
                    {o.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT SIDE (slightly wider) */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:col-span-3 bg-white rounded-xl border border-gray-200 p-8"
            style={{ boxShadow: "0 4px 18px rgba(0,0,0,0.05)" }}
          >
            <p className="text-lg font-semibold text-gray-900 mb-6">
              What your business is missing:
            </p>

            <div className="space-y-4">
              {pains.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full mt-1 flex items-center justify-center bg-rose-50">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                  </div>

                  <span className="text-base text-gray-800 font-light leading-relaxed">
                    {p}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <motion.div
                className="flex items-center gap-2 text-lg font-semibold text-violet-600"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                IntelliDesq™ closes this gap
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}