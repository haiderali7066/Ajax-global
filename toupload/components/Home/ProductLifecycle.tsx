"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp } from "lucide-react";
import { vFadeUp } from "./shared";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
type T = "DISCOVER" | "ONBOARD" | "OPERATE" | "MONITOR" | "SCALE";

interface MetricLine {
  label: string;
  color: string;
  points: number[]; // 0–100 values across 10 time steps
}

interface TabData {
  heading: string;
  description: string;
  features: string[];
  chartTitle: string;
  chartSub: string;
  lines: MetricLine[];
  badge: string;
  badgeVal: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Chart helpers
// ─────────────────────────────────────────────────────────────────────────────
const W = 380;
const H = 140;
const PAD = { t: 12, r: 8, b: 28, l: 28 };

function toPath(points: number[]): string {
  const xs = points.map((_, i) =>
    PAD.l + (i / (points.length - 1)) * (W - PAD.l - PAD.r)
  );
  const ys = points.map(
    (v) => PAD.t + (1 - v / 100) * (H - PAD.t - PAD.b)
  );
  // Smooth curve via cubic bezier
  return points
    .map((_, i) => {
      if (i === 0) return `M ${xs[i]},${ys[i]}`;
      const cpx1 = xs[i - 1] + (xs[i] - xs[i - 1]) * 0.5;
      const cpy1 = ys[i - 1];
      const cpx2 = xs[i - 1] + (xs[i] - xs[i - 1]) * 0.5;
      const cpy2 = ys[i];
      return `C ${cpx1},${cpy1} ${cpx2},${cpy2} ${xs[i]},${ys[i]}`;
    })
    .join(" ");
}

function toArea(points: number[]): string {
  const linePath = toPath(points);
  const lastX = PAD.l + ((points.length - 1) / (points.length - 1)) * (W - PAD.l - PAD.r);
  const baseY = H - PAD.b;
  return `${linePath} L ${lastX},${baseY} L ${PAD.l},${baseY} Z`;
}

const X_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];

