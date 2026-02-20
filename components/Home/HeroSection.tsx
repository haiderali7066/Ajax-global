"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

/* ─── Shared Mag + Count ─── */
function Mag({ children, s = 0.28 }) {
  const r = useRef(null);
  const mx = useMotionValue(0),
    my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 18 });
  const sy = useSpring(my, { stiffness: 200, damping: 18 });
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
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

function Count({ to, suf = "" }) {
  const r = useRef(null);
  const [n, setN] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
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
  return (
    <span ref={r}>
      {n}
      {suf}
    </span>
  );
}

const STATS = [
  { v: 2000, s: "+", l: "Professionals" },
  { v: 15, s: "+", l: "Countries" },
  { v: 99, s: "%", l: "Uptime SLA" },
  { v: 7, s: "d", l: "Go-Live" },
];

/* ═══════════════════════════════════════════════════════════
   VARIATION 1 — "NEURAL GRID"
   Dark → light split. Interactive particle canvas that reacts
   to mouse. Words appear letter-by-letter with blur-in effect.
   Magnetic cursor distorts a glowing grid behind headline.
═══════════════════════════════════════════════════════════ */
function HeroV1() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const particles = useRef([]);
  const animRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  /* Canvas particles */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Build particle grid
    const cols = 18,
      rows = 10;
    particles.current = [];
    for (let i = 0; i < cols; i++)
      for (let j = 0; j < rows; j++) {
        particles.current.push({
          ox: (canvas.width / (cols - 1)) * i,
          oy: (canvas.height / (rows - 1)) * j,
          x: (canvas.width / (cols - 1)) * i,
          y: (canvas.height / (rows - 1)) * j,
          r: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.02 + 0.01,
        });
      }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouse.current;

      particles.current.forEach((p) => {
        const dx = mx - p.ox,
          dy = my - p.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 1 - dist / 220);
        const angle = Math.atan2(dy, dx);
        const tx = p.ox - Math.cos(angle) * force * 60;
        const ty = p.oy - Math.sin(angle) * force * 60;
        p.x += (tx - p.x) * 0.12;
        p.y += (ty - p.y) * 0.12;

        const alpha = 0.15 + force * 0.65;
        const size = p.r + force * 2.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      particles.current.forEach((p, i) => {
        particles.current.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x,
            dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(99,102,241,${0.06 * (1 - d / 90)})`;
            ctx.lineWidth = 0.8;
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
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const onMove = (e) => {
    const r = canvasRef.current?.getBoundingClientRect();
    if (r) mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
  };

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
      className="relative overflow-hidden bg-[#030712] min-h-screen flex items-center"
      onMouseMove={onMove}
      style={{ fontFamily: "'system-ui', sans-serif" }}
    >
      {/* Canvas bg */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
      />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(3,7,18,0.9))",
        }}
      />

      {/* Top subtle line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={loaded ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-12 cursor-default"
          style={{
            borderColor: "rgba(99,102,241,0.3)",
            background: "rgba(99,102,241,0.08)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-slate-300 tracking-wide">
            AI Solutions — Live & Operational
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

        {/* Headline — letter stagger */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.05] text-white mb-8 max-w-5xl">
          {words.map((word, wi) => (
            <span key={wi} className="inline-block mr-[0.22em] last:mr-0">
              {word.split("").map((ch, ci) => (
                <motion.span
                  key={ci}
                  className="inline-block"
                  style={{ display: "inline-block" }}
                  initial={{
                    opacity: 0,
                    y: 40,
                    filter: "blur(12px)",
                    rotateX: -40,
                  }}
                  animate={
                    titleVisible
                      ? { opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }
                      : {}
                  }
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.3 + wi * 0.07 + ci * 0.025,
                  }}
                >
                  {word === "&" ? (
                    <span style={{ color: "#818cf8", fontWeight: 800 }}>
                      &amp;
                    </span>
                  ) : ch === " " ? (
                    "\u00a0"
                  ) : (
                    ch
                  )}
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
          className="max-w-2xl text-lg text-slate-400 font-normal mb-12 leading-relaxed"
        >
          Everything your business needs to think, execute, and scale —<br />
          in one place.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <Mag>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-8 py-4 rounded-full text-base font-bold text-white overflow-hidden flex items-center gap-2 group"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow:
                  "0 0 40px rgba(99,102,241,0.45), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <span className="relative z-10">Request a Quote</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                →
              </motion.span>
              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
                }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
            </motion.a>
          </Mag>
          <motion.a
            href="/services"
            whileHover={{ scale: 1.03, borderColor: "rgba(99,102,241,0.6)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full text-base font-semibold text-slate-300 border flex items-center gap-2 transition-all duration-300"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(8px)",
            }}
          >
            Explore Services
          </motion.a>
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
              whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.5)" }}
              className="rounded-2xl p-4 text-center transition-all duration-300 cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="text-2xl font-extrabold"
                style={{ color: "#818cf8" }}
              >
                <Count to={st.v} suf={st.s} />
              </div>
              <div className="text-xs text-slate-500 mt-0.5 font-medium">
                {st.l}
              </div>
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
        <span className="text-[9px] text-slate-600 font-bold tracking-[0.2em] uppercase">
          Scroll
        </span>
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

/* ═══════════════════════════════════════════════════════════
   VARIATION 2 — "MAGNETIC SPLIT"
   White clean bg. Headline splits in half — left half slides 
   from left, right half from right, meets in center with snap.
   On hover: individual words repel from cursor like magnets.
   Live ticker of services scrolls beneath headline.
   Morphing blob sits behind CTA button.
═══════════════════════════════════════════════════════════ */
function HeroV2() {
  const [ready, setReady] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const [hoveredWord, setHoveredWord] = useState(null);
  const blobRef = useRef(null);
  const tickerItems = [
    "Customer Service",
    "AI Chat Agents",
    "Lead Generation",
    "Property Management",
    "IntelliDesq™",
    "Scheduling & Dispatch",
    "Virtual Assistants",
    "IT & Cybersecurity",
    "Sales Teams",
    "SEO & Social Media",
  ];

  useEffect(() => {
    setTimeout(() => setReady(true), 100);
  }, []);

  const onMouseMove = useCallback((e) => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    setMousePos({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  const leftWords = ["Your", "All-in-One"];
  const rightWords = ["for", "Outsourcing"];
  const bottomWords = ["&", "AI", "Growth."];

  return (
    <section
      ref={heroRef}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden bg-white min-h-screen flex items-center"
      style={{ fontFamily: "'system-ui', sans-serif" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(99,102,241,0.11) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Cursor glow that follows mouse */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          x: mousePos.x - 200,
          y: mousePos.y - 200,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 25 }}
      />

      {/* Morphing blob behind hero */}
      <motion.div
        className="absolute pointer-events-none opacity-60"
        style={{ top: "8%", right: "-5%", width: 520, height: 520 }}
        animate={{
          borderRadius: [
            "60% 40% 70% 30% / 50% 60% 40% 50%",
            "40% 60% 30% 70% / 60% 40% 60% 40%",
            "70% 30% 50% 50% / 40% 70% 30% 60%",
            "60% 40% 70% 30% / 50% 60% 40% 50%",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.07), rgba(139,92,246,0.07))",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-12 hover:border-indigo-300 transition-colors duration-300"
        >
          <span className="text-sm font-medium text-slate-700">
            AI Solutions
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </motion.div>

        {/* Headline with split-slide-in + word-magnet hover */}
        <div className="mb-6">
          {/* Line 1 — split from edges */}
          <div className="flex flex-wrap gap-x-[0.22em] mb-1">
            {leftWords.map((w, i) => (
              <motion.span
                key={i}
                className="inline-block text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-slate-900 cursor-default"
                initial={{ opacity: 0, x: -80 }}
                animate={ready ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
                whileHover={{
                  color: "#6366f1",
                  scale: 1.04,
                  transition: { duration: 0.15 },
                }}
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              className="inline-block text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-slate-900 cursor-default"
              initial={{ opacity: 0, x: 80 }}
              animate={ready ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              whileHover={{
                color: "#6366f1",
                scale: 1.04,
                transition: { duration: 0.15 },
              }}
            >
              Google
            </motion.span>
          </div>
          {/* Line 2 */}
          <div className="flex flex-wrap gap-x-[0.22em] mb-1">
            {rightWords.map((w, i) => (
              <motion.span
                key={i}
                className="inline-block text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-slate-900 cursor-default"
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                animate={ready ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2 + i * 0.1,
                }}
                whileHover={{
                  color: "#6366f1",
                  scale: 1.04,
                  transition: { duration: 0.15 },
                }}
              >
                {w}
              </motion.span>
            ))}
          </div>
          {/* Line 3 */}
          <div className="flex flex-wrap gap-x-[0.22em]">
            {bottomWords.map((w, i) => (
              <motion.span
                key={i}
                className="inline-block text-5xl sm:text-6xl md:text-7xl tracking-tight cursor-default"
                style={{
                  fontWeight: w === "&" || w === "Growth." ? 800 : 300,
                  color:
                    w === "&"
                      ? "#6366f1"
                      : w === "Growth."
                        ? "#6366f1"
                        : "#0f172a",
                }}
                initial={{ opacity: 0, y: 60 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.4 + i * 0.1,
                }}
                whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
              >
                {w === "&" ? "& " : w}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Scrolling ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="relative overflow-hidden mb-10 py-2 border-y border-slate-100"
        >
          <div
            className="flex w-max"
            style={{ animation: "tickerScroll 22s linear infinite" }}
          >
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-5 text-sm font-semibold text-slate-400 whitespace-nowrap"
              >
                <span className="w-1 h-1 rounded-full bg-indigo-400" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end gap-12">
          {/* Left: sub + CTA */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-xl text-slate-500 font-normal mb-8 max-w-md leading-relaxed"
            >
              Everything your business needs to think, execute, and scale — in
              one place.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.15 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <Mag>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    boxShadow: "0 8px 32px rgba(99,102,241,0.35)",
                  }}
                >
                  Request a Quote
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </Mag>
              <span className="text-sm text-slate-400">
                24/7 · Dedicated Teams · Security-First
              </span>
            </motion.div>
          </div>

          {/* Right: stats vertical */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={ready ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:flex sm:flex-col sm:gap-3"
          >
            {STATS.map((st, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6, borderColor: "#6366f1" }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-100 bg-white shadow-sm cursor-default min-w-[130px]"
              >
                <div className="text-xl font-extrabold text-indigo-600">
                  <Count to={st.v} suf={st.s} />
                </div>
                <div className="text-xs text-slate-400 font-medium">{st.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`@keyframes tickerScroll { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }`}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   VARIATION 3 — "COMMAND CENTER"
   Premium dark/charcoal. Cinematic entrance: curtain wipe
   reveals headline. Animated SVG circuit lines pulse around
   the section. Counter cards flip like an airport board.
   Mouse parallax shifts floating service tags in 3D space.
   Gradient orbs move in slow vortex. Typewriter sub-headline.
═══════════════════════════════════════════════════════════ */
function HeroV3() {
  const [phase, setPhase] = useState(0); // 0=curtain, 1=headline, 2=full
  const [typeText, setTypeText] = useState("");
  const [cardFlipped, setCardFlipped] = useState([false, false, false, false]);
  const sectionRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const fullSub =
    "Everything your business needs to think, execute, and scale — in one place.";

  const tags = [
    "Customer Service",
    "AI Voice Agents",
    "Lead Gen",
    "IntelliDesq™",
    "MSP & IT",
    "Social Media",
    "Scheduling",
    "Cybersecurity",
  ];

  useEffect(() => {
    // Sequence
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 1100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Typewriter
  useEffect(() => {
    if (phase < 2) return;
    let i = 0;
    const t = setInterval(() => {
      setTypeText(fullSub.slice(0, i + 1));
      i++;
      if (i >= fullSub.length) clearInterval(t);
    }, 22);
    return () => clearInterval(t);
  }, [phase]);

  // Card flip sequence
  useEffect(() => {
    if (phase < 2) return;
    STATS.forEach((_, i) => {
      setTimeout(
        () =>
          setCardFlipped((prev) => {
            const n = [...prev];
            n[i] = true;
            return n;
          }),
        1400 + i * 180,
      );
    });
  }, [phase]);

  // Mouse parallax
  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const nx = (e.clientX / w - 0.5) * 2;
      const ny = (e.clientY / h - 0.5) * 2;
      mouseRef.current = { x: nx, y: ny };
    };
    let raf;
    const loop = () => {
      const { x, y } = mouseRef.current;
      setParallax((p) => ({
        x: p.x + (x - p.x) * 0.05,
        y: p.y + (y - p.y) * 0.05,
      }));
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
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
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{
        background:
          "linear-gradient(160deg, #0a0a14 0%, #080c1a 40%, #0c0a14 100%)",
        fontFamily: "'system-ui', sans-serif",
      }}
    >
      {/* Animated SVG circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="lg2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Horizontal pulses */}
        {[15, 38, 62, 82].map((y, i) => (
          <motion.line
            key={i}
            x1="0"
            y1={`${y}%`}
            x2="100%"
            y2={`${y}%`}
            stroke="url(#lg1)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: i * 0.3, ease: "easeInOut" }}
          />
        ))}
        {/* Vertical pulses */}
        {[10, 35, 65, 88].map((x, i) => (
          <motion.line
            key={i}
            x1={`${x}%`}
            y1="0"
            x2={`${x}%`}
            y2="100%"
            stroke="url(#lg2)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 + i * 0.25 }}
          />
        ))}
      </svg>

      {/* Vortex orbs */}
      {[
        {
          size: 600,
          x: "65%",
          y: "25%",
          color: "rgba(99,102,241,0.07)",
          dur: 18,
        },
        {
          size: 400,
          x: "10%",
          y: "70%",
          color: "rgba(139,92,246,0.05)",
          dur: 24,
        },
        {
          size: 300,
          x: "80%",
          y: "75%",
          color: "rgba(99,102,241,0.04)",
          dur: 15,
        },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            transform: "translate(-50%,-50%)",
          }}
          animate={{
            x: [0, 30, -20, 30, 0],
            y: [0, -25, 15, -10, 0],
            scale: [1, 1.05, 0.97, 1.03, 1],
          }}
          transition={{
            duration: orb.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Parallax floating tags */}
      {tags.map((tag, i) => {
        const positions = [
          { top: "12%", left: "4%" },
          { top: "18%", right: "3%" },
          { top: "72%", left: "3%" },
          { top: "78%", right: "4%" },
          { top: "42%", left: "1%" },
          { top: "55%", right: "2%" },
          { top: "30%", left: "5%" },
          { top: "65%", right: "3%" },
        ];
        const pos = positions[i];
        const depth = 0.8 + (i % 3) * 0.4;
        return (
          <motion.div
            key={i}
            className="absolute hidden lg:block pointer-events-none"
            style={{
              ...pos,
              x: parallax.x * -18 * depth,
              y: parallax.y * -12 * depth,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={phase >= 2 ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.6 + i * 0.1, duration: 0.5 }}
          >
            <div
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-400 border"
              style={{
                borderColor: "rgba(99,102,241,0.2)",
                background: "rgba(99,102,241,0.06)",
                backdropFilter: "blur(6px)",
                whiteSpace: "nowrap",
              }}
            >
              {tag}
            </div>
          </motion.div>
        );
      })}

      {/* Curtain reveal overlay */}
      <AnimatePresence>
        {phase === 0 && (
          <motion.div
            className="absolute inset-0 z-50"
            style={{ background: "#0a0a14" }}
            exit={{ clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"] }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))",
            border: "1px solid rgba(99,102,241,0.25)",
            backdropFilter: "blur(10px)",
          }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-emerald-400"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-sm font-semibold text-slate-200 tracking-widest uppercase">
            AI Solutions · Live
          </span>
          <motion.span
            className="w-2 h-2 rounded-full bg-emerald-400"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
          />
        </motion.div>

        {/* Headline — reveal per word with brightness sweep */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.05] text-white mb-8 max-w-5xl mx-auto">
          {words.map((w, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.22em] last:mr-0"
              initial={{ opacity: 0, y: 50, filter: "brightness(3)" }}
              animate={
                phase >= 1 ? { opacity: 1, y: 0, filter: "brightness(1)" } : {}
              }
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1 + i * 0.09,
              }}
              style={{
                fontWeight: w === "&" || w === "Growth." ? 800 : 300,
                color: w === "&" || w === "Growth." ? "#818cf8" : "white",
              }}
            >
              {w === "&" ? "&" : w}
            </motion.span>
          ))}
        </h1>

        {/* Typewriter sub */}
        <div className="max-w-2xl mx-auto mb-12 min-h-[3.5rem]">
          <p className="text-lg sm:text-xl text-slate-400 font-normal leading-relaxed">
            {typeText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              |
            </motion.span>
          </p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Mag>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-bold text-white overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                boxShadow:
                  "0 0 50px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <span className="relative z-10">Request a Quote</span>
              <motion.span
                className="relative z-10 text-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                →
              </motion.span>
              {/* Glow pulse */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,0.12), transparent 60%)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </Mag>
          <motion.a
            href="/services"
            whileHover={{
              borderColor: "rgba(99,102,241,0.5)",
              color: "#818cf8",
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.6)",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(8px)",
            }}
          >
            Explore Services
          </motion.a>
        </motion.div>

        {/* Stats — flip-board style */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {STATS.map((st, i) => (
            <div
              key={i}
              className="relative h-24 cursor-default"
              style={{ perspective: "400px" }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(8px)",
                  transformStyle: "preserve-3d",
                }}
                animate={
                  cardFlipped[i]
                    ? { rotateX: [45, 0], opacity: [0.3, 1] }
                    : { rotateX: -90 }
                }
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <div
                  className="text-2xl font-extrabold"
                  style={{ color: "#818cf8" }}
                >
                  <Count to={st.v} suf={st.s} />
                </div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">
                  {st.l}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)",
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={phase >= 2 ? { opacity: 1 } : {}}
        transition={{ delay: 2.0 }}
      >
        <motion.div
          className="w-px h-12"
          style={{
            background:
              "linear-gradient(to bottom, rgba(99,102,241,0.8), transparent)",
          }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[9px] text-slate-600 font-bold tracking-[0.2em] uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   ROOT PREVIEW — Switch between variations
═══════════════════════════════════════════════════════════ */
export default function HeroVariants() {
  const [active, setActive] = useState(1);
  const [key, setKey] = useState(0);

  const switchTo = (n) => {
    setActive(n);
    setKey((k) => k + 1);
  };

  return (
    <div style={{ fontFamily: "'system-ui', sans-serif" }}>
      {/* Switcher */}
      <div
        className="fixed top-25 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-2 px-4 py-2 rounded-full shadow-2xl"
        style={{
          background: "rgba(15,15,25,0.92)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(16px)",
        }}
      >
        <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mr-1">
          Variant
        </span>
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            onClick={() => switchTo(n)}
            className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300"
            style={{
              background:
                active === n
                  ? "linear-gradient(135deg,#6366f1,#8b5cf6)"
                  : "rgba(255,255,255,0.05)",
              color: active === n ? "#fff" : "rgba(255,255,255,0.45)",
              boxShadow:
                active === n ? "0 4px 16px rgba(99,102,241,0.4)" : "none",
            }}
          >
            {n === 1
              ? "Neural Grid"
              : n === 2
                ? "Magnetic Split"
                : "Command Center"}
          </button>
        ))}
      </div>

      {/* Active variant */}
      <div key={key}>
        {active === 1 && <HeroV1 />}
        {active === 2 && <HeroV2 />}
        {active === 3 && <HeroV3 />}
      </div>
    </div>
  );
}
