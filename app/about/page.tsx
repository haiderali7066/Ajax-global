"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Award,
  Globe,
  Users,
  Zap,
  Star,
  Shield,
  Heart,
  TrendingUp,
  Eye,
  Lock,
  CheckCircle,
  ChevronRight,
  Phone,
  Sparkles,
  Play,
  Brain,
  Target,
} from "lucide-react";

/* ─── FONT ─── */
const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap');
  * { font-family: 'Figtree', system-ui, sans-serif; }
  @keyframes gradShift { 0%,100%{background-position:0%} 50%{background-position:100%} }
  @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  @keyframes marqueeAbout { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }
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
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ══════════════════════════════════════════════════
   1. HERO
══════════════════════════════════════════════════ */
function AboutHero() {
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
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-white"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Top wash */}
      <div
        className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(242,240,255,0.6) 0%, transparent 100%)",
        }}
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 w-full flex flex-col items-center text-center px-4 sm:px-6 pt-32 pb-0"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-8 cursor-default shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-semibold text-gray-600">
            About AJAX Global
          </span>
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            EST. 2018
          </span>
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
          <span className="font-extrabold text-primary">
            Powered by People.
          </span>
          <br />
          <span className="font-light text-gray-400">Enhanced by AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-[500px] text-[1.1rem] text-gray-500 font-light leading-relaxed mb-10"
        >
          A full-service outsourcing and AI solutions company helping businesses
          scale smarter through a powerful hybrid model of human expertise and
          intelligent automation.
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

        {/* Dashboard card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          className="relative w-full max-w-5xl mx-auto"
        >
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
                  ajaxglobal.com/about
                </div>
              </div>
              <div className="flex gap-2">
                {["HOS", "AI", "Global"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2.5 py-1 rounded-full font-medium text-primary bg-primary/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Content area */}
            <div className="bg-white grid grid-cols-12 min-h-[300px]">
              {/* Sidebar */}
              <div
                className="col-span-2 border-r border-gray-100 p-4"
                style={{ background: "#fafafa" }}
              >
                <div className="space-y-1">
                  {[
                    "Overview",
                    "Mission",
                    "Values",
                    "Industries",
                    "Timeline",
                    "Team",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className={`text-xs py-2 px-2.5 rounded-lg cursor-default font-medium transition-colors ${i === 0 ? "bg-primary/10 text-primary" : "text-gray-400 hover:text-gray-600"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="col-span-7 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-400 font-light mb-0.5">
                      Company Overview
                    </p>
                    <h3 className="text-sm font-semibold text-gray-800">
                      AJAX Global — At a Glance
                    </h3>
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
                  {[
                    {
                      label: "Human Outsourcing Solutions",
                      val: "BPO, Sales, Admin, Support",
                      bar: 92,
                    },
                    {
                      label: "AI & Automation (IntelliDesq™)",
                      val: "Chat, Voice, Workflow AI",
                      bar: 85,
                    },
                    {
                      label: "Global Coverage",
                      val: "USA · Canada · Australia · UAE",
                      bar: 78,
                    },
                    {
                      label: "Industry Verticals",
                      val: "8+ specialized sectors",
                      bar: 70,
                    },
                  ].map((row, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={ready ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.9 + i * 0.08 }}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                        {i + 1}
                      </div>
                      <span className="text-xs font-medium text-gray-700 w-44 truncate">
                        {row.label}
                      </span>
                      <span className="text-xs text-gray-400 flex-1 truncate">
                        {row.val}
                      </span>
                      <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          animate={ready ? { width: `${row.bar}%` } : {}}
                          transition={{
                            delay: 1.1 + i * 0.1,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right metrics */}
              <div
                className="col-span-3 border-l border-gray-100 p-4 space-y-3"
                style={{ background: "#fafafa" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                  Key Numbers
                </p>
                {[
                  { label: "Countries", value: "15+" },
                  { label: "Clients", value: "500+" },
                  { label: "Team Size", value: "2,000+" },
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
                    <span className="text-base font-bold text-gray-900">
                      {m.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating card left */}
          <motion.div
            className="absolute -left-2 sm:left-4 top-16 z-20"
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={ready ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.8 }}
            style={{ animation: "floatA 6s ease-in-out infinite" }}
          >
            <div
              className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-48"
              style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  Global Reach
                </span>
              </div>
              <div className="text-2xl font-black text-primary">15+</div>
              <p className="text-[10px] text-gray-400 mt-0.5">
                Countries served worldwide
              </p>
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
            <div
              className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-52"
              style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  Since 2018
                </span>
              </div>
              <div className="space-y-1.5">
                {[
                  "Founded ✓",
                  "Scaled globally ✓",
                  "AI-powered ✓",
                  "Still growing ✓",
                ].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${i < 3 ? "bg-primary/60" : "bg-emerald-500"}`}
                    />
                    <span
                      className={`text-[10px] ${i === 3 ? "text-emerald-600 font-semibold" : "text-gray-400"}`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
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
    </section>
  );
}

/* ══════════════════════════════════════════════════
   2. TRUST BAR
══════════════════════════════════════════════════ */
function TrustBar() {
  const items = [
    "500+ Enterprise Clients",
    "15+ Countries",
    "2,000+ Professionals",
    "24/7 Operations",
    "$1B+ Managed Ops",
    "NDAs on Every Engagement",
    "7-Day Go-Live",
    "99.2% Uptime SLA",
  ];
  return (
    <div
      className="border-y border-gray-100 py-3 overflow-hidden"
      style={{ background: "#fafafa" }}
    >
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: "marqueeAbout 30s linear infinite" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-xs font-semibold text-gray-400 flex items-center gap-2.5 shrink-0"
          >
            <span className="w-1 h-1 rounded-full bg-primary/50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════
   3. WHO WE ARE
══════════════════════════════════════════════════ */
function WhoWeAre() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary block mb-4">
            Who We Are
          </span>
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] font-light text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Your global{" "}
            <span className="font-extrabold text-primary">
              outsourcing &amp;
            </span>
            <br />
            <span className="font-extrabold text-gray-900">
              automation partner
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-8"
          >
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p className="text-base">
                AJAX Global delivers high-performance remote teams and advanced
                AI solutions to businesses across multiple industries —
                specializing in BPO, customer experience, sales, admin support,
                and AI-powered workflow automation.
              </p>
              <p className="text-base">
                Unlike traditional outsourcing, we integrate{" "}
                <span className="font-semibold text-gray-800">
                  human specialists with intelligent automation
                </span>{" "}
                to create efficient, scalable, future-ready systems.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Global presence: USA, Canada, Australia, UAE",
                "24/7 operational capability",
                "Long-term partnerships, not short-term contracts",
                "Industry-trained professionals in every role",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.09 }}
                  className="flex items-center gap-3 group cursor-default"
                  whileHover={{ x: 4 }}
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </motion.div>
              ))}
            </div>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 h-11 rounded-full font-semibold text-white text-sm bg-primary shadow-lg shadow-primary/30"
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right: stat cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Countries", value: "15+", desc: "Global presence" },
              {
                label: "Enterprise Clients",
                value: "500+",
                desc: "Across all verticals",
              },
              {
                label: "Team Members",
                value: "2,000+",
                desc: "Deployed globally",
              },
              {
                label: "Managed Ops",
                value: "$1B+",
                desc: "In operations handled",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-primary/5 border border-primary/10 rounded-2xl p-8 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="text-4xl font-black text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-gray-400">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   4. MISSION & VISION — dark section
══════════════════════════════════════════════════ */
function MissionVision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: "#1a1a2e" }}
      ref={ref}
    >
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
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle,rgba(var(--primary-rgb, 109,40,217),0.15) 0%,transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary/80 block mb-4">
            Purpose
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Why we <span className="font-extrabold text-primary">exist</span>{" "}
            &amp; where we're{" "}
            <span className="font-extrabold text-primary">going</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {[
            {
              pill: "Mission",
              icon: Zap,
              heading: "Empower businesses through",
              bold: "intelligent outsourcing",
              body: "To empower businesses worldwide with flexible, efficient, and intelligent outsourcing solutions — combining human expertise and AI innovation to reduce costs, enhance productivity, and deliver exceptional customer experiences.",
            },
            {
              pill: "Vision",
              icon: Eye,
              heading: "Become the most",
              bold: "trusted global partner",
              body: "To become the most trusted global partner for companies modernizing operations through smart human outsourcing and AI-powered automation — where businesses of all sizes operate at enterprise scale.",
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.15,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-primary" />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-primary/20">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 inline-block bg-primary/20 text-primary">
                  {card.pill}
                </span>
                <h3 className="text-2xl font-light text-white leading-tight mt-3">
                  {card.heading}{" "}
                  <span className="font-extrabold">{card.bold}</span>
                </h3>
                <p className="mt-4 text-white/50 leading-relaxed text-sm">
                  {card.body}
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
   5. CORE VALUES — card grid
══════════════════════════════════════════════════ */
function CoreValues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      desc: "We deliver on time, every time — no excuses, no surprises.",
    },
    {
      icon: Star,
      title: "Integrity",
      desc: "Transparency and honesty in every engagement we take on.",
    },
    {
      icon: Zap,
      title: "Innovation",
      desc: "Continuous improvement through smarter processes and advanced technologies.",
    },
    {
      icon: Heart,
      title: "Customer-Centricity",
      desc: "Your growth defines our success. We measure ourselves by your results.",
    },
    {
      icon: TrendingUp,
      title: "Accountability",
      desc: "We take ownership of outcomes, not just tasks.",
    },
    {
      icon: Lock,
      title: "Confidentiality",
      desc: "Your data and operations remain secure and protected at all times.",
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
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary block mb-4">
            Core Values
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Principles that <strong>drive everything</strong> we do
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-sm mx-auto text-sm">
            Six pillars behind every decision we make.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i % 3}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="group bg-white rounded-2xl p-7 border border-gray-200/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-default relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-primary/10 border border-primary/20 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm group-hover:text-primary transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {val.desc}
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
   6. WHAT MAKES US DIFFERENT
══════════════════════════════════════════════════ */
function WhatMakesUsDifferent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const items = [
    {
      num: "01",
      title: "Human + AI Hybrid Model",
      desc: "Emotional intelligence of real people combined with the precision of automation — results no pure-AI or pure-human team can match.",
    },
    {
      num: "02",
      title: "Industry-Specialized Teams",
      desc: "Our professionals are trained for specific verticals: property management, SaaS, e-commerce, logistics, and home services.",
    },
    {
      num: "03",
      title: "End-to-End Solutions",
      desc: "Customer support, admin services, AI chat agents and workflow automation — everything under one roof.",
    },
    {
      num: "04",
      title: "Global 24/7 Coverage",
      desc: "Serving clients across USA, Canada, Australia, and UAE with scalable 24/7 support models that never sleep.",
    },
    {
      num: "05",
      title: "Scalable Growth Structure",
      desc: "Start with one role or one AI system — expand as your business grows. No lock-in, no bloat.",
    },
    {
      num: "06",
      title: "Performance & Quality Assurance",
      desc: "Every service monitored using performance benchmarks and SLAs — you always know exactly how we're performing.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary block mb-4">
            Our Difference
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Why businesses choose{" "}
            <strong className="text-primary">AJAX Global</strong>
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-md mx-auto text-sm">
            We don't just outsource tasks — we build intelligent operational
            systems that grow with your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i % 2}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex gap-5 p-7 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all bg-gray-50/60 group cursor-default"
              whileHover={{ x: 6 }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-black flex-shrink-0 bg-primary/10 text-primary transition-transform group-hover:scale-110">
                {item.num}
              </div>
              <div>
                <h3 className="text-base font-extrabold mb-1.5 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   7. INDUSTRIES
══════════════════════════════════════════════════ */
function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const industries = [
    { name: "Cleaning & Home Services", emoji: "🏠" },
    { name: "Property Management", emoji: "🏢" },
    { name: "E-Commerce & Shopify", emoji: "🛒" },
    { name: "SaaS & Technology", emoji: "⚡" },
    { name: "Logistics & Truck Dispatch", emoji: "🚛" },
    { name: "Marketing & Advertising", emoji: "📣" },
    { name: "IT & Cloud Providers", emoji: "☁️" },
    { name: "Healthcare Admin Support", emoji: "🏥" },
  ];

  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden mx-10 rounded-3xl"
      style={{ background: "#1a1a2e" }}
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(109,40,217,0.15) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(109,40,217,0.1) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary/80 block mb-4">
            Industries
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Specialists in{" "}
            <span className="font-extrabold text-primary">your industry</span>
          </h2>
          <p className="text-white/45 font-light mt-3 max-w-sm mx-auto text-sm">
            Tailored solutions built for each vertical — not generic outsourcing
            repurposed for your sector.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ y: -6, scale: 1.04 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default"
            >
              <div className="text-3xl mb-3">{ind.emoji}</div>
              <p className="text-sm font-semibold text-white/75 leading-snug">
                {ind.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   8. OUR PROMISE
══════════════════════════════════════════════════ */
function OurPromise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary block mb-4">
              Our Promise
            </span>
            <h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              More than outsourcing —{" "}
              <span className="font-extrabold text-primary">
                a true partnership
              </span>
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed text-base">
              When businesses partner with AJAX Global, they gain a reliable
              extension of their team — powered by real professionals, backed by
              intelligent automation, and driven by measurable results.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-2 px-6 h-11 rounded-full font-semibold text-white text-sm bg-primary shadow-lg shadow-primary/30"
              >
                Start the Conversation <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-3"
          >
            {[
              "Clear communication at every stage",
              "Transparent pricing — no hidden fees",
              "Scalable resources on demand",
              "Quality over quantity — always",
              `A "never drop the ball" mindset`,
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.09 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50/60 hover:border-primary/20 hover:shadow-sm transition-all group cursor-default"
                whileHover={{ x: 6 }}
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm flex-1">
                  {p}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   9. HOW WE WORK — process steps
══════════════════════════════════════════════════ */
function HowWeWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const steps = [
    {
      step: "01",
      title: "Discovery &\nConsultation",
      desc: "We learn your business, goals, pain points, and operational gaps.",
    },
    {
      step: "02",
      title: "Strategy &\nSystem Design",
      desc: "Custom hybrid solution — people, processes, and AI tools tailored for you.",
    },
    {
      step: "03",
      title: "Deployment &\nSetup",
      desc: "Your team or AI system goes live — fully onboarded and ready to perform.",
    },
    {
      step: "04",
      title: "Optimization &\nReporting",
      desc: "Continuous improvement backed by performance data and regular reporting.",
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
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary block mb-4">
            Process
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            A proven process that <strong>delivers results</strong>
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-md mx-auto">
            From first call to live operations — a clear path to success.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-100 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="flex flex-col items-center text-center group"
                whileHover={{ y: -6 }}
              >
                <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 ring-4 ring-white bg-primary/10 border-2 border-primary/25">
                  <span className="text-lg font-black text-primary">
                    {s.step}
                  </span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white bg-primary">
                    {i + 1}
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 w-full shadow-sm group-hover:border-gray-200 group-hover:shadow-md transition-all duration-300">
                  <div className="text-4xl font-black text-gray-100 mb-2 group-hover:text-gray-200 transition-colors">
                    {s.step}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm group-hover:text-primary transition-colors whitespace-pre-line leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   10. TIMELINE
══════════════════════════════════════════════════ */
function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const milestones = [
    {
      year: "2018",
      event:
        "AJAX Global founded with a vision to combine human excellence with AI.",
      icon: Star,
    },
    {
      year: "2020",
      event:
        "Expanded to 5 countries, serving 100+ enterprise clients across 3 continents.",
      icon: Globe,
    },
    {
      year: "2022",
      event:
        "Launched IntelliDesq™ — our revolutionary AI-powered operational intelligence platform.",
      icon: Zap,
    },
    {
      year: "2024",
      event:
        "Reached unicorn status with $1B+ in managed operations and 2,000+ team members.",
      icon: Award,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-primary block mb-4">
            Our Journey
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Milestones that{" "}
            <strong className="text-primary">shaped AJAX Global</strong>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto space-y-8">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-100 hidden md:block" />
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-[2px] bg-primary hidden md:block origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          />

          {milestones.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.6,
                }}
                className="flex gap-8 items-start relative z-10"
                whileHover={{ x: 6 }}
              >
                <div className="w-16 h-16 rounded-full bg-white border-2 border-primary/30 flex items-center justify-center flex-shrink-0 shadow-md bg-primary/5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-black mb-1 text-primary">
                    {m.year}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                    {m.event}
                  </p>
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
   11. FINAL CTA
══════════════════════════════════════════════════ */
function AboutCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "#1a1a2e" }}
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(109,40,217,0.2) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(109,40,217,0.15) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 11, repeat: Infinity, delay: 3 }}
      />

      {/* Floating cards */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 opacity-60 hidden lg:block"
        style={{ animation: "floatA 7s ease-in-out infinite" }}
      >
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="w-3 h-3 text-primary" />
            </div>
            <span className="text-xs font-semibold text-gray-700">
              Team Size
            </span>
          </div>
          <div className="text-2xl font-black text-primary">2,000+</div>
          <p className="text-[10px] text-gray-400 mt-1">
            Professionals deployed
          </p>
        </div>
      </div>
      <div
        className="absolute right-8 top-1/3 opacity-60 hidden lg:block"
        style={{ animation: "floatB 8s ease-in-out infinite" }}
      >
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <p className="text-[10px] text-gray-400 mb-2">Satisfaction rate</p>
          <div className="text-2xl font-black text-primary">98%</div>
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/8 text-sm font-medium text-white/60 backdrop-blur-sm cursor-default"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Ready to scale?
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[clamp(2.5rem,6vw,5rem)] font-light text-white leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Let's build your{" "}
            <span className="font-extrabold text-primary">
              scalable growth system.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-white/45 font-light max-w-xl mx-auto leading-relaxed"
          >
            Join 500+ enterprises already scaling with human-AI excellence.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-9 rounded-full font-bold text-white text-base bg-primary shadow-lg shadow-primary/30"
                style={{ height: 52 }}
              >
                Schedule a Strategy Call{" "}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Phone className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-8 rounded-full font-medium text-white text-base border border-white/20 bg-white/8 hover:bg-white/15 transition-colors backdrop-blur-sm"
                style={{ height: 52 }}
              >
                Explore Our Services <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-white/40 font-light"
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
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <style>{fontImport}</style>
      <Header />
      <AboutHero />
      <TrustBar />
      <WhoWeAre />
      <MissionVision />
      <CoreValues />
      <WhatMakesUsDifferent />
      <Industries />
      <OurPromise />
      <HowWeWork />
      <Timeline />
      <AboutCTA />
      <Footer />
    </main>
  );
}
