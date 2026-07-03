"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Star, Users } from "lucide-react";
import { fadeUp, stagger } from "./about.variants";

const TRUST_ITEMS = [
  "No long-term lock-in",
  "7-day go-live",
  "Dedicated account manager",
  "Full transparency billing",
];

export default function AboutCTA() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "#1a1a2e" }} ref={ref}>
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      {/* Orbs */}
      <motion.div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(109,40,217,0.2) 0%, transparent 65%)", filter: "blur(80px)" }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(109,40,217,0.15) 0%, transparent 65%)", filter: "blur(70px)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 11, repeat: Infinity, delay: 3 }}
      />

      {/* Floating card — left */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-60 hidden lg:block" style={{ animation: "floatA 7s ease-in-out infinite" }}>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="w-3 h-3 text-primary" />
            </div>
            <span className="text-xs font-semibold text-gray-700">Team Size</span>
          </div>
          <div className="text-2xl font-black text-primary">2,000+</div>
          <p className="text-[10px] text-gray-400 mt-1">Professionals deployed</p>
        </div>
      </div>

      {/* Floating card — right */}
      <div className="absolute right-8 top-1/3 opacity-60 hidden lg:block" style={{ animation: "floatB 8s ease-in-out infinite" }}>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <p className="text-[10px] text-gray-400 mb-2">Satisfaction rate</p>
          <div className="text-2xl font-black text-primary">98%</div>
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />)}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-6">
          {/* Live badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/8 text-sm font-medium text-white/60 backdrop-blur-sm cursor-default"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Ready to scale?
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[clamp(2.5rem,6vw,5rem)] font-light text-white leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Let's build your{" "}
            <span className="font-extrabold text-primary">scalable growth system.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-white/45 font-light max-w-xl mx-auto leading-relaxed">
            Join 500+ enterprises already scaling with human-AI excellence.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-9 rounded-full font-bold text-white text-base bg-primary shadow-lg shadow-primary/30"
                style={{ height: 52 }}
              >
                Schedule a Strategy Call{" "}
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <Phone className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-8 rounded-full font-medium text-white text-base border border-white/20 bg-white/8 hover:bg-white/15 transition-colors backdrop-blur-sm"
                style={{ height: 52 }}
              >
                Explore Our Services <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-white/40 font-light">
            {TRUST_ITEMS.map((t) => (
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
