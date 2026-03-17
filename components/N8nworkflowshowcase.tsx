"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const SLIDES = [
  {
    src: "/wflow-section/1.jpeg",
    tag: "AI Lead Intelligence",
    title: "AJAX captures every lead\nautomatically",
    desc: "IntelliDesq™ routes leads from every channel into your CRM the instant they arrive — zero manual entry, zero missed opportunities, 24/7.",
    accent: "#a855f7",
    dark: "#6d28d9",
  },
  {
    src: "/wflow-section/2.jpeg",
    tag: "Data Enrichment",
    title: "AJAX enriches records\nbefore they land",
    desc: "Firmographic, behavioural, and intent data is appended to every lead record before your team ever opens the CRM.",
    accent: "#6366f1",
    dark: "#3730a3",
  },
  {
    src: "/wflow-section/3.jpeg",
    tag: "Smart Notifications",
    title: "AJAX alerts the right\nperson instantly",
    desc: "Real-time Slack, email, and SMS triggers fire the moment a critical workflow event occurs — no delay, no dropped ball.",
    accent: "#ec4899",
    dark: "#9d174d",
  },
  {
    src: "/wflow-section/4.jpeg",
    tag: "Automated Reporting",
    title: "AJAX delivers reports\nwithout effort",
    desc: "Polished performance reports built and distributed on any cadence — daily, weekly, monthly — fully automated by IntelliDesq™.",
    accent: "#f59e0b",
    dark: "#92400e",
  },
  {
    src: "/wflow-section/5.jpeg",
    tag: "AI Triage Engine",
    title: "AJAX thinks and\nprioritises for you",
    desc: "IntelliDesq™ classifies, scores, and assigns tickets automatically — so your human team stays focused on high-value decisions.",
    accent: "#10b981",
    dark: "#065f46",
  },
  {
    src: "/wflow-section/6.jpeg",
    tag: "Order & Inventory Sync",
    title: "AJAX keeps every\nplatform in sync",
    desc: "Inventory, fulfilment, and customer records stay perfectly consistent across every sales channel your business operates.",
    accent: "#06b6d4",
    dark: "#164e63",
  },
  {
    src: "/wflow-section/7.jpeg",
    tag: "Approval Workflows",
    title: "AJAX moves decisions\nwithout bottlenecks",
    desc: "Smart routing sends approvals to exactly the right people with built-in escalation when things stall — zero manual chasing.",
    accent: "#84cc16",
    dark: "#3f6212",
  },
  {
    src: "/wflow-section/8.jpeg",
    tag: "Live Analytics",
    title: "AJAX gives you full\nvisibility, live",
    desc: "Monitor workflow health, error rates, and throughput in real time — iterate with total confidence backed by IntelliDesq™ data.",
    accent: "#f97316",
    dark: "#9a3412",
  },
];

