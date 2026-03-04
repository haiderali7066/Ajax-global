"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const SLIDES = [
  { src: "/wflow-section/1.jpeg", tag: "01 — Lead Intelligence",  title: "Capture Every Lead\nAutomatically",    desc: "Routes leads from every channel into your CRM the instant they arrive — no manual entry, no missed opportunities.", accent: "#a855f7", dark: "#7e22ce" },
  { src: "/wflow-section/2.jpeg", tag: "02 — Data Enrichment",    title: "Enrich Records\nBefore They Land",     desc: "Firmographic, behavioural, and intent data appended to every record before your team ever sees it.",              accent: "#6366f1", dark: "#4338ca" },
  { src: "/wflow-section/3.jpeg", tag: "03 — Notifications",      title: "Alert the Right\nPerson Instantly",    desc: "Real-time Slack, email, and SMS triggers fire the moment a critical workflow event occurs.",                    accent: "#8b5cf6", dark: "#6d28d9" },
  { src: "/wflow-section/4.jpeg", tag: "04 — Reporting",          title: "Scheduled Reports,\nZero Effort",      desc: "Polished reports built and distributed on any cadence — daily, weekly, monthly — fully automated.",              accent: "#ec4899", dark: "#be185d" },
  { src: "/wflow-section/5.jpeg", tag: "05 — AI Triage",          title: "AI That Thinks\nBefore You Do",        desc: "Classify, prioritise, and assign tickets so your team stays focused on high-value work.",                        accent: "#14b8a6", dark: "#0f766e" },
  { src: "/wflow-section/6.jpeg", tag: "06 — Order Sync",         title: "Every Platform,\nPerfectly in Sync",   desc: "Inventory, fulfilment, and customer records stay consistent across every sales channel you operate.",             accent: "#f59e0b", dark: "#b45309" },
  { src: "/wflow-section/7.jpeg", tag: "07 — Approvals",          title: "Decisions Flow\nWithout Bottlenecks",  desc: "Smart routing sends approvals to the right people with built-in escalation when things stall.",                   accent: "#06b6d4", dark: "#0e7490" },
  { src: "/wflow-section/8.jpeg", tag: "08 — Analytics",          title: "Full Visibility,\nLive and Clear",     desc: "Monitor workflow health, error rates, and throughput in real time — iterate with total confidence.",             accent: "#84cc16", dark: "#4d7c0f" },
];

// Each slide: tag, title, desc animate from different directions
const ANIM_DIRS = [
  { tag: "left",   title: "right",  desc: "bottom" },
  { tag: "bottom", title: "left",   desc: "right"  },
  { tag: "right",  title: "bottom", desc: "left"   },
  { tag: "top",    title: "right",  desc: "bottom" },
  { tag: "left",   title: "top",    desc: "right"  },
  { tag: "bottom", title: "right",  desc: "top"    },
  { tag: "right",  title: "left",   desc: "top"    },
  { tag: "top",    title: "left",   desc: "right"  },
];

const VIDEO_DURATION = 5000;
const SLIDE_DURATION = 4500;
const OUT_MS = 500;
const IN_MS  = 700;

type Dir = "left" | "right" | "top" | "bottom";

function slideIn(dir: Dir): string {
  return { left: "translate(-55px,0)", right: "translate(55px,0)", top: "translate(0,-35px)", bottom: "translate(0,35px)" }[dir];
}

function imgIn(dir: "left" | "right"): string {
  return dir === "right" ? "translate(70px,0) scale(1.04)" : "translate(-70px,0) scale(1.04)";
}

