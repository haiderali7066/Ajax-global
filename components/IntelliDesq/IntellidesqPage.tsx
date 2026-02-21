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
  Brain,
  TrendingUp,
  Zap,
  GitBranch,
  Users,
  CheckCircle,
  X,
  ChevronRight,
  Activity,
  Cpu,
  Eye,
  BarChart3,
  Shield,
  Layers,
  Target,
  RefreshCw,
  AlertCircle,
  Sparkles,
  Network,
  Star,
  PlayCircle,
  Lock,
  Clock,
  HeartHandshake,
  Award,
  LineChart,
  Settings2,
  Gauge,
  BellRing,
  Lightbulb,
  Quote,
  ArrowUpRight,
  Play,
  Workflow,
} from "lucide-react";

const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap');
  * { font-family: 'Figtree', system-ui, sans-serif; }
`;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
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
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};
const slideRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: i * 0.07 },
  }),
};

function Typewriter({ words }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const t = words[idx];
    const id = setTimeout(
      () => {
        if (!del) {
          setText(t.slice(0, text.length + 1));
          if (text.length + 1 === t.length)
            setTimeout(() => setDel(true), 1600);
        } else {
          setText(t.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setIdx((idx + 1) % words.length);
          }
        }
      },
      del ? 40 : 75,
    );
    return () => clearTimeout(id);
  }, [text, del, idx, words]);
  return (
    <span>
      <span className="text-primary" style={{  fontWeight: 800 }}>{text}</span>
      <span
        className="inline-block w-0.5 h-[0.85em] align-middle ml-0.5 animate-pulse"
        style={{ background: "#7c3aed" }}
      />
    </span>
  );
}

function Counter({ to, suf = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const step = to / (1600 / 16);
    const t = setInterval(() => {
      s = Math.min(s + step, to);
      setN(Math.round(s));
      if (s >= to) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suf}
    </span>
  );
}

function NeuralCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);
    const nodes = Array.from({ length: 40 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.2 + 0.8,
      pulse: Math.random() * Math.PI * 2,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.016;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x,
            dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124,58,237,${(1 - d / 110) * 0.1})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      nodes.forEach((n) => {
        const g = Math.sin(n.pulse) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + g * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,58,237,${0.18 + g * 0.16})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const ro = new ResizeObserver(() => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    });
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}

/* ── HERO ── */
function IntelliDesqHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
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
      <NeuralCanvas />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 55% 20%, rgba(124,58,237,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, white)" }}
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 w-full flex flex-col items-center text-center px-4 sm:px-6 pt-28 pb-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.9 }}
          animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-8 cursor-default shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-violet-500" />
          <span className="text-sm font-semibold text-gray-600">
            AI-Powered Operational Intelligence
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-[clamp(2.8rem,7vw,5.8rem)] font-light text-gray-900 leading-[1.06] tracking-tight max-w-4xl mb-5"
          style={{ letterSpacing: "-0.02em" }}
        >
          IntelliDesq™
          <br />
          <span
            className="font-extralight text-gray-400"
            style={{ fontSize: "clamp(1.6rem,3.5vw,2.8rem)" }}
          >
            is not a chatbot. It's
          </span>
          <br />
          <Typewriter
            words={[
              "Operational Intelligence.",
              "Predictive Analytics.",
              "Decision Support.",
              "Workflow Intelligence.",
            ]}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="max-w-[460px] text-[1.1rem] text-gray-500 font-light leading-relaxed mb-10"
        >
          An AI-powered intelligence layer that works <em>alongside</em> your
          human teams to improve decisions, workflows, and performance — in real
          time, at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-5"
        >
          <Link href="#demo">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary inline-flex items-center gap-2 px-7 h-12 rounded-full font-semibold text-white text-sm"
              style={{
               
                boxShadow: "0 8px 30px rgba(124,58,237,0.32)",
              }}
            >
              See IntelliDesq™ in Action
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-7 h-12 rounded-full font-medium text-gray-600 text-sm border border-gray-200 hover:border-gray-300 bg-white transition-colors"
            >
              <Play className="w-3.5 h-3.5" /> Watch Demo
            </motion.button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
          className="text-xs text-gray-400 font-light mb-14"
        >
          No commitment required · Live platform walkthrough · Expert-led
          session
        </motion.p>

        {/* Hero dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.48 }}
          className="relative w-full max-w-5xl mx-auto"
        >
          <div
            className="relative mx-4 sm:mx-8 rounded-2xl overflow-hidden border border-gray-200"
            style={{
              boxShadow:
                "0 40px 100px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05)",
            }}
          >
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
                  intellidesq.ajaxglobal.app
                </div>
              </div>
              <div className="flex gap-2">
                {["Live", "AI", "Predict"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2.5 py-1 rounded-full font-medium text-violet-700 bg-violet-50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white grid grid-cols-12 min-h-[320px]">
              <div
                className="col-span-2 border-r border-gray-100 p-4"
                style={{ background: "#fafafa" }}
              >
                <div className="space-y-1">
                  {[
                    "Overview",
                    "Predictions",
                    "KPI Tracker",
                    "Workflows",
                    "Alerts",
                    "Reports",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className={`text-xs py-2 px-2.5 rounded-lg cursor-default font-medium ${i === 0 ? "bg-violet-50 text-violet-700" : "text-gray-400"}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-7 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-400 font-light mb-0.5">
                      IntelliDesq™ Dashboard
                    </p>
                    <h3 className="text-sm font-semibold text-gray-800">
                      Operational Intelligence — Live
                    </h3>
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
                  {
                    label: "Pipeline Prediction Accuracy",
                    val: 94,
                    trend: "↑ +3%",
                    color: "#7c3aed",
                  },
                  {
                    label: "Response Time Optimization",
                    val: 87,
                    trend: "↑ +12%",
                    color: "#4f46e5",
                  },
                  {
                    label: "Churn Risk Detection",
                    val: 91,
                    trend: "↑ +8%",
                    color: "#0ea5e9",
                  },
                  {
                    label: "Workflow Automation Rate",
                    val: 73,
                    trend: "↑ +5%",
                    color: "#10b981",
                  },
                  {
                    label: "Compliance Monitor Score",
                    val: 99,
                    trend: "Stable",
                    color: "#f59e0b",
                  },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={ready ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + i * 0.08 }}
                    className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: row.color }}
                    />
                    <span className="text-xs text-gray-600 flex-1 truncate">
                      {row.label}
                    </span>
                    <div className="w-28 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: row.color }}
                        initial={{ width: 0 }}
                        animate={ready ? { width: `${row.val}%` } : {}}
                        transition={{
                          delay: 1.1 + i * 0.09,
                          duration: 0.9,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 w-8 text-right">
                      {row.val}%
                    </span>
                    <span className="text-[10px] text-emerald-600 font-medium w-12 text-right">
                      {row.trend}
                    </span>
                  </motion.div>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <p className="text-[10px] text-gray-400 mb-2">
                    Decision intelligence activity — last 24h
                  </p>
                  <div className="flex items-end gap-1 h-10">
                    {[
                      55, 72, 48, 88, 64, 95, 71, 82, 59, 90, 77, 99, 68, 85,
                      74, 92, 61, 88, 75, 96,
                    ].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm"
                        initial={{ scaleY: 0 }}
                        animate={ready ? { scaleY: 1 } : {}}
                        transition={{ delay: 1.3 + i * 0.03, ease: "easeOut" }}
                        style={{ transformOrigin: "bottom" }}
                      >
                        <div
                          style={{
                            height: `${h}%`,
                            background: `linear-gradient(to top, #7c3aed, #a78bfa)`,
                            borderRadius: 2,
                            opacity: 0.6 + h / 200,
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="col-span-3 border-l border-gray-100 p-4 space-y-3"
                style={{ background: "#fafafa" }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                  AI Alerts
                </p>
                {[
                  { msg: "Churn risk flagged — Client #142", color: "#f59e0b" },
                  { msg: "Pipeline gap detected in Q4", color: "#ef4444" },
                  { msg: "Workflow optimized — 12% faster", color: "#10b981" },
                ].map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={ready ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="bg-white rounded-xl p-3 border border-gray-100"
                  >
                    <div className="flex items-start gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ background: a.color }}
                      />
                      <p className="text-[10px] text-gray-600 leading-snug">
                        {a.msg}
                      </p>
                    </div>
                  </motion.div>
                ))}
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-[10px] text-gray-400">
                    Decisions made today
                  </p>
                  <p className="text-xl font-bold text-violet-600">1,847</p>
                  <p className="text-[10px] text-emerald-600">
                    ↑ 23% vs yesterday
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -left-2 sm:left-2 top-20 z-20"
            initial={{ opacity: 0, x: -30 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.8 }}
            style={{ animation: "floatA 6s ease-in-out infinite" }}
          >
            <div
              className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-48"
              style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center">
                  <Brain className="w-3.5 h-3.5 text-violet-600" />
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  AI Prediction
                </span>
              </div>
              <p className="text-[10px] text-gray-400 mb-1.5">
                Next 14 days — pipeline risk:
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-violet-600">Low</span>
                <span className="text-[10px] text-emerald-600 font-semibold">
                  ↓ from Medium
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-2 sm:right-2 bottom-8 z-20"
            initial={{ opacity: 0, x: 30 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.3, duration: 0.8 }}
            style={{ animation: "floatB 7s ease-in-out infinite" }}
          >
            <div
              className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-52"
              style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Gauge className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  Live Performance
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ["10×", "Faster", "#7c3aed"],
                  ["98%", "Accuracy", "#10b981"],
                ].map(([v, l, c]) => (
                  <div
                    key={l}
                    className="text-center p-2 rounded-lg"
                    style={{ background: `${c}08` }}
                  >
                    <div className="text-base font-black" style={{ color: c }}>
                      {v}
                    </div>
                    <div className="text-[9px] text-gray-400">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-13px)} }
      `}</style>
    </section>
  );
}

function TrustBar() {
  const items = [
    "Real-Time Operational Intelligence",
    "Predictive Analytics Engine",
    "KPI-Driven Workflows",
    "AI + Human Collaboration",
    "CRM & Tool Integration",
    "Enterprise SLA Guarantee",
    "24/7 Intelligent Monitoring",
    "Continuous Learning System",
  ];
  return (
    <div
      className="border-y border-gray-100 py-3 overflow-hidden"
      style={{ background: "#fafafa" }}
    >
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: "idMarquee 32s linear infinite" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-xs font-semibold text-gray-400 flex items-center gap-2.5 shrink-0"
          >
            <span className="w-1 h-1 rounded-full bg-violet-300" />
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes idMarquee{from{transform:translateX(0)}to{transform:translateX(-33.33%)}}`}</style>
    </div>
  );
}