const SLIDE_DURATION = 4800;
const OUT_MS = 320;
const IN_MS = 500;

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function WorkflowShowcase() {
  const [idx, setIdx] = useState(0);
  const [showing, setShowing] = useState(true);
  const [progress, setProgress] = useState(0);
  const [locked, setLocked] = useState(false);

  const rafRef = useRef<number>();
  const tmRef  = useRef<ReturnType<typeof setTimeout>>();
  const t0Ref  = useRef(0);

  function stop() {
    cancelAnimationFrame(rafRef.current!);
    clearTimeout(tmRef.current);
  }

  const goTo = useCallback((next: number) => {
    if (locked) return;
    stop();
    setLocked(true);
    setShowing(false);
    tmRef.current = setTimeout(() => {
      setIdx(next);
      setProgress(0);
      t0Ref.current = performance.now();
      setShowing(true);
      setLocked(false);
    }, OUT_MS + 60);
  }, [locked]);

  useEffect(() => {
    stop();
    t0Ref.current = performance.now();
    const tick = (now: number) => {
      const pct = Math.min(((now - t0Ref.current) / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) { rafRef.current = requestAnimationFrame(tick); }
      else { goTo(idx >= SLIDES.length - 1 ? 0 : idx + 1); }
    };
    rafRef.current = requestAnimationFrame(tick);
    return stop;
  }, [idx]);

  const slide  = SLIDES[idx];
  const accent = slide.accent;
  const dark   = slide.dark;

  const tx = (delay = 0) => ({
    opacity: showing ? 1 : 0,
    transform: showing ? "translateY(0px)" : "translateY(10px)",
    transition: `opacity ${showing ? IN_MS : OUT_MS}ms cubic-bezier(0.4,0,0.2,1) ${showing ? delay : 0}ms,
                 transform ${showing ? IN_MS : OUT_MS}ms cubic-bezier(0.4,0,0.2,1) ${showing ? delay : 0}ms`,
    willChange: "transform,opacity" as const,
  });

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", display: "flex", flexDirection: "column" }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 600, height: 600,
            top: "-20%", left: "-12%",
            background: `${accent}07`,
            filter: "blur(120px)",
            transition: "background 1.6s ease",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 440, height: 440,
            bottom: "-15%", right: "-8%",
            background: `${dark}0a`,
            filter: "blur(100px)",
            transition: "background 1.6s ease",
          }}
        />
      </div>

      {/* ── Inner layout: fills the 100svh section ── */}
      <div
        className="relative z-10 w-full flex flex-col"
        style={{
          flex: 1,
          padding: "clamp(20px, 3vh, 40px) clamp(16px, 4vw, 56px) clamp(16px, 2.5vh, 32px)",
          gap: "clamp(10px, 1.8vh, 22px)",
          overflow: "hidden",
        }}
      >

        {/* ── Section heading ── */}
        <div className="text-center" style={{ flexShrink: 0 }}>
          

          <h2
            className="font-black text-slate-900 leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 3.2vw, 3rem)" }}
          >
            Automation that{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(100deg, ${accent}, ${dark})`,
                transition: "background-image 0.9s",
              }}
            >
              thinks ahead
            </span>
          </h2>
          <p
            className="text-slate-500 leading-relaxed mx-auto"
            style={{ fontSize: "clamp(0.8rem, 1.1vw, 1rem)", maxWidth: 520, marginTop: "0.4em" }}
          >
            Real workflows. Real results. See how AJAX Global's IntelliDesq™ handles every stage of your operations — automatically.
          </p>
        </div>

        {/* ── Card ── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(160deg, #0f0f1a 0%, #141420 100%)",
            border: `1px solid ${accent}22`,
            transition: "border-color 0.9s ease",
          }}
        >
          {/* Image area — grows to fill */}
          <div className="relative overflow-hidden" style={{ flex: 1, minHeight: 0 }}>
            {SLIDES.map((s, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  opacity: idx === i && showing ? 1 : 0,
                  transform: idx === i && showing ? "scale(1)" : "scale(1.04)",
                  transition: `opacity ${idx === i ? IN_MS : OUT_MS}ms ease, transform ${idx === i ? IN_MS + 100 : OUT_MS}ms ease`,
                  pointerEvents: idx === i ? "auto" : "none",
                }}
              >
                <div
                  style={{
                    position: "absolute", inset: 0,
                    backgroundImage: `url(${s.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(32px) brightness(0.15) saturate(0.25)",
                    transform: "scale(1.15)",
                  }}
                />
                <div className="absolute inset-0" style={{ background: `${s.accent}0d` }} />
                <img
                  src={s.src}
                  alt={s.tag}
                  loading="lazy"
                  style={{
                    position: "relative", zIndex: 1,
                    width: "100%", height: "100%",
                    objectFit: "contain", objectPosition: "center",
                    padding: "16px", display: "block",
                  }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 pointer-events-none"
                  style={{ height: 80, background: "linear-gradient(to bottom, transparent, #141420)" }}
                />
              </div>
            ))}

            {/* Tag pill */}
            <div className="absolute top-4 left-4 z-10" style={tx(0)}>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold backdrop-blur-sm"
                style={{
                  background: `${accent}20`,
                  border: `1px solid ${accent}45`,
                  color: accent,
                  transition: "all 0.6s",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
                AJAX · {slide.tag}
              </span>
            </div>
          </div>

          {/* Text area — fixed height, no overflow */}
          <div
            style={{
              flexShrink: 0,
              padding: "clamp(12px, 1.8vh, 22px) clamp(16px, 2.5vw, 36px) clamp(12px, 1.6vh, 20px)",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(4px, 0.6vh, 8px)",
            }}
          >
            <div style={tx(60)}>
              <h3
                className="font-black text-white leading-tight"
                style={{ fontSize: "clamp(1.1rem, 2vw, 2rem)", whiteSpace: "pre-line" }}
              >
                {slide.title}
              </h3>
            </div>

            <div style={tx(150)}>
              <p
                className="text-white/45 leading-relaxed"
                style={{ fontSize: "clamp(0.75rem, 0.95vw, 0.925rem)", maxWidth: 560 }}
              >
                {slide.desc}
              </p>
            </div>

            {/* Progress bar */}
            <div style={{ ...tx(230), marginTop: "clamp(4px, 0.8vh, 10px)" }}>
              <div
                className="w-full rounded-full overflow-hidden"
                style={{ height: 2, background: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: `linear-gradient(to right, ${dark}, ${accent})`,
                    transition: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Dot nav ── */}
        <div className="flex justify-center" style={{ gap: 6, flexShrink: 0 }}>
          {SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => !locked && goTo(i)}
              className="rounded-full focus-visible:outline-none"
              style={{
                width: idx === i ? 22 : 6,
                height: 6,
                background: idx === i ? s.accent : "rgba(0,0,0,0.18)",
                boxShadow: idx === i ? `0 0 8px ${s.accent}80` : "none",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}