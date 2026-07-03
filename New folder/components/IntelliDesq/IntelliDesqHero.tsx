"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles, Gauge, Brain } from "lucide-react";
import { NeuralCanvas, Typewriter } from "@/components/ui/Primitives";

export default function IntelliDesqHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const [ready, setReady] = useState(false);

  useEffect(() => { setTimeout(() => setReady(true), 60); }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-white">
      <NeuralCanvas />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 55% at 55% 20%, rgba(124,58,237,0.07) 0%, transparent 65%)" }} />
      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, white)" }} />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 w-full flex flex-col items-center text-center px-4 sm:px-6 pt-28 pb-0"
      >
        {/* ── Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.9 }}
          animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-8 cursor-default shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-violet-500" />
          <span className="text-sm font-semibold text-gray-600">AI-Powered Operational Intelligence</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
        </motion.div>

        {/* ── Headline ── */}
        {/*
          Key layout decisions:
          1. max-w-5xl gives the heading room to breathe at large screens
          2. "IntelliDesq™ / is not a chatbot. It's" sit on their own lines via block spans
          3. The Typewriter line is its own <div> with whitespace-nowrap so the
             animated text never wraps mid-word; it is centered independently.
        */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="max-w-5xl w-full mb-5"
        >
          <h1
            className="font-light text-gray-900 leading-[1.06] tracking-tight"
            style={{ letterSpacing: "-0.02em", fontSize: "clamp(2.8rem,7vw,5.8rem)" }}
          >
            {/* Line 1 */}
            <span className="block">IntelliDesq™</span>

            {/* Line 2 */}
            <span
              className="block font-extralight text-gray-400"
              style={{ fontSize: "clamp(1.6rem,3.5vw,2.8rem)", lineHeight: 1.2 }}
            >
              is not a chatbot. It's
            </span>
          </h1>

          {/* Line 3 — typewriter on its own row, never wraps */}
          <div
            className="mt-1 whitespace-nowrap overflow-hidden"
            style={{
              fontSize: "clamp(2.8rem,7vw,5.8rem)",
              fontWeight: 300,
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
              minHeight: "1.2em",   /* reserves height before first character appears */
            }}
          >
            <Typewriter
              words={[
                "Operational Intelligence.",
                "Predictive Analytics.",
                "Decision Support.",
                "Workflow Intelligence.",
              ]}
            />
          </div>
        </motion.div>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="max-w-[480px] text-[1.1rem] text-gray-500 font-light leading-relaxed mb-10"
        >
          An AI-powered intelligence layer that works <em>alongside</em> your human
          teams to improve decisions, workflows, and performance — in real time, at scale.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-5"
        >
          <Link href="#demo">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 12px 40px rgba(124,58,237,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary inline-flex items-center gap-2 px-7 h-12 rounded-full font-semibold text-white text-sm transition-shadow"
              style={{ boxShadow: "0 8px 30px rgba(124,58,237,0.32)" }}
            >
              See IntelliDesq™ in Action
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02, borderColor: "#d1d5db" }}
              className="inline-flex items-center gap-2 px-7 h-12 rounded-full font-medium text-gray-600 text-sm border border-gray-200 bg-white transition-colors"
            >
              <Play className="w-3.5 h-3.5" /> Watch Demo
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
          className="text-xs text-gray-400 font-light mb-14"
        >
          No commitment required · Live platform walkthrough · Expert-led session
        </motion.p>

        {/* ── Dashboard mockup ── */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.48 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          <div
            className="relative mx-4 sm:mx-8 rounded-2xl overflow-hidden border border-gray-400"
            style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05)" }}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100" style={{ background: "#f9f9fb" }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 rounded-md bg-white border border-gray-200 flex items-center px-3 gap-2 text-xs text-gray-400 font-light max-w-xs mx-auto">
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
                  intellidesq.ajaxglobal.app
                </div>
              </div>
              <div className="flex gap-2">
                {["Live", "AI", "Predict"].map((t) => (
                  <span key={t} className="text-[10px] px-2.5 py-1 rounded-full font-medium text-violet-700 bg-violet-50">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-white grid grid-cols-12 min-h-[320px]">
              {/* Sidebar */}
              <div className="col-span-2 border-r border-gray-100 p-4" style={{ background: "#fafafa" }}>
                <div className="space-y-1">
                  {["Overview", "Predictions", "KPI Tracker", "Workflows", "Alerts", "Reports"].map((item, i) => (
                    <div key={item}
                      className={`text-xs py-2 px-2.5 rounded-lg cursor-default font-medium transition-colors ${
                        i === 0 ? "bg-violet-50 text-violet-700" : "text-gray-400 hover:text-gray-600"
                      }`}
                    >{item}</div>
                  ))}
                </div>
              </div>

              {/* Main panel */}
              <div className="col-span-7 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-400 font-light mb-0.5">IntelliDesq™ Dashboard</p>
                    <h3 className="text-sm font-semibold text-gray-800">Operational Intelligence — Live</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    All signals active
                  </div>
                </div>

                {[
                  { label: "Pipeline Prediction Accuracy", val: 94, trend: "↑ +3%",  color: "#7c3aed" },
                  { label: "Response Time Optimization",   val: 87, trend: "↑ +12%", color: "#4f46e5" },
                  { label: "Churn Risk Detection",         val: 91, trend: "↑ +8%",  color: "#0ea5e9" },
                  { label: "Workflow Automation Rate",     val: 73, trend: "↑ +5%",  color: "#10b981" },
                  { label: "Compliance Monitor Score",     val: 99, trend: "Stable",  color: "#f59e0b" },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={ready ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + i * 0.08 }}
                    className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default"
                  >
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: row.color }} />
                    <span className="text-xs text-gray-600 flex-1 truncate">{row.label}</span>
                    <div className="w-28 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: row.color }}
                        initial={{ width: 0 }}
                        animate={ready ? { width: `${row.val}%` } : {}}
                        transition={{ delay: 1.1 + i * 0.09, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 w-8 text-right">{row.val}%</span>
                    <span className="text-[10px] text-emerald-600 font-medium w-12 text-right">{row.trend}</span>
                  </motion.div>
                ))}

                <div className="mt-4 pt-4 border-t border-gray-50">
                  <p className="text-[10px] text-gray-400 mb-2">Decision intelligence activity — last 24h</p>
                  <div className="flex items-end gap-1 h-10">
                    {[55,72,48,88,64,95,71,82,59,90,77,99,68,85,74,92,61,88,75,96].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm"
                        initial={{ scaleY: 0 }}
                        animate={ready ? { scaleY: 1 } : {}}
                        transition={{ delay: 1.3 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformOrigin: "bottom" }}
                      >
                        <div style={{
                          height: `${h}%`,
                          background: "linear-gradient(to top, #7c3aed, #a78bfa)",
                          borderRadius: 2,
                          opacity: 0.55 + h / 220,
                        }} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Alerts panel */}
              <div className="col-span-3 border-l border-gray-100 p-4 space-y-3" style={{ background: "#fafafa" }}>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">AI Alerts</p>
                {[
                  { msg: "Churn risk flagged — Client #142", color: "#f59e0b" },
                  { msg: "Pipeline gap detected in Q4",      color: "#ef4444" },
                  { msg: "Workflow optimized — 12% faster",  color: "#10b981" },
                ].map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={ready ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="bg-white rounded-xl p-3 border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: a.color }} />
                      <p className="text-[10px] text-gray-600 leading-snug">{a.msg}</p>
                    </div>
                  </motion.div>
                ))}
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-[10px] text-gray-400">Decisions made today</p>
                  <p className="text-xl font-bold text-violet-600">1,847</p>
                  <p className="text-[10px] text-emerald-600">↑ 23% vs yesterday</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Floating card: AI Prediction ── */}
          <motion.div
            className="absolute -left-2 sm:left-2 top-20 z-20"
            initial={{ opacity: 0, x: -30 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ animation: "floatA 6s ease-in-out infinite" }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-4 w-48"
              style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center">
                  <Brain className="w-3.5 h-3.5 text-violet-600" />
                </div>
                <span className="text-xs font-semibold text-gray-700">AI Prediction</span>
              </div>
              <p className="text-[10px] text-gray-400 mb-1.5">Next 14 days — pipeline risk:</p>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-violet-600">Low</span>
                <span className="text-[10px] text-emerald-600 font-semibold">↓ from Medium</span>
              </div>
            </div>
          </motion.div>

          {/* ── Floating card: Live Performance ── */}
          <motion.div
            className="absolute -right-2 sm:right-2 bottom-8 z-20"
            initial={{ opacity: 0, x: 30 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ animation: "floatB 7s ease-in-out infinite" }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-4 w-52"
              style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Gauge className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-xs font-semibold text-gray-700">Live Performance</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[["10×", "Faster", "#7c3aed"], ["98%", "Accuracy", "#10b981"]].map(([v, l, c]) => (
                  <div key={l} className="text-center p-2 rounded-lg" style={{ background: `${c}08` }}>
                    <div className="text-base font-black" style={{ color: c }}>{v}</div>
                    <div className="text-[9px] text-gray-400">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes floatA { 0%,100%{ transform:translateY(0)   } 50%{ transform:translateY(-10px) } }
        @keyframes floatB { 0%,100%{ transform:translateY(0)   } 50%{ transform:translateY(-13px) } }
      `}</style>
    </section>
  );
}