export default function WorkflowShowcase() {
  const [idx, setIdx]               = useState(-1);         // -1 = video
  const [showing, setShowing]       = useState(true);       // true = in, false = out
  const [imgDir, setImgDir]         = useState<"left"|"right">("right");
  const [progress, setProgress]     = useState(0);
  const [locked, setLocked]         = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef   = useRef<number>();
  const tmRef    = useRef<ReturnType<typeof setTimeout>>();
  const t0Ref    = useRef(0);

  function stop() { cancelAnimationFrame(rafRef.current!); clearTimeout(tmRef.current); }

  const goTo = useCallback((next: number, dir: "left"|"right") => {
    if (locked) return;
    stop();
    setLocked(true);
    setImgDir(dir);
    setShowing(false);                         // trigger exit animations

    tmRef.current = setTimeout(() => {
      setIdx(next);
      setProgress(0);
      t0Ref.current = performance.now();
      setShowing(true);                        // trigger enter animations
      setLocked(false);
    }, OUT_MS + 80);
  }, [locked]);

  // progress + auto-advance
  useEffect(() => {
    stop();
    const dur = idx === -1 ? VIDEO_DURATION : SLIDE_DURATION;
    t0Ref.current = performance.now();

    const tick = (now: number) => {
      const pct = Math.min(((now - t0Ref.current) / dur) * 100, 100);
      setProgress(pct);
      if (pct < 100) { rafRef.current = requestAnimationFrame(tick); }
      else { const n = idx >= SLIDES.length - 1 ? -1 : idx + 1; goTo(n, n === -1 ? "left" : "right"); }
    };
    rafRef.current = requestAnimationFrame(tick);

    if (idx === -1 && videoRef.current) { videoRef.current.currentTime = 0; videoRef.current.play().catch(() => {}); }
    return stop;
  }, [idx]);

  const isVid   = idx === -1;
  const slide   = idx >= 0 ? SLIDES[idx] : null;
  const dirs    = idx >= 0 ? ANIM_DIRS[idx] : ANIM_DIRS[0];
  const accent  = slide?.accent ?? "#a855f7";
  const dark    = slide?.dark   ?? "#7e22ce";
  const secsLeft = Math.max(1, Math.ceil(((100 - progress) / 100) * ((isVid ? VIDEO_DURATION : SLIDE_DURATION) / 1000)));

  // Shared transition builder
  const tx = (dir: Dir, delay = 0) => ({
    opacity:   showing ? 1 : 0,
    transform: showing ? "translate(0,0) scale(1)" : `${slideIn(dir)} scale(0.97)`,
    transition: `opacity ${showing ? IN_MS : OUT_MS}ms cubic-bezier(0.4,0,0.2,1) ${showing ? delay : 0}ms, transform ${showing ? IN_MS : OUT_MS}ms cubic-bezier(0.4,0,0.2,1) ${showing ? delay : 0}ms`,
    willChange: "transform,opacity" as const,
  });

  const imgTx = {
    opacity:   showing ? 1 : 0,
    transform: showing ? "translate(0,0) scale(1)" : imgIn(imgDir),
    transition: `opacity ${showing ? IN_MS : OUT_MS}ms cubic-bezier(0.4,0,0.2,1), transform ${showing ? IN_MS : OUT_MS}ms cubic-bezier(0.4,0,0.2,1)`,
    willChange: "transform,opacity" as const,
  };

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh", background: "linear-gradient(135deg,#04040e 0%,#0a0618 50%,#040410 100%)" }}
    >
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(168,85,247,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,0.04) 1px,transparent 1px)", backgroundSize: "54px 54px", maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%,black 10%,transparent 100%)" }} />

      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full" style={{ width:700,height:700,top:"-25%",left:"-15%",background:`${accent}12`,filter:"blur(120px)",transition:"background 1.2s ease" }} />
        <div className="absolute rounded-full" style={{ width:500,height:500,bottom:"-20%",right:"-10%",background:`${dark}15`,filter:"blur(100px)",transition:"background 1.2s ease" }} />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-10 px-6">
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-6" style={{ background:`${accent}15`,border:`1px solid ${accent}30`,transition:"all 0.8s" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background:accent,transition:"background 0.8s" }} />
          <span className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color:accent,transition:"color 0.8s" }}>n8n Workflow Automation</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.05] tracking-tight">
          Automation that{" "}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage:`linear-gradient(90deg,${accent},${dark})`,transition:"background-image 0.8s" }}>
            thinks ahead
          </span>
        </h2>
        <p className="mt-4 text-gray-500 text-base max-w-md mx-auto">Real workflows. Real results. Watch each automation in action.</p>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-6xl px-4">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{ background:"#07070f", border:"1px solid rgba(255,255,255,0.06)", boxShadow:`0 50px 150px rgba(0,0,0,0.8),0 0 80px ${accent}22`, transition:"box-shadow 1.2s ease" }}
        >
          <div className="flex flex-col lg:flex-row" style={{ minHeight:560 }}>

            {/* ── IMAGE PANEL ── */}
            <div className="relative lg:w-[58%] overflow-hidden" style={{ minHeight:360, background:"#05050c" }}>

              {/* All media layers stacked */}
              {/* VIDEO */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ ...imgTx, display: isVid ? undefined : "none" }}>
                <video ref={videoRef} className="w-full h-full" muted playsInline preload="auto" style={{ objectFit:"contain", background:"#000" }}>
                  <source src="/wflow-section/v1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 pointer-events-none" style={{ background:"linear-gradient(to right,transparent 65%,#07070f)" }} />
                <div className="absolute top-5 left-5">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-bold backdrop-blur-md" style={{ background:"rgba(239,68,68,0.8)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />LIVE PREVIEW
                  </span>
                </div>
              </div>

              {/* IMAGE SLIDES */}
              {SLIDES.map((s, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ ...imgTx, display: !isVid && idx === i ? undefined : "none", background:"#05050c" }}
                >
                  {/* Blurred bg for letterbox areas */}
                  <div style={{ position:"absolute",inset:0,backgroundImage:`url(${s.src})`,backgroundSize:"cover",backgroundPosition:"center",filter:"blur(30px) brightness(0.22) saturate(0.4)",transform:"scale(1.12)" }} />
                  {/* Accent wash */}
                  <div className="absolute inset-0" style={{ background:`${s.accent}0d` }} />
                  {/* Image — fully contained, no crop */}
                  <img
                    src={s.src} alt={s.tag} loading="lazy"
                    style={{ position:"relative",zIndex:1,maxWidth:"100%",maxHeight:"100%",width:"100%",height:"100%",objectFit:"contain",objectPosition:"center",padding:"16px",display:"block" }}
                  />
                  {/* Right edge fade */}
                  <div className="absolute inset-y-0 right-0 w-16 hidden lg:block" style={{ background:"linear-gradient(to right,transparent,#07070f)",pointerEvents:"none" }} />
                </div>
              ))}

              {/* Counter */}
              <div className="absolute bottom-4 left-4 z-20">
                <div className="px-3 py-1 rounded-full text-xs font-mono font-bold backdrop-blur-md" style={{ background:"rgba(0,0,0,0.55)",color:accent,border:`1px solid ${accent}45`,transition:"color 0.8s,border-color 0.8s" }}>
                  {isVid ? "INTRO" : `${String(idx+1).padStart(2,"0")} / ${String(SLIDES.length).padStart(2,"0")}`}
                </div>
              </div>
            </div>

            {/* ── TEXT PANEL ── */}
            <div
              className="relative lg:w-[42%] flex flex-col justify-center overflow-hidden"
              style={{ padding:"48px 40px", background:"linear-gradient(145deg,#07070f,#0c0820)" }}
            >
              {/* Dot grid */}
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:`radial-gradient(${accent}40 1px,transparent 1px)`,backgroundSize:"26px 26px",opacity:0.15,maskImage:"radial-gradient(ellipse at center,black 30%,transparent 75%)" }} />

              {/* VIDEO TEXT */}
              {isVid && (
                <div className="space-y-5 relative z-10">
                  <div style={tx("left",0)}>
                    <div className="w-10 h-0.5 rounded-full" style={{ background:"linear-gradient(to right,#a855f7,transparent)" }} />
                  </div>
                  <div style={tx("left",80)}>
                    <p className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color:"#a855f7" }}>Platform Overview</p>
                  </div>
                  <div style={tx("right",160)}>
                    <h3 className="text-4xl font-black text-white leading-tight" style={{ whiteSpace:"pre-line" }}>{"See It\nIn Action"}</h3>
                  </div>
                  <div style={tx("bottom",240)}>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">Watch a live walkthrough of our n8n-powered automation platform — built for real business complexity at scale.</p>
                  </div>
                  <div style={tx("bottom",320)} className="flex items-center gap-3 pt-2">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background:"#a855f718",border:"1px solid #a855f738" }}>
                      <svg className="w-4 h-4" fill="#a855f7" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                    <span className="text-gray-500 text-xs">5 second preview</span>
                  </div>
                </div>
              )}

              {/* SLIDE TEXT */}
              {!isVid && slide && (
                <div className="space-y-5 relative z-10">
                  {/* Accent line */}
                  <div style={tx(dirs.tag as Dir, 0)}>
                    <div className="w-10 h-0.5 rounded-full" style={{ background:`linear-gradient(to right,${accent},transparent)` }} />
                  </div>
                  {/* Tag — animates from dirs.tag */}
                  <div style={tx(dirs.tag as Dir, 70)}>
                    <p className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color:accent }}>{slide.tag}</p>
                  </div>
                  {/* Title — animates from dirs.title */}
                  <div style={tx(dirs.title as Dir, 150)}>
                    <h3 className="text-3xl xl:text-4xl font-black text-white leading-tight" style={{ whiteSpace:"pre-line" }}>{slide.title}</h3>
                  </div>
                  {/* Desc — animates from dirs.desc */}
                  <div style={tx(dirs.desc as Dir, 240)}>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{slide.desc}</p>
                  </div>
                  {/* Pip progress */}
                  <div style={tx(dirs.tag as Dir, 320)} className="flex gap-1.5 items-center pt-1">
                    {SLIDES.map((_,i) => (
                      <div key={i} className="rounded-full" style={{ width:i===idx?18:5,height:5,background:i===idx?accent:"rgba(255,255,255,0.12)",transition:"all 0.45s ease",boxShadow:i===idx?`0 0 6px ${accent}90`:"none" }} />
                    ))}
                  </div>
                  {/* Timer */}
                  <div style={tx(dirs.desc as Dir, 380)} className="space-y-2 pt-1">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-xs">Next in</span>
                      <span className="text-xs font-mono font-bold" style={{ color:accent }}>{secsLeft}s</span>
                    </div>
                    <div className="h-1 rounded-full" style={{ background:"rgba(255,255,255,0.06)" }}>
                      <div className="h-full rounded-full" style={{ width:`${progress}%`,background:`linear-gradient(to right,${dark}aa,${accent})`,transition:"none" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          
        </div>

        
      </div>
    </section>
  );
}

function ThumbBtn({ active, onClick, accent, children }: { active:boolean; onClick:()=>void; accent:string; children:React.ReactNode }) {
  return (
    <button onClick={onClick} className="relative overflow-hidden rounded-xl flex-shrink-0"
      style={{ width:62,height:40,border:`2px solid ${active?accent:"rgba(255,255,255,0.07)"}`,boxShadow:active?`0 0 18px ${accent}55`:"none",transform:active?"scale(1.14) translateY(-2px)":"scale(1)",opacity:active?1:0.45,transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)" }}>
      {children}
    </button>
  );
}