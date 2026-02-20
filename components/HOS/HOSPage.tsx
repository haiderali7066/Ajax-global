"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  BookOpen,
  Zap,
  TrendingUp,
  Users,
  Phone,
  UserCheck,
  ShoppingCart,
  Home,
  Lock,
  BarChart3,
  Brain,
  Globe,
  Award,
  Briefcase,
  CheckCircle,
  Star,
  ChevronRight,
  Shield,
  Clock,
  HeartHandshake,
  Cpu,
  Layers,
  Target,
  RefreshCw,
  MessageSquare,
  Database,
  Play,
  Sparkles,
  Building2,
  ArrowUpRight,
  Activity,
  Wifi,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";

/* ─── FONTS ─── */
const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap');
  * { font-family: 'Figtree', system-ui, sans-serif; }
`;

/* ─── VARIANTS ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};
const slideRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── AVATAR DATA ─── */
const AVATARS = [
  { emoji: "👩🏽‍💼", color: "#FFD6B8", size: 52 },
  { emoji: "👨🏻‍💻", color: "#B8D4FF", size: 64 },
  { emoji: "👩🏾‍🎤", color: "#D4B8FF", size: 76 },
  { emoji: "👨🏽‍🔧", color: "#B8FFD4", size: 92 },
  { emoji: "👩🏼‍💻", color: "#FFB8D4", size: 112 },
  { emoji: "👨🏿‍💼", color: "#B8F0FF", size: 132 },
  { emoji: "👩🏻‍💼", color: "#FFE8B8", size: 112 },
  { emoji: "👨🏽‍💻", color: "#E8B8FF", size: 92 },
  { emoji: "👩🏾‍💼", color: "#B8FFE8", size: 76 },
  { emoji: "👨🏻‍🎨", color: "#FFB8B8", size: 64 },
  { emoji: "👩🏽‍💻", color: "#B8D4FF", size: 52 },
  { emoji: "👨🏾‍💼", color: "#D4FFB8", size: 44 },
];

/* ══════════════════════════════════════════════════
   1. HERO — monday.com style
══════════════════════════════════════════════════ */
function HOSHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setReady(true), 60);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Very subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Soft top gradient wash */}
      <div
        className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(242,240,255,0.6) 0%, transparent 100%)",
        }}
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 w-full flex flex-col items-center text-center px-4 sm:px-6 pt-28 pb-0"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-8 cursor-default shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-sm font-semibold text-gray-600">
            Human Outsourcing Solutions
          </span>
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
            HOS
          </span>
        </motion.div>

        {/* Giant slim headline — monday.com style */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-[clamp(2.8rem,7vw,5.8rem)] font-light text-gray-900 leading-[1.08] tracking-tight max-w-4xl mb-5"
          style={{ letterSpacing: "-0.02em" }}
        >
          Build the{" "}
          <span
            className="font-extrabold"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #2563eb, #7c3aed)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradShift 5s ease infinite",
            }}
          >
            perfect team
          </span>
          <br />
          <span className="font-light text-gray-400">
            without the overhead.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-[460px] text-[1.1rem] text-gray-500 font-light leading-relaxed mb-10"
        >
          Expand what you can achieve with ready-made or custom outsourced teams
          that integrate where you already work.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-4"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 h-12 rounded-full font-semibold text-white text-sm"
              style={{
                background: "linear-gradient(135deg, #6d28d9, #2563eb)",
                boxShadow: "0 8px 30px rgba(109,40,217,0.3)",
              }}
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

        {/* ── FLOATING UI CARD HERO — monday.com style ── */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* Main dashboard card */}
          <div
            className="relative mx-4 sm:mx-8 rounded-2xl overflow-hidden border border-gray-200 shadow-2xl"
            style={{
              boxShadow:
                "0 40px 100px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)",
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b border-gray-100"
              style={{ background: "#f9f9fb" }}
            >
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
                  <span
                    key={t}
                    className="text-[10px] px-2.5 py-1 rounded-full font-medium text-indigo-700 bg-indigo-50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* Dashboard content */}
            <div className="bg-white grid grid-cols-12 min-h-[320px]">
              {/* Sidebar */}
              <div
                className="col-span-2 border-r border-gray-100 p-4"
                style={{ background: "#fafafa" }}
              >
                <div className="space-y-1">
                  {[
                    "Dashboard",
                    "Teams",
                    "Live KPIs",
                    "Reports",
                    "Support",
                    "Sales",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className={`text-xs py-2 px-2.5 rounded-lg cursor-default font-medium transition-colors ${i === 0 ? "bg-indigo-50 text-indigo-700" : "text-gray-400 hover:text-gray-600"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {/* Main area */}
              <div className="col-span-7 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-400 font-light mb-0.5">
                      Active Teams
                    </p>
                    <h3 className="text-sm font-semibold text-gray-800">
                      Live Operations — Today
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    All systems live
                  </div>
                </div>
                {/* Team rows */}
                <div className="space-y-2">
                  {[
                    {
                      role: "Customer Support",
                      agents: 12,
                      status: "Active",
                      bar: 92,
                      color: "#6d28d9",
                    },
                    {
                      role: "Sales & Lead Gen",
                      agents: 8,
                      status: "Active",
                      bar: 78,
                      color: "#2563eb",
                    },
                    {
                      role: "Virtual Assistants",
                      agents: 6,
                      status: "Active",
                      bar: 85,
                      color: "#059669",
                    },
                    {
                      role: "Property Management",
                      agents: 4,
                      status: "On Break",
                      bar: 60,
                      color: "#d97706",
                    },
                    {
                      role: "IT & Cybersecurity",
                      agents: 3,
                      status: "Active",
                      bar: 95,
                      color: "#dc2626",
                    },
                  ].map((row, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={ready ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.9 + i * 0.08 }}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default group"
                    >
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                        style={{ background: row.color }}
                      >
                        {row.role[0]}
                      </div>
                      <span className="text-xs font-medium text-gray-700 w-36 truncate">
                        {row.role}
                      </span>
                      <span className="text-xs text-gray-400 w-12">
                        {row.agents} agents
                      </span>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: row.color }}
                          initial={{ width: 0 }}
                          animate={ready ? { width: `${row.bar}%` } : {}}
                          transition={{
                            delay: 1.1 + i * 0.1,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${row.status === "Active" ? "text-emerald-700 bg-emerald-50" : "text-amber-700 bg-amber-50"}`}
                      >
                        {row.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Right panel */}
              <div
                className="col-span-3 border-l border-gray-100 p-4 space-y-3"
                style={{ background: "#fafafa" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                  Live Metrics
                </p>
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
                    <p className="text-[10px] text-gray-400 mb-0.5">
                      {m.label}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-bold text-gray-900">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-emerald-600 font-semibold">
                        {m.trend}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating card — top left */}
          <motion.div
            className="absolute -left-2 sm:left-4 top-16 z-20"
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={ready ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.8 }}
            animate={{ y: [0, -8, 0] }}
            style={{ animation: "floatA 6s ease-in-out infinite" }}
          >
            <div
              className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-48"
              style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Users className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  Team Live
                </span>
              </div>
              <div className="flex -space-x-2 mb-2">
                {["#6d28d9", "#2563eb", "#059669", "#d97706"].map((c, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[9px] text-white font-bold"
                    style={{ background: c }}
                  >
                    {["S", "A", "V", "P"][i]}
                  </div>
                ))}
                <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[9px] text-gray-600 font-bold">
                  +29
                </div>
              </div>
              <p className="text-[10px] text-gray-400">33 agents active now</p>
            </div>
          </motion.div>

          {/* Floating card — bottom right */}
          <motion.div
            className="absolute -right-2 sm:right-4 bottom-4 z-20"
            initial={{ opacity: 0, x: 30 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.3, duration: 0.8 }}
            style={{ animation: "floatB 7s ease-in-out infinite" }}
          >
            <div
              className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-52"
              style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  7-Day Go-Live
                </span>
              </div>
              <div className="space-y-1.5">
                {["Discovery", "Sourcing", "Training", "Launch ✓"].map(
                  (step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${i < 3 ? "bg-indigo-400" : "bg-emerald-500"}`}
                      />
                      <span
                        className={`text-[10px] ${i === 3 ? "text-emerald-600 font-semibold" : "text-gray-400"}`}
                      >
                        {step}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Fade bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, white)" }}
      />

      <style>{`
        @keyframes gradShift { 0%,100%{background-position:0%} 50%{background-position:100%} }
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
      `}</style>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   2. TRUST BAR
══════════════════════════════════════════════════ */
function TrustBar() {
  const items = [
    "24/7 Coverage",
    "Dedicated Account Manager",
    "7-Day Go-Live",
    "99.2% Uptime SLA",
    "NDAs Included",
    "Backup Resources Ready",
    "AI-Assisted Workflows",
    "Multilingual Teams",
  ];
  return (
    <div
      className="border-y border-gray-100 py-3 overflow-hidden"
      style={{ background: "#fafafa" }}
    >
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: "marqueeHOS 30s linear infinite" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-xs font-semibold text-gray-400 flex items-center gap-2.5 shrink-0"
          >
            <span className="w-1 h-1 rounded-full bg-indigo-300" />
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marqueeHOS { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }`}</style>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   3. CLIENTS / LOGOS
══════════════════════════════════════════════════ */
function LogoBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center text-sm text-gray-400 font-light mb-10"
        >
          Trusted by 500+ companies across 15 countries
        </motion.p>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {[
            "SaaS Co.",
            "HomeServ",
            "RealtyCo",
            "TechFirm",
            "eShop+",
            "GlobalOps",
          ].map((logo, i) => (
            <motion.div
              key={logo}
              variants={fadeIn}
              custom={i}
              className="text-gray-300 font-bold text-lg tracking-tight hover:text-gray-400 transition-colors cursor-default select-none"
            >
              {logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   4. WHAT IS HOS — split layout monday-style
══════════════════════════════════════════════════ */
function WhatIsHOS() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-indigo-500 block mb-4">
            About HOS
          </span>
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] font-light text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Get more work done with{" "}
            <span className="font-extrabold" style={{ color: "#7c3aed" }}>
              human talent
            </span>
            <br />
            that's woven into your work
          </h2>
        </motion.div>

        {/* Split */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: animated UI mockup */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-xl"
              style={{
                boxShadow:
                  "0 24px 64px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)",
              }}
            >
              {/* Card header */}
              <div
                className="px-6 py-4 border-b border-gray-100 flex items-center justify-between"
                style={{ background: "#f9f9fb" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center">
                    <Users className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    Your Extended Team
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs text-emerald-600 font-medium">
                    Live
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-2.5">
                {[
                  {
                    role: "Customer Support Lead",
                    dept: "Support",
                    status: "active",
                    initials: "CS",
                    color: "#6d28d9",
                    time: "09:42 AM",
                  },
                  {
                    role: "Sales Specialist",
                    dept: "Revenue",
                    status: "active",
                    initials: "SS",
                    color: "#2563eb",
                    time: "09:38 AM",
                  },
                  {
                    role: "Virtual Assistant",
                    dept: "Operations",
                    status: "active",
                    initials: "VA",
                    color: "#059669",
                    time: "09:30 AM",
                  },
                  {
                    role: "Property Manager",
                    dept: "Real Estate",
                    status: "idle",
                    initials: "PM",
                    color: "#d97706",
                    time: "09:15 AM",
                  },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default group"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: m.color }}
                    >
                      {m.initials}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">
                        {m.role}
                      </p>
                      <p className="text-xs text-gray-400 font-light">
                        {m.dept}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 font-light">
                        {m.time}
                      </p>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full mt-0.5 inline-block ${m.status === "active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}
                      >
                        {m.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100 mt-3">
                  {[
                    ["33", "Active Now"],
                    ["99.2%", "Uptime"],
                    ["< 60s", "Response"],
                  ].map(([v, l], i) => (
                    <div
                      key={i}
                      className="text-center py-3 rounded-xl"
                      style={{ background: "#f5f3ff" }}
                    >
                      <div className="text-sm font-bold text-indigo-700">
                        {v}
                      </div>
                      <div className="text-[9px] text-gray-400 mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl border border-gray-200 shadow-lg p-4"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">
                    NDA Protected
                  </p>
                  <p className="text-[10px] text-gray-400">Every engagement</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: copy */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl font-light text-gray-900 mb-3"
                style={{ letterSpacing: "-0.01em" }}
              >
                What is <strong>HOS?</strong>
              </h3>
              <p className="text-base text-gray-500 font-light leading-relaxed">
                Human Outsourcing Solutions go beyond traditional outsourcing.
                We design, train, and manage high-performing teams that
                integrate directly into your operations. Your success becomes
                our success.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: Users,
                  title: "People-First Approach",
                  desc: "We select, train & nurture talent that truly cares about your brand.",
                  color: "#7c3aed",
                },
                {
                  icon: Zap,
                  title: "Process-Driven Execution",
                  desc: "Structured workflows and KPI alignment deliver consistent outcomes.",
                  color: "#2563eb",
                },
                {
                  icon: Globe,
                  title: "Scalable Global Delivery",
                  desc: "Grow your teams anywhere, anytime — without overhead headaches.",
                  color: "#059669",
                },
              ].map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-start gap-4 group cursor-default"
                    whileHover={{ x: 4 }}
                  >
                    <div
                      className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${p.color}12`,
                        border: `1.5px solid ${p.color}20`,
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: p.color }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">
                        {p.title}
                      </h4>
                      <p className="text-sm text-gray-400 font-light">
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 h-11 rounded-full font-semibold text-white text-sm"
                style={{
                  background: "linear-gradient(135deg, #6d28d9, #2563eb)",
                  boxShadow: "0 6px 20px rgba(109,40,217,0.25)",
                }}
              >
                Explore HOS Services <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   5. ROLES — card grid
══════════════════════════════════════════════════ */
function RolesWeProvide() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const roles = [
    {
      icon: Phone,
      title: "Customer Support",
      desc: "Brand-trained agents, zero downtime",
      color: "#7c3aed",
    },
    {
      icon: TrendingUp,
      title: "Sales & Lead Generation",
      desc: "Closers who treat every lead as sacred",
      color: "#2563eb",
    },
    {
      icon: UserCheck,
      title: "Virtual & Admin Assistants",
      desc: "Executive support and admin excellence",
      color: "#059669",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Management",
      desc: "Shopify, WooCommerce, Amazon — 24/7",
      color: "#d97706",
    },
    {
      icon: Home,
      title: "Property Management",
      desc: "Tenant care, maintenance, rent coordination",
      color: "#dc2626",
    },
    {
      icon: Lock,
      title: "IT & Cybersecurity",
      desc: "Technical teams and MSP-level operations",
      color: "#475569",
    },
    {
      icon: BarChart3,
      title: "SEO & Social Media",
      desc: "Visibility, content, and digital presence",
      color: "#7c3aed",
    },
    {
      icon: Users,
      title: "Custom Remote Teams",
      desc: "Fully bespoke for your exact industry",
      color: "#2563eb",
    },
    {
      icon: Target,
      title: "Client Retention",
      desc: "Proactive relationship defence & loyalty",
      color: "#ec4899",
    },
    {
      icon: RefreshCw,
      title: "Scheduling & Dispatch",
      desc: "60-second rule — every lead captured",
      color: "#0ea5e9",
    },
    {
      icon: MessageSquare,
      title: "Multilingual Support",
      desc: "English, Spanish, French, Arabic coverage",
      color: "#14b8a6",
    },
    {
      icon: Database,
      title: "Data & Reporting",
      desc: "KPI dashboards and performance analytics",
      color: "#8b5cf6",
    },
  ];

  return (
    <section
      className="py-24 sm:py-32"
      style={{ background: "#f8f7ff" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-indigo-500 block mb-4">
            What We Deliver
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Roles we <strong>provide</strong>
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-sm mx-auto text-sm">
            Every role covered — specialized or fully custom.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i % 4}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="group bg-white rounded-2xl p-5 border border-gray-200/60 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
                whileHover={{ y: -4 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${role.color}05, transparent)`,
                  }}
                />
                <div
                  className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `${role.color}10`,
                    border: `1.5px solid ${role.color}20`,
                  }}
                >
                  <Icon
                    className="w-4.5 h-4.5"
                    style={{ width: 18, height: 18, color: role.color }}
                  />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-indigo-700 transition-colors">
                  {role.title}
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {role.desc}
                </p>
                <div className="mt-3 flex items-center gap-1 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-medium">Learn more</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   6. HOW IT WORKS — monday-style horizontal steps
══════════════════════════════════════════════════ */
function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const steps = [
    {
      icon: Search,
      num: "01",
      title: "Discovery Call",
      desc: "Define goals, roles, and expectations in a focused consultation.",
      color: "#7c3aed",
    },
    {
      icon: BookOpen,
      num: "02",
      title: "Elite Talent Sourcing",
      desc: "Multi-layer vetting — language, domain expertise, background checks.",
      color: "#2563eb",
    },
    {
      icon: Users,
      num: "03",
      title: "Training & Onboarding",
      desc: "Train-the-trainer model ensures zero knowledge transfer loss.",
      color: "#059669",
    },
    {
      icon: TrendingUp,
      num: "04",
      title: "Performance Management",
      desc: "Daily QA, weekly KPI reports, and monthly retraining cycles.",
      color: "#d97706",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-indigo-500 block mb-4">
            Our Process
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            How it <strong>works</strong>
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-md mx-auto">
            A repeatable process from sourcing to continuous improvement
          </p>
        </motion.div>

        <div className="relative">
          {/* Line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-100 overflow-hidden">
            <motion.div
              className="h-full"
              style={{
                background:
                  "linear-gradient(90deg, #7c3aed, #2563eb, #059669, #d97706)",
              }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="flex flex-col items-center text-center group"
                  whileHover={{ y: -6 }}
                >
                  {/* Icon bubble */}
                  <div
                    className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 ring-4 ring-white"
                    style={{
                      background: `${s.color}12`,
                      border: `2px solid ${s.color}25`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: s.color }} />
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: s.color }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 w-full shadow-sm group-hover:border-gray-200 group-hover:shadow-md transition-all duration-300">
                    <div className="text-4xl font-black text-gray-100 mb-2 group-hover:text-gray-200 transition-colors">
                      {s.num}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm group-hover:text-indigo-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   7. WHY AJAX — features grid
══════════════════════════════════════════════════ */
function WhyAJAXGlobal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const items = [
    {
      icon: BarChart3,
      title: "KPI-Driven Performance",
      desc: "Every team aligned to measurable outcomes — daily QA and monthly re-training cycles.",
      color: "#7c3aed",
    },
    {
      icon: Brain,
      title: "AI-Assisted Workflows",
      desc: "Supercharged by IntelliDesq™ for real-time insights and data-driven decision-making.",
      color: "#2563eb",
    },
    {
      icon: UserCheck,
      title: "Dedicated Account Manager",
      desc: "Single point of contact who knows your business, available in your local timezone.",
      color: "#059669",
    },
    {
      icon: Zap,
      title: "Scalable On Demand",
      desc: "Start with one agent or scale to fifty — same operational discipline at any size.",
      color: "#d97706",
    },
    {
      icon: Globe,
      title: "24/7 Global Delivery",
      desc: "99.9% attendance — backup resources trained and ready for uninterrupted operations.",
      color: "#0ea5e9",
    },
    {
      icon: Award,
      title: "99.2% Uptime Guarantee",
      desc: "Enterprise-grade SLAs with redundancy systems and 72-hour replacement guarantee.",
      color: "#ec4899",
    },
  ];

  return (
    <section
      className="py-24 sm:py-32"
      style={{ background: "#f8f7ff" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-indigo-500 block mb-4">
            Our Edge
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Why <strong>AJAX Global</strong>
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-sm mx-auto text-sm">
            Six pillars that separate us from every other outsourcing provider
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i % 3}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="group bg-white rounded-2xl p-7 border border-gray-200/60 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 cursor-default relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg,${a.color}04,transparent)`,
                  }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300"
                  style={{
                    background: `${a.color}10`,
                    border: `1.5px solid ${a.color}20`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: a.color }} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                  {a.title}
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {a.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   8. INTELLIDESQ — dark section (monday dark section style)
══════════════════════════════════════════════════ */
function HOSIntelliDesqSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const features = [
    { icon: Cpu, label: "Real-time analytics dashboard" },
    { icon: Brain, label: "Predictive workflow intelligence" },
    { icon: Shield, label: "Built-in compliance monitoring" },
    { icon: Clock, label: "Automated KPI reporting & alerts" },
    { icon: Layers, label: "Seamless CRM & tool integration" },
  ];

  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: "#1a1a2e" }}
      ref={ref}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <motion.div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle,rgba(109,40,217,0.2) 0%,transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[.2em] text-indigo-400 block mb-4">
                Powered By AI
              </span>
              <h2
                className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                HOS +{" "}
                <span
                  className="font-extrabold"
                  style={{
                    background: "linear-gradient(135deg,#a78bfa,#60a5fa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  IntelliDesq™
                </span>
              </h2>
              <p className="text-white/50 font-light leading-relaxed mt-4">
                Our HOS teams are supercharged by IntelliDesq™ — giving your
                teams <span className="text-white/80">real-time insights</span>,
                predictive analytics, and data-driven decision-making that
                traditional outsourcing can't match.
              </p>
            </div>
            <div className="space-y-3">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.09 }}
                    className="flex items-center gap-3 group cursor-default"
                    whileHover={{ x: 6 }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center shrink-0 group-hover:border-indigo-400/40 group-hover:bg-indigo-500/10 transition-all"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <Icon className="w-4 h-4 text-indigo-400" />
                    </div>
                    <span className="text-white/50 text-sm group-hover:text-white/90 transition-colors">
                      {f.label}
                    </span>
                    <CheckCircle className="w-4 h-4 text-emerald-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                );
              })}
            </div>
            <Link href="/intellidesq">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-6 h-11 rounded-full font-semibold text-indigo-700 text-sm bg-white hover:bg-gray-100 transition-colors"
              >
                Explore IntelliDesq™ <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right: glass UI card */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div
              className="rounded-2xl border border-white/10 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                boxShadow:
                  "0 24px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="h-px w-full"
                style={{
                  background:
                    "linear-gradient(90deg,transparent,rgba(167,139,250,0.6),rgba(96,165,250,0.6),transparent)",
                }}
              />
              <div className="p-8">
                <div className="text-center mb-8">
                  <motion.div
                    className="inline-flex w-20 h-20 rounded-2xl items-center justify-center text-4xl mb-4 border border-white/10"
                    style={{ background: "rgba(109,40,217,0.2)" }}
                    animate={{ rotate: [0, 4, -4, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    🧠
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">
                    AI-Powered Intelligence
                  </h3>
                  <p className="text-white/35 text-sm mt-1">
                    Real-time insights & intelligent automation
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    ["10×", "Faster Decisions"],
                    ["40%", "Cost Reduction"],
                    ["98%", "Accuracy Rate"],
                  ].map(([v, l]) => (
                    <motion.div
                      key={l}
                      className="rounded-xl p-3 text-center border border-white/08 cursor-default"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                      whileHover={{
                        scale: 1.06,
                        background: "rgba(109,40,217,0.2)",
                      }}
                    >
                      <div className="text-lg font-bold text-white">{v}</div>
                      <div className="text-[10px] text-white/30 mt-0.5">
                        {l}
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Animated pulse bars */}
                <div className="space-y-2.5">
                  {[
                    ["Decision Engine", "92%"],
                    ["Workflow AI", "87%"],
                    ["Compliance Monitor", "99%"],
                  ].map(([label, pct], i) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="text-xs text-white/40 w-36 truncate">
                        {label}
                      </span>
                      <div
                        className="flex-1 h-1.5 rounded-full"
                        style={{ background: "rgba(255,255,255,0.07)" }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg,#7c3aed,#2563eb)",
                          }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: pct } : {}}
                          transition={{ delay: 0.8 + i * 0.1, duration: 1 }}
                        />
                      </div>
                      <span className="text-xs text-white/40 w-8 text-right">
                        {pct}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   9. USE CASES — tabbed monday style
══════════════════════════════════════════════════ */
function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);
  const cases = [
    {
      tab: "Sales",
      color: "#7c3aed",
      icon: TrendingUp,
      title: "Sales Operations",
      sub: "Scale your revenue team without ballooning hiring overhead",
      bullets: [
        "Dedicated SDRs & AEs trained to your exact CRM and process",
        "60-second lead capture rule — no lead left behind",
        "Multi-language coverage across US, UK, AUS, CA markets",
        "Monthly performance reviews with pipeline attribution",
      ],
      metric: "3.2×",
      metricLabel: "Average pipeline increase",
    },
    {
      tab: "Support",
      color: "#2563eb",
      icon: Phone,
      title: "Customer Support Ops",
      sub: "Round-the-clock support that feels like your in-house team",
      bullets: [
        "Omnichannel: phone, email, chat, WhatsApp, social",
        "Integrated with Zendesk, Freshdesk, Intercom & more",
        "99.2% uptime SLA with backup agents always on standby",
        "Daily QA reviews and weekly CSAT reporting",
      ],
      metric: "98%",
      metricLabel: "Average CSAT score achieved",
    },
    {
      tab: "Operations",
      color: "#059669",
      icon: Briefcase,
      title: "Back-Office & Operations",
      sub: "Free your core team from administrative burden",
      bullets: [
        "Data entry, reporting, compliance and reconciliation",
        "Scheduling, dispatching and coordination workflows",
        "Vendor management and procurement support",
        "Custom SOP creation and knowledge base management",
      ],
      metric: "40%",
      metricLabel: "Average cost reduction",
    },
    {
      tab: "Real Estate",
      color: "#d97706",
      icon: Home,
      title: "Property Management",
      sub: "Become the admin backbone of your property portfolio",
      bullets: [
        "Tenant communications, maintenance coordination, rent tracking",
        "AppFolio, Buildium, Yardi and DoorLoop integration",
        "24/7 emergency response line management",
        "Lease renewal campaigns and tenant retention programs",
      ],
      metric: "500+",
      metricLabel: "Properties managed via AJAX",
    },
  ];
  const c = cases[active];

  return (
    <section className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-indigo-500 block mb-4">
            Real-World Impact
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Solutions for every team,{" "}
            <span className="font-extrabold" style={{ color: "#7c3aed" }}>
              powered by people
            </span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex gap-2 justify-center mb-10 flex-wrap"
        >
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 h-10 rounded-full text-sm font-semibold transition-all duration-200 border ${active === i ? "text-white border-transparent shadow-md" : "text-gray-500 border-gray-200 bg-white hover:border-gray-300"}`}
                style={
                  active === i
                    ? {
                        background: c.color,
                        boxShadow: `0 4px 16px ${c.color}30`,
                      }
                    : {}
                }
              >
                <Icon className="w-3.5 h-3.5" /> {c.tab}
              </button>
            );
          })}
        </motion.div>

        {/* Active case */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Copy side */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-gray-400 font-light">{c.sub}</p>
              </div>
              <div className="space-y-3">
                {c.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: c.color }}
                    />
                    <span className="text-sm text-gray-600 font-light">
                      {b}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black" style={{ color: c.color }}>
                  {c.metric}
                </div>
                <div className="text-sm text-gray-400 font-light">
                  {c.metricLabel}
                </div>
              </div>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 px-6 h-10 rounded-full font-semibold text-white text-sm"
                  style={{ background: c.color }}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>

            {/* Visual card */}
            <div
              className="relative rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-xl"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.09)" }}
            >
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${c.color}, ${c.color}80)`,
                }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${c.color}12` }}
                    >
                      {(() => {
                        const Icon = c.icon;
                        return (
                          <Icon
                            className="w-4 h-4"
                            style={{ color: c.color }}
                          />
                        );
                      })()}
                    </div>
                    <span className="font-semibold text-gray-800 text-sm">
                      {c.tab} Team Dashboard
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium text-emerald-700 bg-emerald-50">
                    Live
                  </span>
                </div>
                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    ["Active Agents", "12", "↑ from 8"],
                    ["Tickets Today", "284", "vs 240 avg"],
                    ["Avg Handle", "4m 12s", "↓ improved"],
                    ["SLA Met", "99.3%", "Target: 98%"],
                  ].map(([label, val, note], i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl border border-gray-100"
                      style={{ background: "#fafafa" }}
                    >
                      <p className="text-[10px] text-gray-400 mb-0.5">
                        {label}
                      </p>
                      <p className="text-base font-bold text-gray-800">{val}</p>
                      <p className="text-[10px] text-emerald-600 font-medium">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Activity list */}
                <div className="space-y-2">
                  {[
                    {
                      msg: "New ticket assigned to Support Lead",
                      ago: "just now",
                    },
                    {
                      msg: "SLA alert resolved — ticket #4821",
                      ago: "2 min ago",
                    },
                    { msg: "Weekly KPI report generated", ago: "5 min ago" },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs py-2 border-t border-gray-50"
                    >
                      <span className="text-gray-500">{row.msg}</span>
                      <span className="text-gray-300 shrink-0 ml-3">
                        {row.ago}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   10. AVATAR ARC — monday-style face arc
══════════════════════════════════════════════════ */
function AgentArc() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 sm:py-28"
      style={{ background: "#f8f7ff" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-indigo-500 block mb-4">
            AJAX Global HOS
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span
              className="font-extrabold"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#2563eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Unlimited workforce
            </span>{" "}
            that
            <br />
            amplifies your team's impact.
          </h2>
          <p className="text-gray-400 font-light mt-4 max-w-md mx-auto">
            Expand what you can achieve with ready-made or custom outsourced
            teams that act where you already work.
          </p>
        </motion.div>

        {/* Avatar arc */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex items-end justify-center gap-2 sm:gap-3 px-12 mb-10"
        >
          <div
            className="absolute inset-y-0 left-0 w-20 pointer-events-none"
            style={{
              background: "linear-gradient(to right,#f8f7ff,transparent)",
              zIndex: 10,
            }}
          />
          <div
            className="absolute inset-y-0 right-0 w-20 pointer-events-none"
            style={{
              background: "linear-gradient(to left,#f8f7ff,transparent)",
              zIndex: 10,
            }}
          />
          {AVATARS.map((a, i) => (
            <motion.div
              key={i}
              className="shrink-0 rounded-full flex items-center justify-center cursor-default select-none border-2 border-white shadow-md"
              style={{
                width: a.size,
                height: a.size,
                background: a.color,
                boxShadow:
                  a.size >= 100
                    ? `0 8px 30px rgba(0,0,0,0.12)`
                    : "0 4px 12px rgba(0,0,0,0.08)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.3 + i * 0.06,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.12, y: -8, zIndex: 10 }}
            >
              <span style={{ fontSize: a.size * 0.44 }}>{a.emoji}</span>
              {[2, 5, 8].includes(i) && (
                <div className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm font-light mb-6">
            2,000+ professionals deployed across 15+ countries
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-8 h-12 rounded-full font-semibold text-white text-sm"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#2563eb)",
                boxShadow: "0 8px 30px rgba(109,40,217,0.28)",
              }}
            >
              Build Your Team <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   11. PRICING — clean monday-style
══════════════════════════════════════════════════ */
function PricingSnapshot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const tiers = [
    {
      label: "Associate",
      hourly: "$9",
      monthly: "$1,300/mo",
      desc: "Basic ops, data entry, ticket creation, general tasks",
      color: "#7c3aed",
    },
    {
      label: "Specialist",
      hourly: "$11.50",
      monthly: "$1,600/mo",
      desc: "Escalations, upselling, vendor outreach, advanced coordination",
      color: "#2563eb",
      featured: true,
    },
    {
      label: "Manager",
      hourly: "$14",
      monthly: "$2,000/mo",
      desc: "Team oversight, QA management, training, and escalations",
      color: "#059669",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-indigo-500 block mb-4">
            Transparent Pricing
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Simple, clear <strong>pricing</strong>
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-sm mx-auto text-sm">
            Per dedicated full-time resource (160 hrs / month)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="rounded-2xl border p-8 transition-all duration-300 relative"
              style={{
                borderColor: t.featured ? t.color + "40" : "#e5e7eb",
                background: t.featured ? "#faf9ff" : "white",
                boxShadow: t.featured
                  ? `0 16px 50px rgba(37,99,235,0.1)`
                  : "none",
                transform: t.featured ? "scale(1.04)" : "none",
              }}
              whileHover={{ y: -4 }}
            >
              {t.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className="px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: t.color }}
                  >
                    Most Popular
                  </span>
                </div>
              )}
              <div
                className="h-px mb-6"
                style={{
                  background: `linear-gradient(90deg, ${t.color}, ${t.color}40)`,
                }}
              />
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {t.label}
              </p>
              <div
                className="text-4xl font-light text-gray-900 mb-0.5"
                style={{ letterSpacing: "-0.02em" }}
              >
                <strong>{t.hourly}</strong>
                <span className="text-base font-normal text-gray-400">/hr</span>
              </div>
              <div className="font-semibold mb-4" style={{ color: t.color }}>
                {t.monthly}
              </div>
              <p className="text-sm text-gray-400 font-light leading-relaxed border-t border-gray-100 pt-4">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center"
        >
          <p className="text-sm text-gray-400 font-light mb-5">
            Enterprise & custom team contracts available. Invoiced monthly in
            advance.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-7 h-11 rounded-full font-semibold text-white text-sm"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#2563eb)",
                boxShadow: "0 6px 20px rgba(109,40,217,0.25)",
              }}
            >
              Get a Custom Quote <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   12. TESTIMONIALS — case study card style
══════════════════════════════════════════════════ */
function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const quotes = [
    {
      text: "AJAX Global transformed our support ops within two weeks. Zero downtime, professional agents, and KPIs that actually mean something.",
      author: "Operations Director",
      company: "SaaS Company — USA",
      emoji: "🇺🇸",
      color: "#7c3aed",
      stat: "615%",
      statLabel: "ROI achieved",
    },
    {
      text: "The 60-second rule changed our lead capture rate permanently. We were losing 40% of inbound leads before AJAX.",
      author: "CEO",
      company: "Home Services — Australia",
      emoji: "🇦🇺",
      color: "#2563eb",
      stat: "40%",
      statLabel: "More leads captured",
    },
    {
      text: "Having IntelliDesq™ alongside the human team gives us insights we never had with our in-house setup. Worth every dollar.",
      author: "Founder",
      company: "E-Commerce Brand — Canada",
      emoji: "🇨🇦",
      color: "#059669",
      stat: "300%",
      statLabel: "Cost savings reinvested",
    },
  ];

  return (
    <section
      className="py-24 sm:py-32"
      style={{ background: "#f8f7ff" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-indigo-500 block mb-4">
            Client Results
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Brands who trust AJAX Global to{" "}
            <span className="font-extrabold" style={{ color: "#7c3aed" }}>
              accelerate outcomes
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-default"
              whileHover={{ y: -5 }}
            >
              {/* Image area placeholder — styled gradient */}
              <div
                className="h-36 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${q.color}15, ${q.color}05)`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-40">{q.emoji}</span>
                </div>
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-3xl font-black"
                      style={{ color: q.color }}
                    >
                      {q.stat}
                    </span>
                    <span className="text-sm text-gray-500 font-light">
                      {q.statLabel}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                  "{q.text}"
                </p>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <span className="text-lg">{q.emoji}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">
                      {q.author}
                    </p>
                    <p className="text-[10px] text-gray-400">{q.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10"
        >
          {[
            {
              icon: HeartHandshake,
              label: "Integrity First",
              sub: "NDAs + data security on every engagement",
              color: "#ec4899",
            },
            {
              icon: Clock,
              label: "7-Day Go-Live",
              sub: "From approval to active team in one week",
              color: "#7c3aed",
            },
            {
              icon: Shield,
              label: "99.2% Uptime SLA",
              sub: "Backup resources always trained and in place",
              color: "#059669",
            },
            {
              icon: Star,
              label: "98% Retention",
              sub: "Results speak louder than promises",
              color: "#d97706",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-2xl p-5 border border-gray-200/60 flex items-start gap-3 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <div
                  className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.color}10` }}
                >
                  <Icon className="w-4 h-4" style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-gray-400 font-light mt-0.5 leading-snug">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   13. FINAL CTA — monday style white with floating elements
══════════════════════════════════════════════════ */
function HOSCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden bg-white"
      ref={ref}
    >
      {/* Very light gradient center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.04) 1px,transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating UI elements like monday.com CTA */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 opacity-60 hidden lg:block"
        style={{ animation: "floatA 7s ease-in-out infinite" }}
      >
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center">
              <Users className="w-3 h-3 text-indigo-600" />
            </div>
            <span className="text-xs font-semibold text-gray-700">
              New Team
            </span>
          </div>
          <div className="space-y-1.5">
            {["Support Lead ✓", "Sales Agent ✓", "VA Assigned ✓"].map(
              (item) => (
                <div
                  key={item}
                  className="text-[10px] text-emerald-600 flex items-center gap-1"
                >
                  <CheckCircle className="w-2.5 h-2.5" />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <div
        className="absolute right-8 top-1/3 -translate-y-1/2 opacity-60 hidden lg:block"
        style={{ animation: "floatB 8s ease-in-out infinite" }}
      >
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <p className="text-[10px] text-gray-400 mb-2">Go-live in</p>
          <div className="text-2xl font-black text-indigo-600">7 days</div>
          <p className="text-[10px] text-gray-400 mt-1">
            From approval to active
          </p>
        </div>
      </div>
      <div
        className="absolute right-16 bottom-1/4 opacity-50 hidden lg:block"
        style={{ animation: "floatA 9s ease-in-out infinite 1s" }}
      >
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-3 w-36">
          <p className="text-[10px] text-gray-400">Client satisfaction</p>
          <div className="text-xl font-black text-emerald-600">98%</div>
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-6"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-600 shadow-sm cursor-default"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Ready to outpace everyone?
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[clamp(2.5rem,6vw,5rem)] font-light text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ready to build the{" "}
            <span
              className="font-extrabold"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#2563eb,#7c3aed)",
                backgroundSize: "200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradShift 5s ease infinite",
              }}
            >
              best team
            </span>
            <br />
            for your business?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-400 font-light max-w-xl mx-auto leading-relaxed"
          >
            Start with a personalized consultation. We'll design your ideal team
            and have them live within 7 days.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-9 h-13 rounded-full font-bold text-white text-base"
                style={{
                  height: 52,
                  background: "linear-gradient(135deg,#7c3aed,#2563eb)",
                  boxShadow: "0 12px 40px rgba(109,40,217,0.3)",
                }}
              >
                Get Started{" "}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-8 h-13 rounded-full font-medium text-gray-600 text-base border border-gray-200 bg-white hover:border-gray-300 transition-colors"
                style={{ height: 52 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-gray-400 font-light"
          >
            {[
              "No long-term lock-in",
              "7-day go-live",
              "Dedicated account manager",
              "Full transparency billing",
            ].map((t) => (
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

/* ══════════════════════════════════════════════════
   DEFAULT EXPORT
══════════════════════════════════════════════════ */
export default function HOSPageComponent() {
  return (
    <>
      <style>{fontImport}</style>
      <HOSHero />
      <TrustBar />
      <LogoBar />
      <WhatIsHOS />
      <RolesWeProvide />
      <HowItWorks />
      <WhyAJAXGlobal />
      <HOSIntelliDesqSection />
      <UseCases />
      <AgentArc />
      <PricingSnapshot />
      <TrustSection />
      <HOSCTA />
    </>
  );
}