function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const stats = [
    { to: 10, suf: "×", label: "Faster Decisions", color: "#7c3aed" },
    { to: 40, suf: "%", label: "Cost Reduction", color: "#4f46e5" },
    { to: 98, suf: "%", label: "Accuracy Rate", color: "#0ea5e9" },
    { to: 99, suf: ".2%", label: "Uptime SLA", color: "#10b981" },
  ];
  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              custom={i}
              className="rounded-2xl p-6 text-center border border-gray-100 bg-white hover:border-violet-200 hover:shadow-lg transition-all duration-300 cursor-default"
              whileHover={{ y: -5 }}
            >
              <div
                className="text-3xl font-extrabold mb-1"
                style={{ color: s.color }}
              >
                <Counter to={s.to} suf={s.suf} />
              </div>
              <div className="text-xs text-gray-400 font-light">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const old = [
    {
      label: "Automation",
      desc: "Executes tasks but lacks context or the ability to adapt",
    },
    {
      label: "Chatbots",
      desc: "Responds to prompts but lacks operational awareness",
    },
    {
      label: "Dashboards",
      desc: "Shows you data but can't tell you what to do about it",
    },
  ];
  const pains = [
    "Fragmented workflows that don't communicate with each other",
    "Delayed decision-making due to siloed, disconnected data",
    "Poor visibility into real-time performance and bottlenecks",
    "Reactive problem-solving instead of predictive intelligence",
    "Teams operating without actionable, real-time insights",
    "Inability to optimise operations at scale efficiently",
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
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-rose-500 block mb-4">
            The Gap
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Traditional automation{" "}
            <span className="font-extrabold text-rose-500">isn't enough.</span>
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-lg mx-auto text-sm">
            Businesses invest heavily in tools — yet still struggle with slow
            decisions, disconnected processes, and blind spots. The missing
            piece? An intelligence layer.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-4"
          >
            <p className="text-sm font-semibold text-gray-500 mb-5">
              What you have now:
            </p>
            {old.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-red-100 bg-white hover:shadow-md transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center bg-red-50">
                  <X className="w-4 h-4 text-rose-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {o.label}
                  </p>
                  <p className="text-xs text-gray-400 font-light mt-0.5">
                    {o.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="bg-white rounded-2xl border border-gray-200 p-7"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
          >
            <p className="text-sm font-semibold text-gray-800 mb-5">
              What your business is missing:
            </p>
            <div className="space-y-3">
              {pains.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <div className="shrink-0 w-5 h-5 rounded-full mt-0.5 flex items-center justify-center bg-rose-50">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  </div>
                  <span className="text-sm text-gray-500 font-light leading-relaxed">
                    {p}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-gray-100">
              <motion.div
                className="flex items-center gap-2 text-sm font-semibold text-violet-600"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                IntelliDesq™ closes this gap <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhatIsIntelliDesq() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const traits = [
    {
      icon: Eye,
      title: "Works with humans, not instead of them",
      sub: "Amplifies team capabilities through intelligent insights",
      color: "#7c3aed",
    },
    {
      icon: Brain,
      title: "Learns from your operations",
      sub: "Continuously improves by understanding your workflows",
      color: "#4f46e5",
    },
    {
      icon: Activity,
      title: "Improves continuously",
      sub: "Gets smarter and more valuable with every interaction",
      color: "#0ea5e9",
    },
  ];
  const rings = [110, 78, 50];
  return (
    <section
      className="relative py-24 sm:py-32 mx-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden"
      ref={ref}
    >
      {/* Optional: Subtle background glow to add depth behind the content */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN: Text & Traits */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[.25em] text-violet-400 block mb-4">
                Core Philosophy
              </span>
              <h2
                className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                What IntelliDesq™{" "}
                {/* Replaced inline styles with Tailwind gradient for a cleaner look */}
                <span className="font-extrabold text-transparent bg-clip-text bg-primary">
                  actually is
                </span>
              </h2>
              <p className="text-lg text-slate-300 font-light leading-relaxed mt-5">
                An AI-driven operational intelligence platform designed to{" "}
                <strong className="text-white font-semibold">
                  observe, assist, and optimize
                </strong>{" "}
                how teams work — in real time, at every layer of your
                organisation.
              </p>
            </div>

            <div className="space-y-5 mt-8">
              {traits.map((t, i) => {
                const Icon = t.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-5 group cursor-default"
                    whileHover={{ x: 6 }}
                  >
                    <div
                      className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg"
                      style={{
                        background: `${t.color}15`,
                        border: `1px solid ${t.color}30`,
                        boxShadow: `0 0 15px ${t.color}10`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: t.color }} />
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-slate-200 text-base group-hover:text-white transition-colors">
                        {t.title}
                      </p>
                      <p className="text-sm text-slate-400 font-light mt-1 leading-relaxed">
                        {t.sub}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Brain Animation */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex items-center justify-center mt-10 lg:mt-0"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Core Brain Node */}
              <motion.div
                className="bg-primary absolute inset-0 m-auto w-20 h-20 rounded-full flex items-center justify-center z-20"
                style={{
                  boxShadow: "0 0 40px rgba(124, 58, 237, 0.4)",
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Brain className="w-8 h-8 text-white drop-shadow-md" />
              </motion.div>

              {/* Pulsing Aura */}
              {[1, 2].map((i) => (
                <motion.div
                  key={`pulse-${i}`}
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full border border-violet-400 z-10"
                  animate={{ scale: [1, 3.5], opacity: [0.5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1.5,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Rotating Rings */}
              {rings.map((size, i) => (
                <motion.div
                  key={`ring-${i}`}
                  className="absolute top-1/2 left-1/2 rounded-full border z-0"
                  style={{
                    width: size * 2,
                    height: size * 2,
                    marginTop: -size,
                    marginLeft: -size,
                    borderColor: `rgba(124, 58, 237, ${0.25 - i * 0.05})`,
                    borderStyle: i === 1 ? "dashed" : "solid",
                  }}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{
                    duration: 15 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Orbiting Dots */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full shadow-[0_0_10px_currentColor]"
                    style={{
                      background:
                        i === 0 ? "#8b5cf6" : i === 1 ? "#38bdf8" : "#34d399",
                      color:
                        i === 0 ? "#8b5cf6" : i === 1 ? "#38bdf8" : "#34d399",
                    }}
                  />
                </motion.div>
              ))}

              {/* Floating Glassmorphism Labels */}
              <div className="absolute -right-4 top-1/4 text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/80 backdrop-blur-md rounded-xl px-4 py-2 border border-slate-600 shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-30">
                Observes
              </div>
              <div className="absolute -left-4 top-1/2 text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/80 backdrop-blur-md rounded-xl px-4 py-2 border border-slate-600 shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-30">
                Analyzes
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/80 backdrop-blur-md rounded-xl px-4 py-2 border border-slate-600 shadow-[0_4px_20px_rgba(0,0,0,0.3)] z-30">
                Optimizes
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CoreCapabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const caps = [
    {
      icon: Brain,
      title: "Task Intelligence",
      desc: "Understands work patterns and task flow to predict bottlenecks and optimize sequences",
      color: "#7c3aed",
    },
    {
      icon: Target,
      title: "Decision Support",
      desc: "Provides recommendations and insights — keeping humans in control while amplifying effectiveness",
      color: "#4f46e5",
    },
    {
      icon: BarChart3,
      title: "Performance Insights",
      desc: "Tracks KPIs, productivity metrics, and real-time performance indicators across all teams",
      color: "#0ea5e9",
    },
    {
      icon: GitBranch,
      title: "Workflow Optimization",
      desc: "Identifies bottlenecks, inefficiencies, and opportunities for systematic process improvement",
      color: "#f59e0b",
    },
    {
      icon: Network,
      title: "AI Coordination",
      desc: "Aligns people, tools, and processes for seamless team execution at every level of delivery",
      color: "#10b981",
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
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-violet-500 block mb-4">
            Five Dimensions
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Core <strong>capabilities</strong>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {caps.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                custom={i}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-violet-200 hover:shadow-lg transition-all duration-300 cursor-default relative overflow-hidden"
                whileHover={{ y: -6 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg,${c.color}06,transparent)`,
                  }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                  style={{
                    background: `${c.color}12`,
                    border: `1.5px solid ${c.color}20`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: c.color }} />
                </div>
                <h3 className="font-semibold text-gray-800 text-xs mb-2 group-hover:text-violet-700 transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {c.desc}
                </p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
                  style={{
                    background: `linear-gradient(90deg,${c.color},transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const steps = [
    {
      icon: Eye,
      num: "01",
      title: "Observes",
      desc: "Monitors workflows and data across all operations continuously",
      color: "#7c3aed",
    },
    {
      icon: Brain,
      num: "02",
      title: "Analyzes",
      desc: "Detects patterns, trends, anomalies, and opportunities instantly",
      color: "#4f46e5",
    },
    {
      icon: Zap,
      num: "03",
      title: "Provides",
      desc: "Delivers actionable intelligence and forward-looking insights",
      color: "#0ea5e9",
    },
    {
      icon: TrendingUp,
      num: "04",
      title: "Enhances",
      desc: "Elevates human execution quality and decision-making at every level",
      color: "#10b981",
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
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-violet-500 block mb-4">
            The Pipeline
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            How <span className="bg-primary text-white">IntelliDesq™</span> works
          </h2>
        </motion.div>
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-100 overflow-hidden">
            <motion.div
              className="h-full"
              style={{
                background:
                  "linear-gradient(90deg,#7c3aed,#4f46e5,#0ea5e9,#10b981)",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
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
                  className="flex flex-col items-center text-center"
                  whileHover={{ y: -6 }}
                >
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
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 w-full shadow-sm hover:border-violet-200 hover:shadow-md transition-all duration-300 group">
                    <div className="text-4xl font-black text-gray-100 mb-2 group-hover:text-gray-200 transition-colors">
                      {s.num}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm group-hover:text-violet-600 transition-colors">
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

function IntelliDesqPlusHOS() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const points = [
    {
      title: "Better decisions",
      sub: "Real-time insights guide every action your teams take",
      color: "#a78bfa",
    },
    {
      title: "Faster execution",
      sub: "Workflows continuously optimized for speed and efficiency",
      color: "#7dd3fc",
    },
    {
      title: "Higher performance",
      sub: "Measurable, KPI-driven improvements in every metric",
      color: "#6ee7b7",
    },
  ];
  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: "#022c22" }} // Rich dark emerald background
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle,rgba(16,185,129,0.15) 0%,transparent 65%)", // Emerald glow
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[.2em] text-emerald-400 block mb-4">
                The Combo
              </span>
              <h2
                className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                IntelliDesq™ +<br />
                {/* If .bg-primary is a global class, you might want to change it to text-emerald-400 or similar if it clashes */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Human Outsourcing
                </span>
              </h2>
              <p className="text-white/40 font-light leading-relaxed mt-4">
                When elite human teams combine with operational intelligence,
                performance becomes{" "}
                <span className="text-white/80">truly unstoppable</span>.
              </p>
            </div>
            <div className="space-y-3">
              {points.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.09 }}
                  className="flex items-start gap-3 group cursor-default p-4 rounded-xl border border-white/[0.06] hover:border-white/15 transition-all"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                  whileHover={{ x: 6 }}
                >
                  <CheckCircle
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: p.color || "#34d399" }} // Fallback to emerald if no color in array
                  />
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: p.color || "#fff" }} // Fallback to white if no color in array
                    >
                      {p.title}
                    </p>
                    <p className="text-xs text-white/35 font-light mt-0.5">
                      {p.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link href="/hos">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-6 h-11 rounded-full font-semibold text-emerald-800 text-sm bg-white hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              >
                Explore HOS <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div
              className="rounded-2xl border border-white/[0.08] overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                boxShadow:
                  "0 24px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="h-px w-full"
                style={{
                  background:
                    "linear-gradient(90deg,transparent,rgba(52,211,153,0.6),rgba(45,212,191,0.5),transparent)", // Emerald to Teal gradient
                }}
              />
              <div className="p-8 text-center space-y-7">
                <div className="flex items-center justify-center gap-6">
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/[0.08]"
                    style={{ background: "rgba(16,185,129,0.2)" }} // Emerald
                    animate={{ rotate: [0, 4, -4, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <Brain className="w-7 h-7 text-emerald-400" />
                  </motion.div>
                  <motion.span
                    className="text-3xl font-black text-white/40"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    +
                  </motion.span>
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/[0.08]"
                    style={{ background: "rgba(20,184,166,0.2)" }} // Teal
                    animate={{ rotate: [0, -4, 4, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  >
                    <Users className="w-7 h-7 text-teal-400" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Unstoppable Performance
                  </h3>
                  <p className="text-white/35 text-sm">
                    Intelligence meets execution
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    ["10×", "Speed", "#34d399"], // Emerald
                    ["40%", "Savings", "#2dd4bf"], // Teal
                    ["98%", "Quality", "#a3e635"], // Lime
                  ].map(([v, l, c]) => (
                    <motion.div
                      key={l}
                      className="rounded-xl p-3 text-center border border-white/[0.06] cursor-default"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                      whileHover={{
                        scale: 1.07,
                        background: "rgba(16,185,129,0.15)", // Hover Emerald
                      }}
                    >
                      <div className="text-lg font-extrabold text-white">
                        {v}
                      </div>
                      <div className="text-[10px] text-white/30 mt-0.5">
                        {l}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-2 pt-2 border-t border-white/[0.05]">
                  {[
                    ["Decision Engine", "94%", "#10b981"], // Emerald
                    ["Workflow AI", "88%", "#14b8a6"], // Teal
                    ["Compliance", "99%", "#84cc16"], // Lime
                  ].map(([label, pct, color]) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="text-[10px] text-white/30 w-28 truncate">
                        {label}
                      </span>
                      <div
                        className="flex-1 h-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                      >
                        <motion.div
                          className="h-full rounded-full shadow-[0_0_8px_currentColor]"
                          style={{ background: color, color: color }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: pct } : {}}
                          transition={{ delay: 0.8, duration: 1 }}
                        />
                      </div>
                      <span className="text-[10px] text-white/30 w-8 text-right">
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

function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);
  const cases = [
    {
      tab: "Sales Ops",
      color: "#7c3aed",
      icon: TrendingUp,
      title: "Sales Operations",
      problem:
        "Inconsistent pipeline management and missed forecasting signals",
      solution:
        "IntelliDesq™ provides real-time deal intelligence, predicts close probability, and optimizes team allocation across every stage of the funnel.",
      metric: "3.2×",
      metricLabel: "Average pipeline increase",
    },
    {
      tab: "Customer Support",
      color: "#4f46e5",
      icon: Users,
      title: "Customer Support",
      problem:
        "Reactive support with delayed response and inconsistent service quality",
      solution:
        "IntelliDesq™ prioritizes tickets by urgency and impact, predicts customer churn risk, and ensures consistent service quality at every touchpoint.",
      metric: "98%",
      metricLabel: "Average CSAT score",
    },
    {
      tab: "Operations",
      color: "#0ea5e9",
      icon: Settings2,
      title: "Business Operations",
      problem:
        "Fragmented processes and poor cross-team coordination and visibility",
      solution:
        "IntelliDesq™ unifies workflows, identifies process gaps and bottlenecks, and optimizes resource allocation for maximum operational efficiency.",
      metric: "40%",
      metricLabel: "Cost reduction",
    },
    {
      tab: "Management",
      color: "#f59e0b",
      icon: BarChart3,
      title: "Management & Reporting",
      problem:
        "Delayed insights leading to reactive and costly strategic decisions",
      solution:
        "IntelliDesq™ delivers real-time dashboards and predictive analytics, enabling proactive leadership and strategic agility across your business.",
      metric: "14 days",
      metricLabel: "Avg prediction horizon",
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
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-violet-500 block mb-4">
            Real-World Impact
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Use cases &{" "}
            <span
              className="font-extrabold bg-primary"
              style={{
                
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              industries
            </span>
          </h2>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex gap-2 justify-center mb-10 flex-wrap"
        >
          {cases.map((cas, i) => {
            const Icon = cas.icon;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 h-10 rounded-full text-sm font-semibold transition-all duration-200 border ${active === i ? "text-white border-transparent shadow-md" : "text-gray-500 border-gray-200 bg-white hover:border-gray-300"}`}
                style={
                  active === i
                    ? {
                        background: cas.color,
                        boxShadow: `0 4px 16px ${cas.color}35`,
                      }
                    : {}
                }
              >
                <Icon className="w-3.5 h-3.5" />
                {cas.tab}
              </button>
            );
          })}
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-gray-400 font-light">{c.problem}</p>
              </div>
              <div
                className="p-5 rounded-2xl border"
                style={{
                  background: `${c.color}06`,
                  borderColor: `${c.color}20`,
                }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-2"
                  style={{ color: c.color }}
                >
                  IntelliDesq™ Solution
                </p>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  {c.solution}
                </p>
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
                  Learn More <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
            <div
              className="rounded-2xl border bg-white overflow-hidden"
              style={{
                borderColor: `${c.color}20`,
                boxShadow: `0 20px 60px ${c.color}10`,
              }}
            >
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg,${c.color},${c.color}60)`,
                }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${c.color}10` }}
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
                      {c.tab} Intelligence
                    </span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full font-medium text-emerald-700 bg-emerald-50">
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    ["Predictions Today", "1,847", "↑ 23%"],
                    ["Accuracy Rate", "94%", "Stable"],
                    ["Decisions Aided", "312", "↑ 18%"],
                    ["Alerts Fired", "7", "↓ -40%"],
                  ].map(([l, v, n], i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl border border-gray-100"
                      style={{ background: "#fafafa" }}
                    >
                      <p className="text-[10px] text-gray-400 mb-0.5">{l}</p>
                      <p className="text-base font-bold text-gray-800">{v}</p>
                      <p className="text-[10px] text-emerald-600 font-medium">
                        {n}
                      </p>
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

function FeatureSpotlight() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const features = [
    {
      tag: "Predictive Intelligence",
      icon: Lightbulb,
      color: "#f59e0b",
      title: "Know what will happen before it does",
      desc: "IntelliDesq™ analyzes historical patterns and real-time signals to surface predictions about pipeline performance, customer churn risk, team capacity constraints, and operational bottlenecks — before they become problems.",
      stats: [
        { v: "14 Days", l: "Average prediction horizon" },
        { v: "87%", l: "Prediction accuracy" },
      ],
    },
    {
      tag: "Real-Time Dashboards",
      icon: Gauge,
      color: "#0ea5e9",
      title: "Every metric, live, in one place",
      desc: "Stop jumping between spreadsheets, CRMs, and support tools. IntelliDesq™ consolidates all your operational data into a single intelligent dashboard that updates in real time and highlights what needs your attention.",
      stats: [
        { v: "< 2 min", l: "Data refresh rate" },
        { v: "40+", l: "Built-in KPI templates" },
      ],
    },
    {
      tag: "Workflow Automation",
      icon: RefreshCw,
      color: "#10b981",
      title: "Remove repetition. Keep the intelligence.",
      desc: "IntelliDesq™ identifies which routine tasks are stealing your team's time and automates them — while keeping humans in the loop for decisions that matter. The result: faster execution with better judgment at every step.",
      stats: [
        { v: "73%", l: "Reduction in manual tasks" },
        { v: "3×", l: "Faster process throughput" },
      ],
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
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-violet-500 block mb-4">
            Deep Dive
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Features that <span className="bg-red-800 text-white">change everything</span>
          </h2>
        </motion.div>
        <div className="space-y-20">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:[&>*:first-child]:order-last" : ""}`}
              >
                <motion.div
                  variants={isEven ? slideLeft : slideRight}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: `${f.color}15` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: f.color }} />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-[.18em]"
                      style={{ color: f.color }}
                    >
                      {f.tag}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-light text-gray-900"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    <strong>{f.title.split(" ").slice(0, 3).join(" ")}</strong>{" "}
                    {f.title.split(" ").slice(3).join(" ")}
                  </h3>
                  <p className="text-base text-gray-500 font-light leading-relaxed">
                    {f.desc}
                  </p>
                  <div className="flex items-center gap-8">
                    {f.stats.map((s, j) => (
                      <div key={j}>
                        <div
                          className="text-2xl font-extrabold"
                          style={{ color: f.color }}
                        >
                          {s.v}
                        </div>
                        <div className="text-xs text-gray-400 font-light mt-0.5">
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  variants={isEven ? slideRight : slideLeft}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                >
                  <div
                    className="rounded-2xl p-10 border h-64 flex items-center justify-center relative overflow-hidden bg-white"
                    style={{ borderColor: `${f.color}20` }}
                  >
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 50%,${f.color}10 0%,transparent 65%)`,
                      }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="relative z-10 w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl"
                      style={{
                        background: `linear-gradient(135deg,${f.color},${f.color}aa)`,
                      }}
                      animate={{ y: [0, -10, 0], rotate: [0, 3, 0, -3, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
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

function LiveMetrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const metrics = [
    {
      icon: Gauge,
      label: "Response Time Improvement",
      val: 67,
      suf: "%",
      color: "#7c3aed",
    },
    {
      icon: LineChart,
      label: "Pipeline Accuracy",
      val: 94,
      suf: "%",
      color: "#10b981",
    },
    {
      icon: BellRing,
      label: "Fewer Missed Escalations",
      val: 89,
      suf: "%",
      color: "#f59e0b",
    },
    {
      icon: Settings2,
      label: "Workflow Steps Automated",
      val: 73,
      suf: "%",
      color: "#4f46e5",
    },
    {
      icon: Users,
      label: "Team Satisfaction Score",
      val: 96,
      suf: "%",
      color: "#0ea5e9",
    },
    {
      icon: Lock,
      label: "Compliance Rate",
      val: 99,
      suf: "%",
      color: "#10b981",
    },
  ];
  return (
    <section className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-violet-500 block mb-4">
            Proven Results
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            Real {""}
            <span className="bg-primary text-white">performance</span>
            {""} numbers
          </h2>
          <p className="text-gray-400 font-light mt-3 max-w-sm mx-auto text-sm">
            Average outcomes across client deployments in the first 90 days
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i % 3}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:border-violet-200 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${m.color}10` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: m.color }} />
                  </div>
                  <div className="w-24 h-1.5 rounded-full bg-gray-100 overflow-hidden mt-3">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: m.color }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${m.val}%` } : {}}
                      transition={{
                        duration: 1.4,
                        ease: "easeOut",
                        delay: 0.3 + i * 0.1,
                      }}
                    />
                  </div>
                </div>
                <div
                  className="text-3xl font-extrabold mb-1"
                  style={{ color: m.color }}
                >
                  <Counter to={m.val} suf={m.suf} />
                </div>
                <p className="text-sm text-gray-400 font-light">{m.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const tools = [
    { name: "Salesforce", emoji: "☁️", bg: "#004d73" }, // Navy Blue
    { name: "HubSpot", emoji: "🧡", bg: "#8c321d" }, // Deep Terracotta
    { name: "Zendesk", emoji: "💚", bg: "#024d38" }, // Deep Emerald
    { name: "Slack", emoji: "💬", bg: "#4a154b" }, // Deep Plum
    { name: "Jira", emoji: "📋", bg: "#0747a6" }, // Strong Blue
    { name: "Notion", emoji: "⬛", bg: "#2f2f2f" }, // Gunmetal Gray
    { name: "AppFolio", emoji: "🏠", bg: "#5b21b6" }, // Royal Violet
    { name: "Buildium", emoji: "🔑", bg: "#831843" }, // Deep Maroon
    { name: "Shopify", emoji: "🛒", bg: "#3d5a16" }, // Dark Olive
    { name: "QuickBooks", emoji: "💰", bg: "#166534" }, // Forest Green
    { name: "Monday.com", emoji: "📅", bg: "#9f1239" }, // Crimson Rose
    { name: "+ More", emoji: "✨", bg: "#18181b" }, // Zinc Black
  ];
  return (
    <section
      className="relative py-24 sm:py-32 mx-10 rounded-3xl overflow-hidden bg-black border border-zinc-800 shadow-2xl"
      ref={ref}
    >
      {/* Color-Rich Ambient Glow: A vibrant 3-color gradient blur sitting behind the content */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-900/40 via-violet-900/40 to-fuchsia-900/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          {/* Saturated accent with a subtle drop shadow for depth */}
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400 block mb-5 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            Plug & Play
          </span>

          {/* High-contrast, highly readable heading */}
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] font-medium text-slate-50 leading-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            Works with your {/* Rich multi-color gradient */}
            <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">
              existing stack
            </strong>
          </h2>

          {/* Book-readable paragraph: Increased size, better line height, crisp slate color */}
          <p className="text-slate-300 mt-6 max-w-lg mx-auto text-base sm:text-lg leading-relaxed font-normal">
            Integrates seamlessly with the tools your teams already use — no
            migration needed.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {tools.map((t, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              custom={i}
              // Crisp, high-contrast dark pills with vibrant, saturated hover states
              className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-zinc-900 border border-zinc-700/80 text-sm sm:text-base font-medium text-slate-100 cursor-default hover:border-cyan-400 hover:bg-zinc-800 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
              // Note: Override this inline style if t.bg makes the text unreadable.
              style={{ background: t.bg || undefined }}
              whileHover={{ y: -4, scale: 1.05 }}
            >
              {/* Slightly larger emoji with a shadow to make it pop */}
              <span className="text-xl drop-shadow-md">{t.emoji}</span>
              {t.name}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center text-sm text-slate-400 font-normal mt-12 tracking-wide"
        >
          API-first architecture with webhook support. Custom integrations
          available.
        </motion.p>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const quotes = [
    {
      text: "IntelliDesq™ changed how our entire ops team makes decisions. We went from reactive firefighting to proactive management in under a month.",
      author: "Operations Director",
      company: "SaaS Company, USA",
      emoji: "🇺🇸",
      stat: "10×",
      color: "#7c3aed",
    },
    {
      text: "The predictive analytics alone saved us from losing three major accounts. It flagged churn risk weeks before our team would have noticed.",
      author: "Head of Customer Success",
      company: "E-Commerce Brand, Canada",
      emoji: "🇨🇦",
      stat: "3 Accounts",
      color: "#4f46e5",
    },
    {
      text: "Having real-time workflow intelligence alongside our HOS team is like giving everyone superpowers. The ROI was obvious within the first 30 days.",
      author: "CEO",
      company: "Home Services Co., Australia",
      emoji: "🇦🇺",
      stat: "30 Days",
      color: "#0ea5e9",
    },
  ];
  return (
    <section className="py-24 sm:py-32 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-violet-500 block mb-4">
            Client Voices
          </span>
          <h2
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-gray-900"
            style={{ letterSpacing: "-0.02em" }}
          >
            What clients <strong>say</strong>
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
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-default"
              whileHover={{ y: -5 }}
            >
              <div
                className="h-28 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg,${q.color}12,${q.color}04)`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl opacity-30">{q.emoji}</span>
                </div>
                <div className="absolute bottom-4 left-5">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-2xl font-black"
                      style={{ color: q.color }}
                    >
                      {q.stat}
                    </span>
                    <span className="text-xs text-gray-500 font-light">
                      ROI metric
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
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10"
        >
          {[
            {
              icon: HeartHandshake,
              label: "Human-Centric Design",
              sub: "Built to empower people, not replace them",
              color: "#7c3aed",
            },
            {
              icon: Lock,
              label: "Enterprise Security",
              sub: "SOC 2-ready with full data encryption",
              color: "#4f46e5",
            },
            {
              icon: Clock,
              label: "7-Day Deployment",
              sub: "From contract to live in one week",
              color: "#0ea5e9",
            },
            {
              icon: Award,
              label: "98% Client Retention",
              sub: "Results that keep clients coming back",
              color: "#10b981",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-2xl p-5 border border-gray-100 flex items-start gap-3 hover:shadow-md hover:border-violet-200 transition-all duration-300"
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

function IntelliDesqCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden bg-white"
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.04) 1px,transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 opacity-60 hidden lg:block"
        style={{ animation: "floatA 7s ease-in-out infinite" }}
      >
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-lg bg-violet-100 flex items-center justify-center">
              <Brain className="w-3 h-3 text-violet-600" />
            </div>
            <span className="text-xs font-semibold text-gray-700">
              AI Alert
            </span>
          </div>
          <div className="space-y-1">
            {[
              "Churn risk: 3 accounts ⚠️",
              "Pipeline gap detected ↗",
              "Workflow optimized ✓",
            ].map((item) => (
              <div key={item} className="text-[10px] text-gray-500">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute right-10 top-1/3 opacity-55 hidden lg:block"
        style={{ animation: "floatB 8s ease-in-out infinite" }}
      >
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-4 w-44">
          <p className="text-[10px] text-gray-400 mb-1">Prediction accuracy</p>
          <div className="text-2xl font-black text-violet-600">94%</div>
          <p className="text-[10px] text-emerald-600 font-medium">
            ↑ +3% this week
          </p>
        </div>
      </div>
      <div
        className="absolute right-20 bottom-1/4 opacity-50 hidden lg:block"
        style={{ animation: "floatA 9s ease-in-out infinite 1s" }}
      >
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-3 w-36">
          <p className="text-[10px] text-gray-400">Decisions today</p>
          <div className="text-xl font-black text-indigo-600">1,847</div>
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
          className="space-y-7"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-500 shadow-sm cursor-default"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Request a live demo today
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(2.5rem,6vw,5rem)] font-light text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Intelligence that makes teams{" "}
            <span
              className="font-extrabold bg-primary"
              style={{
                
                backgroundSize: "200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradShift 5s ease infinite",
              }}
            >
              unstoppable.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-gray-400 font-light max-w-xl mx-auto leading-relaxed"
          >
            See how IntelliDesq™ transforms your operations. Request a
            personalised demo tailored to your specific challenges.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
          >
            <Link href="#demo">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary inline-flex items-center gap-2 px-9 rounded-full font-bold text-white text-base"
                style={{
                  height: 52,
                
                  boxShadow: "0 12px 40px rgba(124,58,237,0.3)",
                }}
              >
                Request a Demo{" "}
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
                className="inline-flex items-center gap-2 px-8 rounded-full font-medium text-gray-600 text-base border border-gray-200 bg-white hover:border-gray-300 transition-colors"
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
              "No commitment required",
              "Live platform walkthrough",
              "Tailored to your workflow",
              "Expert-led session",
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                {t}
              </span>
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

export default function IntelliDesqPageComponent() {
  return (
    <main className="min-h-screen bg-white">
      <style>{fontImport}</style>
      <IntelliDesqHero />
      <TrustBar />
      <StatsBar />
      <ProblemSection />
      <WhatIsIntelliDesq />
      <CoreCapabilities />
      <HowItWorks />
      <IntelliDesqPlusHOS />
      <UseCases />
      <FeatureSpotlight />
      <LiveMetrics />
      <Integrations />
      <Testimonials />
      <IntelliDesqCTA />
    </main>
  );
}
