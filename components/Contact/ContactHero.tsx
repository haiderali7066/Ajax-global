"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";

const TRUST = [
  "No lock-in contracts",
  "7-day go-live",
  "500+ clients globally",
  "24/7 support",
];

export default function ContactHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY       = useTransform(scrollYProgress, [0, 1],   ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f8f7ff 0%, #ffffff 100%)",
      }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.08) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle,rgba(109,40,217,0.12) 0%,transparent 65%)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle,rgba(14,165,233,0.12) 0%,transparent 65%)",
          filter: "blur(70px)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center pt-32 pb-20"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white shadow-sm mb-8 cursor-default"
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-semibold text-slate-600">
            Let's Build Your Scalable Growth System
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08 }}
          className="text-[clamp(2.8rem,7vw,5.5rem)] font-light text-slate-900 leading-[1.05] tracking-tight mb-6"
          style={{ letterSpacing: "-0.025em" }}
        >
          Talk to an{" "}
          <span className="font-extrabold text-primary">AJAX Global</span>
          <br />
          <span className="font-light text-slate-400">expert today.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl mx-auto text-[1.1rem] text-slate-500 font-light leading-relaxed mb-10"
        >
          Whether you need a remote team, AI automation, or a hybrid solution — we'll
          design the right system for your business.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#contact-form">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 h-12 rounded-full font-semibold text-white text-sm bg-primary shadow-lg shadow-primary/30"
            >
              Request Consultation <ArrowRight className="w-4 h-4" />
            </motion.button>
          </a>
          <a href="#contact-form">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-7 h-12 rounded-full font-medium text-slate-700 text-sm border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> Book a Strategy Call
            </motion.button>
          </a>
        </motion.div>

        {/* Trust micro-bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-light"
        >
          {TRUST.map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-emerald-500" /> {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Seamless fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #ffffff)",
        }}
      />
    </section>
  );
}