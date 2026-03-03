"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, stagger, scaleIn } from "./about.variants";

const INDUSTRIES = [
  { name: "Cleaning & Home Services",  emoji: "🏠" },
  { name: "Property Management",       emoji: "🏢" },
  { name: "E-Commerce & Shopify",      emoji: "🛒" },
  { name: "SaaS & Technology",         emoji: "⚡" },
  { name: "Logistics & Truck Dispatch",emoji: "🚛" },
  { name: "Marketing & Advertising",   emoji: "📣" },
  { name: "IT & Cloud Providers",      emoji: "☁️" },
  { name: "Healthcare Admin Support",  emoji: "🏥" },
];

export default function Industries() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden mx-6 md:mx-10 rounded-3xl"
      style={{ background: "#1a1a2e" }}
      ref={ref}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] rounded-3xl"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Ambient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(109,40,217,0.15) 0%, transparent 65%)", filter: "blur(80px)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(109,40,217,0.1) 0%, transparent 65%)", filter: "blur(80px)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary/80 block mb-4">Industries</span>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white" style={{ letterSpacing: "-0.02em" }}>
            Specialists in <span className="font-extrabold text-primary">your industry</span>
          </h2>
          <p className="text-white/45 font-light mt-3 max-w-sm mx-auto text-sm">
            Tailored solutions built for each vertical — not generic outsourcing repurposed for your sector.
          </p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              variants={scaleIn}
              custom={i}
              whileHover={{ y: -6, scale: 1.04 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default"
            >
              <div className="text-3xl mb-3">{ind.emoji}</div>
              <p className="text-sm font-semibold text-white/75 leading-snug">{ind.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