// ─────────────────────────────────────────────────────────────────────────────
// Tab data — real AJAX Global service delivery lifecycle
// ─────────────────────────────────────────────────────────────────────────────
const TABS: Record<T, TabData> = {
  DISCOVER: {
    heading: "Map your goals before we move a single resource",
    description:
      "Every engagement starts with a dedicated discovery call. We map your goals, define roles, and deliver a full proposal with cost breakdown within 48 hours — before any commitment is made.",
    features: [
      "Free discovery call with AJAX strategy team",
      "Custom proposal delivered within 48 hours",
      "Service fit analysis across HOS & IntelliDesq™",
      "Industry-specific team and tooling recommendations",
    ],
    chartTitle: "Proposal-to-Approval Rate",
    chartSub: "Client conversion after discovery call",
    badge: "48 hrs",
    badgeVal: "Proposal Turnaround",
    lines: [
      { label: "Proposal Sent", color: "#34d399", points: [20, 35, 42, 50, 60, 68, 72, 78, 82, 88] },
      { label: "Client Approved", color: "#6ee7b7", points: [10, 18, 28, 38, 48, 58, 64, 70, 76, 82] },
      { label: "Discovery Calls", color: "#a7f3d0", points: [30, 42, 55, 62, 70, 74, 79, 84, 87, 92] },
    ],
  },
  ONBOARD: {
    heading: "Live in 7 days — trained, tested, and ready",
    description:
      "AJAX's train-the-trainer model means your team is fully operational in 7 days. You train our trainer once, we train the rest. Full equipment, internet redundancy, and backup agents are set up before Day 1.",
    features: [
      "Go-live in 7 business days (AJAX-Managed model)",
      "Train-the-trainer knowledge transfer — one session",
      "Equipment, workspace & internet redundancy covered",
      "Backup agents trained before deployment begins",
    ],
    chartTitle: "Onboarding Speed (Days to Live)",
    chartSub: "Avg. days from approval to fully operational",
    badge: "7 days",
    badgeVal: "Avg. Go-Live Time",
    lines: [
      { label: "Industry Avg (days)", color: "#f87171", points: [90, 88, 85, 82, 78, 72, 65, 55, 42, 30] },
      { label: "AJAX Deployment", color: "#34d399", points: [90, 70, 50, 35, 22, 14, 10, 8, 7, 7] },
      { label: "Team Readiness %", color: "#6ee7b7", points: [10, 28, 48, 62, 74, 82, 88, 92, 96, 100] },
    ],
  },
  OPERATE: {
    heading: "99.9% attendance. Zero unannounced absences. Ever.",
    description:
      "AJAX-managed operations mean your team shows up every single day — backed by trained backup agents for every 10 active resources, daily QA checks, and full payroll and attendance ownership by AJAX.",
    features: [
      "99.9% guaranteed agent attendance",
      "1 trained backup per every 10 active agents",
      "Payroll, HR, and compliance fully managed by AJAX",
      "VPN, firewall & secure CRM access enforced",
    ],
    chartTitle: "Operational Reliability Index",
    chartSub: "Agent uptime & attendance over 10 months",
    badge: "99.9%",
    badgeVal: "Attendance Rate",
    lines: [
      { label: "Attendance Rate", color: "#34d399", points: [94, 96, 97, 97, 98, 98, 99, 99, 99, 99.9] },
      { label: "QA Score", color: "#6ee7b7", points: [78, 82, 84, 87, 88, 90, 91, 93, 94, 96] },
      { label: "Client Satisfaction", color: "#a7f3d0", points: [72, 76, 80, 84, 86, 88, 90, 92, 93, 95] },
    ],
  },
  MONITOR: {
    heading: "Real-time KPIs. Weekly reports. Zero surprises.",
    description:
      "Every client gets a dedicated Project Manager, weekly performance summaries, and full visibility into call logs, response times, lead reports, and quality scores — all tracked in real time.",
    features: [
      "Weekly performance reports (calls, leads, QA)",
      "Dedicated Project Manager — 2hr response SLA",
      "Live dashboards via Google Sheets, Notion, or CRM",
      "Replacement for underperforming agents within 72 hrs",
    ],
    chartTitle: "Performance Analytics Dashboard",
    chartSub: "Key metrics tracked across all client accounts",
    badge: "2 hrs",
    badgeVal: "Client Query Response SLA",
    lines: [
      { label: "Response Time (min)", color: "#f87171", points: [45, 38, 30, 24, 18, 12, 8, 5, 3, 2] },
      { label: "Lead Conversion %", color: "#34d399", points: [18, 24, 30, 38, 44, 50, 56, 62, 68, 74] },
      { label: "Retention Rate %", color: "#6ee7b7", points: [60, 66, 70, 74, 78, 82, 85, 88, 91, 94] },
    ],
  },
  SCALE: {
    heading: "Start with one agent. Scale to fifty. Same discipline.",
    description:
      "AJAX Global's infrastructure is built to scale without friction. Add agents, upgrade tiers, layer in IntelliDesq™ AI automation, or expand to new service verticals — all without rebuilding your team from scratch.",
    features: [
      "Add agents or upgrade tiers at any time",
      "IntelliDesq™ AI layers directly onto human teams",
      "Expand across USA, Canada, Australia & UAE markets",
      "Enterprise custom contracts available (negotiable)",
    ],
    chartTitle: "Growth Trajectory",
    chartSub: "Revenue impact as operations scale with AJAX",
    badge: "50+",
    badgeVal: "Max Agents, Same Discipline",
    lines: [
      { label: "Team Size", color: "#6ee7b7", points: [10, 14, 18, 24, 30, 38, 44, 48, 52, 58] },
      { label: "Revenue Impact", color: "#34d399", points: [12, 18, 28, 40, 54, 68, 78, 86, 92, 98] },
      { label: "Ops Cost %", color: "#f87171", points: [80, 72, 64, 56, 50, 44, 40, 36, 32, 28] },
    ],
  },
};

const TAB_ORDER: T[] = ["DISCOVER", "ONBOARD", "OPERATE", "MONITOR", "SCALE"];

