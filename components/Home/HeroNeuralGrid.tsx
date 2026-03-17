"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// Magnetic wrapper — stronger follow (s = strength)
// ─────────────────────────────────────────────────────────────────────────────
function Mag({ children, s = 0.55 }: { children: React.ReactNode; s?: number }) {
  const r = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 160, damping: 14 });
  const sy = useSpring(my, { stiffness: 160, damping: 14 });

  return (
    <motion.div
      ref={r}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const b = r.current?.getBoundingClientRect();
        if (!b) return;
        mx.set((e.clientX - b.left - b.width / 2) * s);
        my.set((e.clientY - b.top - b.height / 2) * s);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Animated counter
// ─────────────────────────────────────────────────────────────────────────────
function Count({ to, suf = "" }: { to: number; suf?: string }) {
  const r = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (r.current) obs.observe(r.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let s = 0;
    const step = to / (1600 / 16);
    const t = setInterval(() => {
      s = Math.min(s + step, to);
      setN(Math.round(s));
      if (s >= to) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [visible, to]);

  return <span ref={r}>{n}{suf}</span>;
}

const STATS = [
  { v: 2000, s: "+", l: "Professionals" },
  { v: 15,   s: "+", l: "Countries"     },
  { v: 99,   s: "%", l: "Uptime SLA"    },
  { v: 7,    s: "d", l: "Go-Live"       },
];

// ─────────────────────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────────────────────
export default function Hero() {
  const canvasRef      = useRef<HTMLCanvasElement>(null);
  const mouse          = useRef({ x: 0, y: 0 });
  const particles      = useRef<any[]>([]);
  const animRef        = useRef<number>();
  const [loaded,       setLoaded]       = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  // ── Canvas particle-grid ──────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cols = 22, rows = 13;
    particles.current = [];
    for (let i = 0; i < cols; i++)
      for (let j = 0; j < rows; j++) {
        particles.current.push({
          ox: (canvas.width  / (cols - 1)) * i,
          oy: (canvas.height / (rows - 1)) * j,
          x:  (canvas.width  / (cols - 1)) * i,
          y:  (canvas.height / (rows - 1)) * j,
          r:  Math.random() * 1.6 + 0.7,
          speed: Math.random() * 0.02 + 0.01,
        });
      }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouse.current;

      particles.current.forEach((p) => {
        const dx    = mx - p.ox;
        const dy    = my - p.oy;
        const dist  = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 1 - dist / 240);
        const angle = Math.atan2(dy, dx);
        const tx    = p.ox - Math.cos(angle) * force * 70;
        const ty    = p.oy - Math.sin(angle) * force * 70;
        p.x += (tx - p.x) * 0.12;
        p.y += (ty - p.y) * 0.12;

        // More visible: higher base alpha + stronger on hover
        const alpha = 0.30 + force * 0.70;
        const size  = p.r + force * 2.8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${alpha})`;
        ctx.fill();
      });

      // Connecting lines — higher base opacity
      particles.current.forEach((p, i) => {
        particles.current.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x, dy = p.y - q.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 95) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(99,102,241,${0.13 * (1 - d / 95)})`;
            ctx.lineWidth   = 0.9;
            ctx.stroke();
          }
        });
      });

      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => setTitleVisible(true), 100);
    }, 200);

    return () => {
      cancelAnimationFrame(animRef.current!);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const words = ["Your", "All-in-One", "Google", "for", "Outsourcing", "&", "AI", "Growth."];

  return (
    <section
      className="relative overflow-hidden bg-[#030712] min-h-screen flex items-center"
      onMouseMove={onMove}
    >
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(99,102,241,0.14) 0%, transparent 72%)" }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(3,7,18,0.9))" }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center py-32">

        {/* Headline — letter stagger */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.05] text-white mb-8 max-w-5xl">
          {words.map((word, wi) => (
            <span key={wi} className="inline-block mr-[0.22em] last:mr-0">
              {word.split("").map((ch, ci) => (
                <motion.span
                  key={ci}
                  className="inline-block"
                  initial={{ opacity: 0, y: 40, filter: "blur(12px)", rotateX: -40 }}
                  animate={titleVisible ? { opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 } : {}}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.3 + wi * 0.07 + ci * 0.025 }}
                >
                  {word === "&"
                    ? <span style={{ color: "#818cf8", fontWeight: 800 }}>&amp;</span>
                    : ch === " " ? "\u00a0" : ch}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="max-w-2xl text-lg text-slate-400 font-normal mb-14 leading-relaxed"
        >
          Everything your business needs to think, execute, and scale —<br />
          in one place.
        </motion.p>

        {/* ── CTAs — each button wrapped in its own strong Mag ────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.45 }}
          className="flex flex-col sm:flex-row items-center gap-5 mb-20"
        >
          {/* Primary CTA */}
          <Mag s={0.6}>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary relative inline-flex items-center gap-2 px-9 py-4 rounded-full text-base font-bold text-white overflow-hidden group"
              style={{
                boxShadow: "0 0 48px rgba(99,102,241,0.50), inset 0 1px 0 rgba(255,255,255,0.18)",
              }}
            >
              <span className="relative z-10">Request a Quote</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                →
              </motion.span>
              {/* Shimmer sweep */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)" }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 0.4 }}
              />
            </motion.a>
          </Mag>

          {/* Secondary CTA */}
          <Mag s={0.45}>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.04, borderColor: "rgba(99,102,241,0.65)", color: "#a5b4fc" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-base font-semibold text-slate-300 border transition-all duration-300"
              style={{
                borderColor: "rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(10px)",
              }}
            >
              Explore Services
            </motion.a>
          </Mag>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={titleVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto w-full"
        >
          {STATS.map((st, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={titleVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.7 + i * 0.08 }}
              whileHover={{ y: -5, borderColor: "rgba(99,102,241,0.55)" }}
              className="rounded-2xl p-4 text-center transition-all duration-300 cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="text-2xl font-extrabold" style={{ color: "#818cf8" }}>
                <Count to={st.v} suf={st.s} />
              </div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">{st.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
      >
        <span className="text-[9px] text-slate-600 font-bold tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}
        >
          <motion.div
            className="w-1 h-1.5 rounded-full"
            style={{ background: "#6366f1" }}
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}