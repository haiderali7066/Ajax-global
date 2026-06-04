"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Zap } from "lucide-react";
import { fadeUp } from "./about.variants";

const CARDS = [
  {
    pill:    "Mission",
    Icon:    Zap,
    heading: "Empower businesses through",
    bold:    "intelligent outsourcing",
    body:    "To empower businesses worldwide with flexible, efficient, and intelligent outsourcing solutions — combining human expertise and AI innovation to reduce costs, enhance productivity, and deliver exceptional customer experiences.",
  },
  {
    pill:    "Vision",
    Icon:    Eye,
    heading: "Become the most",
    bold:    "trusted global partner",
    body:    "To become the most trusted global partner for companies modernizing operations through smart human outsourcing and AI-powered automation — where businesses of all sizes operate at enterprise scale.",
  },
];

export default function MissionVision() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" style={{ background: "#1a1a2e" }} ref={ref}>
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Ambient orbs */}
      <motion.div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(109,40,217,0.2) 0%,transparent 65%)", filter: "blur(60px)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(109,40,217,0.15) 0%,transparent 65%)", filter: "blur(60px)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section heading */}
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary/80 block mb-4">Purpose</span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Why we <span className="font-extrabold text-primary">exist</span>{" "}
            &amp; where we're{" "}
            <span className="font-extrabold text-primary">going</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {CARDS.map(({ pill, Icon, heading, bold, body }, i) => (
            <motion.div
              key={pill}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-primary" />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-primary/20">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 inline-block bg-primary/20 text-primary">
                {pill}
              </span>
              <h3 className="text-2xl font-light text-white leading-tight mt-3">
                {heading} <span className="font-extrabold">{bold}</span>
              </h3>
              <p className="mt-4 text-white/50 leading-relaxed text-sm">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
