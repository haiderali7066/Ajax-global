"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Star, Users } from "lucide-react";
import { fadeUp, NEXT_STEPS, STEP_COLORS } from "./contact.variants";

// Map step index → icon
const STEP_ICONS = [Sparkles, Phone, Users, Star] as const;

export default function WhatHappensNext() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Scroll-driven progress line
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden py-28 mx-10 rounded-4xl" style={{ background: "#0f0b1e" }} ref={ref}>
      {/* Ambient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(109,40,217,0.18) 0%,transparent 65%)", filter: "blur(90px)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%,transparent 65%)", filter: "blur(70px)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 11, repeat: Infinity, delay: 3 }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.8) 1px,transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary/80 block mb-3">
            The Process
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            What happens{" "}
            <span
              className="font-extrabold  bg-clip-text text-primary"
             
            >
              next?
            </span>
          </h2>
          <p className="text-white/40 font-light text-lg max-w-md mx-auto">
            A clear path from first contact to your custom growth system.
          </p>
        </motion.div>

        {/* Scroll-driven connector line */}
        <div className="hidden lg:block relative mb-4 h-px mx-20">
          <div className="absolute inset-0 bg-white/5 rounded-full" />
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: lineWidth,
              background: "linear-gradient(90deg,#7c3aed,#0ea5e9)",
            }}
          />
        </div>

        {/* Step cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {NEXT_STEPS.map((item, i) => {
            const Icon  = STEP_ICONS[i];
            const color = STEP_COLORS[i];
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.13, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                className="group relative text-center cursor-default"
              >
                {/* Icon with pulse ring */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  {inView && (
                    <motion.div
                      className="absolute w-20 h-20 rounded-2xl"
                      style={{ background: `${color}25` }}
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ scale: [0.8, 1.5, 1.8], opacity: [0.6, 0.2, 0] }}
                      transition={{
                        duration: 2.5,
                        delay: 0.5 + i * 0.13,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  )}
                  <motion.div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-white font-black text-lg z-10 transition-transform group-hover:scale-110 duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${color}, ${color}99)`,
                      boxShadow: `0 8px 32px ${color}50`,
                    }}
                    initial={{ scale: 0, rotate: -10 }}
                    animate={inView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.6, type: "spring", stiffness: 180, damping: 14 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                </div>

                {/* Step number badge */}
                <motion.div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black px-2.5 py-0.5 rounded-full text-white"
                  style={{ background: color }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.12 }}
                >
                  {item.step}
                </motion.div>

                {/* Card body */}
                <motion.div
                  className="bg-white/5 border border-white/8 rounded-2xl p-6 backdrop-blur-sm group-hover:bg-white/8 transition-all duration-300 relative overflow-hidden"
                  whileHover={{
                    boxShadow: `0 8px 40px ${color}25`,
                    borderColor: `${color}40`,
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg,transparent,${color},transparent)` }}
                  />
                  <h3 className="font-extrabold text-white mb-2 text-sm">{item.title}</h3>
                  <p className="text-sm text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>

                {/* Dashed connector (desktop only, non-last items) */}
                {i < NEXT_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-6rem)] items-center pointer-events-none">
                    <div className="w-full border-t-2 border-dashed border-white/10" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mt-14"
        >
          <a href="#contact-form">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-8 h-12 rounded-full font-bold text-white text-sm bg-primary shadow-lg shadow-primary/40"
            >
              Start the Process <ArrowRight className="w-4 h-4" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
