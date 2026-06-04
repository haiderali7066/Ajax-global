"use client";



import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Layers,
  Heart,
  Globe,
  Zap,
  Shield,
  Users,
  BarChart3,
  TrendingUp,
  Target,
  Headphones,
  CheckCircle,
  CheckCircle2,
  Code2,
  Star,
  ChevronDown,
  Sparkles,
  Settings,
  Rocket,
} from "lucide-react";
import SolutionShowcase from "./SolutionsShowcase"


/* ────────────────────────────────────────────────────────────────────
   DESIGN TOKENS  (mirrors your tailwind.config values exactly)
──────────────────────────────────────────────────────────────────── */
const C = {
  primary: "#6366f1",
  accent: "#8b5cf6",
  fg: "#0f172a", // foreground
  muted: "#64748b", // muted-foreground
  border: "#e2e8f0",
  bg: "#ffffff", // bg-background
  bgSecond: "#f8fafc", // bg-secondary / slate-50
  dark: "#020617", // slate-950
  black: "#000000",
  emerald: "#065f46", // emerald-900 (lifecycle card)
  rose: "#f43f5e",
  amber: "#f59e0b",
  cyan: "#06b6d4",
};

/* ────────────────────────────────────────────────────────────────────
   SHARED VARIANTS
──────────────────────────────────────────────────────────────────── */
const vFadeUp = {
  hidden: { opacity: 0, y: 48 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};
const vFadeLeft = {
  hidden: { opacity: 0, x: -52 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
};
const vFadeRight = {
  hidden: { opacity: 0, x: 52 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
};
const vStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const vPop = {
  hidden: { opacity: 0, scale: 0.84 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.34, 1.56, 0.64, 1],
      delay: i * 0.07,
    },
  }),
};

/* ────────────────────────────────────────────────────────────────────
   MAGNETIC BUTTON  (cursor-attraction micro-interaction)
──────────────────────────────────────────────────────────────────── */
function Mag({
  children,
  s = 0.32,
}: {
  children: React.ReactNode;
  s?: number;
}) {
  const r = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 20 });
  const sy = useSpring(my, { stiffness: 220, damping: 20 });
  const mv = (e: React.MouseEvent) => {
    if (!r.current) return;
    const b = r.current.getBoundingClientRect();
    mx.set((e.clientX - b.left - b.width / 2) * s);
    my.set((e.clientY - b.top - b.height / 2) * s);
  };
  return (
    <motion.div
      ref={r}
      onMouseMove={mv}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ x: sx, y: sy }}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────────────
   COUNTER  (animated number on scroll-reveal)
