"use client";

import { useRef, useState, useEffect } from "react";
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

// Optimized animated background component
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

      {/* Single animated gradient orb (reduced from 2) */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern - CSS only, no animation */}
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

// Optimized glow card - memoized mouse tracking
function GlowCard({ children, variant = "purple" }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    // Throttle mouse move updates
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const glowColor = variant === "purple" ? "rgba(139, 92, 246, 0.25)" : "rgba(16, 185, 129, 0.25)";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="rounded-2xl border border-white/10 overflow-hidden relative group"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
        willChange: "box-shadow",
      }}
      whileHover={{
        boxShadow: `0 24px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)`,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Optimized glow effect */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 150,
          height: 150,
          background: `radial-gradient(circle, ${glowColor}, transparent)`,
          left: mousePosition.x - 75,
          top: mousePosition.y - 75,
          filter: "blur(40px)",
          willChange: "transform",
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.6 }}
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

// Optimized feature item
function FeatureItem({ icon: Icon, label, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={featureVariants}
      className="flex items-center gap-3 group cursor-default"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ x: 8 }}
    >
      <motion.div
        className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center shrink-0 transition-colors"
        style={{ 
          background: "rgba(255,255,255,0.04)",
          willChange: "transform",
        }}
        whileHover={{
          scale: 1.08,
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-4 h-4 text-purple-300" />
        </motion.div>
      </motion.div>
      <span className="text-white/50 text-sm group-hover:text-white/80 transition-colors">
        {label}
      </span>
      <motion.div animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 0.2 }}>
        <CheckCircle className="w-4 h-4 text-emerald-400 ml-auto" />
      </motion.div>
    </motion.div>
  );
}

// Optimized counter - simpler animation
function AnimatedCounter({ target, label, emoji }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const increment = target / 40; // Reduced steps for better performance
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 40); // Slower updates

    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      className="rounded-xl p-3 text-center border border-white/[0.08] cursor-default transition-colors"
      style={{ 
        background: "rgba(255,255,255,0.05)",
        willChange: "transform",
      }}
      whileHover={{
        scale: 1.06,
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-lg font-bold text-white">
        {emoji} {count}×
      </div>
      <div className="text-[10px] text-white/30 mt-0.5">{label}</div>
    </motion.div>
  );
}

// Optimized progress bar - removed continuous animation
function ProgressBar({ label, percentage, color = "rgba(139, 92, 246, 1)" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div ref={ref} className="flex items-center gap-3">
      <span className="text-xs text-white/40 w-36 truncate">{label}</span>
      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{
            background: color,
            willChange: "width",
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: percentage } : { width: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        />
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
    <section className="py-16 sm:py-20 relative overflow-hidden " ref={ref}>
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Optimized header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity }} // Slower animation
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity }}>
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
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                  IntelliDesq™
                </span>
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
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 h-11 rounded-full font-semibold text-primary text-sm bg-white hover:shadow-lg transition-all"
                >
                  Explore IntelliDesq™
                  <ArrowRight className="w-4 h-4" />
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
                    style={{ background: "rgba(139, 92, 246, 0.2)", willChange: "transform" }}
                    animate={{
                      rotate: [0, 4, -4, 0],
                    }}
                    transition={{ duration: 6, repeat: Infinity }} // Slower rotation
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