"use client";

import { useRef, useState , useEffect  } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Cpu, Brain, Shield, Clock, Layers, CheckCircle, ArrowRight, Zap } from "lucide-react";

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const featureVariants = {
  hidden: { opacity: 0, x: -20, y: 10 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.4 + i * 0.08,
    },
  }),
};

// Animated background component
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Tilted split background */}
      <div
        className="absolute inset-0"
        style={{
          background: "#022c22",
          clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        
        style={{
          background: "#1a1a2e",
          clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)",
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.15, 0.95, 1.1, 1],
          x: [0, 30, -20, 10, 0],
          y: [0, -30, 20, -10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 0.9, 1.2, 0.95, 1],
          x: [0, -40, 25, -15, 0],
          y: [0, 40, -25, 15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Animated gradient mesh overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3">
              <animate attributeName="stopOpacity" values="0.3;0.6;0.3" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2">
              <animate attributeName="stopOpacity" values="0.2;0.4;0.2" dur="6s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" />
      </svg>

      {/* Animated dot grid */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}

// Glow effect component
function GlowCard({ children, variant = "purple" }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowColor = variant === "purple" ? "rgba(139, 92, 246, 0.3)" : "rgba(16, 185, 129, 0.3)";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="rounded-2xl border border-white/10 overflow-hidden relative group"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
      whileHover={{
        boxShadow: `0 24px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 40px ${glowColor}`,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 200,
          height: 200,
          background: `radial-gradient(circle, ${glowColor}, transparent)`,
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          filter: "blur(40px)",
          opacity: 0,
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.8 }}
        transition={{ duration: 0.3 }}
      />

      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          background:
            variant === "purple"
              ? "linear-gradient(90deg,transparent,rgba(167,139,250,0.6),rgba(96,165,250,0.6),transparent)"
              : "linear-gradient(90deg,transparent,rgba(52,211,153,0.6),rgba(45,212,191,0.5),transparent)",
        }}
      />

      {children}
    </motion.div>
  );
}

// Animated feature item
function FeatureItem({ icon: Icon, label, delay, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={featureVariants}
      className="flex items-center gap-3 group cursor-default"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ x: 12 }}
    >
      <motion.div
        className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center shrink-0"
        style={{ background: "rgba(255,255,255,0.04)" }}
        whileHover={{
          borderColor: "rgba(167, 139, 250, 0.4)",
          background: "rgba(139, 92, 246, 0.15)",
          scale: 1.1,
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          animate={isHovered ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-4 h-4 text-purple-300" />
        </motion.div>
      </motion.div>
      <motion.span
        className="text-white/50 text-sm"
        animate={isHovered ? { color: "rgba(255,255,255,0.9)" } : { color: "rgba(255,255,255,0.5)" }}
      >
        {label}
      </motion.span>
      <motion.div animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }} transition={{ duration: 0.2 }}>
        <CheckCircle className="w-4 h-4 text-emerald-400 ml-auto" />
      </motion.div>
    </motion.div>
  );
}

// Animated counter
function AnimatedCounter({ target, label, emoji }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

useEffect(() => {    if (!inView) return;

    let current = 0;
    const increment = target / 50;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      className="rounded-xl p-3 text-center border border-white/[0.08] cursor-default"
      style={{ background: "rgba(255,255,255,0.05)" }}
      whileHover={{
        scale: 1.08,
        background: "rgba(139, 92, 246, 0.2)",
        borderColor: "rgba(167, 139, 250, 0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="text-lg font-bold text-white" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.4 }}>
        {emoji} {count}×
      </motion.div>
      <div className="text-[10px] text-white/30 mt-0.5">{label}</div>
    </motion.div>
  );
}

// Animated progress bar
function ProgressBar({ label, percentage, color = "rgba(139, 92, 246, 1)" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div ref={ref} className="flex items-center gap-3">
      <span className="text-xs text-white/40 w-36 truncate">{label}</span>
      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
        <motion.div
          className="h-full rounded-full relative"
          style={{
            background: color,
            backgroundImage:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: percentage } : { width: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              backgroundPosition: ["0px 0px", "20px 0px"],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              backgroundSize: "20px 100%",
            }}
          />
        </motion.div>
      </div>
      <span className="text-xs text-white/40 w-8 text-right font-semibold">{percentage}</span>
    </motion.div>
  );
}

export default function HOSIntelliDesqSection() {
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
    <section className="py-16 sm:py-20 relative overflow-hidden" ref={ref}>
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
              <Zap className="w-3 h-3 text-purple-300" />
            </motion.div>
            <span className="text-xs text-white/70">Powered by IntelliDesq™</span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={slideLeft} initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-8">
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-light text-white leading-tight" style={{ letterSpacing: "-0.02em" }}>
                HOS +{" "}
                <motion.span
                  className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300"
                  animate={{
                    backgroundPosition: ["0%", "200%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  IntelliDesq™
                </motion.span>
              </h2>
              <motion.p
                className="text-white/50 font-light leading-relaxed mt-4"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Our HOS teams are supercharged by IntelliDesq™ — giving your teams{" "}
                <span className="text-white/80">real-time insights</span>, predictive analytics, and data-driven decision-making that traditional outsourcing can't match.
              </motion.p>
            </motion.div>

            <motion.div className="space-y-3">
              {features.map((f, i) => (
                <FeatureItem key={i} icon={f.icon} label={f.label} index={i} />
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }}>
              <Link href="/intellidesq">
                <motion.button
                  whileHover={{ scale: 1.05, gap: 12 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 h-11 rounded-full font-semibold text-primary text-sm bg-white hover:shadow-lg transition-all"
                >
                  Explore IntelliDesq™
                  <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden" animate={inView ? "show" : "hidden"}>
            <GlowCard variant="purple">
              <div className="p-8">
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    className="inline-flex w-20 h-20 rounded-2xl items-center justify-center text-4xl mb-4 border border-white/10"
                    style={{ background: "rgba(139, 92, 246, 0.2)" }}
                    animate={{
                      rotate: [0, 4, -4, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    🧠
                  </motion.div>
                  <motion.h3 className="text-xl font-semibold text-white" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
                    AI-Powered Intelligence
                  </motion.h3>
                  <motion.p className="text-white/35 text-sm mt-1" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
                    Real-time insights & intelligent automation
                  </motion.p>
                </motion.div>

                <motion.div className="grid grid-cols-3 gap-3 mb-6" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
                  <AnimatedCounter target={10} label="Faster Decisions" emoji="⚡" />
                  <AnimatedCounter target={40} label="Cost Reduction" emoji="💰" />
                  <AnimatedCounter target={98} label="Accuracy Rate" emoji="✓" />
                </motion.div>

                <motion.div className="space-y-2.5" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
                  <ProgressBar label="Decision Engine" percentage="92%" color="linear-gradient(90deg, #7c3aed, #8b5cf6)" />
                  <ProgressBar label="Workflow AI" percentage="87%" color="linear-gradient(90deg, #06b6d4, #0891b2)" />
                  <ProgressBar label="Compliance Monitor" percentage="99%" color="linear-gradient(90deg, #10b981, #059669)" />
                </motion.div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}