"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Users } from "lucide-react";
import { fadeUp, stagger } from "./contact.variants";

const TRUST = [
  "No long-term lock-in",
  "7-day go-live",
  "Dedicated account manager",
  "Full transparency billing",
];

export default function ContactCTA() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "#0f0b1e" }} ref={ref}>
      {/* Orbs */}
      <motion.div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(109,40,217,0.22) 0%,transparent 60%)", filter: "blur(100px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%,transparent 65%)", filter: "blur(80px)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 11, repeat: Infinity, delay: 3 }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }}
      />

      {/* Floating card — left */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 opacity-70 hidden xl:block"
        style={{ animation: "floatA 7s ease-in-out infinite" }}
      >
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="w-3 h-3 text-primary" />
            </div>
            <span className="text-xs font-semibold text-gray-700">Response Time</span>
          </div>
          <div className="text-2xl font-black text-primary">24 hrs</div>
          <p className="text-[10px] text-gray-400 mt-1">Guaranteed reply</p>
        </div>
      </div>

      {/* Floating card — right */}
      <div
        className="absolute right-8 top-1/3 opacity-70 hidden xl:block"
        style={{ animation: "floatB 8s ease-in-out infinite" }}
      >
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <p className="text-[10px] text-gray-400 mb-2">Client satisfaction</p>
          <div className="text-2xl font-black text-primary">98%</div>
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-6">
          {/* Live badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/8 cursor-default backdrop-blur-sm"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-semibold text-white/60">Ready when you are</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(2.5rem,6vw,5rem)] font-light text-white leading-tight"
            style={{ letterSpacing: "-0.025em" }}
          >
            Ready to scale{" "}
            <span
              className="font-extrabold"
              style={{
                background: "linear-gradient(90deg,#a78bfa,#38bdf8,#34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              smarter?
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/40 font-light text-lg max-w-xl mx-auto leading-relaxed">
            Join businesses across the globe that trust AJAX Global to power their operations.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a href="#contact-form">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 px-8 rounded-full text-white font-extrabold bg-primary shadow-lg shadow-primary/40 transition-all"
                style={{ height: 52 }}
              >
                Book Free Strategy Call <ArrowRight className="w-5 h-5" />
              </motion.button>
            </a>
            <a href="#contact-form">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-8 border border-white/20 text-white font-extrabold hover:bg-white/10 hover:border-white/30 transition-all rounded-full backdrop-blur-sm"
                style={{ height: 52 }}
              >
                Request Pricing
              </motion.button>
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/30 font-light">
            {TRUST.map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
