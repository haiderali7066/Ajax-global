"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Globe, Phone } from "lucide-react";
import { fadeUp, scaleIn, stagger } from "./about.variants";

export default function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setReady(true), 60);
  }, []);

  const dashboardRows = [
    { label: "Human Outsourcing Solutions",  val: "BPO, Sales, Admin, Support",      bar: 92 },
    { label: "AI & Automation (IntelliDesq™)", val: "Chat, Voice, Workflow AI",       bar: 85 },
    { label: "Global Coverage",               val: "USA · Canada · Australia · UAE",  bar: 78 },
    { label: "Industry Verticals",            val: "8+ specialized sectors",           bar: 70 },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-white"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Top colour wash */}
      <div
        className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(242,240,255,0.6) 0%, transparent 100%)" }}
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 w-full flex flex-col items-center text-center px-4 sm:px-6 pt-32 pb-0"
      >
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-8 cursor-default shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-semibold text-gray-600">About AJAX Global</span>
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">EST. 2018</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-[clamp(2.8rem,7vw,5.8rem)] font-light text-gray-900 leading-[1.08] tracking-tight max-w-4xl mb-5"
          style={{ letterSpacing: "-0.02em" }}
        >
          Built for Growth.{" "}
          <span className="font-extrabold text-primary">Powered by People.</span>
          <br />
          <span className="font-light text-gray-400">Enhanced by AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-[500px] text-[1.1rem] text-gray-500 font-light leading-relaxed mb-10"
        >
          A full-service outsourcing and AI solutions company helping businesses scale smarter
          through a powerful hybrid model of human expertise and intelligent automation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-4"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 h-12 rounded-full font-semibold text-white text-sm bg-primary shadow-lg shadow-primary/30"
            >
              Explore Our Services <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-7 h-12 rounded-full font-medium text-gray-600 text-sm border border-gray-200 hover:border-gray-300 bg-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> Book a Consultation
            </motion.button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-xs text-gray-400 font-light mb-14"
        >
          15+ countries · 500+ clients · 2,000+ professionals · $1B+ managed ops
        </motion.p>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          <div
            className="relative mx-4 sm:mx-8 rounded-2xl overflow-hidden border border-gray-400 shadow-2xl"
            style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)" }}
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
                  ajaxglobal.com/about
                </div>
              </div>
              <div className="flex gap-2">
                {["HOS", "AI", "Global"].map((t) => (
                  <span key={t} className="text-[10px] px-2.5 py-1 rounded-full font-medium text-primary bg-primary/10">{t}</span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="bg-white grid grid-cols-12 min-h-[300px]">
              {/* Sidebar */}
              <div className="col-span-2 border-r border-gray-100 p-4" style={{ background: "#fafafa" }}>
                <div className="space-y-1">
                  {["Overview", "Mission", "Values", "Industries", "Timeline", "Team"].map((item, i) => (
                    <div
                      key={item}
                      className={`text-xs py-2 px-2.5 rounded-lg cursor-default font-medium transition-colors ${i === 0 ? "bg-primary/10 text-primary" : "text-gray-400 hover:text-gray-600"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats panel */}
              <div className="col-span-7 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-400 font-light mb-0.5">Company Overview</p>
                    <h3 className="text-sm font-semibold text-gray-800">AJAX Global — At a Glance</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Operating globally
                  </div>
                </div>
                <div className="space-y-2">
                  {dashboardRows.map((row, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={ready ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.9 + i * 0.08 }}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">{i + 1}</div>
                      <span className="text-xs font-medium text-gray-700 w-44 truncate">{row.label}</span>
                      <span className="text-xs text-gray-400 flex-1 truncate">{row.val}</span>
                      <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          animate={ready ? { width: `${row.bar}%` } : {}}
                          transition={{ delay: 1.1 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Metric cards */}
              <div className="col-span-3 border-l border-gray-100 p-4 space-y-3" style={{ background: "#fafafa" }}>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Key Numbers</p>
                {[
                  { label: "Countries", value: "15+" },
                  { label: "Clients",   value: "500+" },
                  { label: "Team Size", value: "2,000+" },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={ready ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="bg-white rounded-xl p-3 border border-gray-100"
                  >
                    <p className="text-[10px] text-gray-400 mb-0.5">{m.label}</p>
                    <span className="text-base font-bold text-gray-900">{m.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating card — left */}
          <motion.div
            className="absolute -left-2 sm:left-4 top-16 z-20"
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={ready ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.8 }}
            style={{ animation: "floatA 6s ease-in-out infinite" }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-48" style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-gray-700">Global Reach</span>
              </div>
              <div className="text-2xl font-black text-primary">15+</div>
              <p className="text-[10px] text-gray-400 mt-0.5">Countries served worldwide</p>
            </div>
          </motion.div>

          {/* Floating card — right */}
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
                <span className="text-xs font-semibold text-gray-700">Since 2018</span>
              </div>
              <div className="space-y-1.5">
                {["Founded ✓", "Scaled globally ✓", "AI-powered ✓", "Still growing ✓"].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${i < 3 ? "bg-primary/60" : "bg-emerald-500"}`} />
                    <span className={`text-[10px] ${i === 3 ? "text-emerald-600 font-semibold" : "text-gray-400"}`}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, white)" }} />
    </section>
  );
}
