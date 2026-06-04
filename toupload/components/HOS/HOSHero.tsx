"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Users, CheckCircle } from "lucide-react";

export default function HOSHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const [ready, setReady] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 60); }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(242,240,255,0.6) 0%, transparent 100%)" }}
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 w-full flex flex-col items-center text-center px-4 sm:px-6 pt-28 pb-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-8 cursor-default shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-sm font-semibold text-gray-600">Human Outsourcing Solutions</span>
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">HOS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-[clamp(2.8rem,7vw,5.8rem)] font-light text-gray-900 leading-[1.08] tracking-tight max-w-4xl mb-5"
          style={{ letterSpacing: "-0.02em" }}
        >
          Build the{" "}
          <span
            className="font-extrabold bg-primary"
            style={{ backgroundSize: "200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "gradShift 5s ease infinite" }}
          >
            perfect team
          </span>
          <br />
          <span className="font-light text-gray-400">without the overhead.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-[460px] text-[1.1rem] text-gray-500 font-light leading-relaxed mb-10"
        >
          Expand what you can achieve with ready-made or custom outsourced teams that integrate where you already work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-4"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 h-12 rounded-full font-semibold text-white text-sm"
              style={{ background: "linear-gradient(135deg, #6d28d9, #2563eb)", boxShadow: "0 8px 30px rgba(109,40,217,0.3)" }}
            >
              Build Your Team <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-7 h-12 rounded-full font-medium text-gray-600 text-sm border border-gray-200 hover:border-gray-300 bg-white transition-colors"
            >
              <Play className="w-3.5 h-3.5" /> Watch Overview
            </motion.button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-xs text-gray-400 font-light mb-14"
        >
          No long-term lock-in · 7-day go-live · 500+ active clients
        </motion.p>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          className="relative w-full max-w-5xl mx-auto " 
        >
          <div
            className="relative mx-4 sm:mx-8 rounded-2xl overflow-hidden border border-gray-400 shadow-2xl"
            style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)" }}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200" style={{ background: "#f9f9fb" }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 rounded-md bg-white border border-gray-200 flex items-center px-3 gap-2 text-xs text-gray-400 font-light max-w-xs mx-auto">
                  <div className="w-3 h-3 rounded-full bg-gray-200" />
                  ajaxglobal.hos.app
                </div>
              </div>
              <div className="flex gap-2">
                {["Support", "Sales", "Ops"].map((t) => (
                  <span key={t} className="text-[10px] px-2.5 py-1 rounded-full font-medium text-indigo-700 bg-indigo-50">{t}</span>
                ))}
              </div>
            </div>

            <div className="bg-white grid grid-cols-12 min-h-[320px]">
              {/* Sidebar */}
              <div className="col-span-2 border-r border-gray-100 p-4" style={{ background: "#fafafa" }}>
                <div className="space-y-1">
                  {["Dashboard","Teams","Live KPIs","Reports","Support","Sales"].map((item, i) => (
                    <div
                      key={item}
                      className={`text-xs py-2 px-2.5 rounded-lg cursor-default font-medium transition-colors ${i === 0 ? "bg-indigo-50 text-indigo-700" : "text-gray-400"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main */}
              <div className="col-span-7 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-400 font-light mb-0.5">Active Teams</p>
                    <h3 className="text-sm font-semibold text-gray-800">Live Operations — Today</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-500" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                    All systems live
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { role: "Customer Support", agents: 12, status: "Active", bar: 92, color: "#6d28d9" },
                    { role: "Sales & Lead Gen", agents: 8, status: "Active", bar: 78, color: "#2563eb" },
                    { role: "Virtual Assistants", agents: 6, status: "Active", bar: 85, color: "#059669" },
                    { role: "Property Management", agents: 4, status: "On Break", bar: 60, color: "#d97706" },
                    { role: "IT & Cybersecurity", agents: 3, status: "Active", bar: 95, color: "#dc2626" },
                  ].map((row, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={ready ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.9 + i * 0.08 }}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default"
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold" style={{ background: row.color }}>
                        {row.role[0]}
                      </div>
                      <span className="text-xs font-medium text-gray-700 w-36 truncate">{row.role}</span>
                      <span className="text-xs text-gray-400 w-12">{row.agents} agents</span>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: row.color }}
                          initial={{ width: 0 }}
                          animate={ready ? { width: `${row.bar}%` } : {}}
                          transition={{ delay: 1.1 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${row.status === "Active" ? "text-emerald-700 bg-emerald-50" : "text-amber-700 bg-amber-50"}`}>
                        {row.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right panel */}
              <div className="col-span-3 border-l border-gray-100 p-4 space-y-3" style={{ background: "#fafafa" }}>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Live Metrics</p>
                {[
                  { label: "Avg Response", value: "< 60s", trend: "+12%" },
                  { label: "CSAT Score", value: "98.2%", trend: "+3%" },
                  { label: "Tickets Closed", value: "1,204", trend: "+18%" },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={ready ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="bg-white rounded-xl p-3 border border-gray-100"
                  >
                    <p className="text-[10px] text-gray-400 mb-0.5">{m.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-bold text-gray-900">{m.value}</span>
                      <span className="text-[10px] text-emerald-600 font-semibold">{m.trend}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating card left */}
          <motion.div
            className="absolute -left-2 sm:left-4 top-16 z-20"
            initial={{ opacity: 0, x: -30 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.8 }}
            style={{ animation: "floatA 6s ease-in-out infinite" }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-48" style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <span className="text-xs font-semibold text-gray-700">Team Live</span>
              </div>
              <div className="flex -space-x-2 mb-2">
                {["#6d28d9","#2563eb","#059669","#d97706"].map((c, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] text-white font-bold" style={{ background: c }}>
                    {["S","A","V","P"][i]}
                  </div>
                ))}
                <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[9px] text-gray-600 font-bold">+29</div>
              </div>
              <p className="text-[10px] text-gray-400">33 agents active now</p>
            </div>
          </motion.div>

          {/* Floating card right */}
          <motion.div
            className="absolute -right-2 sm:right-4 bottom-4 z-20"
            initial={{ opacity: 0, x: 30 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.3, duration: 0.8 }}
            style={{ animation: "floatB 7s ease-in-out infinite" }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-52" style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-xs font-semibold text-gray-700">7-Day Go-Live</span>
              </div>
              <div className="space-y-1.5">
                {["Discovery","Sourcing","Training","Launch ✓"].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${i < 3 ? "bg-indigo-400" : "bg-emerald-500"}`} />
                    <span className={`text-[10px] ${i === 3 ? "text-emerald-600 font-semibold" : "text-gray-400"}`}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, white)" }} />

      <style>{`
        @keyframes gradShift { 0%,100%{background-position:0%} 50%{background-position:100%} }
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
      `}</style>
    </section>
  );
}
