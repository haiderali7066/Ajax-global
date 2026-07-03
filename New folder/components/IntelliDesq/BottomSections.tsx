"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Gauge, RefreshCw, Lock, Clock, HeartHandshake, Award, LineChart, Settings2, Users, BellRing, Star, Brain, CheckCircle, ArrowRight } from "lucide-react";
import { Counter } from "@/components/ui/Primitives";
import { fadeUp, slideLeft, slideRight, stagger, scaleIn } from "@/lib/motion";

// ─── FEATURE SPOTLIGHT ────────────────────────────────────────────────────────
const features = [
  {
    tag: "Predictive Intelligence", icon: Lightbulb, color: "#f59e0b",
    title: "Know what will happen before it does",
    desc: "IntelliDesq™ analyzes historical patterns and real-time signals to surface predictions about pipeline performance, customer churn risk, team capacity constraints, and operational bottlenecks — before they become problems.",
    stats: [{ v: "14 Days", l: "Average prediction horizon" }, { v: "87%", l: "Prediction accuracy" }],
  },
  {
    tag: "Real-Time Dashboards", icon: Gauge, color: "#0ea5e9",
    title: "Every metric, live, in one place",
    desc: "Stop jumping between spreadsheets, CRMs, and support tools. IntelliDesq™ consolidates all your operational data into a single intelligent dashboard that updates in real time and highlights what needs your attention.",
    stats: [{ v: "< 2 min", l: "Data refresh rate" }, { v: "40+", l: "Built-in KPI templates" }],
  },
  {
    tag: "Workflow Automation", icon: RefreshCw, color: "#10b981",
    title: "Remove repetition. Keep the intelligence.",
    desc: "IntelliDesq™ identifies which routine tasks are stealing your team's time and automates them — while keeping humans in the loop for decisions that matter. The result: faster execution with better judgment at every step.",
    stats: [{ v: "73%", l: "Reduction in manual tasks" }, { v: "3×", l: "Faster process throughput" }],
  },
];

