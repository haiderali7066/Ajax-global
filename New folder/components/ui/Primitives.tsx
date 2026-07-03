"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// ─── TYPEWRITER ───────────────────────────────────────────────────────────────
export function Typewriter({ words }: { words: string[] }) {
  const [display, setDisplay] = useState("");

  // All mutable state in refs so the loop never re-mounts
  const wordIdx  = useRef(0);
  const charIdx  = useRef(0);
  const deleting = useRef(false);
  const timer    = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const schedule = (ms: number) => {
      timer.current = setTimeout(tick, ms);
    };

    const tick = () => {
      const word = words[wordIdx.current];

      if (!deleting.current) {
        // Type one character
        charIdx.current++;
        setDisplay(word.slice(0, charIdx.current));

        if (charIdx.current >= word.length) {
          // Fully typed — pause then start deleting
          deleting.current = true;
          schedule(1600);
        } else {
          schedule(75);
        }
      } else {
        // Delete one character
        charIdx.current--;
        setDisplay(word.slice(0, charIdx.current));

        if (charIdx.current <= 0) {
          // Fully deleted — advance word
          deleting.current = false;
          wordIdx.current  = (wordIdx.current + 1) % words.length;
          schedule(320);
        } else {
          schedule(38);
        }
      }
    };

    // Kick off with a small initial delay
    schedule(400);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  // words is stable — intentionally omit from deps to avoid restart
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span>
      <span className="text-primary" style={{ fontWeight: 800 }}>{display}</span>
      <span
        className="inline-block w-[3px] h-[0.85em] align-middle ml-1 rounded-sm"
        style={{ background: "#7c3aed", animation: "twBlink 1s step-start infinite" }}
      />
      <style>{`@keyframes twBlink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────
export function Counter({ to, suf = "" }: { to: number; suf?: string }) {
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

  return <span ref={ref}>{n}{suf}</span>;
}

// ─── NEURAL CANVAS ───────────────────────────────────────────────────────────
export function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
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
        n.x += n.vx; n.y += n.vy; n.pulse += 0.016;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
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
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}