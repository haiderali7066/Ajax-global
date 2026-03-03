"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "./about.variants";

export function PricingSnapshot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const tiers = [
    {
      label: "Associate",
      hourly: "$9",
      monthly: "$1,300/mo",
      desc: "Basic ops, data entry, ticket creation, general tasks",
      color: "#7c3aed",
    },
    {
      label: "Specialist",
      hourly: "$11.50",
      monthly: "$1,600/mo",
      desc: "Escalations, upselling, vendor outreach, advanced coordination",
      color: "#2563eb",
      featured: true,
    },
    {
      label: "Manager",
      hourly: "$14",
      monthly: "$2,000/mo",
      desc: "Team oversight, QA management, training, and escalations",
      color: "#059669",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="mb-8">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            Simple, clear <span className="bg-green-700 text-white px-2">pricing</span>
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-sm mx-auto text-sm">
            Per dedicated full-time resource (160 hrs / month)
          </p>

          {/* Highlighted Starting Price */}
          <p className="mt-6 text-lg sm:text-xl font-semibold text-gray-700">
            Starting from as low as <br />
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">{tiers[0].hourly}/hour</span> or{" "}
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">{tiers[0].monthly}</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="rounded-2xl border p-8 transition-all duration-300 relative"
              style={{
                borderColor: t.featured ? t.color + "40" : "#e5e7eb",
                background: t.featured ? "#faf9ff" : "white",
                boxShadow: t.featured ? `0 16px 50px rgba(37,99,235,0.1)` : "none",
                transform: t.featured ? "scale(1.04)" : "none",
              }}
              whileHover={{ y: -4 }}
            >
              {t.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className="px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: t.color }}
                  >
                    Most Popular
                  </span>
                </div>
              )}
              <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color}40)` }} />
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">{t.label}</p>
              <div className="text-4xl font-light text-gray-900 mb-0.5" style={{ letterSpacing: "-0.02em" }}>
                <strong>{t.hourly}</strong>
                <span className="text-base font-normal text-gray-400">/hr</span>
              </div>
              <div className="font-semibold mb-4" style={{ color: t.color }}>
                {t.monthly}
              </div>
              <p className="text-sm text-gray-400 font-light leading-relaxed border-t border-gray-100 pt-4">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center">
          <p className="text-sm text-gray-400 font-light mb-5">
            Enterprise & custom team contracts available. Invoiced monthly in advance.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="bg-green-700 inline-flex items-center gap-2 px-7 h-11 rounded-full font-semibold text-white text-sm"
              style={{ boxShadow: "0 6px 20px rgba(109,40,217,0.25)" }}
            >
              Get a Custom Quote <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}