// ─────────────────────────────────────────────────────────────────────────────
// Animated SVG Line Chart
// ─────────────────────────────────────────────────────────────────────────────
function LineChart({ lines, title, sub, animate }: { lines: MetricLine[]; title: string; sub: string; animate: boolean }) {
  const [drawn, setDrawn] = useState(false);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  useEffect(() => {
    if (animate) {
      setDrawn(false);
      const t = setTimeout(() => setDrawn(true), 80);
      return () => clearTimeout(t);
    }
  }, [animate, lines]);

  // Grid y values (0, 25, 50, 75, 100)
  const gridYs = [0, 25, 50, 75, 100].map(
    (v) => PAD.t + (1 - v / 100) * (H - PAD.t - PAD.b)
  );

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Chart header */}
      <div className="flex items-start justify-between mb-3 px-1">
        <div>
          <p className="text-white font-bold text-xs uppercase tracking-widest opacity-60">
            {title}
          </p>
          <p className="text-white/40 text-xs mt-0.5">{sub}</p>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-2.5 py-1">
          <TrendingUp className="w-3 h-3 text-emerald-300" />
          <span className="text-emerald-300 text-xs font-bold">Live</span>
        </div>
      </div>

      {/* SVG chart */}
      <div className="flex-1 relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-full"
          onMouseLeave={() => setHoverIdx(null)}
        >
          <defs>
            {lines.map((line, li) => (
              <linearGradient key={li} id={`grad-${li}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={line.color} stopOpacity="0.25" />
                <stop offset="100%" stopColor={line.color} stopOpacity="0.01" />
              </linearGradient>
            ))}
          </defs>

          {/* Horizontal grid lines */}
          {gridYs.map((y, i) => (
            <g key={i}>
              <line
                x1={PAD.l} y1={y} x2={W - PAD.r} y2={y}
                stroke="rgba(255,255,255,0.06)" strokeWidth="1"
              />
              <text
                x={PAD.l - 4} y={y + 3.5}
                fill="rgba(255,255,255,0.25)"
                fontSize="7"
                textAnchor="end"
              >
                {[100, 75, 50, 25, 0][i]}
              </text>
            </g>
          ))}

          {/* X-axis labels */}
          {X_LABELS.map((label, i) => {
            const x = PAD.l + (i / (X_LABELS.length - 1)) * (W - PAD.l - PAD.r);
            return (
              <text key={i} x={x} y={H - 4} fill="rgba(255,255,255,0.3)" fontSize="7" textAnchor="middle">
                {label}
              </text>
            );
          })}

          {/* Vertical hover lines at each x */}
          {X_LABELS.map((_, i) => {
            const x = PAD.l + (i / (X_LABELS.length - 1)) * (W - PAD.l - PAD.r);
            return (
              <rect
                key={i}
                x={x - 14} y={PAD.t} width={28} height={H - PAD.t - PAD.b}
                fill="transparent"
                className="cursor-crosshair"
                onMouseEnter={() => setHoverIdx(i)}
              />
            );
          })}

          {/* Area fills */}
          {lines.map((line, li) => (
            <motion.path
              key={`${li}-${line.label}`}
              d={toArea(line.points)}
              fill={`url(#grad-${li})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: drawn ? 1 : 0 }}
              transition={{ duration: 0.6, delay: li * 0.15 }}
            />
          ))}

          {/* Line paths with draw animation */}
          {lines.map((line, li) => (
            <motion.path
              key={`line-${li}-${line.label}`}
              d={toPath(line.points)}
              fill="none"
              stroke={line.color}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: drawn ? 1 : 0, opacity: drawn ? 1 : 0 }}
              transition={{ duration: 1.1, delay: li * 0.18, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}

          {/* Hover dots + tooltip */}
          {hoverIdx !== null &&
            lines.map((line, li) => {
              const x = PAD.l + (hoverIdx / (line.points.length - 1)) * (W - PAD.l - PAD.r);
              const y = PAD.t + (1 - line.points[hoverIdx] / 100) * (H - PAD.t - PAD.b);
              return (
                <g key={li}>
                  <circle cx={x} cy={y} r="4" fill={line.color} stroke="#0f2818" strokeWidth="1.5" />
                  <line x1={x} y1={PAD.t} x2={x} y2={H - PAD.b} stroke={line.color} strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="3 2" />
                </g>
              );
            })}

          {/* Endpoint dots (always visible) */}
          {lines.map((line, li) => {
            const i = line.points.length - 1;
            const x = PAD.l + (i / (line.points.length - 1)) * (W - PAD.l - PAD.r);
            const y = PAD.t + (1 - line.points[i] / 100) * (H - PAD.t - PAD.b);
            return (
              <motion.circle
                key={`dot-${li}`}
                cx={x} cy={y} r="3.5"
                fill={line.color}
                stroke="#1a3a2a"
                strokeWidth="1.5"
                initial={{ scale: 0 }}
                animate={{ scale: drawn ? 1 : 0 }}
                transition={{ duration: 0.35, delay: 1.1 + li * 0.1 }}
              />
            );
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2 px-1">
        {lines.map((line, li) => (
          <div key={li} className="flex items-center gap-1.5">
            <span className="w-5 h-0.5 rounded-full inline-block" style={{ background: line.color }} />
            <span className="text-white/45 text-xs">{line.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
export default function ProductLifecycle() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });
  const [tab, setTab] = useState<T>("OPERATE");
  const [chartKey, setChartKey] = useState(0);

  const handleTab = (t: T) => {
    setTab(t);
    setChartKey((k) => k + 1);
  };

  const a = TABS[tab];

  return (
    <section className="py-10 sm:py-16 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <motion.div
          variants={vFadeUp}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900">
            Your operations lifecycle
            <span className="block font-extrabold text-emerald-600 mt-1">
              streamlined on one partnership
            </span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            From first discovery call to scaled global operations — AJAX Global manages every stage with structure, discipline, and measurable results.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          variants={vFadeUp}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 rounded-3xl p-6 sm:p-10 overflow-hidden relative"
          style={{
            boxShadow: "0 32px 80px rgba(16,185,129,0.18), 0 8px 24px rgba(0,0,0,0.3)",
          }}
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 rounded-3xl opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Ambient glow top-right */}
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)" }}
          />

          {/* Tabs */}
          <div className="relative z-10 flex justify-start sm:justify-center gap-1 sm:gap-2 mb-10 overflow-x-auto pb-1 scrollbar-hide">
            {TAB_ORDER.map((t, i) => {
              const active = tab === t;
              return (
                <motion.button
                  key={t}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={() => handleTab(t)}
                  className="relative flex-shrink-0 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 rounded-full focus-visible:outline-none"
                  style={{
                    background: active ? "rgba(52,211,153,0.18)" : "transparent",
                    color: active ? "#34d399" : "rgba(167,243,208,0.5)",
                    border: active ? "1px solid rgba(52,211,153,0.35)" : "1px solid transparent",
                  }}
                >
                  {t}
                  {active && (
                    <motion.span
                      layoutId="tab-indicator"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "rgba(52,211,153,0.08)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 grid md:grid-cols-2 gap-8 lg:gap-14 items-start"
            >
              {/* Left: Text */}
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/25 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300 text-xs font-black tracking-widest uppercase">
                    {tab}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-snug">
                  {a.heading}
                </h3>

                <div className="space-y-3">
                  {a.features.map((f, i) => (
                    <motion.div
                      key={`${tab}-${i}`}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.32 }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-emerald-100 text-sm sm:text-base leading-snug">{f}</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-emerald-200/60 text-sm leading-relaxed">{a.description}</p>

                <div className="flex items-center gap-4 flex-wrap">
                  <Button
                    className="bg-white text-emerald-900 hover:bg-emerald-50 rounded-full px-7 h-11 font-bold hover:shadow-lg transition-all duration-300 text-sm"
                  >
                    GET STARTED FREE
                  </Button>
                  {/* Key stat pill */}
                  <div className="flex flex-col">
                    <span className="text-emerald-300 font-black text-xl leading-none">{a.badge}</span>
                    <span className="text-emerald-200/50 text-xs mt-0.5">{a.badgeVal}</span>
                  </div>
                </div>
              </div>

              {/* Right: Line Chart Dashboard */}
              <div className="relative bg-gradient-to-br from-slate-950 to-emerald-950/80 rounded-2xl p-5 border border-emerald-700/20 shadow-2xl overflow-hidden min-h-[260px] flex flex-col">
                {/* Decorative corner glow */}
                <div
                  className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)" }}
                />

                <LineChart
                  key={chartKey}
                  lines={a.lines}
                  title={a.chartTitle}
                  sub={a.chartSub}
                  animate={iv}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress indicator dots */}
          <div className="relative z-10 flex justify-center gap-2 mt-8">
            {TAB_ORDER.map((t) => (
              <button
                key={t}
                onClick={() => handleTab(t)}
                className="transition-all duration-300 rounded-full focus-visible:outline-none"
                style={{
                  width: tab === t ? 20 : 6,
                  height: 6,
                  background: tab === t ? "#34d399" : "rgba(52,211,153,0.25)",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}