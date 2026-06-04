"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Brain, Sparkles, Users } from "lucide-react";
import { fadeUp, slideLeft, slideRight } from "./contact.variants";

export default function ChooseYourPath() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[.22em] text-primary block mb-3">
            Two Paths
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Choose your <span className="font-extrabold text-gray-900">path to</span>{" "}
            <span className="font-extrabold text-primary">scale.</span>
          </h2>
          <p className="text-gray-500 font-light text-lg">
            Two powerful solutions. One goal: scalable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* HOS card — light */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl border-2 border-gray-100 hover:border-primary/40 p-8 transition-all duration-300 hover:shadow-2xl overflow-hidden bg-white"
          >
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none bg-primary/5 group-hover:bg-primary/8 transition-colors duration-300" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex p-3.5 rounded-2xl mb-5 w-fit bg-primary/10 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-[.2em] text-primary mb-2 block">HOS</span>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Human Outsourcing Solutions</h3>
              <p className="text-gray-500 font-light mb-6 leading-relaxed flex-1">
                Need trained remote professionals to support your operations? We build, train,
                and manage dedicated teams that feel like your own.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full text-sm font-extrabold w-fit bg-primary shadow-md shadow-primary/25 hover:shadow-lg transition-all"
              >
                Talk to HOS Team <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* AI card — dark */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            whileHover={{ y: -6 }}
            className="group relative rounded-3xl border border-white/10 p-8 transition-all duration-300 hover:shadow-2xl overflow-hidden"
            style={{ background: "#1a1a2e" }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(109,40,217,0.35) 0%, transparent 65%)",
                filter: "blur(20px)",
              }}
            />
            {/* Dot grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.025]"
              style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />
            {/* Top shimmer line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg,transparent,rgba(167,139,250,0.6),transparent)" }}
            />

            <div className="relative z-10 flex flex-col h-full">
              <div
                className="inline-flex p-3.5 rounded-2xl mb-5 w-fit group-hover:scale-110 transition-transform"
                style={{ background: "rgba(109,40,217,0.2)" }}
              >
                <Brain className="w-7 h-7 text-violet-400" />
              </div>
              <div
                className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 rounded-full w-fit"
                style={{ background: "rgba(109,40,217,0.2)" }}
              >
                <Sparkles className="w-3 h-3 text-violet-400" />
                <span className="text-xs font-extrabold text-violet-400 tracking-wide">IntelliDesq™</span>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-3">AI Automation</h3>
              <p className="text-white/50 font-light mb-6 leading-relaxed flex-1">
                Want AI agents that work 24/7 without human intervention? Deploy intelligent
                automation that never sleeps and scales infinitely.
              </p>
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "var(--primary)", borderColor: "var(--primary)", color: "white" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-extrabold border transition-all duration-200 w-fit text-violet-300 border-violet-400/40"
              >
                Schedule AI Demo <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