──────────────────────────────────────────────────────────────────── */
function Count({ to, suf = "" }: { to: number; suf?: string }) {
  const r = useRef<HTMLSpanElement>(null);
  const iv = useInView(r, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!iv) return;
    let s = 0;
    const step = to / (1800 / 16);
    const t = setInterval(() => {
      s = Math.min(s + step, to);
      setN(Math.round(s));
      if (s >= to) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [iv, to]);
  return (
    <span ref={r}>
      {n}
      {suf}
    </span>
  );
}

/* ════════════════════════════════════════════════════════════════════
   §1  HERO SECTION
   Preserve: bg-background, primary badge, headline style, rounded-full CTA
   Add: per-word stagger via GSAP, floating orbs, dot grid, parallax, counters
════════════════════════════════════════════════════════════════════ */
export function HeroSection() {
  const wrap = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end start"],
  });
  const py = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const po = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  // GSAP word-by-word hero entrance
  useEffect(() => {
    let ctx: any;
    (async () => {
      try {
        const g = await import("gsap");
        ctx = g.gsap.context(() => {
          g.gsap.fromTo(
            ".hero-word",
            { opacity: 0, y: 72, rotateX: -55, transformOrigin: "50% 100%" },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.85,
              ease: "power4.out",
              stagger: 0.06,
              delay: 0.15,
              perspective: 600,
            },
          );
          g.gsap.fromTo(
            ".hero-sub",
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 1.1 },
          );
          g.gsap.fromTo(
            ".hero-cta",
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              delay: 1.35,
            },
          );
        }, wrap);
      } catch (_) {}
    })();
    return () => ctx?.revert();
  }, []);

  const words = [
    "Your",
    "All-in-One",
    "Google",
    "for",
    "Outsourcing",
    "&",
    "AI",
    "Growth.",
  ];

  return (
    <section
      ref={wrap}
      className="relative overflow-hidden bg-white pt-20 sm:pt-32 pb-28 sm:pb-44"
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(99,102,241,0.13) 1px,transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial colour wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            background:
              "radial-gradient(ellipse 72% 55% at 62% 28%,rgba(99,102,241,0.09) 0%,transparent 65%)",
          }}
          className="absolute inset-0"
        />
        <div
          style={{
            background:
              "radial-gradient(ellipse 45% 40% at 8% 82%,rgba(139,92,246,0.07) 0%,transparent 60%)",
          }}
          className="absolute inset-0"
        />
        <div
          style={{
            background: "linear-gradient(to bottom,transparent 65%,#fff 100%)",
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-14 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(99,102,241,0.11)" }}
        animate={{ y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-28 left-10 w-48 h-48 rounded-full blur-2xl pointer-events-none"
        style={{ background: "rgba(236,72,153,0.08)" }}
        animate={{ y: [0, -20, 0], x: [0, 16, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Centered Content Wrapper */}
      <motion.div
        style={{ y: py, opacity: po }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
      >
        {/* Badge — your exact style */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-300 hover:border-indigo-300 transition-colors duration-300 mb-10"
        >
          <span className="text-sm font-medium text-slate-800">
            AI Solutions
          </span>
          <span className="ml-2 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </motion.div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.04] text-slate-900 mb-6 max-w-4xl mx-auto"
          style={{ perspective: "900px" }}
        >
          {words.map((w, i) => (
            <span key={i} className="inline-block mr-[0.22em] last:mr-0">
              <span className="hero-word inline-block" style={{ opacity: 0 }}>
                {w === "&" ? (
                  <span className="font-extrabold text-indigo-600">&amp;</span>
                ) : (
                  w
                )}
              </span>
            </span>
          ))}
        </h1>

        {/* Sub */}
        <p
          className="hero-sub mx-auto max-w-2xl text-xl text-slate-500 font-normal mb-10 leading-relaxed text-center"
          style={{ opacity: 0 }}
        >
          Everything your business needs to think, execute, and scale — in one
          place.
        </p>

        {/* CTAs */}
        <div
          className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          style={{ opacity: 0 }}
        >
          <Mag>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-14 text-base font-bold group shadow-lg hover:scale-[1.04] transition-all duration-300"
              style={{
                background: `linear-gradient(135deg,${C.primary},${C.accent})`,
                color: "#fff",
                boxShadow: `0 8px 32px rgba(99,102,241,0.30)`,
              }}
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2"
              >
                Request a Quote
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </Button>
          </Mag>
          <p className="text-sm text-slate-400 font-medium text-center sm:text-left sm:pl-2">
            24/7 coverage · Dedicated teams · Security-first operations
          </p>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto w-full"
          variants={vStagger}
          initial="hidden"
          animate="show"
        >
          {[
            { v: 2000, s: "+", l: "Professionals" },
            { v: 15, s: "+", l: "Countries" },
            { v: 99, s: "%", l: "Uptime SLA" },
            { v: 7, s: "d", l: "Go-Live" },
          ].map((st, i) => (
            <motion.div
              key={i}
              variants={vPop}
              custom={i}
              className="rounded-2xl border border-slate-100 bg-white shadow-sm p-4 text-center cursor-default"
              whileHover={{
                y: -5,
                borderColor: C.primary,
                boxShadow: `0 8px 24px rgba(99,102,241,0.13)`,
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-extrabold text-indigo-600">
                <Count to={st.v} suf={st.s} />
              </div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">
                {st.l}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll nudge */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <span className="text-[10px] text-slate-400 font-semibold tracking-[.18em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
/* ════════════════════════════════════════════════════════════════════
   §2  SERVICE SELECTOR
   Preserve: pill buttons, primary bg card, testimonial side
   Add: per-tab animated colour swap, counter, GSAP card entrance
════════════════════════════════════════════════════════════════════ */
export function ServiceSelector() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });
  const [sel, setSel] = useState(0);

  const services = [
    {
      id: "intellidesq",
      short: "AI INTELLIGENT",
      label: "INTELLIDESQ™",
      href: "/intellidesq",
      headline: "Lead with clear foresight.",
      body: "Keep strategic goals on track with AI risk flagging and cross-org data to make real-time decisions.",
      stat: { v: 10, s: "×", l: "Faster Decisions" },
      color: C.primary,
    },
    {
      id: "hos",
      short: "HUMAN OUTSOURCING",
      label: "HOS",
      href: "/hos",
      headline: "Elite teams. Zero friction.",
      body: "Purpose-built human teams, fully trained, performing from day one — guaranteed.",
      stat: { v: 2000, s: "+", l: "Professionals Deployed" },
      color: "#10b981",
    },
    {
      id: "msp",
      short: "MANAGED SERVICES",
      label: "MSP",
      href: "/services",
      headline: "IT you can actually rely on.",
      body: "Managed IT, cloud and cybersecurity that let your team focus on what matters most.",
      stat: { v: 99, s: "%", l: "Uptime Guaranteed" },
      color: C.amber,
    },
    {
      id: "it",
      short: "MANAGED IT",
      label: "MANAGED IT",
      href: "/services",
      headline: "24/7 infrastructure coverage.",
      body: "Proactive IT management, monitoring, and support — keeping systems running perfectly.",
      stat: { v: 24, s: "/7", l: "IT Coverage" },
      color: C.cyan,
    },
    {
      id: "cloud",
      short: "CLOUD SOLUTIONS",
      label: "CLOUD",
      href: "/services",
      headline: "Scale without limits.",
      body: "Enterprise-grade cloud infrastructure designed for availability, security, and speed.",
      stat: { v: 100, s: "%", l: "Cloud Uptime" },
      color: "#3b82f6",
    },
    {
      id: "cyber",
      short: "CYBERSECURITY",
      label: "CYBER",
      href: "/services",
      headline: "Locked down, always on.",
      body: "24/7 threat monitoring, endpoint protection and compliance — enterprise-grade, startup-friendly.",
      stat: { v: 100, s: "+", l: "Threats Blocked Daily" },
      color: C.rose,
    },
  ];
  const s = services[sel];

  return (
    <section className="py-16 sm:py-24 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={vFadeUp}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="text-3xl sm:text-5xl md:text-6xl font-light text-center text-slate-900 mb-14"
        >
          Where would you like to{" "}
          <span className="font-extrabold text-indigo-600">start</span>
        </motion.h2>

        {/* Pill buttons */}
        <motion.div
          variants={vStagger}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {services.map((sv, i) => (
            <motion.button
              key={sv.id}
              variants={vPop}
              custom={i}
              onClick={() => setSel(i)}
              className="px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 border-2"
              style={{
                background: sel === i ? sv.color : "#fff",
                borderColor: sel === i ? sv.color : "#e2e8f0",
                color: sel === i ? "#fff" : C.fg,
                boxShadow: sel === i ? `0 6px 22px ${sv.color}44` : "none",
                transform: sel === i ? "scale(1.06)" : "scale(1)",
              }}
            >
              <span className="block text-[9px] font-black opacity-60 leading-none mb-0.5">
                {sv.short}
              </span>
              {sv.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={sel}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -22 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Card */}
            <div
              className="rounded-3xl text-white p-9 sm:p-12 relative overflow-hidden shadow-xl"
              style={{
                background: `linear-gradient(135deg,${s.color},${s.color}bb)`,
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Glow orb */}
              <motion.div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  filter: "blur(40px)",
                }}
                animate={{ scale: [1, 1.18, 1] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10 space-y-6">
                <p className="text-white/50 text-xs font-black tracking-[.22em] uppercase">
                  {s.short}
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                  {s.headline}
                </h3>
                <p className="text-white/85 text-lg leading-relaxed">
                  {s.body}
                </p>
                <div>
                  <div className="text-3xl font-black">
                    <Count to={s.stat.v} suf={s.stat.s} />
                  </div>
                  <div className="text-white/55 text-xs font-semibold mt-0.5">
                    {s.stat.l}
                  </div>
                </div>
                <Mag>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white font-bold rounded-full px-7 h-12 hover:scale-[1.03] transition-all duration-300 group mt-2"
                    style={{ color: s.color }}
                  >
                    <Link href={s.href} className="flex items-center gap-2">
                      Talk to an Expert
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </Mag>
              </div>
            </div>

            {/* Testimonial */}
            <div className="space-y-7">
              <div className="inline-block bg-white border border-slate-200 rounded-xl px-6 py-3 shadow-sm">
                <p className="text-sm font-black text-slate-700 tracking-widest">
                  HOLT · CAT
                </p>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                $4M saved with optimised processes
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                "AjaxGlobal gives us the visibility to get everyone on the same
                page and track all the moving parts of our projects."
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all duration-300 group"
              >
                Learn more about our solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   §3  INTERACTIVE CATEGORY SECTION  (Operations / Intelligence / Technology)
   Preserve: 3 main tabs, 4 flip-cards per tab, CTA
   Add: GSAP stagger entrance, spring tab transition, card hover lift
════════════════════════════════════════════════════════════════════ */
export function InteractiveCategorySection() {
  type Cat = "Operations" | "Intelligence" | "Technology";
  const ref = useRef<HTMLElement>(null);
  const iv = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-80px",
  });
  const [cat, setCat] = useState<Cat>("Operations");

  const cats: {
    id: Cat;
    items: {
      title: string;
      desc: string;
      benefits: string[];
      href: string;
      bg: string;
      bb: string;
    }[];
  }[] = [
    {
      id: "Operations",
      items: [
        {
          title: "Human Outsourcing",
          desc: "Elite dedicated teams trained to your standards",
          benefits: [
            "Expert talent pool",
            "Rapid scaling",
            "Performance driven",
            "99.2% uptime",
          ],
          href: "/hos",
          bg: "bg-indigo-500",
          bb: "bg-indigo-600",
        },
        {
          title: "Staffing Solutions",
          desc: "Flexible workforce management and recruitment",
          benefits: [
            "Quick deployment",
            "Cost efficient",
            "Quality assurance",
            "Compliance ready",
          ],
          href: "/services",
          bg: "bg-violet-500",
          bb: "bg-violet-600",
        },
        {
          title: "Ops Management",
          desc: "Streamlined operational excellence",
          benefits: [
            "Process optimisation",
            "Workflow efficiency",
            "Resource allocation",
            "KPI tracking",
          ],
          href: "/services",
          bg: "bg-pink-500",
          bb: "bg-pink-600",
        },
        {
          title: "Talent Acquisition",
          desc: "Strategic hiring and team building",
          benefits: [
            "Top talent matching",
            "Culture fit focus",
            "Fast onboarding",
            "Retention support",
          ],
          href: "/services",
          bg: "bg-rose-500",
          bb: "bg-rose-600",
        },
      ],
    },
    {
      id: "Intelligence",
      items: [
        {
          title: "IntelliDesq Platform",
          desc: "AI-powered operational intelligence",
          benefits: [
            "Predictive analytics",
            "Real-time insights",
            "Automated decisions",
            "Data-driven",
          ],
          href: "/intellidesq",
          bg: "bg-sky-500",
          bb: "bg-sky-600",
        },
        {
          title: "Advanced Analytics",
          desc: "Deep insights from your operational data",
          benefits: [
            "Performance metrics",
            "Trend analysis",
            "Forecasting",
            "Custom reports",
          ],
          href: "/intellidesq",
          bg: "bg-blue-500",
          bb: "bg-blue-600",
        },
        {
          title: "Intelligent Automation",
          desc: "Smart automation that learns and adapts",
          benefits: [
            "Process automation",
            "Error reduction",
            "Time saving",
            "Cost reduction",
          ],
          href: "/intellidesq",
          bg: "bg-cyan-600",
          bb: "bg-cyan-700",
        },
        {
          title: "Smart Reporting",
          desc: "Automated insights and dashboards",
          benefits: [
            "Real-time updates",
            "Custom dashboards",
            "Scheduled reports",
            "Exec summaries",
          ],
          href: "/intellidesq",
          bg: "bg-teal-500",
          bb: "bg-teal-600",
        },
      ],
    },
    {
      id: "Technology",
      items: [
        {
          title: "Cloud Infrastructure",
          desc: "Secure and scalable cloud solutions",
          benefits: [
            "High availability",
            "Global coverage",
            "Auto-scaling",
            "Disaster recovery",
          ],
          href: "/services",
          bg: "bg-emerald-500",
          bb: "bg-emerald-600",
        },
        {
          title: "IT Services",
          desc: "Comprehensive technical support",
          benefits: [
            "24/7 support",
            "System maintenance",
            "Updates & patches",
            "Tech consulting",
          ],
          href: "/services",
          bg: "bg-green-600",
          bb: "bg-green-700",
        },
        {
          title: "Infrastructure Solutions",
          desc: "Enterprise-grade infra management",
          benefits: [
            "Network optimisation",
            "DB management",
            "Load balancing",
            "Perf tuning",
          ],
          href: "/services",
          bg: "bg-amber-500",
          bb: "bg-amber-600",
        },
        {
          title: "Cybersecurity",
          desc: "Advanced security and compliance",
          benefits: [
            "Data protection",
            "Threat detection",
            "Compliance",
            "Access control",
          ],
          href: "/services",
          bg: "bg-red-500",
          bb: "bg-red-600",
        },
      ],
    },
  ];
  const active = cats.find((c) => c.id === cat)!;

  // GSAP re-stagger on tab change
  useEffect(() => {
    let ctx: any;
    (async () => {
      try {
        const g = await import("gsap");
        ctx = g.gsap.context(() => {
          g.gsap.fromTo(
            ".cat-card",
            { opacity: 0, y: 40, scale: 0.93 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
              stagger: 0.08,
            },
          );
        }, ref);
      } catch (_) {}
    })();
    return () => ctx?.revert();
  }, [cat]);

  return (
    <section
      ref={ref}
      className="py-20 sm:py-32 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-200 rounded-full blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={vFadeUp}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 mb-4">
            Discover the{" "}
            <span className="font-extrabold text-indigo-600">AJAX Global</span>{" "}
            Advantage
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Hover over cards to reveal key benefits. Explore our full suite
            across Operations, Intelligence, and Technology.
          </p>
        </motion.div>

        {/* Tab pills */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {cats.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className="relative px-7 py-3 text-base font-bold transition-all duration-300 rounded-full border-2 overflow-hidden"
              style={{
                background: cat === c.id ? C.primary : "#fff",
                borderColor: cat === c.id ? C.primary : C.border,
                color: cat === c.id ? "#fff" : C.fg,
                boxShadow:
                  cat === c.id ? `0 6px 22px rgba(99,102,241,0.30)` : "none",
                transform: cat === c.id ? "scale(1.06)" : "scale(1)",
              }}
            >
              {c.id}
            </button>
          ))}
        </div>

        {/* Flip cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {active.items.map((item, i) => (
            <div
              key={item.title + i}
              className="cat-card group h-64 [perspective:1000px]"
            >
              <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div
                  className={`absolute inset-0 ${item.bg} rounded-2xl p-7 flex flex-col justify-between [backface-visibility:hidden] shadow-lg`}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-xs">{item.desc}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-white/60 text-[11px] font-bold">
                      HOVER TO EXPLORE <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div
                  className={`absolute inset-0 ${item.bb} rounded-2xl p-7 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl`}
                >
                  <div>
                    <h4 className="text-white font-bold text-xs mb-3 opacity-70 uppercase tracking-wider">
                      Key Benefits
                    </h4>
                    <ul className="space-y-1.5">
                      {item.benefits.map((b, j) => (
                        <li
                          key={j}
                          className="text-white text-sm flex items-center gap-2"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-white/60 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-white font-bold text-sm hover:gap-3 transition-all duration-300 group/l"
                  >
                    Learn More{" "}
                    <ArrowRight className="w-3.5 h-3.5 group-hover/l:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={vFadeUp}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-light text-slate-900 mb-6">
            Ready to Experience the AJAX Global Difference?
          </h3>
          <Mag>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-14 text-base font-bold group hover:scale-[1.05] transition-all duration-300 shadow-lg"
              style={{
                background: `linear-gradient(135deg,${C.primary},${C.accent})`,
                color: "#fff",
                boxShadow: `0 8px 30px rgba(99,102,241,0.30)`,
              }}
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get Started Today
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </Button>
          </Mag>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   §4  PRODUCT LIFECYCLE  (emerald card — preserve exactly, add AnimatePresence tab)
════════════════════════════════════════════════════════════════════ */
export function ProductLifecycle() {
  type T = "PLAN" | "EXECUTE" | "RELEASE" | "MONITOR" | "MANAGE";
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });
  const [tab, setTab] = useState<T>("MANAGE");
  const tabs: Record<
    T,
    { features: string[]; description: string; heading: string }
  > = {
    PLAN: {
      heading: "Enhance engineering performance",
      features: [
        "Burndown charts",
        "Sprint retrospectives",
        "Velocity charts",
        "AI sprint summaries",
      ],
      description:
        "Access Agile insights to identify bottlenecks, improve planning, collaboration, and productivity.",
    },
    EXECUTE: {
      heading: "Execute with precision",
      features: [
        "Task management",
        "Team collaboration",
        "Progress tracking",
        "Resource allocation",
      ],
      description:
        "Execute plans with real-time collaboration tools and intelligent task distribution.",
    },
    RELEASE: {
      heading: "Release with confidence",
      features: [
        "Release planning",
        "Deployment tracking",
        "Version control",
        "Release automation",
      ],
      description:
        "Streamline releases with automated deployment pipelines and documentation.",
    },
    MONITOR: {
      heading: "Monitor continuously",
      features: [
        "Performance metrics",
        "System health",
        "Real-time alerts",
        "Analytics dashboards",
      ],
      description:
        "Monitor systems in real-time with comprehensive dashboards and proactive alerting.",
    },
    MANAGE: {
      heading: "Manage efficiently",
      features: [
        "Team management",
        "Resource planning",
        "Budget tracking",
        "Performance reviews",
      ],
      description:
        "Manage teams effectively with centralised dashboards and intelligent resource allocation.",
    },
  };
  const a = tabs[tab];

  return (
    <section className="py-20 sm:py-32 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={vFadeUp}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 mb-14"
        >
          Your product lifecycle
          <span className="block font-extrabold text-indigo-600">
            streamlined on one platform
          </span>
        </motion.h2>

        <motion.div
          variants={vFadeUp}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-3xl p-8 sm:p-12 overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {(Object.keys(tabs) as T[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 text-sm sm:text-base font-bold transition-all duration-300 pb-2 border-b-2 ${
                  tab === t
                    ? "text-white border-white"
                    : "text-emerald-200 border-transparent hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.32 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-5">
                <h3 className="text-3xl sm:text-4xl font-light text-white">
                  {a.heading}
                </h3>
                <div className="space-y-3">
                  {a.features.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-3 group"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-white text-lg">{f}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-emerald-100 leading-relaxed">
                  {a.description}
                </p>
                <Button className="bg-white text-emerald-900 hover:bg-emerald-50 rounded-full px-7 h-12 font-bold hover:shadow-lg transition-all duration-300">
                  GET STARTED
                </Button>
              </div>

              <div className="relative h-80 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-emerald-700/30 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-xs uppercase tracking-widest">
                      Sprint Dashboard
                    </span>
                    <span className="text-slate-400 text-xs">Live</span>
                  </div>
                  <div className="h-44 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 flex items-end justify-around px-4 py-4 gap-1">
                    {[60, 75, 55, 70, 45, 80, 65, 90, 72].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t opacity-70 hover:opacity-100 cursor-pointer"
                        style={{ height: `${h}%` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.6, delay: 0.18 + i * 0.05 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   §5  TEAM SUPPORT CARDS  (infinite marquee — preserve exact logic + cards)
════════════════════════════════════════════════════════════════════ */
export function TeamSupportCards() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });
  const cards = [
    {
      title: "Security & Control",
      sub: "Security and control built into daily operations",
      desc: "People, systems, and data stay protected as your business scales.",
      bg: "from-purple-100/80 to-purple-50",
      tc: "text-purple-900",
      ic: "text-purple-600",
      Icon: Shield,
    },
    {
      title: "Operations & Back Office",
      sub: "Operations that run quietly in the background",
      desc: "The work gets done, systems stay organised, nothing falls through.",
      bg: "from-amber-100/80 to-amber-50",
      tc: "text-amber-900",
      ic: "text-amber-600",
      Icon: Settings,
    },
    {
      title: "Leadership Visibility",
      sub: "Leadership visibility across the entire business",
      desc: "Know what to act on without digging through noise.",
      bg: "from-orange-100/80 to-orange-50",
      tc: "text-orange-900",
      ic: "text-orange-600",
      Icon: BarChart3,
    },
    {
      title: "Customer Support",
      sub: "Support that doesn't collapse as you grow",
      desc: "Always-on teams, intelligent automation, clear processes.",
      bg: "from-blue-100/80 to-blue-50",
      tc: "text-blue-900",
      ic: "text-blue-600",
      Icon: Headphones,
    },
    {
      title: "Sales Execution",
      sub: "Sales execution without missing opportunities",
      desc: "From first touch to follow-up, every step handled and moved forward.",
      bg: "from-pink-100/80 to-pink-50",
      tc: "text-pink-900",
      ic: "text-pink-600",
      Icon: Rocket,
    },
  ];
  const doubled = [...cards, ...cards];

  return (
    <section className="py-20 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14" ref={ref}>
        <motion.h2
          variants={vFadeUp}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 text-center"
        >
          Built to support{" "}
          <span className="font-extrabold text-indigo-600">every team</span>
        </motion.h2>
      </div>
      <div className="relative w-full">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div
          className="flex w-max"
          style={{ animation: "ajaxTrain 38s linear infinite" }}
        >
          <div className="flex gap-5 px-3">
            {doubled.map((c, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-[300px] sm:w-[360px] bg-gradient-to-br ${c.bg} border border-white/40 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer`}
              >
                <div className={`${c.tc} h-full flex flex-col`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`p-2.5 rounded-xl bg-white/60 shadow-sm ${c.ic}`}
                    >
                      <c.Icon strokeWidth={2.5} className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black uppercase opacity-70 tracking-wide">
                      {c.title}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold leading-tight mb-3 group-hover:opacity-80 transition-opacity">
                    {c.sub}
                  </h4>
                  <p className="text-sm leading-relaxed opacity-70 mt-auto">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes ajaxTrain{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   §6  BUILT FOR INNOVATORS  (dark bg, mouse spotlight — preserve exactly)
════════════════════════════════════════════════════════════════════ */
export function BuiltForInnovators() {
  const wrap = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });
  const [exp, setExp] = useState<number | null>(0);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrap.current) return;
    const r = wrap.current.getBoundingClientRect();
    wrap.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    wrap.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  const items = [
    {
      title: "Shape your process",
      desc: "Customise dashboards and workflows to elevate each engineer's experience whether they use Scrum or Kanban.",
    },
    {
      title: "Track your progress",
      desc: "Comprehensive visibility into project metrics, team velocity, and sprint performance with real-time analytics.",
    },
    {
      title: "Align your teams",
      desc: "Foster collaboration across departments with shared goals, transparent communication, and synchronised workflows.",
    },
  ];

  return (
    <div
      ref={wrap}
      onMouseMove={onMove}
      className="relative py-20 sm:py-32 bg-slate-950 overflow-hidden group rounded-[2rem] mx-4 sm:mx-6 lg:mx-8 my-8"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />
      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px circle at var(--mx,50%) var(--my,50%),rgba(16,185,129,0.08),transparent 40%)",
        }}
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            variants={vFadeLeft}
            initial="hidden"
            animate={iv ? "show" : "hidden"}
            className="sticky top-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6 w-fit border border-emerald-500/20">
              <Sparkles className="w-4 h-4" />
              <span>For modern teams</span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-white leading-[1.1] tracking-tight">
              Built for
              <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mt-2">
                innovators
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={vStagger}
            initial="hidden"
            animate={iv ? "show" : "hidden"}
            className="space-y-4"
          >
            {items.map((item, i) => {
              const open = exp === i;
              return (
                <motion.div
                  key={i}
                  variants={vFadeUp}
                  custom={i}
                  className={`rounded-2xl border transition-all duration-500 overflow-hidden backdrop-blur-sm cursor-pointer ${
                    open
                      ? "bg-emerald-400 border-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.3)]"
                      : "bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600"
                  }`}
                  onClick={() => setExp(open ? null : i)}
                >
                  <div className="px-7 py-6 flex items-center justify-between">
                    <h3
                      className={`text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300 ${open ? "text-slate-900" : "text-slate-200"}`}
                    >
                      {item.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${open ? "bg-slate-900/10 text-slate-900" : "bg-slate-700 text-slate-400"}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                  <div
                    className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`px-7 pb-7 text-base sm:text-lg leading-relaxed ${open ? "text-slate-800" : "text-slate-400"}`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   §7  AJAX ADVANTAGE  (4 flip cards — preserve, add GSAP scroll entrance)
════════════════════════════════════════════════════════════════════ */
export function AjaxAdvantage() {
  const secRef = useRef<HTMLElement>(null);
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    let ctx: any;
    (async () => {
      try {
        const g = await import("gsap");
        const { ScrollTrigger: ST } = await import("gsap/ScrollTrigger");
        g.gsap.registerPlugin(ST);
        ctx = g.gsap.context(() => {
          g.gsap.fromTo(
            ".adv-card",
            { opacity: 0, y: 70, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              ease: "power3.out",
              stagger: 0.14,
              scrollTrigger: { trigger: secRef.current, start: "top 65%" },
            },
          );
        }, secRef);
      } catch (_) {}
    })();
    return () => ctx?.revert();
  }, []);

  const cards = [
    {
      title: "Flexible yet standardized",
      desc: "Build custom workflows with a no-code interface while maintaining org-wide consistency.",
      Icon: Layers,
      fg: "from-pink-500 to-rose-600",
      bg: "bg-pink-600",
    },
    {
      title: "Products teams love",
      desc: "Help your entire organisation adopt tools they actually enjoy using every day.",
      Icon: Heart,
      fg: "from-indigo-500 to-indigo-700",
      bg: "bg-indigo-600",
    },
    {
      title: "Global Scale",
      desc: "Deploy elite remote workforces across timezones without losing operational control.",
      Icon: Globe,
      fg: "from-emerald-500 to-emerald-700",
      bg: "bg-emerald-600",
    },
    {
      title: "Precision Execution",
      desc: "Combining elite training with systematic reliability that businesses depend on.",
      Icon: Zap,
      fg: "from-violet-500 to-violet-700",
      bg: "bg-violet-600",
    },
  ];

  return (
    <section
      ref={secRef}
      className="py-20 sm:py-32 bg-slate-50 overflow-hidden relative"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={vFadeLeft}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 tracking-tight mb-6">
            Discover the <span className="font-bold">AJAX Global</span>{" "}
            Advantage
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-red-500" />
            <p className="text-xl font-bold text-red-500 uppercase tracking-wider">
              Empowering your business to thrive globally.
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="adv-card group h-[350px] [perspective:1000px]"
              style={{ opacity: 0 }}
            >
              <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${c.fg} rounded-[2rem] p-8 flex flex-col justify-between [backface-visibility:hidden] shadow-xl`}
                >
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <c.Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {c.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-white/70 text-xs font-bold">
                      HOVER TO LEARN <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute inset-0 ${c.bg} rounded-[2rem] p-8 flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl`}
                >
                  <c.Icon className="w-10 h-10 text-white/30 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">
                    {c.title}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {c.desc}
                  </p>
                  <button className="mt-8 px-5 py-2 bg-white text-slate-900 rounded-full text-sm font-bold hover:bg-slate-100 transition-colors w-fit">
                    Explore Solution
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   §8  TEAM IMPACT  (black bg — preserve exactly, add GSAP list slide-in)
════════════════════════════════════════════════════════════════════ */
export function TeamImpact() {
  const secRef = useRef<HTMLElement>(null);
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    let ctx: any;
    (async () => {
      try {
        const g = await import("gsap");
        const { ScrollTrigger: ST } = await import("gsap/ScrollTrigger");
        g.gsap.registerPlugin(ST);
        ctx = g.gsap.context(() => {
          g.gsap.fromTo(
            ".impact-item",
            { opacity: 0, x: -45 },
            {
              opacity: 1,
              x: 0,
              duration: 0.58,
              ease: "power3.out",
              stagger: 0.11,
              scrollTrigger: { trigger: secRef.current, start: "top 65%" },
            },
          );
        }, secRef);
      } catch (_) {}
    })();
    return () => ctx?.revert();
  }, []);

  const features = [
    { Icon: TrendingUp, title: "Predict Risk Early", color: "text-yellow-400" },
    { Icon: BarChart3, title: "Boost Sales Velocity", color: "text-blue-400" },
    { Icon: Zap, title: "Scale Marketing Output", color: "text-cyan-400" },
    {
      Icon: CheckCircle2,
      title: "Resolve Tickets Faster",
      color: "text-purple-400",
    },
    { Icon: Code2, title: "Drive Quality Sprints", color: "text-green-400" },
  ];

  return (
    <section
      ref={secRef}
      className="py-20 sm:py-32 bg-black relative overflow-hidden"
    >
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full blur-md opacity-70"
        style={{ background: "linear-gradient(to br,#facc15,#ec4899,#a855f7)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={vFadeUp}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="text-center space-y-3 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
            <span className="block">Your teams' impact.</span>
            <span className="block">
              Multiplied by{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                AI.
              </span>
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Learn more about AJAX Global AI offering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="impact-item flex items-center gap-4 group cursor-pointer"
                style={{ opacity: 0, transition: "transform .3s" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.transform =
                    "translateX(8px)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.transform =
                    "translateX(0)")
                }
              >
                <f.Icon className={`${f.color} w-6 h-6 shrink-0`} />
                <span className="text-xl sm:text-2xl font-light text-white group-hover:text-slate-200 transition-colors">
                  {f.title}
                </span>
              </div>
            ))}
          </div>

          <motion.div
            variants={vFadeRight}
            initial="hidden"
            animate={iv ? "show" : "hidden"}
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-xs uppercase tracking-widest">
                    AJAX WORK MANAGEMENT
                  </span>
                  <span className="text-slate-500 text-xs">2025 Q4</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      label: "Risk analyzer",
                      color: "text-blue-400",
                      bdr: "hover:border-blue-500",
                    },
                    {
                      label: "Spot project risks",
                      color: "text-rose-400",
                      bdr: "hover:border-red-500",
                    },
                    {
                      label: "AI risk insights",
                      color: "text-purple-400",
                      bdr: "hover:border-purple-500",
                      full: true,
                    },
                    {
                      label: "AI risk mitigation",
                      color: "text-pink-400",
                      bdr: "hover:border-pink-500",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`bg-slate-800 rounded-lg p-4 border border-slate-700 ${item.bdr} transition-colors duration-300 ${item.full ? "col-span-2" : ""}`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`w-2 h-2 rounded-full ${item.color.replace("text-", "bg-")}`}
                        />
                        <span className={`text-xs font-semibold ${item.color}`}>
                          {item.label}
                        </span>
                      </div>
                      <div
                        className={`h-2 rounded-full ${item.color.replace("text-", "bg-")} opacity-30`}
                        style={{ width: `${55 + i * 12}%` }}
                      />
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

/* ════════════════════════════════════════════════════════════════════
   §9  TRUST AWARDS  (preserve 3-card coloured layout + motion exactly)
════════════════════════════════════════════════════════════════════ */
export function TrustAwards() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });
  const cards = [
    {
      title: "Gartner.",
      desc: "The only Leader in 3 Work Management Gartner® Magic Quadrant™ reports.",
      bg: "bg-[#9CB0FC]",
    },
    {
      isG2: true,
      desc: "Leader in the G2 Enterprise Grid® Report Spring 2025",
      bg: "bg-[#FFD700]",
    },
    {
      title: "FORRESTER",
      desc: "Motorola achieved 346% ROI according to Forrester's Total Economic Impact™ research.",
      bg: "bg-[#36C77C]",
    },
  ];
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={vFadeUp}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          ref={ref}
          className="text-4xl md:text-5xl font-semibold text-center text-slate-900 mb-12"
        >
          A leader you can trust
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={iv ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10 }}
              className={`${c.bg} text-gray-900 rounded-[2.5rem] p-10 flex flex-col items-center text-center min-h-[420px] shadow-sm transition-all duration-300`}
            >
              <div className="h-28 flex items-center justify-center w-full">
                {c.isG2 ? (
                  <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-3xl">
                      G<sub className="text-sm">2</sub>
                    </span>
                  </div>
                ) : (
                  <h3 className="text-3xl font-black tracking-tighter uppercase italic">
                    {c.title}
                  </h3>
                )}
              </div>
              <div className="flex-grow flex items-center">
                <p className="text-xl md:text-2xl leading-snug font-medium px-2">
                  {c.desc}
                </p>
              </div>
              <div className="mt-6">
                {c.isG2 ? (
                  <div className="w-11 h-11 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      G<sub className="text-xs">2</sub>
                    </span>
                  </div>
                ) : (
                  <button className="text-base font-bold hover:underline underline-offset-4">
                    Learn more
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   §10  AI PLATFORM CTA  (black neon border — preserve, add animated gradient border)
════════════════════════════════════════════════════════════════════ */
export function AIPlatformCTA() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="relative bg-black rounded-3xl overflow-hidden py-20 sm:py-32">
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: "linear-gradient(135deg,#06b6d4,#6366f1,#ec4899)",
            opacity: 0.75,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            padding: "2px",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-[2px] bg-black rounded-3xl pointer-events-none" />

        <motion.div
          ref={ref}
          variants={vStagger}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8"
        >
          <motion.div
            variants={vFadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            The AI work platform
          </motion.div>
          <motion.h2
            variants={vFadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white"
          >
            The AI work platform your team will{" "}
            <span
              className="font-extrabold text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg,#06b6d4,#6366f1,#ec4899)",
              }}
            >
              love to use
            </span>
          </motion.h2>
          <motion.div
            variants={vFadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Mag>
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-slate-100 text-black rounded-full px-10 h-14 text-lg font-bold shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  GET STARTED{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Mag>
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-slate-100 text-black rounded-full px-10 h-14 text-lg font-bold transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">CONTACT SALES</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   §11  WHY AJAX GLOBAL  (preserve 4-card grid)
════════════════════════════════════════════════════════════════════ */
export function WhyAjaxGlobal() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });
  const vals = [
    {
      Icon: Zap,
      title: "Engineered Human Performance",
      desc: "Rigorous training ensures your teams deliver excellence every single day.",
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      Icon: Target,
      title: "Intelligence-Led Operations",
      desc: "Data-driven insights and AI-powered intelligence guide every decision.",
      color: "bg-violet-50 text-violet-600",
    },
    {
      Icon: TrendingUp,
      title: "Scalable Teams",
      desc: "Grow from startup to enterprise — our flexible model scales with your ambitions.",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      Icon: Globe,
      title: "Global Delivery Model",
      desc: "Access elite talent worldwide with 24/7 support and seamless timezone coverage.",
      color: "bg-sky-50 text-sky-600",
    },
  ];
  return (
    <section className="py-20 sm:py-32 bg-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={vFadeUp}
          initial="hidden"
          animate={iv ? "show" : "hidden"}
          className="text-center space-y-3 mb-14"
        >
          <h2 className="text-3xl sm:text-5xl font-light text-slate-900">
            Why{" "}
            <span className="font-extrabold text-indigo-600">AJAX Global</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Engineered for excellence, built for scale
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {vals.map((v, i) => (
            <motion.div
              key={i}
              variants={vPop}
              custom={i}
              initial="hidden"
              animate={iv ? "show" : "hidden"}
              className="group rounded-2xl p-7 bg-white border border-slate-300 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
              whileHover={{ y: -6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4">
                <div
                  className={`inline-flex p-3 rounded-xl ${v.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <v.Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-indigo-300/40 group-hover:bg-indigo-400 scale-0 group-hover:scale-100 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   §12  INDUSTRIES USE CASES  (preserve exact layout)
════════════════════════════════════════════════════════════════════ */
// export function IndustriesUseCases() {
//   const ref = useRef(null);
//   const iv = useInView(ref, { once: true, margin: "-60px" });
//   const inds = [
//     {
//       Icon: BarChart3,
//       title: "Sales Operations",
//       pain: "Struggling with lead management and pipeline visibility?",
//       solution:
//         "Our teams streamline your sales process, manage CRM data, and accelerate deal closure.",
//       lc: "border-l-indigo-500",
//       tag: "Sales",
//       tagC: "bg-indigo-50 text-indigo-700 border-indigo-100",
//     },
//     {
//       Icon: Headphones,
//       title: "Customer Support",
//       pain: "Support tickets piling up and customer satisfaction slipping?",
//       solution:
//         "Deliver 24/7 support with trained agents who understand your product and values.",
//       lc: "border-l-emerald-500",
//       tag: "Support",
//       tagC: "bg-emerald-50 text-emerald-700 border-emerald-100",
//     },
//     {
//       Icon: Target,
//       title: "Business Operations",
//       pain: "Administrative tasks consuming resources and slowing growth?",
//       solution:
//         "Optimise workflows, manage projects, and keep operations running smoothly.",
//       lc: "border-l-violet-500",
//       tag: "Ops",
//       tagC: "bg-violet-50 text-violet-700 border-violet-100",
//     },
//     {
//       Icon: Shield,
//       title: "Back Office",
//       pain: "Data entry and processing becoming a bottleneck?",
//       solution:
//         "Scale processing power with accuracy and speed — free your team for strategic work.",
//       lc: "border-l-amber-500",
//       tag: "Back-Office",
//       tagC: "bg-amber-50 text-amber-700 border-amber-100",
//     },
//   ];
//   return (
//     <section className="py-20 sm:py-32 bg-slate-50" ref={ref}>
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={vFadeUp}
//           initial="hidden"
//           animate={iv ? "show" : "hidden"}
//           className="text-center space-y-3 mb-14"
//         >
//           <h2 className="text-3xl sm:text-5xl font-light text-slate-900">
//             Industries &{" "}
//             <span className="font-extrabold text-indigo-600">Use Cases</span>
//           </h2>
//           <p className="text-slate-500 max-w-xl mx-auto">
//             Proven expertise across diverse sectors
//           </p>
//         </motion.div>
//         <div className="grid md:grid-cols-2 gap-5">
//           {inds.map((ind, i) => (
//             <motion.div
//               key={i}
//               variants={vFadeUp}
//               custom={i % 2}
//               initial="hidden"
//               animate={iv ? "show" : "hidden"}
//               className={`group relative overflow-hidden rounded-2xl p-7 bg-white border border-l-4 ${ind.lc} border-slate-100 hover:shadow-xl transition-all duration-300`}
//               whileHover={{ y: -5 }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               <div className="relative z-10 space-y-4">
//                 <div className="flex items-start justify-between">
//                   <div className="p-3 rounded-xl bg-slate-50 group-hover:bg-indigo-50 transition-colors duration-300">
//                     <ind.Icon className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
//                   </div>
//                   <span
//                     className={`text-xs font-bold px-2.5 py-1 rounded-full border ${ind.tagC}`}
//                   >
//                     {ind.tag}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
//                   {ind.title}
//                 </h3>
//                 <div className="space-y-3">
//                   <div className="flex items-start gap-2.5">
//                     <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
//                     <p className="text-sm text-slate-500">{ind.pain}</p>
//                   </div>
//                   <div className="flex items-start gap-2.5">
//                     <CheckCircle className="mt-0.5 w-3.5 h-3.5 text-emerald-500 shrink-0" />
//                     <p className="text-sm text-slate-500">{ind.solution}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2 text-indigo-600 font-semibold pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                   <span className="text-sm">Learn more</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ════════════════════════════════════════════════════════════════════
   §13  PRIMARY CTA  (preserve exact layout + typography)
════════════════════════════════════════════════════════════════════ */
export function PrimaryCTA() {
  const ref = useRef(null);
  const iv = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section
      className="py-20 sm:py-32 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Soft indigo pulse behind headline */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse,rgba(99,102,241,0.07) 0%,transparent 70%)",
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        variants={vStagger}
        initial="hidden"
        animate={iv ? "show" : "hidden"}
        className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-12"
      >
        <motion.h2
          variants={vFadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900"
        >
          <span className="text-balance">Build Smarter Operations</span>
          <span className="block text-indigo-600 font-normal">Today</span>
        </motion.h2>
        <motion.p
          variants={vFadeUp}
          className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-500 font-normal"
        >
          Join leading organisations scaling with intelligence. Your
          transformation starts with a single conversation.
        </motion.p>
        <motion.div
          variants={vFadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Mag>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-14 text-lg font-bold group shadow-lg hover:scale-[1.04] transition-all duration-300"
              style={{
                background: `linear-gradient(135deg,${C.primary},${C.accent})`,
                color: "#fff",
                boxShadow: `0 8px 32px rgba(99,102,241,0.30)`,
              }}
            >
              <Link href="/contact" className="flex items-center gap-2">
                Book a Demo
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </Button>
          </Mag>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 h-14 text-lg font-semibold border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 bg-white text-slate-900"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
        <motion.div
          variants={vFadeUp}
          className="pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-slate-400 font-medium mb-4">
            Trusted by enterprise teams worldwide
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap opacity-40">
            {[
              "Enterprise Co.",
              "Global Ltd.",
              "Scale Inc.",
              "Future Corp.",
            ].map((c, i) => (
              <span
                key={i}
                className="text-sm font-black text-slate-700 tracking-wide"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════
   DEFAULT EXPORT — full page wrapper
   (swap individual sections or use this directly in page.tsx)
════════════════════════════════════════════════════════════════════ */
export default function AjaxHomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ServiceSelector />
      <InteractiveCategorySection />
      <ProductLifecycle />
      <TeamSupportCards />
      <BuiltForInnovators />
      <SolutionShowcase/>
      <AjaxAdvantage />
      <TeamImpact />
      <TrustAwards />
      <AIPlatformCTA />
      <WhyAjaxGlobal />
      {/* <IndustriesUseCases /> */}
      <PrimaryCTA />
    </main>
  );
}