export function FeatureSpotlight() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-14 sm:py-20" style={{ background: "#f8f7ff" }} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-14">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            Features that <span className="bg-red-800 text-white px-2">change everything</span>
          </h2>
        </motion.div>
        <div className="space-y-16">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:[&>*:first-child]:order-last" : ""}`}>
                <motion.div variants={isEven ? slideLeft : slideRight} initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${f.color}15` }}>
                      <Icon className="w-4 h-4" style={{ color: f.color }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[.18em]" style={{ color: f.color }}>{f.tag}</span>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900" style={{ letterSpacing: "-0.01em" }}>
                    <strong>{f.title.split(" ").slice(0, 3).join(" ")}</strong>{" "}{f.title.split(" ").slice(3).join(" ")}
                  </h3>
                  <p className="text-base text-gray-500 font-light leading-relaxed">{f.desc}</p>
                  <div className="flex items-center gap-8">
                    {f.stats.map((s, j) => (
                      <div key={j}>
                        <div className="text-2xl font-extrabold" style={{ color: f.color }}>{s.v}</div>
                        <div className="text-xs text-gray-400 font-light mt-0.5">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div variants={isEven ? slideRight : slideLeft} initial="hidden" animate={inView ? "show" : "hidden"}>
                  <div className="rounded-2xl p-10 border h-64 flex items-center justify-center relative overflow-hidden bg-white" style={{ borderColor: `${f.color}20` }}>
                    <motion.div className="absolute inset-0 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 50% 50%,${f.color}10 0%,transparent 65%)` }}
                      animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
                    <motion.div className="relative z-10 w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl"
                      style={{ background: `linear-gradient(135deg,${f.color},${f.color}aa)` }}
                      animate={{ y: [0, -10, 0], rotate: [0, 3, 0, -3, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── LIVE METRICS ─────────────────────────────────────────────────────────────
const metrics = [
  { icon: Gauge, label: "Response Time Improvement", val: 67, suf: "%", color: "#7c3aed" },
  { icon: LineChart, label: "Pipeline Accuracy", val: 94, suf: "%", color: "#10b981" },
  { icon: BellRing, label: "Fewer Missed Escalations", val: 89, suf: "%", color: "#f59e0b" },
  { icon: Settings2, label: "Workflow Steps Automated", val: 73, suf: "%", color: "#4f46e5" },
  { icon: Users, label: "Team Satisfaction Score", val: 96, suf: "%", color: "#0ea5e9" },
  { icon: Lock, label: "Compliance Rate", val: 99, suf: "%", color: "#10b981" },
];

export function LiveMetrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-14 sm:py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-10">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            Real <span className="bg-primary text-white px-2">performance</span> numbers
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-sm mx-auto text-sm">Average outcomes across client deployments in the first 90 days</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div key={i} variants={fadeUp} custom={i % 3} initial="hidden" animate={inView ? "show" : "hidden"}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:border-violet-200 transition-all duration-300 group" whileHover={{ y: -5 }}>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${m.color}10` }}>
                    <Icon className="w-5 h-5" style={{ color: m.color }} />
                  </div>
                  <div className="w-24 h-1.5 rounded-full bg-gray-100 overflow-hidden mt-3">
                    <motion.div className="h-full rounded-full" style={{ background: m.color }} initial={{ width: 0 }}
                      animate={inView ? { width: `${m.val}%` } : {}} transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 + i * 0.1 }} />
                  </div>
                </div>
                <div className="text-3xl font-extrabold mb-1" style={{ color: m.color }}><Counter to={m.val} suf={m.suf} /></div>
                <p className="text-sm text-gray-400 font-light">{m.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── INTEGRATIONS ─────────────────────────────────────────────────────────────
const tools = [
  { name: "Salesforce", emoji: "☁️", bg: "#004d73" },
  { name: "HubSpot", emoji: "🧡", bg: "#8c321d" },
  { name: "Zendesk", emoji: "💚", bg: "#024d38" },
  { name: "Slack", emoji: "💬", bg: "#4a154b" },
  { name: "Jira", emoji: "📋", bg: "#0747a6" },
  { name: "Notion", emoji: "⬛", bg: "#2f2f2f" },
  { name: "AppFolio", emoji: "🏠", bg: "#5b21b6" },
  { name: "Buildium", emoji: "🔑", bg: "#831843" },
  { name: "Shopify", emoji: "🛒", bg: "#3d5a16" },
  { name: "QuickBooks", emoji: "💰", bg: "#166534" },
  { name: "Monday.com", emoji: "📅", bg: "#9f1239" },
  { name: "+ More", emoji: "✨", bg: "#18181b" },
];

export function Integrations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-14 sm:py-20 mx-6 sm:mx-10 rounded-3xl overflow-hidden bg-black border border-zinc-800 shadow-2xl" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-900/40 via-violet-900/40 to-fuchsia-900/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-12">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-medium text-slate-50 leading-tight" style={{ letterSpacing: "-0.01em" }}>
            Works with your{" "}
            <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">existing stack</strong>
          </h2>
          <p className="text-slate-300 mt-5 max-w-lg mx-auto text-base sm:text-lg leading-relaxed font-normal">
            Integrates seamlessly with the tools your teams already use — no migration needed.
          </p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="flex flex-wrap items-center justify-center gap-4">
          {tools.map((t, i) => (
            <motion.div key={i} variants={scaleIn} custom={i}
              className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-zinc-700/80 text-sm sm:text-base font-medium text-slate-100 cursor-default hover:border-cyan-400 hover:bg-zinc-800 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
              style={{ background: t.bg }} whileHover={{ y: -4, scale: 1.05 }}>
              <span className="text-xl drop-shadow-md">{t.emoji}</span>{t.name}
            </motion.div>
          ))}
        </motion.div>
        <motion.p variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
          className="text-center text-sm text-slate-400 font-normal mt-10 tracking-wide">
          API-first architecture with webhook support. Custom integrations available.
        </motion.p>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const quotes = [
  {
    text: "IntelliDesq™ changed how our entire ops team makes decisions. We went from reactive firefighting to proactive management in under a month.",
    author: "Operations Director", company: "SaaS Company, USA", emoji: "🇺🇸", stat: "10×", color: "#7c3aed",
  },
  {
    text: "The predictive analytics alone saved us from losing three major accounts. It flagged churn risk weeks before our team would have noticed.",
    author: "Head of Customer Success", company: "E-Commerce Brand, Canada", emoji: "🇨🇦", stat: "3 Accounts", color: "#4f46e5",
  },
  {
    text: "Having real-time workflow intelligence alongside our HOS team is like giving everyone superpowers. The ROI was obvious within the first 30 days.",
    author: "CEO", company: "Home Services Co., Australia", emoji: "🇦🇺", stat: "30 Days", color: "#0ea5e9",
  },
];

const trustItems = [
  { icon: HeartHandshake, label: "Human-Centric Design", sub: "Built to empower people, not replace them", color: "#7c3aed" },
  { icon: Lock, label: "Enterprise Security", sub: "SOC 2-ready with full data encryption", color: "#4f46e5" },
  { icon: Clock, label: "7-Day Deployment", sub: "From contract to live in one week", color: "#0ea5e9" },
  { icon: Award, label: "98% Client Retention", sub: "Results that keep clients coming back", color: "#10b981" },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-14 sm:py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="text-center mb-10">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900" style={{ letterSpacing: "-0.02em" }}>
            What clients <strong>say</strong>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <motion.div key={i} variants={fadeUp} custom={i} initial="hidden" animate={inView ? "show" : "hidden"}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-default" whileHover={{ y: -5 }}>
              <div className="h-28 relative overflow-hidden" style={{ background: `linear-gradient(135deg,${q.color}12,${q.color}04)` }}>
                <div className="absolute inset-0 flex items-center justify-center"><span className="text-5xl opacity-30">{q.emoji}</span></div>
                <div className="absolute bottom-4 left-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black" style={{ color: q.color }}>{q.stat}</span>
                    <span className="text-xs text-gray-500 font-light">ROI metric</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, s) => <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">"{q.text}"</p>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <span className="text-lg">{q.emoji}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{q.author}</p>
                    <p className="text-[10px] text-gray-400">{q.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} variants={fadeUp} custom={i}
                className="bg-white rounded-2xl p-5 border border-gray-100 flex items-start gap-3 hover:shadow-md hover:border-violet-200 transition-all duration-300" whileHover={{ y: -3 }}>
                <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${item.color}10` }}>
                  <Icon className="w-4 h-4" style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">{item.label}</p>
                  <p className="text-[10px] text-gray-400 font-light mt-0.5 leading-snug">{item.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── FINAL CTA ────────────────────────────────────────────────────────────────
export function IntelliDesqCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden bg-white" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.04) 1px,transparent 1px)", backgroundSize: "24px 24px" }} />

      {/* Floating cards */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-60 hidden lg:block" style={{ animation: "floatA 7s ease-in-out infinite" }}>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-violet-100 flex items-center justify-center"><Brain className="w-3 h-3 text-violet-600" /></div>
            <span className="text-xs font-semibold text-gray-700">AI Alert</span>
          </div>
          <div className="space-y-1">
            {["Churn risk: 3 accounts ⚠️", "Pipeline gap detected ↗", "Workflow optimized ✓"].map((item) => (
              <div key={item} className="text-[10px] text-gray-500">{item}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-10 top-1/3 opacity-55 hidden lg:block" style={{ animation: "floatB 8s ease-in-out infinite" }}>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <p className="text-[10px] text-gray-400 mb-1">Prediction accuracy</p>
          <div className="text-2xl font-black text-violet-600">94%</div>
          <p className="text-[10px] text-emerald-600 font-medium">↑ +3% this week</p>
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-7">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-500 shadow-sm cursor-default">
            <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-500" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            Request a live demo today
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-[clamp(2.5rem,6vw,5rem)] font-light text-gray-900 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Intelligence that makes teams{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-primary" style={{ backgroundSize: "200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "gradShift 5s ease infinite" }}>
              unstoppable.
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
            See how IntelliDesq™ transforms your operations. Request a personalised demo tailored to your specific challenges.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link href="#demo">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="bg-primary inline-flex items-center gap-2 px-9 rounded-full font-bold text-white text-base"
                style={{ height: 52, boxShadow: "0 12px 40px rgba(124,58,237,0.3)" }}>
                Request a Demo{" "}
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight className="w-5 h-5" /></motion.span>
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-8 rounded-full font-medium text-gray-600 text-base border border-gray-200 bg-white hover:border-gray-300 transition-colors" style={{ height: 52 }}>
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-gray-400 font-light">
            {["No commitment required", "Live platform walkthrough", "Tailored to your workflow", "Expert-led session"].map((t) => (
              <span key={t} className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-500" />{t}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <style>{`
        @keyframes gradShift { 0%,100%{background-position:0%} 50%{background-position:100%} }
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-13px)} }
      `}</style>
    </section>
  );
}
